"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HERO_COPY, VOICE_STEPS } from "../data/shared-content";
import { useDashboardFiveLang } from "../lang-context";

function Waveform({ active }: { active: boolean }) {
  return (
    <div className="ml-auto flex h-5 shrink-0 items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-primary"
          animate={
            active
              ? { height: ["25%", "95%", "25%"] }
              : { height: "30%" }
          }
          transition={{
            duration: 1,
            repeat: active ? Infinity : 0,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}

export function DashboardFiveHero() {
  const { lang } = useDashboardFiveLang();
  const copy = HERO_COPY[lang];
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % VOICE_STEPS.length);
    }, 1300);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-primary/8 via-background to-background py-16 lg:py-24"
    >
      <div className="relative z-10 mx-auto grid max-w-360 grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-12">
        <FadeIn className="flex flex-col items-start gap-5 text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Speech &amp; Language AI for Nepal
          </span>
          <h1
            className="text-display text-foreground"
            lang={lang === "np" ? "ne" : "en"}
          >
            {lang === "en" ? (
              <>
                AI That Speaks Your{" "}
                <span className="text-primary">Language</span>.
              </>
            ) : (
              copy.heading
            )}
          </h1>
          <p
            className={cn(
              "text-h3 font-semibold text-primary",
              lang === "np" && "font-normal",
            )}
            lang={lang === "np" ? "ne" : "en"}
          >
            {copy.tagline}
          </p>
          <p className="max-w-lg text-body-lg text-muted-foreground">
            {copy.sub}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-lg px-8" render={<a href="#services" />}>
              Explore Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg bg-white px-8"
              render={<a href="#demo" />}
            >
              Talk to Diyo
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div id="demo" className="rounded-2xl border border-border bg-white p-5 text-left shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-muted-foreground">
                🎙️ Try Voice AI — Nepali
              </h2>
              <motion.span
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary"
                animate={paused ? {} : { boxShadow: [
                  "0 0 0 0 rgba(30,126,222,0.5)",
                  "0 0 0 9px rgba(30,126,222,0)",
                  "0 0 0 0 rgba(30,126,222,0)",
                ] }}
                transition={{ duration: 2, repeat: paused ? 0 : Infinity }}
              />
            </div>
            <div className="flex flex-col gap-2">
              {VOICE_STEPS.map((step, i) => (
                <motion.div
                  key={step.label}
                  animate={{ scale: i === activeStep ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border border-border px-3.5 py-3 transition-colors duration-300",
                    i === activeStep && "border-primary/35 bg-primary/10",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-base transition-colors duration-300",
                      i === activeStep && "bg-primary",
                    )}
                  >
                    {step.icon}
                  </span>
                  <span className="min-w-0 text-sm font-semibold text-foreground">
                    {step.label}
                    <small className="mt-0.5 block truncate font-normal text-muted-foreground">
                      {step.detail}
                    </small>
                  </span>
                  {i === 0 && <Waveform active={i === activeStep && !paused} />}
                </motion.div>
              ))}
            </div>
            <p className="mt-3.5 text-center text-xs text-muted-foreground">
              A Diyo voice agent, end to end.
            </p>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="mx-auto mt-2.5 block rounded-lg border border-border px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {paused ? "Resume animation" : "Pause animation"}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
