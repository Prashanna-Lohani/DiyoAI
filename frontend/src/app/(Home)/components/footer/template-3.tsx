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
    <footer className="border-t border-border/60 bg-white">
      <div className="mx-auto max-w-360 px-6 py-20 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image src={DiyoLogo} alt="Diyo.ai" className="h-9 w-auto" />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Building the platform teams use to ship AI products faster —
              from first prototype to production scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
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
                            className="rounded-full px-1.5 text-[10px] tracking-wide uppercase"
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

          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Contact Us
            </span>
            <p className="text-sm text-muted-foreground">
              Have a question? Leave your email and we&apos;ll get back to
              you.
            </p>
            <form
              className="flex w-full max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                className="rounded-full"
                required
              />
              <Button type="submit" className="shrink-0 rounded-full px-5">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row">
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
