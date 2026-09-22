export const CHAPTERS = [
  {
    href: "#language-solutions",
    title: "Language Solutions",
    subtitle: "AI for real-world interactions",
  },
  {
    href: "#services",
    title: "Language Services",
    subtitle: "Connect through language",
  },
  {
    href: "#preservation",
    title: "Language Preservation",
    subtitle: "Build resources for the future",
  },
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
      "From sharing information during COVID-19 to everyday Nepali conversations, Golu reflects Diyo's evolving work in locally relevant digital engagement.",
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
      "Muna makes government information easier to reach through conversation. Around-the-clock access helps citizens find public-service information in a more approachable, local-language experience.",
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
      "A conversational approach to reproductive-health education and local-language information access, with an emphasis on sensitive questions and respectful communication.",
    note: "Application focus: accessible health education",
  },
] as const;

export const FOOTER_GROUPS = [
  {
    title: "Language Solutions",
    links: [
      { label: "Conversational AI", href: "#conversational-ai" },
      { label: "AI Agents", href: "#ai-agents" },
      { label: "AI Calling Assistants", href: "#ai-calling" },
    ],
  },
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
