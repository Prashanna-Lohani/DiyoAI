"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MILESTONES } from "@/utils/constants";

import { useCounter, useInView } from "./use-counter";

function Stat({
  value,
  decimals,
  prefix,
  suffix,
  label,
  inView,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const display = useCounter(value, inView);
  return (
    <div className="flex flex-1 flex-col items-center gap-2 py-5 sm:py-0">
      <span className="text-h1 text-foreground">
        {prefix}
        {display.toFixed(decimals ?? 0)}
        {suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function MilestonesTemplate1() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className="border-t border-border bg-muted/40 py-12 lg:py-16"
    >
      <FadeIn className="mx-auto max-w-360 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 text-foreground">
          Diyo&apos;s Milestones at a Glance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Our achievements and growth metrics showcase our impact in the AI and
          language technology landscape.
        </p>

        <div className="mt-10 flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
          {MILESTONES.map((milestone) => (
            <Stat
              key={milestone.label}
              value={milestone.value}
              decimals={milestone.decimals}
              prefix={milestone.prefix}
              suffix={milestone.suffix}
              label={milestone.label}
              inView={inView}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
