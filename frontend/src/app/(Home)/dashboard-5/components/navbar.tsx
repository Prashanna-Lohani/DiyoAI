"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { TemplateSwitcher } from "../../components/template-switcher";
import { useDashboardFiveLang } from "../lang-context";
import { CHAPTERS } from "../data/content";

export function DashboardFiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useDashboardFiveLang();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-360 items-center justify-between gap-4 px-6 md:px-8 lg:px-12">
        <Link href="#" className="flex items-center">
          <Image src={DiyoLogo} alt="Diyo.ai" className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {CHAPTERS.map((chapter) => (
            <a
              key={chapter.href}
              href={chapter.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {chapter.title}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex overflow-hidden rounded-lg border border-border text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={cn(
                "px-3 py-2 transition-colors",
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:text-foreground",
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("np")}
              aria-pressed={lang === "np"}
              lang="ne"
              className={cn(
                "px-3 py-2 font-normal transition-colors",
                lang === "np"
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:text-foreground",
              )}
            >
              नेपाली
            </button>
          </div>
          <Button className="rounded-lg px-5" render={<a href="#cta" />}>
            Contact Us
          </Button>
          <TemplateSwitcher />
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

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 lg:hidden">
          {CHAPTERS.map((chapter) => (
            <a
              key={chapter.href}
              href={chapter.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            >
              {chapter.title}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "flex-1 rounded-lg border border-border px-3 py-2 text-xs font-semibold",
                lang === "en" && "bg-primary text-primary-foreground",
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("np")}
              lang="ne"
              className={cn(
                "flex-1 rounded-lg border border-border px-3 py-2 text-xs font-semibold",
                lang === "np" && "bg-primary text-primary-foreground",
              )}
            >
              नेपाली
            </button>
          </div>
          <Button className="mt-2 w-full rounded-lg" render={<a href="#cta" />}>
            Contact Us
          </Button>
          <TemplateSwitcher />
        </nav>
      )}
    </header>
  );
}
