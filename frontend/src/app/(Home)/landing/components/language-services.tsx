"use client";

import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import { SERVICE_CHOICES } from "../data/shared-content";

function ExampleValue({ value, lang }: { value: string; lang?: string }) {
  if (value === "wave") {
    return (
      <span
        role="img"
        aria-label="Illustration of a speech waveform"
        className="mx-auto flex h-16 w-full max-w-56 items-center justify-center gap-1"
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

type Choice = (typeof SERVICE_CHOICES)[number];

function ExampleBody({
  choice,
  compact,
}: {
  choice: Choice;
  compact?: boolean;
}) {
  const size = compact ? "text-h3" : "text-h2";
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xs tracking-widest text-muted-foreground uppercase"
      >
        {choice.example.label}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={cn(
          "w-full text-balance text-primary",
          choice.example.source.length <= 45
            ? "lg:whitespace-nowrap"
            : "line-clamp-3 px-2 text-h3 leading-[1.7]",
          choice.example.source.length <= 45 && size,
        )}
        lang={choice.example.sourceLang}
      >
        <ExampleValue
          value={choice.example.source}
          lang={choice.example.sourceLang}
        />
      </motion.span>
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="text-2xl text-primary"
      >
        ↓
      </motion.span>
      <motion.strong
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className={cn(
          "w-full text-balance text-foreground",
          choice.example.output.length <= 45
            ? "lg:whitespace-nowrap"
            : "line-clamp-3 px-2 text-h3 leading-[1.7]",
          choice.example.output.length <= 45 && size,
        )}
      >
        <ExampleValue value={choice.example.output} />
      </motion.strong>
      {"roman" in choice.example && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs tracking-widest text-primary uppercase">
            {choice.example.romanLabel}
          </span>
          <span className="text-sm text-foreground/80">
            {choice.example.roman}
          </span>
        </motion.span>
      )}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className="max-w-64 text-sm text-muted-foreground"
      >
        {choice.example.caption}
      </motion.span>
    </div>
  );
}

const GRID_BG: CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, transparent calc(100% - 1px), rgba(36,115,204,0.06) 1px), linear-gradient(transparent calc(100% - 1px), rgba(36,115,204,0.06) 1px)",
  backgroundSize: "32px 32px",
};

export function DashboardFiveLanguageServices() {
  const [selected, setSelected] = useState<Choice>(SERVICE_CHOICES[0]);

  return (
    <section id="services" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-312 px-6 md:px-8 lg:px-12">
        <FadeIn className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <h2 className="text-display text-foreground">
              Language <span className="text-primary">Services</span>
            </h2>
          </div>
          <p className="text-body-lg text-muted-foreground">
            Across languages, across formats. Translate, transcribe, subtitle
            and give text a voice, built around the way people communicate.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10"
        >
          {/* Desktop example panel */}
          <div
            className="relative hidden min-h-[320px] flex-col rounded-2xl border border-primary/15 bg-[#e8f1fc] p-6 lg:flex"
            style={GRID_BG}
          >
            <div className="flex items-center justify-between text-xs font-semibold text-primary">
              <span>Language in motion</span>
              <span>अ → A</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex flex-1 flex-col"
              >
                <ExampleBody choice={selected} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="border-t border-border">
            {SERVICE_CHOICES.map((choice) => {
              const active = selected.id === choice.id;
              return (
                <div key={choice.id} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setSelected(choice)}
                    aria-pressed={active}
                    aria-expanded={active}
                    className={cn(
                      "relative grid w-full grid-cols-[24px_1fr_24px] items-start gap-4 py-6 pl-4 text-left outline-none transition-colors focus-visible:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-inset",
                      active && "text-primary",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="service-choice-indicator"
                        className="absolute top-2 bottom-2 left-0 w-0.5 rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="pt-1.5 text-xs text-muted-foreground">
                      {choice.no}
                    </span>
                    <span>
                      <strong
                        className={cn(
                          "block text-h3",
                          active ? "text-primary" : "text-foreground",
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
                        "text-xl transition-transform duration-300",
                        active
                          ? "translate-x-1 text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      →
                    </span>
                  </button>

                  {/* Mobile / tablet: example sits directly under its active tab */}
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        key="example"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div
                          className="mb-5 flex flex-col rounded-2xl border border-primary/15 bg-[#e8f1fc] p-5"
                          style={GRID_BG}
                        >
                          <ExampleBody choice={choice} compact />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn
          delay={0.15}
          className="mt-10 rounded-2xl border-t-4 border-primary bg-[#e8f1fc] p-6 sm:p-8"
        >
          <span className="mb-5 block text-[0.65rem] font-bold tracking-widest text-primary uppercase">
            Access language technology
          </span>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            <div className="md:pr-8">
              <h3 className="text-h3 text-foreground">Choose how you work</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Use the Platform directly or connect language capabilities to
                your own applications through the API.
              </p>
            </div>
            <div className="border-t border-primary/20 pt-6 md:border-t-0 md:border-l md:px-8 md:pt-0">
              <h4 className="text-h3 text-foreground">Platform</h4>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Work with Diyo.ai&apos;s language capabilities through the
                Diyo.ai Platform.
              </p>
            </div>
            <div className="border-t border-primary/20 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <h4 className="text-h3 text-foreground">API</h4>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Use Diyo.ai&apos;s language technology programmatically
                through an API.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
