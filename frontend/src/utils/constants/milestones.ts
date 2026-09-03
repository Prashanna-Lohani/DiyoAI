export type Milestone = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const MILESTONES: Milestone[] = [
  { value: 3.5, decimals: 1, suffix: 'M+', label: 'Parallel Corpus' },
  { value: 12, suffix: '+', label: 'LLMs Evaluated' },
  { value: 10, suffix: '+', label: 'Multilingual Chatbots' },
  { value: 173, suffix: '+', label: 'Hours of Speech Data' },
  { value: 15, suffix: '%', label: 'Translation Improvement' },
];
