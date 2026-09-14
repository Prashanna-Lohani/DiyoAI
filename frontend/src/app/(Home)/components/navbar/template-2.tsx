"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/utils/constants";

import { TemplateSwitcher } from "../template-switcher";

export function NavbarTemplate2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="mx-auto flex h-16 max-w-360 items-center justify-between rounded-full border-2 border-foreground/10 bg-white/90 px-4 shadow-lg backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary p-1.5">
            <Image src={DiyoLogo} alt="Diyo.ai" className="h-full w-auto invert" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/15 hover:text-secondary"
              >
                {link.label}
                {link.items && <FiChevronDown size={14} />}
              </Link>
              {link.items && (
                <div className="invisible absolute left-1/2 z-10 mt-2 w-64 -translate-x-1/2 rounded-3xl border-2 border-foreground/10 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {link.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 rounded-2xl p-2.5 hover:bg-muted"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                          <Icon size={16} />
                        </span>
                        <span className="flex flex-col gap-0.5 text-left">
                          <span className="text-sm font-semibold text-foreground">
                            {item.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" className="rounded-full px-5">
            Login
          </Button>
          <Button className="rounded-full bg-secondary px-5 text-secondary-foreground hover:bg-secondary/80">
            Get Started
          </Button>
          <TemplateSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="mx-auto mt-2 flex max-w-360 flex-col gap-1 rounded-3xl border-2 border-foreground/10 bg-white p-3 shadow-xl lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted",
              )}
            >
              {link.label}
              {link.items && <FiChevronDown size={16} />}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button variant="ghost" className="w-full rounded-full">
              Login
            </Button>
            <Button className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Get Started
            </Button>
            <TemplateSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
