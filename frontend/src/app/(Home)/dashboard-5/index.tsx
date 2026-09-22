import { DashboardFourLangProvider } from "../dashboard-4/lang-context";
import { DashboardFourHero } from "../dashboard-4/components/hero";
import { DashboardFourLanguageServices } from "../dashboard-4/components/language-services";
import { DashboardFourPreservation } from "../dashboard-4/components/preservation";
import { DashboardFiveNavbar } from "./components/navbar";
import { DashboardFiveChapterIndex } from "./components/chapter-index";
import { DashboardFiveLanguageSolutions } from "./components/language-solutions";
import { DashboardFiveFooter } from "./components/footer";

export function DashboardFive() {
  return (
    <DashboardFourLangProvider>
      <DashboardFiveNavbar />
      <main className="flex flex-1 flex-col">
        <DashboardFourHero />
        <DashboardFiveChapterIndex />
        <DashboardFiveLanguageSolutions />
        <DashboardFourLanguageServices />
        <DashboardFourPreservation />
      </main>
      <DashboardFiveFooter />
    </DashboardFourLangProvider>
  );
}
