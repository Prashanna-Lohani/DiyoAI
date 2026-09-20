export type Lang = "en" | "np";

export const HERO_COPY: Record<Lang, { heading: string; tagline: string; sub: string }> = {
  en: {
    heading: "AI That Speaks Your Language.",
    tagline: "AI that understands your language",
    sub: "Leading in Speech and Language AI for low-resource settings — conversational AI, speech technology and language solutions built for Nepali and the languages of Nepal.",
  },
  np: {
    heading: "तपाईंको भाषा बोल्ने AI।",
    tagline: "तपाईंको भाषा बुझ्ने AI",
    sub: "कम-स्रोत भाषाहरूका लागि स्पीच र भाषा AI मा अग्रणी — नेपाली र नेपालका भाषाहरूका लागि बनाइएको संवादात्मक AI, स्पीच प्रविधि र भाषा समाधानहरू।",
  },
};

export const VOICE_STEPS = [
  {
    icon: "🎤",
    label: "Speech",
    detail: "“नमस्ते, मलाई सहयोग चाहियो”",
  },
  { icon: "📝", label: "Transcription", detail: "Nepali speech → text" },
  { icon: "✨", label: "AI Understanding", detail: "intent + knowledge base" },
  {
    icon: "💬",
    label: "Response",
    detail: "“अवश्य, म सहयोग गर्छु…”",
  },
  { icon: "🔊", label: "Natural Voice", detail: "text → Nepali speech" },
] as const;

export const CHAPTERS = [
  {
    no: "01",
    href: "#services",
    title: "Language Services",
    subtitle: "Connect through language",
  },
  {
    no: "02",
    href: "#preservation",
    title: "Language Preservation",
    subtitle: "Build resources for the future",
  },
] as const;

export const SERVICE_CHOICES = [
  {
    id: "translation",
    no: "01",
    title: "Translation",
    description: "Bring meaning across languages with translation and localization.",
    example: {
      label: "Nepali → English",
      source: "नमस्ते",
      sourceLang: "ne",
      output: "Hello",
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
      source: "नमस्ते",
      sourceLang: "ne",
      output: "wave",
      caption: "Written words become a spoken response",
    },
  },
  {
    id: "text",
    no: "03",
    title: "Speech to Text",
    description: "Convert spoken Nepali into text for transcription and digital use.",
    example: {
      label: "Spoken voice → Written text",
      source: "wave",
      sourceLang: "ne",
      output: "नमस्ते",
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
      source: "00:01 — 00:03",
      sourceLang: "en",
      output: "नमस्ते",
      caption: "Words aligned with the moment they are spoken",
    },
  },
] as const;

export const PRESERVATION_STAGES = [
  {
    no: "01",
    kicker: "Listen & document",
    title: "Language Data Collection",
    description:
      "Collect speech, voices and language data to document how languages are spoken and used.",
    resourceLabel: "Voice / Speech / Text",
    word: "भाषा",
    bottom: "Spoken language → Documented resources",
  },
  {
    no: "02",
    kicker: "Understand & structure",
    title: "Language Annotation",
    description:
      "Transcribe, label and organize collected material into structured language datasets.",
    resourceLabel: "Resources → Structured data",
    word: "भाषा",
    tags: ["Text", "Meaning", "Context"],
    bottom: "Documented resources → Structured datasets",
  },
  {
    no: "03",
    kicker: "Preserve & enable",
    title: "Language Revitalization",
    description:
      "Develop linguistic resources for digital use, supporting the preservation and revitalization of languages.",
    resourceLabel: "Resources for the future",
    orbit: ["भाषा", "Documentation", "Digital use", "Revitalization"],
    bottom: "Structured datasets → Living language resources",
  },
] as const;

export const INITIATIVES = [
  { name: "NepSwor", art: "glyph" },
  { name: "YetiVoices", art: "mountains" },
] as const;
