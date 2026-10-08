import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";
import { NEWS_ARTICLES } from "@/utils/constants";

const ARTICLES = ["Setopati", "Kantipur"]
  .map((outlet) => NEWS_ARTICLES.find((a) => a.outlet === outlet))
  .filter((a): a is (typeof NEWS_ARTICLES)[number] => Boolean(a));

export function DashboardFiveNews() {
  return (
    <section id="news" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-312 px-6 md:px-8 lg:px-12">
        <FadeIn>
          <span className="mb-4 block text-xs font-bold tracking-widest text-primary uppercase">
            In the news
          </span>
          <h2 className="text-display font-bold text-foreground">
            Diyo in the news
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10 border-t border-border">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[72px_1fr_20px] items-center gap-4 border-b border-border py-5 transition-colors hover:bg-primary/5 sm:grid-cols-[150px_1fr_20px] sm:gap-8 sm:px-3"
            >
              <span className="flex items-center gap-3">
                <Image
                  src={article.logo}
                  alt={article.outlet}
                  className="h-8 w-auto max-w-18 object-contain sm:h-9"
                />
                <span className="hidden text-xs text-primary sm:inline">
                  {article.outlet}
                </span>
              </span>
              <span
                lang="ne"
                className="text-lg text-foreground transition-colors group-hover:text-primary sm:text-xl"
              >
                {article.title}
              </span>
              <span
                aria-hidden="true"
                className="text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
