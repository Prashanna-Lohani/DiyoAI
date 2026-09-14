"use client";

import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/utils/constants";

import { useRotatingIndex } from "./use-rotating-index";

export function TestimonialsTemplate2() {
  const [index, setIndex] = useRotatingIndex(TESTIMONIALS.length);
  const active = TESTIMONIALS[index];

  return (
    <section className="bg-secondary/10 py-16 lg:py-24">
      <FadeIn className="mx-auto max-w-300 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 text-foreground">What People Are Saying</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Real feedback from the people and organizations we work with.
        </p>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 rounded-[2.5rem] border-2 border-white bg-white p-8 shadow-xl sm:p-10">
          <p
            key={index}
            className="animate-in text-body-lg text-foreground fade-in duration-500"
          >
            &ldquo;{active.quote}&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <Image
              src={active.photo}
              alt={active.name}
              className="h-12 w-12 shrink-0 rounded-full border-2 border-secondary/30 object-cover"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-foreground">
                {active.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {active.role}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                className={cn(
                  "h-2 w-2 cursor-pointer rounded-full transition-colors",
                  i === index ? "bg-secondary" : "bg-border",
                )}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
