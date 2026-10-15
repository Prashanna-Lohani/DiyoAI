import type { SectionId } from "./types";

/** Sanity singleton document id for each homepage section. */
export const SECTION_DOCS = {
  milestones: "milestonesSection",
  services: "servicesSection",
  clients: "clientsSection",
  solutions: "solutionsSection",
  preservation: "preservationSection",
  awards: "awardsSection",
  news: "newsSection",
  testimonials: "testimonialsSection",
} as const satisfies Record<SectionId, string>;
