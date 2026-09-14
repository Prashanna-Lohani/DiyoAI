import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroTemplate3() {
  return (
    <section id="hero" className="border-b-2 border-foreground bg-background">
      <div className="mx-auto grid max-w-360 grid-cols-1 divide-foreground border-x-2 border-foreground lg:grid-cols-2 lg:divide-x-2">
        <FadeIn className="flex flex-col items-start justify-center gap-6 px-6 py-16 text-left md:px-8 lg:px-12 lg:py-24">
          <span className="border-2 border-foreground px-3 py-1 text-xs font-bold tracking-widest text-foreground uppercase">
            Speech &amp; Language AI
          </span>
          <h1 className="text-display text-foreground">
            AI That Speaks Your Language.
          </h1>
          <p className="text-body-lg text-muted-foreground">
            Diyo.ai builds speech and language AI technologies designed for
            multilingual and low-resource language environments.
          </p>
          <div className="flex flex-col gap-0 border-2 border-foreground sm:flex-row sm:divide-x-2 sm:divide-foreground">
            <Button
              size="lg"
              className="rounded-none bg-foreground px-8 text-background hover:bg-foreground/85"
            >
              Request a Demo
            </Button>
            <Button size="lg" variant="ghost" className="rounded-none px-8">
              Explore Products
            </Button>
          </div>
        </FadeIn>

        <div className="relative min-h-100 overflow-hidden border-t-2 border-foreground lg:min-h-full lg:border-t-0">
          <video
            className="absolute inset-0 h-full w-full object-cover grayscale"
            src="/videos/Hero-section.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
      </div>
    </section>
  );
}
