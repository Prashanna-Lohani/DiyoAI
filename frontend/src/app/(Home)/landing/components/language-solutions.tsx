import Link from "next/link";
import { FiArrowUpRight, FiPhoneCall } from "react-icons/fi";

import type { PageContent } from "@/content";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import { ConversationalAIDemo } from "./conversational-ai-demo";
import { ICONS } from "./icons";

type Solutions = PageContent["solutions"];

function CaseStudy({
  study,
  index,
}: {
  study: Solutions["cases"]["items"][number];
  index: number;
}) {
  return (
    <FadeIn
      delay={index * 0.08}
      className="relative flex h-full min-h-44 cursor-pointer flex-col rounded-2xl border border-primary/15 bg-[#e8f1fc] p-5 transition-transform duration-300 hover:-translate-y-1"
    >
      <h4 className="text-h2 font-bold! text-foreground">{study.name}</h4>
      <p className="mt-3 max-w-xs text-sm text-muted-foreground">
        {study.description}
      </p>
      {study.href && (
        <Link
          href={study.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-3 border-b after:absolute after:inset-0 after:content-[''] border-primary/60 pt-4 pb-1 text-sm font-semibold text-primary hover:text-foreground"
        >
          {study.linkLabel}
          <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
      )}
    </FadeIn>
  );
}

export function DashboardFiveLanguageSolutions({
  content,
}: {
  content: Solutions;
}) {
  const { conversational, agents, calling, cases } = content;
  return (
    <section
      id="language-solutions"
      className="bg-background py-16 lg:py-24"
      aria-labelledby="language-solutions-heading"
    >
      <div className="mx-auto max-w-312 px-6 md:px-8 lg:px-12">
        <FadeIn className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <span className="mb-6 block text-xs font-bold tracking-widest text-primary uppercase">
              {content.eyebrow}
            </span>
            <h2 id="language-solutions-heading" className="text-display text-foreground">
              {content.heading}
            </h2>
            <p className="mt-3 text-h3 font-semibold text-primary">
              {content.subheading}
            </p>
            <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
              {content.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.overview.map((item, i) => {
              const Icon = ICONS[item.icon] ?? ICONS.message;
              return (
                <FadeIn key={`${item.title}-${i}`} delay={0.1 + i * 0.1} direction="right">
                  <a
                    href={item.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-[#e8f1fc] hover:shadow-md"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-4 right-5 text-xs font-bold tracking-widest text-primary/30"
                    >
                      0{i + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <strong className="mt-5 block text-base text-foreground">
                      {item.title}
                    </strong>
                    <small className="mt-1 block text-sm text-muted-foreground">
                      {item.subtitle}
                    </small>
                    <span
                      aria-hidden="true"
                      className="mt-5 ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <FiArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>

        <div id="conversational-ai" className="scroll-mt-24">
        <FadeIn
          delay={0.1}
          className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
              {conversational.eyebrow}
            </span>
            <h3 className="text-h1 text-foreground">{conversational.heading}</h3>
            <p className="mt-4 max-w-sm text-body-lg text-muted-foreground">
              {conversational.text}
            </p>
          </div>
          <ConversationalAIDemo content={conversational} />
        </FadeIn>
        </div>

        <div id="ai-agents" className="scroll-mt-24">
        <FadeIn
          delay={0.1}
          className="mt-16 grid grid-cols-1 gap-10 rounded-3xl bg-[#e8f1fc] p-8 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
              {agents.eyebrow}
            </span>
            <h3 className="text-h1 text-foreground">{agents.heading}</h3>
            <p className="mt-4 text-sm font-semibold text-primary">
              {agents.subheading}
            </p>
            <p className="mt-3 max-w-md text-body-lg text-muted-foreground">
              {agents.text}
            </p>
            <Link
              href={agents.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              {agents.cta.label}
              <span aria-hidden="true">→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </div>
          <div>
            <span className="mb-5 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {agents.flowLabel}
            </span>
            <ol className="relative flex flex-col gap-3">
              <span
                aria-hidden="true"
                className="absolute top-8 bottom-8 left-[1.65rem] w-px bg-primary/25"
              />
              {agents.flow.map((step, i) => {
                const Icon = ICONS[step.icon] ?? ICONS.globe;
                const chips = step.detail.split(" · ");
                return (
                  <li
                    key={`${step.title}-${i}`}
                    className={cn(
                      "relative flex items-center gap-4 rounded-2xl border p-3.5 transition-transform duration-300 hover:translate-x-1",
                      step.emphasis
                        ? "border-primary/40 bg-white shadow-md"
                        : "border-primary/10 bg-white/70",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        step.emphasis
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <strong className="block text-base font-semibold text-foreground">
                        {step.title}
                      </strong>
                      {chips.length > 1 ? (
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {chips.map((chip) => (
                            <span
                              key={chip}
                              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </FadeIn>
        </div>

        <div id="ai-calling" className="scroll-mt-24">
        <FadeIn
          delay={0.1}
          className="mt-16 grid grid-cols-1 gap-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-[#f3f8fe] to-[#e3eefb] p-8 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
              {calling.eyebrow}
            </span>
            <h3 className="text-h1 text-foreground">{calling.heading}</h3>
            {calling.badge && (
              <span className="mt-4 inline-block rounded-full border border-primary/30 bg-white/70 px-3 py-1 text-xs font-medium text-primary">
                {calling.badge}
              </span>
            )}
            <p className="mt-4 max-w-sm text-body-lg text-muted-foreground">
              {calling.text}
            </p>
          </div>
          <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-md">
            <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <FiPhoneCall className="size-4" />
                </span>
                <span>
                  <strong className="block text-sm text-foreground">
                    {calling.cardTitle}
                  </strong>
                  <small className="block text-xs text-muted-foreground">
                    {calling.cardSubtitle}
                  </small>
                </span>
              </span>
              <span
                aria-hidden="true"
                className="flex h-5 items-center gap-[3px]"
              >
                {[40, 75, 100, 60, 85, 45].map((h, i) => (
                  <span
                    key={i}
                    className="block w-[3px] rounded-full bg-primary/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </span>
            </div>
            <ol className="relative mt-5 flex flex-col gap-4">
              <span
                aria-hidden="true"
                className="absolute top-4 bottom-4 left-4 w-px bg-primary/20"
              />
              {calling.steps.map((step, i) => (
                <li key={`${step}-${i}`} className="relative flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-[#e8f1fc] text-xs font-bold text-primary"
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 rounded-xl bg-[#f3f8fe] px-4 py-3 text-sm font-medium text-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
        </div>

        <div className="mt-20">
          <FadeIn className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <span className="mb-6 block text-xs font-bold tracking-widest text-primary uppercase">
                {cases.eyebrow}
              </span>
              <h3 className="text-h1 font-bold! whitespace-pre-line text-foreground">
                {cases.heading}
              </h3>
            </div>
            <p className="max-w-md text-body-lg text-muted-foreground">
              {cases.text}
            </p>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cases.items.map((study, i) => (
              <CaseStudy key={`${study.name}-${i}`} study={study} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
