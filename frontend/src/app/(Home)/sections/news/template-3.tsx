import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { NEWS_ARTICLES } from "@/utils/constants";

export function NewsTemplate3() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <FadeIn className="mx-auto max-w-300 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col items-start gap-4 text-left lg:w-1/3">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              In the Press
            </span>
            <h2 className="text-h1 font-normal text-foreground">
              Localizing AI: Diyo.ai in the news
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Breaking barriers, making AI work in local languages and
              contexts — explore how our solutions are tailored for local
              communities and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
            {NEWS_ARTICLES.map((article, index) => (
              <div
                key={`${article.href}-${index}`}
                className="flex flex-col gap-4 rounded-2xl p-5 transition-colors hover:bg-muted/40"
              >
                <div className="flex h-24 items-center justify-center rounded-xl bg-muted/40 p-6">
                  <Image
                    src={article.logo}
                    alt={article.outlet}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="line-clamp-2 text-sm font-medium text-foreground">
                  {article.title}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-auto w-fit gap-1 rounded-full px-4 hover:bg-white"
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
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
