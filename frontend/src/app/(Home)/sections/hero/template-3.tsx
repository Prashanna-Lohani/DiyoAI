import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroTemplate3() {
  return (
    <section id="hero" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <FadeIn className="flex flex-col items-start gap-6 text-left">
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Speech &amp; Language AI
          </span>
          <h1 className="text-display font-normal text-foreground">
            AI that speaks your language.
          </h1>
          <p className="max-w-md text-body-lg text-muted-foreground">
            Diyo.ai builds speech and language AI technologies designed for
            multilingual and low-resource language environments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full px-8 shadow-sm">
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-8 text-foreground hover:bg-muted/60"
            >
              Explore Products
            </Button>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="relative overflow-hidden rounded-3xl bg-muted/40"
        >
          <video
            className="aspect-4/3 w-full object-cover"
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
