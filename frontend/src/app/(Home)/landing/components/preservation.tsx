import type { PageContent } from "@/content";
import { FadeIn } from "@/components/ui/fade-in";

export function DashboardFivePreservation({
  content,
}: {
  content: PageContent["preservation"];
}) {
  return (
    <section
      id="preservation"
      className="bg-[#f3f8fe] py-16 text-muted-foreground lg:py-24"
    >
      <div className="mx-auto max-w-312 px-6 md:px-8 lg:px-12">
        <FadeIn>
          <span className="mb-6 block text-xs font-bold tracking-widest text-primary uppercase">
            {content.eyebrow}
          </span>
          <h2 className="max-w-3xl text-display text-foreground">
            {content.heading}{" "}
            <span className="text-primary">{content.headingHighlight}</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
            <p className="text-h3 font-semibold text-foreground">
              {content.leadTitle}
            </p>
            <p className="text-body-lg text-muted-foreground">
              {content.leadText}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-primary/15 py-5 text-sm text-muted-foreground sm:gap-6">
            {content.flow.map((step, i) => (
              <span key={`${step}-${i}`} className="contents">
                {i > 0 && (
                  <b aria-hidden="true" className="font-normal text-primary">
                    →
                  </b>
                )}
                <span>{step}</span>
              </span>
            ))}
          </div>
        </FadeIn>

        <ol className="relative mt-14 flex flex-col gap-14">
          <div
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-6 hidden w-px bg-primary/35 sm:block"
          />
          {content.stages.map((stage, i) => (
            <FadeIn
              key={`${stage.no}-${i}`}
              delay={i * 0.08}
              className="grid grid-cols-1 gap-6 sm:grid-cols-[48px_1fr_1fr] sm:gap-9"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-white text-xs text-primary">
                {stage.no}
              </div>
              <div>
                <span className="mb-3.5 block text-[0.68rem] font-bold tracking-widest text-primary uppercase">
                  {stage.kicker}
                </span>
                <h3 className="text-h2 text-foreground">{stage.title}</h3>
                <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                  {stage.description}
                </p>
              </div>
              <div className="flex min-h-56 flex-col justify-between rounded-xl border-y border-primary/15 bg-gradient-to-br from-white to-white/40 px-6 py-5">
                <span className="text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  {stage.resourceLabel}
                </span>

                {stage.variant === "tags" && stage.tags ? (
                  <>
                    <div className="my-3 w-fit border-b border-dashed border-primary/40 pb-1.5 font-sans text-4xl text-foreground">
                      {stage.word}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {stage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-primary/40 px-3 py-1 text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                ) : stage.variant === "orbit" && stage.orbit ? (
                  <div className="mt-3 grid grid-cols-2 items-center gap-3 text-sm text-primary">
                    <span className="row-span-3 border-r border-primary/40 pr-3 font-sans text-4xl text-foreground">
                      {stage.orbit[0]}
                    </span>
                    {stage.orbit.slice(1).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                ) : (
                  <div className="my-3 flex h-11 items-center gap-1" aria-hidden="true">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <span
                        key={i}
                        className="block w-1 rounded bg-primary"
                        style={{ height: `${[35, 70, 100, 55, 85][i % 5]}%` }}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-3 flex items-center justify-between border-t border-primary/15 pt-3.5 text-[0.68rem] text-muted-foreground">
                  {stage.bottom}
                </div>
              </div>
            </FadeIn>
          ))}
        </ol>

        <FadeIn className="mt-16 border-t border-primary/35 pt-11 pl-0 sm:ml-6 sm:pl-15">
          <span className="mb-5 block text-xs font-bold tracking-widest text-primary uppercase">
            {content.initiativesEyebrow}
          </span>
          <h3 className="max-w-2xl text-h1 text-foreground">
            {content.initiativesHeading}
          </h3>
          <p className="mt-5 max-w-2xl text-body-lg text-muted-foreground">
            {content.initiativesText}
          </p>

          <div className="mt-11 grid grid-cols-1 gap-8 border-b border-primary/15 pb-8 sm:grid-cols-2">
            {content.initiatives.map((initiative, i) => (
              <div
                key={`${initiative.name}-${i}`}
                className={
                  i > 0 ? "border-t border-primary/15 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10" : ""
                }
              >
                {initiative.art === "glyph" ? (
                  <div className="mb-6 flex h-20 items-center gap-6 font-sans text-6xl text-primary">
                    अ<span className="text-4xl font-normal">→</span>
                  </div>
                ) : (
                  <svg
                    viewBox="0 0 220 80"
                    fill="none"
                    aria-hidden="true"
                    className="mb-6 block h-20 w-56 max-w-full text-primary"
                  >
                    <path
                      d="M5 72L60 17L91 49L131 5L208 72M38 39L60 48L76 35M109 29L132 42L150 26"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                <span className="block text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  {content.initiativeLabel}
                </span>
                <h4 className="mt-2.5 text-h1 font-bold text-foreground">
                  {initiative.name}
                </h4>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            {content.initiativesFootnote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
