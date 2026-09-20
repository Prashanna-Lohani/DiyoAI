import { DashboardFourLangProvider } from "./lang-context";
import { DashboardFourNavbar } from "./components/navbar";
import { DashboardFourHero } from "./components/hero";
import { DashboardFourChapterIndex } from "./components/chapter-index";
import { DashboardFourLanguageServices } from "./components/language-services";
import { DashboardFourPreservation } from "./components/preservation";
import { DashboardFourFooter } from "./components/footer";

export function DashboardFour() {
  return (
    <DashboardFourLangProvider>
      <DashboardFourNavbar />
      <main className="flex flex-1 flex-col">
        <DashboardFourHero />
        <DashboardFourChapterIndex />
        <DashboardFourLanguageServices />
        <DashboardFourPreservation />
      </main>
      <DashboardFourFooter />
    </DashboardFourLangProvider>
  );
}
