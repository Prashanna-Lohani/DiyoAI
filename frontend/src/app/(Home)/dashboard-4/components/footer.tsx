import Image from "next/image";

import DiyoLogo from "@/assets/images/Diyo-Brand.png";

const FOOTER_GROUPS = [
  {
    title: "Language Services",
    links: ["Translation", "Text to Speech", "Subtitling", "Speech to Text"],
    href: "#services",
  },
  {
    title: "Language Preservation",
    links: [
      "Data Collection",
      "Annotation",
      "Revitalization",
      "NepSwor & YetiVoices",
    ],
    href: "#preservation",
  },
  {
    title: "Products",
    links: [
      "Conversational AI",
      "Speech AI",
      "Language AI",
      "Impact AI",
      "Language Data",
    ],
    href: "#services",
  },
  {
    title: "Developers",
    links: ["APIs", "Documentation", "SDKs", "Integrations"],
    href: "#services",
  },
] as const;

export function DashboardFourFooter() {
  return (
    <footer className="mt-16 bg-[#0c1b33] px-6 py-16 text-[#afc2da] md:px-8 lg:px-12">
      <div className="mx-auto max-w-360">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
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
                  key={link}
                  href={group.href}
                  className="block py-2 text-sm text-[#9fb2cc] transition-colors hover:text-[#3d90e6]"
                >
                  {link}
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
