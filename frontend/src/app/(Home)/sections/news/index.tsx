"use client";

import { useTemplate } from "@/lib/template-context";

import { NewsTemplate1 } from "./template-1";
import { NewsTemplate2 } from "./template-2";
import { NewsTemplate3 } from "./template-3";

export function News() {
  const { template } = useTemplate();

  if (template === "2") return <NewsTemplate2 />;
  if (template === "3") return <NewsTemplate3 />;
  return <NewsTemplate1 />;
}
