import Image, { type StaticImageData } from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { Marquee } from "@/components/ui/marquee";
import { COLLABORATORS } from "@/utils/constants";

import { CLIENTS, PARTNERS } from "../data/content";

function LogoRow({
  id,
  title,
  names,
  duration = 80,
}: {
  id?: string;
  title: string;
  names: readonly string[];
  duration?: number;
}) {
  const items = names
    .map((name) => COLLABORATORS.find((c) => c.label === name))
    .filter((c): c is { src: StaticImageData; label: string } => Boolean(c));

  // Repeat the set so each marquee half is wider than the viewport.
  const loop = [...items, ...items, ...items];

  return (
    <div id={id} className="scroll-mt-24 border-b border-border py-6">
      <h3 className="text-sm text-foreground">{title}</h3>
      <div className="mt-6 overflow-hidden [&:hover_.marquee-track]:[animation-play-state:paused]">
        <Marquee
          items={loop}
          duration={duration}
          className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          renderItem={(item) => (
            <div className="flex w-44 flex-col items-center gap-3 text-center">
              <Image
                src={item.src}
                alt={item.label}
                className="h-12 w-auto max-w-24 object-contain"
              />
              <span className="max-w-40 text-xs text-muted-foreground">
                {item.label}
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export function DashboardFiveClients() {
  return (
    <section
      id="clients"
      className="scroll-mt-24 border-t border-border bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-312 px-6 md:px-8 lg:px-12">
        <FadeIn>
          <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
            Working together
          </span>
          <h2 className="text-h1 font-bold text-foreground">
            Clients &amp; collaborators
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-8 border-t border-border">
          <LogoRow title="Clients" names={CLIENTS} />
          <LogoRow
            id="partners"
            title="Partners & collaboration"
            names={PARTNERS}
            duration={95}
          />
        </FadeIn>
      </div>
    </section>
  );
}
