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
    <div className="flex flex-col items-center gap-2 py-6 text-center">
      <span className="text-h1 font-normal text-foreground">
        {prefix}
        {display.toFixed(decimals ?? 0)}
        {suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function MilestonesTemplate3() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <FadeIn className="mx-auto max-w-360 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 font-normal text-foreground">
          Diyo&apos;s milestones at a glance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Our achievements and growth metrics showcase our impact in the AI and
          language technology landscape.
        </p>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-5 sm:gap-0 sm:divide-x sm:divide-border/70">
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
