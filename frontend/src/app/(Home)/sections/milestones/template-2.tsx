"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MILESTONES } from "@/utils/constants";

import { useCounter, useInView } from "./use-counter";

const ACCENTS = [
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
  "bg-warning/10 text-warning",
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
];

function StatCard({
  value,
  decimals,
  prefix,
  suffix,
  label,
  inView,
  accent,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  inView: boolean;
  accent: string;
}) {
  const display = useCounter(value, inView);
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-3xl border-2 border-foreground/5 p-6 text-center shadow-sm ${accent}`}
    >
      <span className="text-h1">
        {prefix}
        {display.toFixed(decimals ?? 0)}
        {suffix}
      </span>
      <span className="text-sm font-semibold text-foreground/70">{label}</span>
    </div>
  );
}

export function MilestonesTemplate2() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="bg-background py-16 lg:py-20">
      <FadeIn className="mx-auto max-w-360 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 text-foreground">
          Diyo&apos;s Milestones at a Glance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Our achievements and growth metrics showcase our impact in the AI and
          language technology landscape.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {MILESTONES.map((milestone, i) => (
            <StatCard
              key={milestone.label}
              value={milestone.value}
              decimals={milestone.decimals}
              prefix={milestone.prefix}
              suffix={milestone.suffix}
              label={milestone.label}
              inView={inView}
              accent={ACCENTS[i % ACCENTS.length]}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
