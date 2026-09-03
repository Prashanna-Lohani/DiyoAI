import type { StaticImageData } from 'next/image';

import LineBotAwards from '@/assets/images/line.png';
import NyefStartupAwards from '@/assets/images/nyef.png';

export type Award = {
  src: StaticImageData;
  alt: string;
};

export const AWARD_LOGOS: Award[] = [
  { src: LineBotAwards, alt: 'LINE Bot Awards' },
  { src: NyefStartupAwards, alt: 'NYEF Startup Awards' },
];
