import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

import {
  AGENT_FLOW,
  CALL_STORY,
  CASE_STUDIES,
  SOLUTIONS_OVERVIEW,
} from "../data/content";

function CaseStudy({
  study,
}: {
  study: (typeof CASE_STUDIES)[number];
}) {
  const dark = study.theme === "dark";
  return (
    <FadeIn
      className={cn(
        "grid grid-cols-1 gap-8 rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-2 md:gap-12 md:p-10",
        dark && "bg-[#0c1b33] text-white",
        study.theme === "light" && "bg-muted/40",
        study.theme === "tint" && "bg-primary/8",
      )}
    >
      <div>
        <span
          className={cn(
            "block text-xs font-medium",
            dark ? "text-primary/70" : "text-muted-foreground",
          )}
        >
          {study.tag}
        </span>
        <h4 className="mt-4 text-h1 font-bold">{study.name}</h4>
        <div
          aria-hidden="true"
          className={cn(
            "flex flex-wrap items-center gap-3 text-sm",
            dark ? "text-primary/80" : "text-primary",
          )}
        >
          {study.motif.map((part, i) => (
            <span key={i} className={part.length > 2 ? "" : "font-sans text-lg"}>
              {part}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-h3 font-semibold">{study.heading}</h5>
        <p
          className={cn(
            "mt-4 text-sm",
            dark ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {study.description}
        </p>
        {"href" in study && study.href ? (
          <Link
            href={study.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-5 inline-flex items-center gap-2 border-b text-sm font-semibold",
              dark
                ? "border-primary/60 text-primary/90 hover:text-white"
                : "border-primary/60 text-primary hover:text-foreground",
            )}
          >
            {study.linkLabel}
            <span aria-hidden="true">→</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        ) : (
          "note" in study &&
          study.note && (
            <span className="mt-5 block text-xs text-primary">
              {study.note}
            </span>
          )
        )}
      </div>
    </FadeIn>
  );
}

export function DashboardFiveLanguageSolutions() {
  return (
    <section
      id="language-solutions"
      className="bg-background py-16 lg:py-24"
      aria-labelledby="language-solutions-heading"
    >
      <div className="mx-auto max-w-360 px-6 md:px-8 lg:px-12">
        <FadeIn className="max-w-2xl">
          <span className="mb-6 block text-xs font-bold tracking-widest text-primary uppercase">
            Language in action
          </span>
          <h2 id="language-solutions-heading" className="text-display text-foreground">
            Language Solutions
          </h2>
          <p className="mt-5 text-body-lg text-muted-foreground">
            Language, speech and organizational knowledge come together in
            localized conversations, agents and calling experiences.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.05}
          className="mt-12 grid grid-cols-1 gap-6 border-b border-border pb-10 sm:grid-cols-3"
        >
          {SOLUTIONS_OVERVIEW.map((item) => (
            <a key={item.href} href={item.href} className="group block">
              <strong className="block text-h3 text-foreground transition-colors group-hover:text-primary">
                {item.title}
              </strong>
              <small className="mt-2 block text-sm text-muted-foreground">
                {item.subtitle}
              </small>
            </a>
          ))}
        </FadeIn>

        <div id="conversational-ai" className="scroll-mt-24">
        <FadeIn
          delay={0.1}
          className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
              Text &amp; voice
            </span>
            <h3 className="text-h1 text-foreground">Conversational AI</h3>
            <p className="mt-4 max-w-sm text-body-lg text-muted-foreground">
              Help people ask questions and access information in the
              languages they use. Chatbots and voice bots are two ways into
              the same conversation.
            </p>
          </div>
          <div>
            <div className="relative grid grid-cols-1 gap-8 border-b border-border pb-8 sm:grid-cols-2">
              <div>
                <span
                  aria-hidden="true"
                  className="mb-4 block h-10 text-2xl font-semibold text-primary"
                >
                  Aa
                </span>
                <h4 className="text-h3 text-foreground">Chatbots</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  Text conversations for customer support, citizen
                  information and everyday digital services.
                </p>
              </div>
              <div>
                <span
                  aria-hidden="true"
                  className="mb-4 block h-10 text-2xl text-primary"
                >
                  ▂▄▆█▄▂
                </span>
                <h4 className="text-h3 text-foreground">Voice Bots</h4>
                <p className="mt-3 text-sm text-muted-foreground">
                  Spoken conversations that let people ask questions and
                  interact naturally through speech.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-muted/40 p-6">
              <span className="block text-xs font-semibold tracking-wide text-primary uppercase">
                The voice capability within Conversational AI
              </span>
              <h4 className="mt-2 text-h3 text-foreground">Voice AI</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Speech-based interaction brings local-language conversations
                to voice-enabled experiences.
              </p>
            </div>
          </div>
        </FadeIn>
        </div>

        <div id="ai-agents" className="scroll-mt-24">
        <FadeIn
          delay={0.1}
          className="mt-16 grid grid-cols-1 gap-10 rounded-2xl bg-primary/5 p-8 md:p-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
              Your knowledge in conversation
            </span>
            <h3 className="text-h1 text-foreground">AI Agents</h3>
            <p className="mt-4 text-sm font-semibold text-primary">
              Build with Diyo Agent Studio
            </p>
            <p className="mt-3 max-w-md text-body-lg text-muted-foreground">
              Create a website assistant using your website, documents and
              FAQs. Answer questions around the clock, capture leads and hand
              conversations to your team when needed.
            </p>
            <Link
              href="https://agentstudio.diyo.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Explore Diyo Agent Studio
              <span aria-hidden="true">→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </div>
          <div>
            <span className="mb-5 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              From your knowledge to a useful interaction
            </span>
            <ol className="flex flex-col gap-5">
              {AGENT_FLOW.map((step) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-1 h-3 w-3 shrink-0 rounded-full border border-primary/50",
                      step.emphasis && "border-primary bg-primary",
                    )}
                  />
                  <div>
                    <strong className="text-base font-semibold text-foreground">
                      {step.title}
                    </strong>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
        </div>

        <div id="ai-calling" className="scroll-mt-24">
        <FadeIn
          delay={0.1}
          className="mt-16 grid grid-cols-1 gap-10 rounded-2xl bg-[#0c1b33] p-8 text-white md:p-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <span className="mb-4 block text-xs font-bold tracking-widest text-primary/70 uppercase">
              Calling &amp; assistance
            </span>
            <h3 className="text-h1 text-white">AI Calling Assistants</h3>
            <span className="mt-4 inline-block rounded border border-white/25 px-2.5 py-1 text-xs text-white/70">
              Solution direction
            </span>
            <p className="mt-4 max-w-sm text-body-lg text-white/75">
              Exploring structured voice conversations for sharing
              information, collecting details and following up, with a path
              to human support.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="mb-4 block text-xs font-semibold tracking-wide text-primary/70 uppercase">
              A possible service conversation
            </span>
            <ol className="flex flex-col divide-y divide-white/10">
              {CALL_STORY.map((step) => (
                <li key={step} className="py-4 text-sm font-medium text-white/90">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
        </div>

        <div className="mt-16">
          <FadeIn className="max-w-2xl">
            <span className="mb-6 block text-xs font-bold tracking-widest text-primary uppercase">
              Solutions in action
            </span>
            <h3 className="text-h1 text-foreground">
              Real human needs, local AI responses
            </h3>
            <p className="mt-4 text-body-lg text-muted-foreground">
              From everyday conversations to public services and health
              information, language makes technology more approachable.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-col gap-6">
            {CASE_STUDIES.map((study) => (
              <CaseStudy key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
