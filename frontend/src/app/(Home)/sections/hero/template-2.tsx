import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroTemplate2() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/15 via-background to-background py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-center gap-12 px-6 md:px-8 lg:px-12">
        <FadeIn className="flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="rounded-full border-2 border-secondary/30 bg-secondary/15 px-4 py-1.5 text-xs font-bold tracking-wide text-secondary uppercase">
            Speech &amp; Language AI
          </span>
          <h1 className="text-display text-foreground">
            AI That Speaks Your Language.
          </h1>
          <p className="text-body-lg text-muted-foreground">
            Diyo.ai builds speech and language AI technologies designed for
            multilingual and low-resource language environments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-secondary px-8 text-secondary-foreground shadow-lg hover:bg-secondary/80"
            >
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 bg-white px-8"
            >
              Explore Products
            </Button>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.15}
          className="w-full max-w-4xl overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl"
        >
          <video
            className="h-full w-full object-cover"
            src="/videos/Hero-section.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </FadeIn>
      </div>
    </section>
  );
}
