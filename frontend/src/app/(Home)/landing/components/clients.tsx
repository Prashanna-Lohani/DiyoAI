import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { Marquee } from "@/components/ui/marquee";
import type { PageContent } from "@/content";

type Clients = PageContent["clients"];

function LogoRow({
  id,
  title,
  logos,
  duration = 80,
}: {
  id?: string;
  title: string;
  logos: Clients["clients"];
  duration?: number;
}) {
  const items = logos.filter((c) => c.logo);
  if (items.length === 0) return null;

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
                src={item.logo}
                alt={item.name}
                className="h-12 w-auto max-w-24 object-contain"
              />
              <span className="max-w-40 text-xs text-muted-foreground">
                {item.name}
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export function DashboardFiveClients({ content }: { content: Clients }) {
  return (
    <section
      id="clients"
      className="scroll-mt-24 border-t border-border bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-312 px-6 md:px-8 lg:px-12">
        <FadeIn>
          <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
            {content.eyebrow}
          </span>
          <h2 className="text-h1 font-bold text-foreground">
            {content.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-8 border-t border-border">
          <LogoRow title={content.clientsTitle} logos={content.clients} />
          <LogoRow
            id="partners"
            title={content.partnersTitle}
            logos={content.partners}
            duration={95}
          />
        </FadeIn>
      </div>
    </section>
  );
}
