"use client";

import { useTemplate } from "@/lib/template-context";

import { MilestonesTemplate1 } from "./template-1";
import { MilestonesTemplate2 } from "./template-2";
import { MilestonesTemplate3 } from "./template-3";

export function Milestones() {
  const { template } = useTemplate();

  if (template === "2") return <MilestonesTemplate2 />;
  if (template === "3") return <MilestonesTemplate3 />;
  return <MilestonesTemplate1 />;
}
