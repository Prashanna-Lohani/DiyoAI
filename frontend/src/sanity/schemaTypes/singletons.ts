import { defineField, defineType } from "sanity";

import { SECTION_IDS } from "@/content/types";

import {
  boolean,
  icon,
  image,
  link,
  number,
  objectList,
  select,
  string,
  stringList,
  text,
} from "./fields";

const group = (name: string, title: string, fields: ReturnType<typeof defineField>[]) =>
  defineField({ name, title, type: "object", fields, options: { collapsible: true, collapsed: false } });

const singleton = (
  name: string,
  title: string,
  fields: ReturnType<typeof defineField>[],
  description?: string,
) =>
  defineType({
    name,
    title,
    type: "document",
    description,
    fields,
    preview: { prepare: () => ({ title }) },
  });

const NOTE =
  "Anything left empty falls back to the built-in default text, so the site never shows a blank section.";

export const siteSettings = singleton(
  "siteSettings",
  "Site settings",
  [
    string("siteTitle", "Site title", { description: "Browser tab and search result title." }),
    text("siteDescription", "Site description", { description: "Used for search engines and link previews." }),
    image("logo", "Logo", { description: "Shown in the header and the footer." }),
    image("favicon", "Favicon"),
    string("primaryColor", "Brand color", { description: "Hex value, e.g. #2473cc. Changes buttons, highlights and accents site-wide." }),
    group("banner", "Top banner", [
      boolean("enabled", "Show banner", { initialValue: true }),
      string("text", "Banner text"),
    ]),
    link("navCta", "Header button"),
    objectList(
      "nav",
      "Header navigation",
      [string("title", "Title"), string("href", "Link")],
      { title: "title", subtitle: "href" },
    ),
    group("contact", "Contact details", [
      string("email", "Email"),
      string("phone", "Phone"),
      string("address", "Address"),
    ]),
    group("footer", "Footer", [
      text("tagline", "Tagline"),
      string("contactHeading", "Contact heading"),
      defineField({
        name: "groups",
        title: "Link columns",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              string("title", "Column title"),
              objectList(
                "links",
                "Links",
                [string("label", "Label"), string("href", "Link")],
                { title: "label", subtitle: "href" },
              ),
            ],
            preview: { select: { title: "title" } },
          },
        ],
      }),
      string("copyright", "Copyright line", { description: "The current year is added automatically." }),
      string("legal", "Legal line"),
    ]),
  ],
  NOTE,
);

export const hero = singleton(
  "hero",
  "Hero",
  [
    string("badge", "Badge text"),
    string("headingPrefix", "English headline: text before highlight"),
    string("headingHighlight", "English headline: highlighted word"),
    string("headingSuffix", "English headline: text after highlight"),
    text("subEn", "English description"),
    string("headingNp", "Nepali headline"),
    text("subNp", "Nepali description"),
    link("primaryCta", "Primary button"),
    link("secondaryCta", "Secondary button"),
    image("backgroundImage", "Background illustration"),
    string("demoTitle", "Voice demo title"),
    number("highlightedStep", "Highlighted demo step", { description: "1 = first step." }),
    objectList(
      "voiceSteps",
      "Voice demo steps",
      [icon(), string("label", "Label"), string("detail", "Detail")],
      { title: "label", subtitle: "detail" },
    ),
  ],
  NOTE,
);

export const pageLayout = singleton(
  "pageLayout",
  "Page layout",
  [
    objectList(
      "sections",
      "Homepage sections",
      [
        select(
          "section",
          "Section",
          SECTION_IDS.map((value) => ({
            value,
            title: value[0].toUpperCase() + value.slice(1),
          })),
        ),
        boolean("visible", "Visible", { initialValue: true }),
      ],
      { title: "section", subtitle: "visible" },
      { description: "Drag to reorder the sections below the hero. Untick Visible to hide one." },
    ),
  ],
);

