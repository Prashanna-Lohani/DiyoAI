import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { Marquee } from "@/components/ui/marquee";
import { AWARD_LOGOS, COLLABORATORS } from "@/utils/constants";

const MARQUEE_ITEMS = [
  ...COLLABORATORS,
  ...AWARD_LOGOS.map((award) => ({ src: award.src, label: award.alt })),
];

export function CollaborationsTemplate3() {
  return (
    <section className="overflow-hidden border-b-2 border-foreground bg-background">
      <FadeIn className="mx-auto max-w-300 border-x-2 border-foreground px-6 py-16 text-center md:px-8 lg:px-12 lg:py-20">
        <h2 className="text-h1 text-foreground">Driving Change Together</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          At Diyo.ai, collaboration is at the heart of what we do. Alongside
          our partners, we&apos;re working toward a better future for
          individuals and communities.
        </p>
        <p className="mt-10 inline-block border-2 border-foreground px-4 py-1.5 text-xs font-bold tracking-widest text-foreground uppercase">
          Diyo.ai in Collaboration with:
        </p>
      </FadeIn>

      <div className="border-t-2 border-foreground py-12">
        <Marquee
          items={MARQUEE_ITEMS}
          duration={35}
          renderItem={(collaborator) => (
            <div className="flex w-32 flex-col items-center gap-3 text-center">
              <div className="flex h-20 w-20 items-center justify-center border-2 border-foreground bg-white p-3">
                <Image
                  src={collaborator.src}
                  alt={collaborator.label}
                  className="h-full w-full object-contain grayscale"
                />
              </div>
              <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                {collaborator.label}
              </span>
            </div>
          )}
        />
      </div>
    </section>
  );
}
