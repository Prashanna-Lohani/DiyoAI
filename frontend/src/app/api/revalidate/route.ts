import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { SANITY_TAG } from "@/content";

// Sanity webhook target: publishing in the Studio refreshes the live site
// immediately instead of waiting for the 60s cache window.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Secret not configured" }, { status: 500 });
  }
  const { isValidSignature } = await parseBody(req, secret);
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }
  revalidateTag(SANITY_TAG);
  return NextResponse.json({ revalidated: true });
}
