"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { MILESTONES } from "@/utils/constants";

const CARD_TONES = [
  "bg-blue-50 text-blue-700",
  "bg-emerald-50 text-emerald-700",
  "bg-sky-50 text-sky-700",
  "bg-indigo-50 text-indigo-700",
  "bg-teal-50 text-teal-700",
];

function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCounter(value: number, start: boolean) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplay(value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return display;
}

function StatCard({
  milestone,
  tone,
  inView,
  index,
}: {
  milestone: (typeof MILESTONES)[number];
  tone: string;
  inView: boolean;
  index: number;
}) {
  const display = useCounter(milestone.value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl px-4 py-8 text-center transition-transform duration-300 hover:-translate-y-1",
        tone,
      )}
    >
      <span className="text-h1">
        {milestone.prefix}
        {display.toFixed(milestone.decimals ?? 0)}
        {milestone.suffix}
      </span>
      <span className="text-sm text-foreground/70">{milestone.label}</span>
    </motion.div>
  );
}

export function DashboardFiveMilestones() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} id="milestones" className="bg-background py-16 lg:py-24">
      <FadeIn className="mx-auto max-w-312 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 text-foreground">
          Diyo&apos;s Milestones at a Glance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Our achievements and growth metrics showcase our impact in the AI and
          language technology landscape.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {MILESTONES.map((milestone, i) => (
            <StatCard
              key={milestone.label}
              milestone={milestone}
              tone={CARD_TONES[i % CARD_TONES.length]}
              inView={inView}
              index={i}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
