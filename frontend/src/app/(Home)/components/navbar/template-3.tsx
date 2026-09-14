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
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto grid h-18 max-w-360 grid-cols-[auto_1fr_auto] items-stretch divide-x-2 divide-foreground border-x-2 border-foreground px-0">
        <Link
          href="/"
          className="flex items-center px-6 py-2 md:px-8"
        >
          <Image src={DiyoLogo} alt="Diyo.ai" className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-stretch justify-center divide-x-2 divide-foreground lg:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="group relative flex">
              <Link
                href={link.href}
                className="flex items-center gap-1 px-5 text-xs font-bold tracking-widest text-foreground uppercase transition-colors hover:bg-foreground hover:text-background"
              >
                {link.label}
                {link.items && <FiChevronDown size={12} />}
              </Link>
              {link.items && (
                <div className="invisible absolute top-full left-0 z-10 w-72 border-2 border-t-0 border-foreground bg-background opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  {link.items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-start gap-3 p-3 hover:bg-muted ${
                          i > 0 ? "border-t-2 border-foreground" : ""
                        }`}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-foreground text-foreground">
                          <Icon size={14} />
                        </span>
                        <span className="flex flex-col gap-0.5 text-left">
                          <span className="text-sm font-bold text-foreground">
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

        <div className="hidden items-stretch divide-x-2 divide-foreground lg:flex">
          <Button
            variant="ghost"
            className="h-full rounded-none px-6 text-xs font-bold tracking-widest uppercase"
          >
            Login
          </Button>
          <Button className="h-full rounded-none bg-foreground px-6 text-xs font-bold tracking-widest text-background uppercase hover:bg-foreground/85">
            Get Started
          </Button>
          <div className="flex items-center px-4">
            <TemplateSwitcher />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center px-6 text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col divide-y-2 divide-foreground border-x-2 border-b-2 border-foreground lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-6 py-3 text-xs font-bold tracking-widest text-foreground uppercase hover:bg-muted"
            >
              {link.label}
              {link.items && <FiChevronDown size={14} />}
            </Link>
          ))}
          <div className="flex flex-col gap-2 p-4">
            <Button variant="ghost" className="w-full rounded-none">
              Login
            </Button>
            <Button className="w-full rounded-none bg-foreground text-background hover:bg-foreground/85">
              Get Started
            </Button>
            <TemplateSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
