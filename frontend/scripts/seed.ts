/**
 * Copies the site's built-in content (and its images) into Sanity so editors
 * start from what is live today.
 *
 *   pnpm sanity:seed            only creates documents that don't exist yet
 *   pnpm sanity:seed --force    overwrites existing documents (!)
 */
import { randomUUID } from "node:crypto";
import { existsSync, createReadStream } from "node:fs";
import { basename } from "node:path";

import { createClient } from "@sanity/client";
import { config } from "dotenv";

import { DEFAULT_CONTENT } from "../src/content/defaults";
import { SECTION_DOCS } from "../src/content/documents";

config({ path: ".env.local" });
config();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
if (!projectId || !token) {
  console.error(
    "Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local first.",
  );
  process.exit(1);
}

const force = process.argv.includes("--force");
const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const uploads = new Map<string, Promise<string>>();
function upload(path: string) {
  if (!uploads.has(path)) {
    console.log(`  ↑ uploading ${basename(path)}`);
    uploads.set(
      path,
      client.assets
        .upload("image", createReadStream(path), { filename: basename(path) })
        .then((asset) => asset._id),
    );
  }
  return uploads.get(path)!;
}

type Json = Record<string, unknown>;
const isObject = (v: unknown): v is Json =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** Converts default content to Sanity shape: images -> assets, _key on list items. */
async function toSanity(value: unknown): Promise<unknown> {
  if (Array.isArray(value)) {
    return Promise.all(
      value.map(async (item) => {
        const out = await toSanity(item);
        return isObject(out) ? { _key: randomUUID().slice(0, 12), ...out } : out;
      }),
    );
  }
  if (!isObject(value)) return value;
  if (typeof value.src === "string" && existsSync(value.src)) {
    return {
      _type: "image",
      asset: { _type: "reference", _ref: await upload(value.src) },
    };
  }
  const out: Json = {};
  for (const [key, v] of Object.entries(value)) out[key] = await toSanity(v);
  return out;
}

/** Waveform placeholders ("wave") become explicit toggles in the Studio. */
function splitWaveforms(choices: typeof DEFAULT_CONTENT.page.services.choices) {
  return choices.map(({ id: _id, no: _no, ...choice }) => {
    const { source, output, ...rest } = choice.example;
    return {
      ...choice,
      example: {
        ...rest,
        source: source === "wave" ? undefined : source,
        sourceIsWaveform: source === "wave",
        output: output === "wave" ? undefined : output,
        outputIsWaveform: output === "wave",
      },
    };
  });
}

async function main() {
  const { settings, hero, page } = DEFAULT_CONTENT;

  const docs: Record<string, Json> = {
    siteSettings: settings as unknown as Json,
    hero: hero as unknown as Json,
    pageLayout: { sections: page.layout },
  };
  for (const [section, id] of Object.entries(SECTION_DOCS)) {
    const content = { ...(page as unknown as Record<string, Json>)[section] };
    if (section === "services") {
      content.choices = splitWaveforms(page.services.choices) as unknown as Json;
    }
    if (section === "preservation") {
      content.stages = page.preservation.stages.map(({ no: _no, ...s }) => s) as unknown as Json;
    }
    docs[id] = content;
  }

  for (const [id, content] of Object.entries(docs)) {
    const doc = { _id: id, _type: id, ...((await toSanity(content)) as Json) };
    if (force) await client.createOrReplace(doc);
    else await client.createIfNotExists(doc);
    console.log(`✓ ${id}`);
  }
  console.log(
    "\nDone. Documents were created as published; open /studio to edit them.",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