export const milestonesSection = singleton("milestonesSection", "Milestones", [
  string("heading", "Heading"),
  text("description", "Description"),
  objectList(
    "items",
    "Stats",
    [
      number("value", "Number", { required: true }),
      number("decimals", "Decimal places"),
      string("prefix", "Prefix"),
      string("suffix", "Suffix", { description: "e.g. M+, %, +" }),
      string("label", "Label"),
    ],
    { title: "label", subtitle: "value" },
  ),
], NOTE);

export const servicesSection = singleton("servicesSection", "Language Services", [
  string("heading", "Heading"),
  string("headingHighlight", "Highlighted heading word"),
  text("intro", "Intro"),
  string("panelLabel", "Example panel label"),
  string("panelGlyph", "Example panel glyph"),
  objectList(
    "choices",
    "Services",
    [
      string("title", "Title", { required: true }),
      text("description", "Description"),
      defineField({
        name: "example",
        title: "Live example",
        type: "object",
        fields: [
          string("label", "Label"),
          text("source", "Source text", { rows: 2 }),
          boolean("sourceIsWaveform", "Show a waveform instead of source text"),
          string("sourceLang", "Source language code", { description: "en, ne …" }),
          text("output", "Output text", { rows: 2 }),
          boolean("outputIsWaveform", "Show a waveform instead of output text"),
          string("romanLabel", "Romanization label"),
          string("roman", "Romanization"),
          string("caption", "Caption"),
        ],
      }),
    ],
    { title: "title", subtitle: "description" },
  ),
  group("access", "Platform & API panel", [
    string("eyebrow", "Eyebrow"),
    string("title", "Title"),
    text("intro", "Intro"),
    string("platformTitle", "Platform title"),
    text("platformText", "Platform text"),
    string("apiTitle", "API title"),
    text("apiText", "API text"),
  ]),
], NOTE);

const logoList = (name: string, title: string) =>
  objectList(
    name,
    title,
    [string("name", "Name", { required: true }), image("logo", "Logo")],
    { title: "name", media: "logo" },
  );

export const clientsSection = singleton("clientsSection", "Clients & Partners", [
  string("eyebrow", "Eyebrow"),
  string("heading", "Heading"),
  string("clientsTitle", "Clients row title"),
  logoList("clients", "Clients"),
  string("partnersTitle", "Partners row title"),
  logoList("partners", "Partners"),
], NOTE);

export const solutionsSection = singleton("solutionsSection", "Language Solutions", [
  string("eyebrow", "Eyebrow"),
  string("heading", "Heading"),
  string("subheading", "Subheading"),
  text("intro", "Intro"),
  objectList(
    "overview",
    "Overview cards",
    [
      string("title", "Title"),
      string("subtitle", "Subtitle"),
      string("href", "Link"),
      icon(),
    ],
    { title: "title", subtitle: "subtitle" },
  ),
  group("conversational", "Conversational AI", [
    string("eyebrow", "Eyebrow"),
    string("heading", "Heading"),
    text("text", "Text"),
    string("chatLabel", "Chat tab label"),
    text("chatDetail", "Chat tab description"),
    string("chatUserMessage", "Chat: user message"),
    string("chatBotMessage", "Chat: bot reply"),
    string("chatHint", "Chat: hint"),
    string("voiceLabel", "Voice tab label"),
    text("voiceDetail", "Voice tab description"),
    string("voiceTranscript", "Voice: transcript"),
    string("voiceHint", "Voice: hint"),
    string("voiceEyebrow", "Voice AI eyebrow"),
    string("voiceTitle", "Voice AI title"),
    text("voiceText", "Voice AI text"),
  ]),
  group("agents", "AI Agents", [
    string("eyebrow", "Eyebrow"),
    string("heading", "Heading"),
    string("subheading", "Subheading"),
    text("text", "Text"),
    link("cta", "Button"),
    string("flowLabel", "Flow label"),
    objectList(
      "flow",
      "Flow steps",
      [
        string("title", "Title"),
        string("detail", "Detail", { description: "Separate chips with ' · '." }),
        boolean("emphasis", "Highlight this step"),
        icon(),
      ],
      { title: "title", subtitle: "detail" },
    ),
  ]),
  group("calling", "AI Calling Assistants", [
    string("eyebrow", "Eyebrow"),
    string("heading", "Heading"),
    string("badge", "Badge"),
    text("text", "Text"),
    string("cardTitle", "Call card title"),
    string("cardSubtitle", "Call card subtitle"),
    stringList("steps", "Call steps"),
  ]),
  group("cases", "Solutions in action", [
    string("eyebrow", "Eyebrow"),
    text("heading", "Heading", { description: "Press Enter for a line break.", rows: 2 }),
    text("text", "Text"),
    objectList(
      "items",
      "Products",
      [
        string("name", "Name", { required: true }),
        text("description", "Description"),
        string("linkLabel", "Link label"),
        string("href", "Link"),
      ],
      { title: "name", subtitle: "description" },
    ),
  ]),
], NOTE);

