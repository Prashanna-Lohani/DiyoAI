import DiyoLogo from "@/assets/images/Diyo-Brand.png";
import FrancoisPhoto from "@/assets/images/sunyfrancois1.png";
import KantipurLogo from "@/assets/images/kantipur.png";
import MetroLogo from "@/assets/images/metro.png";
import NtbLogo from "@/assets/images/ntb.png";
import RoshanPhoto from "@/assets/images/roshan.jpg";
import SetopatiLogo from "@/assets/images/setopati.png";
import SwopnilPhoto from "@/assets/images/swopnil.jpg";
import TataLogo from "@/assets/images/tata.png";
import TemplesImage from "@/assets/images/Temples.png";
import UndpLogo from "@/assets/images/undp.png";
import YetiLogo from "@/assets/images/yeti.png";

import type { SiteContent } from "./types";

// Shown whenever a document (or a field) has not been filled in Sanity yet,
// so the site always renders. `pnpm sanity:seed` copies these into the Studio.

export const DEFAULT_CONTENT: SiteContent = {
  settings: {
    siteTitle: "Diyo AI",
    siteDescription:
      "Leading in Speech and Language AI for low-resource settings: conversational AI, speech technology and language solutions built for Nepali and the languages of Nepal.",
    logo: DiyoLogo,
    primaryColor: "#2473cc",
    banner: {
      enabled: true,
      text: "Design mockup · Diyo AI homepage concept · for review & feedback",
    },
    navCta: { label: "Contact us", href: "#cta" },
    nav: [
      { href: "#services", title: "Services" },
      { href: "#clients", title: "Clients" },
      { href: "#language-solutions", title: "Solutions" },
      { href: "#partners", title: "Partners" },
      { href: "#preservation", title: "Preservation" },
    ],
    contact: {
      email: "info@diyo.ai",
      phone: "+977 9851362842",
      address: "Jwagal, Lalitpur",
    },
    footer: {
      tagline:
        "Leading in Speech and Language AI for low-resource settings: building AI for the languages of Nepal and beyond.",
      contactHeading: "Start a conversation",
      groups: [
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
      ],
      copyright: "Diyo AI · Kathmandu, Nepal",
      legal: "Privacy · Terms · Security & Responsible AI",
    },
  },

  hero: {
    badge: "Speech & Language AI for Nepal",
    headingPrefix: "AI that understands your",
    headingHighlight: "Language",
    headingSuffix: ".",
    subEn:
      "Leading in Speech and Language AI for low-resource settings: conversational AI, speech technology and language solutions built for Nepali and the languages of Nepal.",
    headingNp: "तपाईंको भाषा बोल्ने AI।",
    subNp:
      "कम-स्रोत भाषाहरूका लागि स्पीच र भाषा AI मा अग्रणी: नेपाली र नेपालका भाषाहरूका लागि बनाइएको संवादात्मक AI, स्पीच प्रविधि र भाषा समाधानहरू।",
    primaryCta: { label: "Explore Solutions", href: "#services" },
    secondaryCta: { label: "Talk to Diyo", href: "#demo" },
    demoTitle: "Try Voice AI: Nepali",
    highlightedStep: 4,
    voiceSteps: [
      { icon: "mic", label: "Speech", detail: "“नमस्ते, मलाई सहयोग चाहियो”" },
      { icon: "file", label: "Transcription", detail: "Nepali speech → text" },
      { icon: "cpu", label: "AI Understanding", detail: "intent + knowledge base" },
      { icon: "message", label: "Response", detail: "“अवश्य, म सहयोग गर्छु…”" },
      { icon: "volume", label: "Natural Voice", detail: "text → Nepali speech" },
    ],
    backgroundImage: TemplesImage,
  },

  page: {
    layout: [
      { section: "milestones", visible: true },
      { section: "services", visible: true },
      { section: "clients", visible: true },
      { section: "solutions", visible: true },
      { section: "preservation", visible: true },
      { section: "awards", visible: true },
      { section: "news", visible: true },
      { section: "testimonials", visible: true },
    ],

    milestones: {
      heading: "Diyo's Milestones at a Glance",
      description:
        "Our achievements and growth metrics showcase our impact in the AI and language technology landscape.",
      items: [
        { value: 3.5, decimals: 1, suffix: "M+", label: "Parallel Corpus" },
        { value: 12, suffix: "+", label: "LLMs Evaluated" },
        { value: 10, suffix: "+", label: "Multilingual Chatbots" },
        { value: 173, suffix: "+", label: "Hours of Speech Data" },
        { value: 15, suffix: "%", label: "Translation Improvement" },
      ],
    },

    services: {
      heading: "Language",
      headingHighlight: "Services",
      intro:
        "Across languages, across formats. Translate, transcribe, subtitle and give text a voice, built around the way people communicate.",
      panelLabel: "Language in motion",
      panelGlyph: "अ → A",
      choices: [
        {
          id: "translation",
          no: "01",
          title: "Translation",
          description:
            "Bring meaning across languages with translation and localization.",
          example: {
            label: "English → Nepali",
            source: "My country is dearer to me than life itself",
            sourceLang: "en",
            output: "मेरो देश मलाई प्राणभन्दा प्यारो छ।",
            romanLabel: "Romanized Nepali",
            roman: "Mero Desh Malai Pran Vanda Pyaro Cha",
            caption: "The same meaning, in another language",
          },
        },
        {
          id: "speech",
          no: "02",
          title: "Text to Speech",
          description: "Turn written text into natural Nepali speech.",
          example: {
            label: "Written text → Spoken voice",
            source:
              "भगवान पशुपतिनाथले विश्वको कल्याण गरुन्। यो विश्व बुद्धले देखाएको बाटोमा हिँड्न सकोस्।",
            sourceLang: "ne",
            output: "wave",
            caption: "Written words become a spoken response",
          },
        },
        {
          id: "text",
          no: "03",
          title: "Speech to Text",
          description:
            "Convert spoken Nepali into text for transcription and digital use.",
          example: {
            label: "Spoken voice → Written text",
            source: "wave",
            sourceLang: "ne",
            output: "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी।",
            caption: "Speech becomes a readable transcript",
          },
        },
        {
          id: "subtitles",
          no: "04",
          title: "Subtitling",
          description: "Connect spoken content with readable, timed subtitles.",
          example: {
            label: "Spoken content → Timed subtitles",
            source: "00:01 → 00:03",
            sourceLang: "en",
            output: "नमस्ते",
            caption: "Words aligned with the moment they are spoken",
          },
        },
      ],
      access: {
        eyebrow: "Access language technology",
        title: "Choose how you work",
        intro:
          "Use the Platform directly or connect language capabilities to your own applications through the API.",
        platformTitle: "Platform",
        platformText:
          "Work with Diyo.ai's language capabilities through the Diyo.ai Platform.",
        apiTitle: "API",
        apiText:
          "Use Diyo.ai's language technology programmatically through an API.",
      },
    },

    clients: {
      eyebrow: "Working together",
      heading: "Clients & collaborators",
      clientsTitle: "Clients",
      partnersTitle: "Partners & collaboration",
      clients: [
        { name: "TATA", logo: TataLogo },
        { name: "Yeti Airlines", logo: YetiLogo },
      ],
      partners: [
        { name: "United Nations Development Programme", logo: UndpLogo },
        { name: "Butwal Sub-Metropolitan City", logo: MetroLogo },
        { name: "Lalitpur Metropolitan City", logo: MetroLogo },
        { name: "Nepal Tourism Board", logo: NtbLogo },
      ],
    },

    solutions: {
      eyebrow: "AI for real world interaction",
      heading: "Language Solutions",
      subheading: "Diyo Solutions and Products",
      intro:
        "Language, speech and organizational knowledge come together in localized conversations, agents and calling experiences.",
      overview: [
        {
          href: "#conversational-ai",
          title: "Conversational AI",
          subtitle: "Conversations through text and voice",
          icon: "message",
        },
        {
          href: "#ai-agents",
          title: "AI Agents",
          subtitle: "Assistance built around your knowledge",
          icon: "cpu",
        },
        {
          href: "#ai-agents",
          title: "Agent Studio",
          subtitle: "Build your own website assistant",
          icon: "layout",
        },
        {
          href: "#ai-calling",
          title: "AI Calling Assistants",
          subtitle: "Structured voice and calling interactions",
          icon: "phone",
        },
      ],
      conversational: {
        eyebrow: "Text & voice",
        heading: "Conversational AI",
        text: "Help people ask questions and access information in the languages they use. Chatbots and voice bots are two ways into the same conversation.",
        chatLabel: "Chatbots",
        chatDetail:
          "Text conversations for customer support, citizen information and everyday digital services.",
        chatUserMessage: "नमस्ते, मलाई सहयोग चाहियो",
        chatBotMessage: "अवश्य, म सहयोग गर्छु। तपाईंलाई के जानकारी चाहिएको हो?",
        chatHint: "Typing in Nepali, English and more",
        voiceLabel: "Voice Bots",
        voiceDetail:
          "Spoken conversations that let people ask questions and interact naturally through speech.",
        voiceTranscript: "“नमस्ते, मलाई सहयोग चाहियो”",
        voiceHint: "Replies back in natural Nepali speech",
        voiceEyebrow: "The voice capability within Conversational AI",
        voiceTitle: "Voice AI",
        voiceText:
          "Speech-based interaction brings local-language conversations to voice-enabled experiences.",
      },
      agents: {
        eyebrow: "Your knowledge in conversation",
        heading: "AI Agents",
        subheading: "Build with Diyo Agent Studio",
        text: "Create a website assistant using your website, documents and FAQs. Answer questions around the clock, capture leads and hand conversations to your team when needed.",
        cta: {
          label: "Explore Diyo Agent Studio",
          href: "https://agentstudio.diyo.ai/",
        },
        flowLabel: "From your knowledge to a useful interaction",
        flow: [
          { title: "Your knowledge", detail: "Websites · Documents · FAQs", emphasis: false, icon: "globe" },
          { title: "AI Agent", detail: "Answers grounded in your sources", emphasis: true, icon: "cpu" },
          { title: "Conversation", detail: "Customer questions on your website", emphasis: false, icon: "message" },
          { title: "A meaningful next step", detail: "An answer · A lead · A human handoff", emphasis: false, icon: "flag" },
        ],
      },
      calling: {
        eyebrow: "Calling & assistance",
        heading: "AI Calling Assistants",
        badge: "Solution direction",
        text: "Exploring structured voice conversations for sharing information, collecting details and following up, with a path to human support.",
        cardTitle: "A possible service conversation",
        cardSubtitle: "Structured voice call",
        steps: [
          "Understand the enquiry",
          "Share information or collect details",
          "Follow up or involve a person",
        ],
      },
      cases: {
        eyebrow: "Solutions in action",
        heading: "Real human needs\nLocal AI responses",
        text: "From everyday conversations to public services and health information, language makes technology more approachable.",
        items: [
          {
            name: "Golu",
            description:
              "From crisis support and reliable information during pandemic to daily news, fun and assistance - all in Nepali",
            linkLabel: "Explore Golu",
            href: "https://www.diyo.ai/golu",
          },
          {
            name: "Muna",
            description: "AI for accessible public service",
            linkLabel: "Explore Muna",
            href: "https://www.diyo.ai/muna",
          },
          {
            name: "Juna",
            description: "AI for accessible health information",
            linkLabel: "Explore Juna",
            href: "https://safeabortion.diyo.ai",
          },
        ],
      },
    },

    preservation: {
      eyebrow: "Preserve & develop",
      heading: "Language",
      headingHighlight: "Preservation",
      leadTitle: "From a spoken word to a living resource",
      leadText:
        "Documenting languages is the beginning. Collecting, annotating and developing language resources supports their preservation and use in the digital world.",
      flow: ["Collection", "Annotation", "Revitalization"],
      stages: [
        {
          no: "01",
          kicker: "Listen & document",
          title: "Language Data Collection",
          description:
            "Collect speech, voices and language data to document how languages are spoken and used.",
          resourceLabel: "Voice / Speech / Text",
          bottom: "Spoken language → Documented resources",
          variant: "waveform",
        },
        {
          no: "02",
          kicker: "Understand & structure",
          title: "Language Annotation",
          description:
            "Transcribe, label and organize collected material into structured language datasets.",
          resourceLabel: "Resources → Structured data",
          bottom: "Documented resources → Structured datasets",
          variant: "tags",
          word: "भाषा",
          tags: ["Text", "Meaning", "Context"],
        },
        {
          no: "03",
          kicker: "Preserve & enable",
          title: "Language Revitalization",
          description:
            "Develop linguistic resources for digital use, supporting the preservation and revitalization of languages.",
          resourceLabel: "Resources for the future",
          bottom: "Structured datasets → Living language resources",
          variant: "orbit",
          orbit: ["भाषा", "Documentation", "Digital use", "Revitalization"],
        },
      ],
      initiativesEyebrow: "The work continues through our initiatives",
      initiativesHeading: "Rooted in language, built for its future",
      initiativesText:
        "Our in-house language initiatives, NepSwor and YetiVoices, focus on documenting, preserving and developing resources for regional and Himalayan languages.",
      initiativeLabel: "Language preservation initiative",
      initiatives: [
        { name: "NepSwor", art: "glyph" },
        { name: "YetiVoices", art: "mountains" },
      ],
      initiativesFootnote:
        "Documenting voices · Structuring knowledge · Developing language resources",
    },

    awards: {
      heading: "Awards and recognitions",
      items: [
        { name: "NYEF Startup Award · 2022", note: "Second Runner Up" },
        { name: "LINE Bot Awards", note: "Innovative Chatbot Award" },
      ],
    },

    news: {
      eyebrow: "In the news",
      heading: "Diyo in the news",
      items: [
        {
          outlet: "Setopati",
          title: "पाँच नेपाली वैज्ञानिकले बनाएको गफ गर्ने रोबोट साथी 'गोलु'",
          href: "https://www.setopati.com/kinmel/business/242214",
          logo: SetopatiLogo,
        },
        {
          outlet: "Kantipur",
          title: "अन्तर्क्रियाविहीन सरकारी वेबसाइट",
          href: "https://ekantipur.com/business/2021/12/05/163867313030279426.html",
          logo: KantipurLogo,
        },
      ],
    },

    testimonials: {
      eyebrow: "Testimonials",
      heading: "Voices that reflect the value",
      footnote: "From voices featured on Diyo.ai",
      items: [
        {
          quote: "“...AI chatbot has become a necessity!”",
          name: "Dr. François Rameau",
          role: "Assistant Professor · Sunny University",
          photo: FrancoisPhoto,
        },
        {
          quote:
            "“...managing grievances and educating citizens about public services...”",
          name: "Roshan Kumar Regmi",
          role: "IT Officer · Butwal Sub-Metropolitan",
          photo: RoshanPhoto,
        },
        {
          quote: "“Wishing them the best of luck.”",
          name: "Swopnil Shakya",
          role: "Cyber Security and Multimedia Specialist",
          photo: SwopnilPhoto,
        },
      ],
    },
  },
};
