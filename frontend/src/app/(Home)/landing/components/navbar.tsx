"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";
import { Button } from "@/components/ui/button";

import { ScrollProgress } from "./scroll-progress";
import { NAV_LINKS } from "../data/content";

export function DashboardFiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-312 items-center justify-between gap-4 px-6 md:px-8 lg:px-12">
        <Link href="#" className="flex items-center">
          <Image src={DiyoLogo} alt="Diyo.ai" className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((chapter) => (
            <a
              key={chapter.href}
              href={chapter.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {chapter.title}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            className="h-12 rounded-xl px-7 text-base font-bold shadow-lg shadow-primary/30"
            render={<a href="#cta" />}
          >
            Contact us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <ScrollProgress />
      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 lg:hidden">
          {NAV_LINKS.map((chapter) => (
            <a
              key={chapter.href}
              href={chapter.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            >
              {chapter.title}
            </a>
          ))}
          <Button className="mt-2 w-full rounded-lg" render={<a href="#cta" />}>
            Contact us
          </Button>
        </nav>
      )}
    </header>
  );
}
