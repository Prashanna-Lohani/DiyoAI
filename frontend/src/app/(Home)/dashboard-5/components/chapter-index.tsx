import { CHAPTERS } from "../data/content";

export function DashboardFiveChapterIndex() {
  return (
    <nav aria-label="Explore Diyo" className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-360 grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8 lg:px-12">
        {CHAPTERS.map((chapter) => (
          <a
            key={chapter.href}
            href={chapter.href}
            className="group flex items-center gap-4 py-7 pl-0 transition-colors duration-200 first:pl-0 hover:bg-primary/5 sm:px-7 sm:first:pl-0"
          >
            <span className="min-w-0 flex-1">
              <strong className="block text-h3 text-foreground transition-colors duration-200 group-hover:text-primary">
                {chapter.title}
              </strong>
              <small className="mt-1 block text-sm text-muted-foreground">
                {chapter.subtitle}
              </small>
            </span>
            <span
              aria-hidden="true"
              className="pr-1 text-xl text-primary transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
