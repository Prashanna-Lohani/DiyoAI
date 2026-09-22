import type { CSSProperties } from "react";

import { DashboardFiveLangProvider } from "./lang-context";
import { DashboardFiveHero } from "./components/hero";
import { DashboardFiveNavbar } from "./components/navbar";
import { DashboardFiveChapterIndex } from "./components/chapter-index";
import { DashboardFiveLanguageSolutions } from "./components/language-solutions";
import { DashboardFiveLanguageServices } from "./components/language-services";
import { DashboardFivePreservation } from "./components/preservation";
import { DashboardFiveFooter } from "./components/footer";

export function DashboardFive() {
  return (
    <DashboardFiveLangProvider>
      <div
        className="flex flex-1 flex-col font-normal [&_h1]:font-normal [&_h2]:font-normal [&_h3]:font-normal [&_h4]:font-normal"
        style={
          {
            "--primary": "#1e7ede",
            "--primary-foreground": "#ffffff",
          } as CSSProperties
        }
      >
        <DashboardFiveNavbar />
        <main className="flex flex-1 flex-col">
          <DashboardFiveHero />
          <DashboardFiveChapterIndex />
          <DashboardFiveLanguageSolutions />
          <DashboardFiveLanguageServices />
          <DashboardFivePreservation />
        </main>
        <DashboardFiveFooter />
      </div>
    </DashboardFiveLangProvider>
  );
}
