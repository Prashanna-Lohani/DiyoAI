"use client";

import { useTemplate } from "@/lib/template-context";

import { DashboardFour } from "./dashboard-4";
import { DashboardFive } from "./dashboard-5";
import { Collaborations } from "./sections/collaborations";
import { Hero } from "./sections/hero";
import { Milestones } from "./sections/milestones";
import { News } from "./sections/news";
import { Products } from "./sections/products";
import { Testimonials } from "./sections/testimonials";

export default function Home() {
  const { template } = useTemplate();

  if (template === "4") {
    return <DashboardFour />;
  }

  if (template === "5") {
    return <DashboardFive />;
  }

  return (
    <>
      <Hero />
      <Milestones />
      <Products />
      <Collaborations />
      <News />
      <Testimonials />
    </>
  );
}
