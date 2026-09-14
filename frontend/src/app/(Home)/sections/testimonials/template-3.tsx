"use client";

import Image from "next/image";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/utils/constants";

import { useRotatingIndex } from "./use-rotating-index";

export function TestimonialsTemplate3() {
  const [index, setIndex] = useRotatingIndex(TESTIMONIALS.length);
  const active = TESTIMONIALS[index];

  return (
    <section className="border-b-2 border-foreground bg-background">
      <FadeIn className="mx-auto max-w-300 border-x-2 border-foreground px-6 py-16 text-center md:px-8 lg:px-12 lg:py-24">
        <h2 className="text-h1 text-foreground">What People Are Saying</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Real feedback from the people and organizations we work with.
        </p>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 border-2 border-foreground p-8 sm:p-10">
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
              className="h-11 w-11 shrink-0 border-2 border-foreground object-cover grayscale"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-foreground">
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
                  "h-1.5 w-6 cursor-pointer transition-colors",
                  i === index ? "bg-foreground" : "bg-border",
                )}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
