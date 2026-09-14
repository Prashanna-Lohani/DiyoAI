"use client";

import { useTemplate } from "@/lib/template-context";

import { ProductsTemplate1 } from "./template-1";
import { ProductsTemplate2 } from "./template-2";
import { ProductsTemplate3 } from "./template-3";

export function Products() {
  const { template } = useTemplate();

  if (template === "2") return <ProductsTemplate2 />;
  if (template === "3") return <ProductsTemplate3 />;
  return <ProductsTemplate1 />;
}
