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
      className="overflow-hidden bg-gradient-to-b from-white to-[#f3f8fe] py-16 lg:py-24"
    >
      <FadeIn className="mx-auto max-w-312 px-6 text-center md:px-8 lg:px-12">
        <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
          Testimonials
        </span>
        <h2 className="text-h1 text-foreground">
          Voices that reflect the value
        </h2>
      </FadeIn>
      <div className="mx-auto mt-10 max-w-312 px-6 md:px-8 lg:px-12">
        <div className="[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            items={items}
            duration={150}
            renderItem={(t) => (
              <figure className="relative flex h-52 w-72 flex-col justify-between rounded-2xl border border-primary/15 bg-white p-6 text-left text-foreground transition-shadow duration-300 hover:shadow-lg sm:w-96">
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-5 font-serif text-6xl leading-none text-primary/15"
                >
                  &ldquo;
                </span>
                <blockquote className="relative text-body">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-primary/20"
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
      <p className="mt-6 text-center text-xs text-muted-foreground">
        From voices featured on Diyo.ai
      </p>
    </section>
  );
}
