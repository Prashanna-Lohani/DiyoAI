"use client";

import { useTemplate } from "@/lib/template-context";

import { CollaborationsTemplate1 } from "./template-1";
import { CollaborationsTemplate2 } from "./template-2";
import { CollaborationsTemplate3 } from "./template-3";

export function Collaborations() {
  const { template } = useTemplate();

  if (template === "2") return <CollaborationsTemplate2 />;
  if (template === "3") return <CollaborationsTemplate3 />;
  return <CollaborationsTemplate1 />;
}
