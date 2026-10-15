import type { StructureResolver } from "sanity/structure";

const item =
  (S: Parameters<StructureResolver>[0]) => (id: string, title: string) =>
    S.listItem()
      .id(id)
      .title(title)
      .child(S.document().schemaType(id).documentId(id).title(title));

export const SINGLETON_IDS = [
  "siteSettings",
  "hero",
  "pageLayout",
  "milestonesSection",
  "servicesSection",
  "clientsSection",
  "solutionsSection",
  "preservationSection",
  "awardsSection",
  "newsSection",
  "testimonialsSection",
];

export const structure: StructureResolver = (S) => {
  const doc = item(S);
  return S.list()
    .title("Diyo AI website")
    .items([
      doc("siteSettings", "Site settings"),
      S.divider(),
      doc("pageLayout", "Page layout & order"),
      doc("hero", "Hero"),
      S.listItem()
        .title("Homepage sections")
        .child(
          S.list()
            .title("Homepage sections")
            .items([
              doc("milestonesSection", "Milestones"),
              doc("servicesSection", "Language Services"),
              doc("clientsSection", "Clients & Partners"),
              doc("solutionsSection", "Language Solutions"),
              doc("preservationSection", "Language Preservation"),
              doc("awardsSection", "Awards"),
              doc("newsSection", "In the news"),
              doc("testimonialsSection", "Testimonials"),
            ]),
        ),
    ]);
};
