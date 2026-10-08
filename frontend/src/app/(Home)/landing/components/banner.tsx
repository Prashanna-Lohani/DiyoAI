import { BANNER_TEXT } from "../data/content";

export function DashboardFiveBanner() {
  return (
    <div className="bg-primary px-4 py-2 text-center text-xs font-bold text-primary-foreground">
      {BANNER_TEXT}
    </div>
  );
}
