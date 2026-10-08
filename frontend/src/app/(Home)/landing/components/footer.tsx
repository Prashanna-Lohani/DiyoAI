import Image from "next/image";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";

import { CONTACT, FOOTER_GROUPS } from "../data/content";

const CONTACT_ITEMS = [
  {
    icon: FiMail,
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: FiPhone,
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FiMapPin,
    value: CONTACT.address,
    href: undefined,
  },
];

export function DashboardFiveFooter() {
  return (
    <footer
      id="cta"
      className="scroll-mt-24 border-t border-primary/20 bg-[#d6e6f9] px-6 py-16 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-312">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1.1fr_1.15fr_0.9fr]">
          <div>
            <div className="mb-3.5 inline-block max-w-full">
              <Image src={DiyoLogo} alt="Diyo.ai" className="h-9 w-auto" />
            </div>
            <p className="max-w-64 text-sm text-muted-foreground">
              Leading in Speech and Language AI for low-resource settings:
              building AI for the languages of Nepal and beyond.
            </p>

            <span className="mt-8 mb-3 block text-xs font-bold tracking-widest text-primary uppercase">
              Start a conversation
            </span>
            <ul className="flex flex-col gap-2.5">
              {CONTACT_ITEMS.map(({ icon: Icon, value, href }) => {
                const body = (
                  <>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="text-sm text-foreground">{value}</span>
                  </>
                );
                return (
                  <li key={value}>
                    {href ? (
                      <a
                        href={href}
                        className="group flex items-center gap-3 transition-colors hover:text-primary"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-3">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-sm font-bold text-foreground">
                {group.title}
              </h2>
              {group.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-primary/15 pt-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Diyo AI · Kathmandu, Nepal</span>
          <span>Privacy · Terms · Security &amp; Responsible AI</span>
        </div>
      </div>
    </footer>
  );
}
