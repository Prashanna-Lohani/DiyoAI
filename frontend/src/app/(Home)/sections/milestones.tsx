"use client";

import { useEffect, useRef, useState } from "react";

import { FadeIn } from "@/components/ui/fade-in";
import { MILESTONES } from "@/utils/constants";

function Counter({
  value,
  decimals = 0,
  start,
}: {
  value: number;
  decimals?: number;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1800;
    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return <>{display.toFixed(decimals)}</>;
}

export function Milestones() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='border-t border-border bg-muted/40 py-12 lg:py-16'
    >
      <FadeIn className='mx-auto max-w-360 px-6 text-center md:px-8 lg:px-12'>
        <h2 className='text-h1 text-foreground'>
          Diyo&apos;s Milestones at a Glance
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground'>
          Our achievements and growth metrics showcase our impact in the AI and
          language technology landscape.
        </p>

        <div className='mt-10 flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0'>
          {MILESTONES.map((milestone) => (
            <div
              key={milestone.label}
              className='flex flex-1 flex-col items-center gap-2 py-5 sm:py-0'
            >
              <span className='text-h1 text-foreground'>
                {milestone.prefix}
                <Counter
                  value={milestone.value}
                  decimals={milestone.decimals}
                  start={inView}
                />
                {milestone.suffix}
              </span>
              <span className='text-sm text-muted-foreground'>
                {milestone.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