export const preservationSection = singleton("preservationSection", "Language Preservation", [
  string("eyebrow", "Eyebrow"),
  string("heading", "Heading"),
  string("headingHighlight", "Highlighted heading word"),
  string("leadTitle", "Lead title"),
  text("leadText", "Lead text"),
  stringList("flow", "Process flow", { description: "Words joined by arrows." }),
  objectList(
    "stages",
    "Stages",
    [
      string("kicker", "Kicker"),
      string("title", "Title", { required: true }),
      text("description", "Description"),
      string("resourceLabel", "Card label"),
      string("bottom", "Card footer"),
      select(
        "variant",
        "Card illustration",
        [
          { title: "Sound waveform", value: "waveform" },
          { title: "Word with tags", value: "tags" },
          { title: "Word with orbit list", value: "orbit" },
        ],
        { initialValue: "waveform" },
      ),
      string("word", "Word (tags style)"),
      stringList("tags", "Tags (tags style)"),
      stringList("orbit", "Items (orbit style)", { description: "First item is the large word." }),
    ],
    { title: "title", subtitle: "kicker" },
  ),
  string("initiativesEyebrow", "Initiatives eyebrow"),
  string("initiativesHeading", "Initiatives heading"),
  text("initiativesText", "Initiatives text"),
  string("initiativeLabel", "Initiative card label"),
  objectList(
    "initiatives",
    "Initiatives",
    [
      string("name", "Name", { required: true }),
      select(
        "art",
        "Artwork",
        [
          { title: "Letter glyph", value: "glyph" },
          { title: "Mountains", value: "mountains" },
        ],
        { initialValue: "glyph" },
      ),
    ],
    { title: "name", subtitle: "art" },
  ),
  string("initiativesFootnote", "Footnote"),
], NOTE);

export const awardsSection = singleton("awardsSection", "Awards", [
  string("heading", "Heading"),
  objectList(
    "items",
    "Awards",
    [string("name", "Award", { required: true }), string("note", "Note")],
    { title: "name", subtitle: "note" },
  ),
], NOTE);

export const newsSection = singleton("newsSection", "In the news", [
  string("eyebrow", "Eyebrow"),
  string("heading", "Heading"),
  objectList(
    "items",
    "Articles",
    [
      string("outlet", "Outlet", { required: true }),
      string("title", "Headline", { required: true }),
      string("href", "Article URL", { required: true }),
      image("logo", "Outlet logo"),
    ],
    { title: "title", subtitle: "outlet", media: "logo" },
  ),
], NOTE);

export const testimonialsSection = singleton("testimonialsSection", "Testimonials", [
  string("eyebrow", "Eyebrow"),
  string("heading", "Heading"),
  string("footnote", "Footnote"),
  objectList(
    "items",
    "Testimonials",
    [
      text("quote", "Quote", { required: true }),
      string("name", "Name", { required: true }),
      string("role", "Role & organisation"),
      image("photo", "Photo"),
    ],
    { title: "name", subtitle: "quote", media: "photo" },
  ),
], NOTE);

export const SINGLETON_TYPES = [
  siteSettings,
  hero,
  pageLayout,
  milestonesSection,
  servicesSection,
  clientsSection,
  solutionsSection,
  preservationSection,
  awardsSection,
  newsSection,
  testimonialsSection,
];
