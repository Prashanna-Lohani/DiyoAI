"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MILESTONES } from "@/utils/constants";

import { useCounter, useInView } from "./use-counter";

function StatCell({
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
    <div className="flex flex-col items-center gap-2 border-foreground p-6 text-center">
      <span className="text-h1 text-foreground">
        {prefix}
        {display.toFixed(decimals ?? 0)}
        {suffix}
      </span>
      <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}

export function MilestonesTemplate3() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="border-b-2 border-foreground bg-background">
      <FadeIn className="mx-auto max-w-360 border-x-2 border-foreground px-6 py-12 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 text-foreground">
          Diyo&apos;s Milestones at a Glance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Our achievements and growth metrics showcase our impact in the AI and
          language technology landscape.
        </p>

        <div className="mt-10 grid grid-cols-2 divide-x-2 divide-y-2 divide-foreground border-2 border-foreground sm:grid-cols-5 sm:divide-y-0">
          {MILESTONES.map((milestone) => (
            <StatCell
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
