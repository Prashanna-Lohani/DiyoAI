import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { NEWS_ARTICLES } from "@/utils/constants";

export function NewsTemplate3() {
  return (
    <section className="border-b-2 border-foreground bg-background">
      <FadeIn className="mx-auto max-w-300 border-x-2 border-foreground px-6 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
          <div className="flex flex-col items-start gap-4 border-2 border-r-0 border-foreground p-8 text-left lg:w-1/3">
            <span className="text-xs font-bold tracking-widest text-foreground uppercase">
              In the Press
            </span>
            <h2 className="text-h1 text-foreground">
              Localizing AI: Diyo.ai in the News
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Breaking barriers, making AI work in local languages and
              contexts — explore how our solutions are tailored for local
              communities and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y-2 divide-foreground border-2 border-foreground sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0 lg:w-2/3">
            {NEWS_ARTICLES.map((article, index) => (
              <div
                key={`${article.href}-${index}`}
                className="flex flex-col"
              >
                <div className="flex h-28 items-center justify-center border-b-2 border-foreground p-6">
                  <Image
                    src={article.logo}
                    alt={article.outlet}
                    className="h-full w-full object-contain grayscale"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <p className="line-clamp-2 text-sm font-semibold text-foreground">
                    {article.title}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-auto w-fit gap-1 rounded-none border-2 border-foreground px-4"
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
        </div>
      </FadeIn>
    </section>
  );
}
