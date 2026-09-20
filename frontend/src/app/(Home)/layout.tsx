"use client";

import type { ReactNode } from "react";

import { useTemplate } from "@/lib/template-context";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { template } = useTemplate();

  if (template === "4") {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
