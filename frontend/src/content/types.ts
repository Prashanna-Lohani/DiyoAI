export type ImageSource = {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export type Link = { label: string; href: string };

export type IconName =
  | "message"
  | "cpu"
  | "layout"
  | "phone"
  | "globe"
  | "flag"
  | "mic"
  | "file"
  | "volume"
  | "briefcase"
  | "users"
  | "shield";

export const SECTION_IDS = [
  "milestones",
  "services",
  "clients",
  "solutions",
  "preservation",
  "awards",
  "news",
  "testimonials",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export type SiteSettings = {
  siteTitle: string;
  siteDescription: string;
  logo: ImageSource;
  favicon?: ImageSource;
  primaryColor: string;
  banner: { enabled: boolean; text: string };
  navCta: Link;
  nav: { title: string; href: string }[];
  contact: { email: string; phone: string; address: string };
  footer: {
    tagline: string;
    contactHeading: string;
    groups: { title: string; links: Link[] }[];
    copyright: string;
    legal: string;
  };
};

export type Hero = {
  badge: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  subEn: string;
  headingNp: string;
  subNp: string;
  primaryCta: Link;
  secondaryCta: Link;
  demoTitle: string;
  highlightedStep: number;
  voiceSteps: { icon: IconName; label: string; detail: string }[];
  backgroundImage: ImageSource;
};

export type PageContent = {
  layout: { section: SectionId; visible: boolean }[];
  milestones: {
    heading: string;
    description: string;
    items: {
      value: number;
      decimals?: number;
      prefix?: string;
      suffix?: string;
      label: string;
    }[];
  };
  services: {
    heading: string;
    headingHighlight: string;
    intro: string;
    panelLabel: string;
    panelGlyph: string;
    choices: {
      id: string;
      no: string;
      title: string;
      description: string;
      example: {
        label: string;
        source: string;
        sourceLang: string;
        output: string;
        romanLabel?: string;
        roman?: string;
        caption: string;
      };
    }[];
    access: {
      eyebrow: string;
      title: string;
      intro: string;
      platformTitle: string;
      platformText: string;
      apiTitle: string;
      apiText: string;
    };
  };
  clients: {
    eyebrow: string;
    heading: string;
    clientsTitle: string;
    partnersTitle: string;
    clients: { name: string; logo: ImageSource }[];
    partners: { name: string; logo: ImageSource }[];
  };
  solutions: {
    eyebrow: string;
    heading: string;
    subheading: string;
    intro: string;
    overview: { title: string; subtitle: string; href: string; icon: IconName }[];
    conversational: {
      eyebrow: string;
      heading: string;
      text: string;
      chatLabel: string;
      chatDetail: string;
      chatUserMessage: string;
      chatBotMessage: string;
      chatHint: string;
      voiceLabel: string;
      voiceDetail: string;
      voiceTranscript: string;
      voiceHint: string;
      voiceTitle: string;
      voiceEyebrow: string;
      voiceText: string;
    };
    agents: {
      eyebrow: string;
      heading: string;
      subheading: string;
      text: string;
      cta: Link;
      flowLabel: string;
      flow: { title: string; detail: string; emphasis: boolean; icon: IconName }[];
    };
    calling: {
      eyebrow: string;
      heading: string;
      badge: string;
      text: string;
      cardTitle: string;
      cardSubtitle: string;
      steps: string[];
    };
    cases: {
      eyebrow: string;
      heading: string;
      text: string;
      items: { name: string; description: string; linkLabel: string; href: string }[];
    };
  };
  preservation: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    leadTitle: string;
    leadText: string;
    flow: string[];
    stages: {
      no: string;
      kicker: string;
      title: string;
      description: string;
      resourceLabel: string;
      bottom: string;
      variant: "waveform" | "tags" | "orbit";
      word?: string;
      tags?: string[];
      orbit?: string[];
    }[];
    initiativesEyebrow: string;
    initiativesHeading: string;
    initiativesText: string;
    initiativeLabel: string;
    initiatives: { name: string; art: "glyph" | "mountains" }[];
    initiativesFootnote: string;
  };
  awards: {
    heading: string;
    items: { name: string; note: string }[];
  };
  news: {
    eyebrow: string;
    heading: string;
    items: { outlet: string; title: string; href: string; logo: ImageSource }[];
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    footnote: string;
    items: { quote: string; name: string; role: string; photo: ImageSource }[];
  };
};

export type SiteContent = {
  settings: SiteSettings;
  hero: Hero;
  page: PageContent;
};
