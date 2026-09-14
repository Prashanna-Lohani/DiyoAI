"use client";

import { useTemplate } from "@/lib/template-context";

import { NavbarTemplate1 } from "./template-1";
import { NavbarTemplate2 } from "./template-2";
import { NavbarTemplate3 } from "./template-3";

export function Navbar() {
  const { template } = useTemplate();

  if (template === "2") return <NavbarTemplate2 />;
  if (template === "3") return <NavbarTemplate3 />;
  return <NavbarTemplate1 />;
}
