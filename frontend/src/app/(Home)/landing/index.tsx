import type { CSSProperties } from "react";

import type { SectionId, SiteContent } from "@/content";

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

export function DashboardFive({ content }: { content: SiteContent }) {
  const { settings, hero, page } = content;

  const sections: Record<SectionId, () => React.ReactNode> = {
    milestones: () => <DashboardFiveMilestones content={page.milestones} />,
    services: () => <DashboardFiveLanguageServices content={page.services} />,
    clients: () => <DashboardFiveClients content={page.clients} />,
    solutions: () => (
      <DashboardFiveLanguageSolutions content={page.solutions} />
    ),
    preservation: () => <DashboardFivePreservation content={page.preservation} />,
    awards: () => <DashboardFiveAwards content={page.awards} />,
    news: () => <DashboardFiveNews content={page.news} />,
    testimonials: () => <DashboardFiveTestimonials content={page.testimonials} />,
  };

  return (
    <DashboardFiveLangProvider>
      <MotionRoot>
      <div
        className="flex flex-1 flex-col font-normal [&_h2]:font-normal [&_h3]:font-normal [&_h4]:font-normal"
        style={
          {
            "--primary": settings.primaryColor,
            "--primary-foreground": "#ffffff",
          } as CSSProperties
        }
      >
        {settings.banner.enabled && settings.banner.text && (
          <DashboardFiveBanner text={settings.banner.text} />
        )}
        <DashboardFiveNavbar
          logo={settings.logo}
          nav={settings.nav}
          cta={settings.navCta}
        />
        <main className="flex flex-1 flex-col">
          <DashboardFiveHero content={hero} />
          {page.layout
            .filter((item) => item.visible)
            .map((item) => (
              <div key={item.section} className="contents">
                {sections[item.section]?.()}
              </div>
            ))}
        </main>
        <DashboardFiveFooter settings={settings} />
      </div>
      </MotionRoot>
    </DashboardFiveLangProvider>
  );
}
