import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { Marquee } from "@/components/ui/marquee";
import { TESTIMONIALS } from "@/utils/constants";

const QUOTES: Record<string, string> = {
  "Dr. François Rameau": "“...AI chatbot has become a necessity!”",
  "Roshan Kumar Regmi":
    "“...managing grievances and educating citizens about public services...”",
  "Swopnil Shakya": "“Wishing them the best of luck.”",
};

export function DashboardFiveTestimonials() {
  const base = TESTIMONIALS.map((t) => ({
    ...t,
    quote: QUOTES[t.name] ?? `“${t.quote}”`,
    role: t.role.replace(" @", " · "),
  }));
  // Repeat so each marquee half is wider than any viewport (seamless loop).
  const items = [...base, ...base, ...base];

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#05234a] py-16 text-white lg:py-24"
    >
      <FadeIn className="mx-auto max-w-312 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 text-white">Voices that reflect the value</h2>
      </FadeIn>
      <div className="mx-auto mt-10 max-w-312 px-6 md:px-8 lg:px-12">
        <div className="overflow-hidden [&:active_.marquee-track]:[animation-play-state:paused] [&:hover_.marquee-track]:[animation-play-state:paused]">
          <Marquee
            items={items}
            duration={150}
            renderItem={(t) => (
              <figure className="flex h-52 w-64 flex-col justify-between rounded-xl bg-white p-6 text-left text-foreground shadow-md sm:w-96">
                <blockquote className="text-body">{t.quote}</blockquote>
                <figcaption className="flex items-center gap-3">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-sm font-bold">{t.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            )}
          />
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-312 px-6 text-xs text-white/80 md:px-8 lg:px-12">
        From voices featured on Diyo.ai
      </p>
    </section>
  );
}
