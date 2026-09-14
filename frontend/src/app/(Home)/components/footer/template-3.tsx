"use client";

import Image from "next/image";
import Link from "next/link";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FOOTER_LEGAL_LINKS,
  FOOTER_LINK_GROUPS,
  SOCIAL_LINKS,
} from "@/utils/constants";

export function FooterTemplate3() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto max-w-360 border-x-2 border-foreground">
        <div className="grid grid-cols-1 divide-y-2 divide-foreground md:grid-cols-3 md:divide-x-2 md:divide-y-0">
          <div className="flex flex-col gap-4 p-8 md:p-12">
            <Link href="/" className="flex items-center">
              <Image src={DiyoLogo} alt="Diyo.ai" className="h-9 w-auto" />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Building the platform teams use to ship AI products faster —
              from first prototype to production scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 p-8 sm:gap-16 md:p-12">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <span className="text-xs font-bold tracking-widest text-foreground uppercase">
                  {group.title}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        {link.badge && (
                          <Badge
                            variant="default"
                            className="rounded-none px-1.5 text-[10px] tracking-wide uppercase"
                          >
                            {link.badge}
                          </Badge>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 p-8 md:p-12">
            <span className="text-xs font-bold tracking-widest text-foreground uppercase">
              Contact Us
            </span>
            <p className="text-sm text-muted-foreground">
              Have a question? Leave your email and we&apos;ll get back to
              you.
            </p>
            <form
              className="flex w-full max-w-sm gap-0 border-2 border-foreground"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                className="rounded-none border-0"
                required
              />
              <Button
                type="submit"
                className="shrink-0 rounded-none border-l-2 border-foreground bg-foreground px-5 text-background hover:bg-foreground/85"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t-2 border-foreground px-8 py-8 sm:flex-row md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>
              © {new Date().getFullYear()} Diyo, Inc. All rights reserved.
            </span>
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
