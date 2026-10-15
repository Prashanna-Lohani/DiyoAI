import { client } from "@/sanity/client";
import { dataset, isSanityConfigured, projectId } from "@/sanity/env";

import { DEFAULT_CONTENT } from "./defaults";
import { SECTION_DOCS } from "./documents";
import type { SectionId, SiteContent } from "./types";

export { DEFAULT_CONTENT } from "./defaults";
export type * from "./types";

export const SANITY_TAG = "sanity";

const QUERY = `*[_id in $ids]`;

type Json = Record<string, unknown>;
const isPlainObject = (v: unknown): v is Json =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const IMAGE_REF = /^image-([A-Za-z0-9]+)-(\d+)x(\d+)-([a-z0-9]+)$/;

/** Turns a Sanity image field into `{ src, width, height }` for next/image. */
function resolveImage(value: Json) {
  const ref = (value.asset as Json | undefined)?._ref;
  const match = typeof ref === "string" ? IMAGE_REF.exec(ref) : null;
  if (!match) return undefined;
  const [, id, width, height, ext] = match;
  return {
    src: `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${width}x${height}.${ext}?auto=format`,
    width: Number(width),
    height: Number(height),
  };
}

/** Strips Sanity metadata, resolves images and drops empty values. */
function clean(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(clean);
  if (!isPlainObject(value)) return value;
  if (value._type === "image") return resolveImage(value);
  const out: Json = {};
  for (const [key, v] of Object.entries(value)) {
    if (key.startsWith("_")) continue;
    const cleaned = clean(v);
    if (cleaned !== null && cleaned !== undefined && cleaned !== "") {
      out[key] = cleaned;
    }
  }
  return out;
}

/**
 * Overlays CMS values on the defaults. Objects merge field by field; a list
 * from the CMS replaces the default list entirely once it has any items.
 */
function merge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base)) {
    return (Array.isArray(override) && override.length > 0
      ? override
      : base) as T;
  }
  if (isPlainObject(base) && isPlainObject(override)) {
    const out: Json = { ...base };
    for (const key of Object.keys(override)) {
      out[key] = merge(out[key], override[key]);
    }
    return out as T;
  }
  // Images arrive as plain objects while the default may be a static import.
  if (isPlainObject(override) && "src" in override) return override as T;
  return typeof override === typeof base || base === undefined
    ? (override as T)
    : base;
}

const pad = (n: number) => String(n + 1).padStart(2, "0");

/** Derives the fields editors should never have to type by hand. Idempotent. */
function normalize(content: SiteContent): SiteContent {
  const { page } = content;

  page.services.choices = page.services.choices.map((choice, i) => {
    const ex = choice.example as typeof choice.example & {
      sourceIsWaveform?: boolean;
      outputIsWaveform?: boolean;
    };
    return {
      ...choice,
      id: choice.id ?? `service-${i}`,
      no: pad(i),
      example: {
        ...ex,
        source: ex.sourceIsWaveform ? "wave" : (ex.source ?? ""),
        output: ex.outputIsWaveform ? "wave" : (ex.output ?? ""),
      },
    };
  });
  page.preservation.stages = page.preservation.stages.map((stage, i) => ({
    ...stage,
    no: pad(i),
  }));

  // Sections added later to the code (but missing from the saved layout)
  // still show up at the end rather than vanishing.
  const known = new Set(page.layout.map((l) => l.section));
  for (const section of Object.keys(SECTION_DOCS) as SectionId[]) {
    if (!known.has(section)) page.layout.push({ section, visible: true });
  }
  return content;
}

export async function getSiteContent(): Promise<SiteContent> {
  const defaults = structuredClone(DEFAULT_CONTENT);
  // structuredClone keeps static image imports intact (plain objects).
  if (!isSanityConfigured) return normalize(defaults);

  try {
    const docs = await client.fetch<Json[]>(
      QUERY,
      { ids: ["siteSettings", "hero", "pageLayout", ...Object.values(SECTION_DOCS)] },
      { next: { revalidate: 60, tags: [SANITY_TAG] } },
    );
    const byId = new Map(docs.map((d) => [d._id as string, clean(d) as Json]));

    const page = { ...defaults.page } as Json;
    for (const [section, id] of Object.entries(SECTION_DOCS)) {
      page[section] = merge(
        defaults.page[section as SectionId],
        byId.get(id),
      );
    }
    const layout = (byId.get("pageLayout")?.sections ?? []) as {
      section: SectionId;
      visible?: boolean;
    }[];
    if (layout.length > 0) {
      page.layout = layout.map((l) => ({
        section: l.section,
        visible: l.visible !== false,
      }));
    }

    return normalize({
      settings: merge(defaults.settings, byId.get("siteSettings")),
      hero: merge(defaults.hero, byId.get("hero")),
      page: page as SiteContent["page"],
    });
  } catch (error) {
    console.error("[sanity] falling back to default content:", error);
    return normalize(defaults);
  }
}
