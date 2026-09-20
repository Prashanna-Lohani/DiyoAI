"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import { SERVICE_CHOICES } from "../data/content";

function ExampleValue({ value, lang }: { value: string; lang?: string }) {
  if (value === "wave") {
    return (
      <span
        role="img"
        aria-label="Illustration of a speech waveform"
        className="flex h-16 w-full max-w-56 items-center justify-center gap-1"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="block w-1.5 rounded-full bg-primary"
            style={{
              height: `${[30, 60, 90, 45, 75][i % 5]}%`,
            }}
          />
        ))}
      </span>
    );
  }
  return (
    <span className="block w-full" lang={lang}>
      {value}
    </span>
  );
}

export function DashboardFourLanguageServices() {
  const [selected, setSelected] = useState<(typeof SERVICE_CHOICES)[number]>(
    SERVICE_CHOICES[0],
  );

  return (
    <section id="services" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-360 px-6 md:px-8 lg:px-12">
        <FadeIn className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <span className="mb-6 block text-xs font-bold tracking-widest text-primary uppercase">
              01 / Connect
            </span>
            <h2 className="text-display text-foreground">
              Language <span className="text-primary">Services</span>
            </h2>
          </div>
          <p className="text-body-lg text-muted-foreground">
            Across languages, across formats. Translate, transcribe, subtitle
            and give text a voice — built around the way people communicate.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.1fr] lg:gap-10"
        >
          <div
            className="relative flex min-h-[320px] flex-col rounded-2xl border border-primary/15 bg-primary/5 p-6"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent calc(100% - 1px), rgba(58,134,255,0.06) 1px), linear-gradient(transparent calc(100% - 1px), rgba(58,134,255,0.06) 1px)",
              backgroundSize: "32px 32px",
            }}
          >
            <div className="flex items-center justify-between text-xs font-semibold text-primary">
              <span>Language in motion</span>
              <span>अ → A</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-1 flex-col items-center justify-center gap-3 py-8 text-center"
              >
                <span className="text-xs tracking-widest text-muted-foreground uppercase">
                  {selected.example.label}
                </span>
                <span className="w-full text-h1 text-primary" lang={selected.example.sourceLang}>
                  <ExampleValue
                    value={selected.example.source}
                    lang={selected.example.sourceLang}
                  />
                </span>
                <span aria-hidden="true" className="text-2xl text-primary">
                  ↓
                </span>
                <strong className="w-full text-h1 text-foreground">
                  <ExampleValue value={selected.example.output} />
                </strong>
                <span className="max-w-64 text-sm text-muted-foreground">
                  {selected.example.caption}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="border-t border-border">
            {SERVICE_CHOICES.map((choice) => (
              <button
                key={choice.id}
                type="button"
                onClick={() => setSelected(choice)}
                aria-pressed={selected.id === choice.id}
                className={cn(
                  "grid w-full grid-cols-[24px_1fr_24px] items-start gap-4 border-b border-border py-6 text-left transition-colors",
                  selected.id === choice.id && "text-primary",
                )}
              >
                <span className="pt-1.5 text-xs text-muted-foreground">
                  {choice.no}
                </span>
                <span>
                  <strong
                    className={cn(
                      "block text-h3",
                      selected.id === choice.id
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {choice.title}
                  </strong>
                  <span className="mt-1.5 block max-w-md text-sm text-muted-foreground">
                    {choice.description}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "text-xl",
                    selected.id === choice.id
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          delay={0.15}
          className="mt-10 grid grid-cols-1 gap-8 rounded-2xl border-t-4 border-primary bg-primary/5 p-8 md:grid-cols-[0.9fr_1fr_1fr] md:gap-10"
        >
          <div>
            <span className="mb-4 block text-[0.68rem] font-bold tracking-widest text-primary uppercase">
              Diyo.ai offerings
            </span>
            <h3 className="text-h2 text-foreground">Work with Diyo</h3>
            <p className="mt-4 max-w-64 text-sm text-muted-foreground">
              Our Platform and API bring Diyo.ai&apos;s language technology to
              your work.
            </p>
          </div>
          <div className="border-t border-primary/20 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <h4 className="text-h2 font-normal text-foreground">Platform</h4>
            <p className="mt-4 max-w-72 text-sm text-muted-foreground">
              Work with Diyo.ai&apos;s language capabilities through the
              Diyo.ai Platform.
            </p>
          </div>
          <div className="border-t border-primary/20 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <h4 className="text-h2 font-normal text-foreground">API</h4>
            <p className="mt-4 max-w-72 text-sm text-muted-foreground">
              Use Diyo.ai&apos;s language technology programmatically through
              an API.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
