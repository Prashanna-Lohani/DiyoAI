import type { CSSProperties } from "react";

import { DashboardFiveLangProvider } from "./lang-context";
import { DashboardFiveHero } from "./components/hero";
import { DashboardFiveNavbar } from "./components/navbar";
import { DashboardFiveLanguageSolutions } from "./components/language-solutions";
import { DashboardFiveLanguageServices } from "./components/language-services";
import { DashboardFivePreservation } from "./components/preservation";
import { DashboardFiveMilestones } from "./components/milestones";
import { DashboardFiveAwards } from "./components/awards";
import { DashboardFiveTestimonials } from "./components/testimonials";
import { DashboardFiveNews } from "./components/news";
import { DashboardFiveBanner } from "./components/banner";
import { DashboardFiveClients } from "./components/clients";
import { MotionRoot } from "./components/motion-root";
import { DashboardFiveFooter } from "./components/footer";

export function DashboardFive() {
  return (
    <DashboardFiveLangProvider>
      <MotionRoot>
      <div
        className="flex flex-1 flex-col font-normal [&_h2]:font-normal [&_h3]:font-normal [&_h4]:font-normal"
        style={
          {
            "--primary": "#2473cc",
            "--primary-foreground": "#ffffff",
          } as CSSProperties
        }
      >
        <DashboardFiveBanner />
        <DashboardFiveNavbar />
        <main className="flex flex-1 flex-col">
          <DashboardFiveHero />
          <DashboardFiveMilestones />
          <DashboardFiveLanguageServices />
          <DashboardFiveClients />
          <DashboardFiveLanguageSolutions />
          <DashboardFivePreservation />
          <DashboardFiveAwards />
          <DashboardFiveNews />
          <DashboardFiveTestimonials />
        </main>
        <DashboardFiveFooter />
      </div>
      </MotionRoot>
    </DashboardFiveLangProvider>
  );
}
