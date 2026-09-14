"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/utils/constants";

import { TemplateSwitcher } from "../template-switcher";

export function NavbarTemplate3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-6 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image src={DiyoLogo} alt="Diyo.ai" className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                {link.items && <FiChevronDown size={13} />}
              </Link>
              {link.items && (
                <div className="invisible absolute left-1/2 z-10 mt-4 w-72 -translate-x-1/2 rounded-2xl border border-border/60 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
                  {link.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-muted/60"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                          <Icon size={14} />
                        </span>
                        <span className="flex flex-col gap-0.5 text-left">
                          <span className="text-sm font-medium text-foreground">
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

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Button className="rounded-full px-5 shadow-sm">Get Started</Button>
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            >
              {link.label}
              {link.items && <FiChevronDown size={15} />}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full rounded-full">
              Login
            </Button>
            <Button className="w-full rounded-full">Get Started</Button>
            <TemplateSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
