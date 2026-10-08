import Image from "next/image";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";

import { FOOTER_GROUPS } from "../data/content";

export function DashboardFiveFooter() {
  return (
    <footer className="bg-[#0c1b33] px-6 py-16 text-[#afc2da] md:px-8 lg:px-12">
      <div className="mx-auto max-w-312">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1.1fr_1.15fr_0.9fr]">
          <div>
            <div className="mb-3.5 inline-block max-w-full rounded-lg bg-white px-3.5 py-2.5">
              <Image src={DiyoLogo} alt="Diyo.ai" className="h-9 w-auto" />
            </div>
            <p className="max-w-64 text-sm text-[#9fb2cc]">
              Leading in Speech and Language AI for low-resource settings —
              building AI for the languages of Nepal and beyond.
            </p>
          </div>
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-sm font-bold text-white">
                {group.title}
              </h2>
              {group.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-sm text-[#9fb2cc] transition-colors hover:text-[#86bcff]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-sm text-[#9fb2cc]">
          <span>© {new Date().getFullYear()} Diyo AI · Kathmandu, Nepal</span>
          <span>Privacy · Terms · Security &amp; Responsible AI</span>
        </div>
      </div>
    </footer>
  );
}
