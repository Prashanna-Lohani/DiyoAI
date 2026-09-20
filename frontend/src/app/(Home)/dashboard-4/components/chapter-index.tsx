import { CHAPTERS } from "../data/content";

export function DashboardFourChapterIndex() {
  return (
    <div className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-360 grid-cols-1 divide-y divide-border px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:px-8 lg:px-12">
        {CHAPTERS.map((chapter) => (
          <a
            key={chapter.href}
            href={chapter.href}
            className={
              "group flex items-center gap-5 py-7 transition-colors " +
              (chapter.no === "02" ? "sm:pl-9" : "")
            }
          >
            <span className="text-xs text-primary">{chapter.no}</span>
            <span className="min-w-0 flex-1">
              <strong className="block text-h3 text-foreground">
                {chapter.title}
              </strong>
              <small className="mt-1 block text-sm text-muted-foreground">
                {chapter.subtitle}
              </small>
            </span>
            <span
              aria-hidden="true"
              className="pr-2 text-2xl text-primary transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"
            >
              ↘
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
