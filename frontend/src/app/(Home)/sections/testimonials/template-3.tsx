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
    <section className="bg-white py-20 lg:py-28">
      <FadeIn className="mx-auto max-w-300 px-6 text-center md:px-8 lg:px-12">
        <h2 className="text-h1 font-normal text-foreground">
          What people are saying
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Real feedback from the people and organizations we work with.
        </p>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-6">
          <p
            key={index}
            className="animate-in text-body-lg font-normal text-foreground fade-in duration-500"
          >
            &ldquo;{active.quote}&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <Image
              src={active.photo}
              alt={active.name}
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium text-foreground">
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
                  "h-1.5 w-1.5 cursor-pointer rounded-full transition-all",
                  i === index ? "w-6 bg-foreground" : "bg-border",
                )}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
