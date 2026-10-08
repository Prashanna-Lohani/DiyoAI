import { FadeIn } from "@/components/ui/fade-in";

import { CONTACT } from "../data/content";

export function DashboardFiveContact() {
  return (
    <section id="cta" className="scroll-mt-24 bg-[#e8f1fc] py-16 lg:py-24">
      <FadeIn className="mx-auto grid max-w-312 grid-cols-1 gap-10 px-6 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-12">
        <div>
          <span className="mb-6 block text-xs font-bold tracking-widest text-primary uppercase">
            Start a conversation
          </span>
          <h2 className="text-h1 font-bold text-foreground">
            Let&apos;s talk about
            <br />
            your language needs
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex w-fit items-center gap-3 text-h1 text-primary transition-colors hover:text-foreground"
          >
            {CONTACT.email}
            <span aria-hidden="true" className="text-2xl">
              ↗
            </span>
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="w-fit text-foreground hover:text-primary"
          >
            {CONTACT.phone}
          </a>
          <p className="text-muted-foreground">{CONTACT.address}</p>
        </div>
      </FadeIn>
    </section>
  );
}
