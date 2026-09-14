import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { NEWS_ARTICLES } from "@/utils/constants";

export function NewsTemplate2() {
  return (
    <section className="bg-primary/5 py-16 lg:py-24">
      <FadeIn className="mx-auto max-w-300 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
            In the Press
          </span>
          <h2 className="text-h1 text-foreground">
            Localizing AI: Diyo.ai in the News
          </h2>
          <p className="max-w-2xl text-body-lg text-muted-foreground">
            Breaking barriers, making AI work in local languages and contexts
            — explore how our solutions are tailored for local communities
            and businesses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS_ARTICLES.map((article, index) => (
            <div
              key={`${article.href}-${index}`}
              className="flex flex-col overflow-hidden rounded-3xl border-2 border-foreground/5 bg-white shadow-md"
            >
              <div className="flex h-24 items-center justify-center bg-muted/60 p-6">
                <Image
                  src={article.logo}
                  alt={article.outlet}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="line-clamp-3 text-sm font-semibold text-foreground">
                  {article.title}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-auto w-fit gap-1 rounded-full px-4"
                  render={
                    <Link
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Read more
                  <FiArrowRight size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
