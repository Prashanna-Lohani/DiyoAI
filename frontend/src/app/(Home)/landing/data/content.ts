export const NAV_LINKS = [
  { href: "#services", title: "Services" },
  { href: "#clients", title: "Clients" },
  { href: "#language-solutions", title: "Solutions" },
  { href: "#partners", title: "Partners" },
  { href: "#preservation", title: "Preservation" },
] as const;

export const BANNER_TEXT =
  "Design mockup · Diyo AI homepage concept · for review & feedback";

export const CONTACT = {
  email: "info@diyo.ai",
  phone: "+977 9851362842",
  address: "Jwagal, Lalitpur",
} as const;

export const CLIENTS = ["Helmets Nepal", "TATA", "Yeti Airlines", "Herveda Botanicals"] as const;
export const PARTNERS = [
  "United Nations Development Programme",
  "Butwal Sub-Metropolitan City",
  "Lalitpur Metropolitan City",
  "Nepal Tourism Board",
] as const;

export const SOLUTIONS_OVERVIEW = [
  {
    href: "#conversational-ai",
    title: "Conversational AI",
    subtitle: "Conversations through text and voice",
  },
  {
    href: "#ai-agents",
    title: "AI Agents",
    subtitle: "Assistance built around your knowledge",
  },
  {
    href: "#ai-agents",
    title: "Agent Studio",
    subtitle: "Build your own website assistant",
  },
  {
    href: "#ai-calling",
    title: "AI Calling Assistants",
    subtitle: "Structured voice and calling interactions",
  },
] as const;

export const AGENT_FLOW = [
  { title: "Your knowledge", detail: "Websites · Documents · FAQs", emphasis: false },
  { title: "AI Agent", detail: "Answers grounded in your sources", emphasis: true },
  { title: "Conversation", detail: "Customer questions on your website", emphasis: false },
  { title: "A meaningful next step", detail: "An answer · A lead · A human handoff", emphasis: false },
] as const;

export const CALL_STORY = [
  "Understand the enquiry",
  "Share information or collect details",
  "Follow up or involve a person",
] as const;

export const CASE_STUDIES = [
  {
    id: "golu",
    theme: "light",
    tag: "Conversational AI / Community engagement",
    name: "Golu",
    motif: ["नमस्ते", "→", "Hello"],
    heading: "From crisis communication to everyday conversational AI",
    description:
      "From crisis support and reliable information during pandemic to daily news, fun and assistance - all in Nepali",
    image: "golu",
    linkLabel: "Explore Golu",
    href: "https://www.diyo.ai/golu",
  },
  {
    id: "muna",
    theme: "dark",
    tag: "Public services / Government accessibility",
    name: "Muna",
    motif: ["Citizens", "→", "Information"],
    heading: "AI for accessible public services",
    description:
      "AI for accessible public service",
    image: "muna",
    linkLabel: "Explore Muna",
    href: "https://www.diyo.ai/muna",
  },
  {
    id: "juna",
    theme: "tint",
    tag: "Health information / Reproductive health",
    name: "Juna",
    motif: ["Questions", "→", "Understanding"],
    heading: "AI for accessible health information",
    description:
      "AI for accessible health information",
    linkLabel: "Explore Juna",
    href: "https://safeabortion.diyo.ai",
  },
] as const;

export const FOOTER_GROUPS = [
  {
    title: "Language Services",
    links: [
      { label: "Translation", href: "#services" },
      { label: "Text to Speech", href: "#services" },
      { label: "Speech to Text", href: "#services" },
      { label: "Subtitling", href: "#services" },
      { label: "Platform", href: "#services" },
      { label: "API", href: "#services" },
    ],
  },
  {
    title: "Language Solutions",
    links: [
      { label: "Conversational AI", href: "#conversational-ai" },
      { label: "AI Agents", href: "#ai-agents" },
      { label: "Agent Studio", href: "#ai-agents" },
      { label: "AI Calling Assistants", href: "#ai-calling" },
    ],
  },
  {
    title: "Language Preservation",
    links: [
      { label: "Language Data Collection", href: "#preservation" },
      { label: "Language Annotation", href: "#preservation" },
      { label: "Language Revitalization", href: "#preservation" },
      { label: "NepSwor", href: "#preservation" },
      { label: "YetiVoices", href: "#preservation" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "APIs", href: "#services" },
      { label: "Documentation", href: "#services" },
      { label: "SDKs", href: "#services" },
      { label: "Integrations", href: "#services" },
    ],
  },
] as const;
