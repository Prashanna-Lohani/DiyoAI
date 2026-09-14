"use client";

import { useTemplate } from "@/lib/template-context";

import { FooterTemplate1 } from "./template-1";
import { FooterTemplate2 } from "./template-2";
import { FooterTemplate3 } from "./template-3";

export function Footer() {
  const { template } = useTemplate();

  if (template === "2") return <FooterTemplate2 />;
  if (template === "3") return <FooterTemplate3 />;
  return <FooterTemplate1 />;
}
