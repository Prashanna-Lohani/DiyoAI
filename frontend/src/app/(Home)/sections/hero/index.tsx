"use client";

import { useTemplate } from "@/lib/template-context";

import { HeroTemplate1 } from "./template-1";
import { HeroTemplate2 } from "./template-2";
import { HeroTemplate3 } from "./template-3";

export function Hero() {
  const { template } = useTemplate();

  if (template === "2") return <HeroTemplate2 />;
  if (template === "3") return <HeroTemplate3 />;
  return <HeroTemplate1 />;
}
