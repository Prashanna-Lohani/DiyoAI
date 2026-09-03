import type { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';
import { FiBriefcase, FiMessageCircle } from 'react-icons/fi';

import GoluImage from '@/assets/images/golu_draft.webp';
import MunaImage from '@/assets/images/muna.webp';

export type Product = {
  eyebrow: string;
  name: string;
  headline: string;
  description: string;
  icon: IconType;
  image: StaticImageData;
  imageSide: 'left' | 'right';
};

export const PRODUCTS: Product[] = [
  {
    eyebrow: 'Conversational AI',
    name: 'Golu',
    headline: 'Meet Golu, your AI companion.',
    description:
      'A natural-sounding Nepali voice assistant that chats, listens, and understands like a friend.',
    icon: FiMessageCircle,
    image: GoluImage,
    imageSide: 'left',
  },
  {
    eyebrow: 'Business Assistant',
    name: 'Muna',
    headline: 'Muna handles your business, in Nepali.',
    description:
      'From citizen services to document guidance, Muna answers instantly — in the language your users speak.',
    icon: FiBriefcase,
    image: MunaImage,
    imageSide: 'right',
  },
];
