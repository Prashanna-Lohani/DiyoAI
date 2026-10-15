import { getSiteContent } from "@/content";

import { DashboardFive } from "./landing";

export default async function Home() {
  const content = await getSiteContent();
  return <DashboardFive content={content} />;
}
