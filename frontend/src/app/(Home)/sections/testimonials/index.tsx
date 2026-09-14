"use client";

import { useTemplate } from "@/lib/template-context";

import { TestimonialsTemplate1 } from "./template-1";
import { TestimonialsTemplate2 } from "./template-2";
import { TestimonialsTemplate3 } from "./template-3";

export function Testimonials() {
  const { template } = useTemplate();

  if (template === "2") return <TestimonialsTemplate2 />;
  if (template === "3") return <TestimonialsTemplate3 />;
  return <TestimonialsTemplate1 />;
}
