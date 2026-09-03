import type { StaticImageData } from 'next/image';

import HelmetsNepalLogo from '@/assets/images/helmetsnepal.png';
import HervedaLogo from '@/assets/images/herveda.png';
import MetroLogo from '@/assets/images/metro.png';
import NtbLogo from '@/assets/images/ntb.png';
import TataLogo from '@/assets/images/tata.png';
import UndpLogo from '@/assets/images/undp.png';
import YetiLogo from '@/assets/images/yeti.png';

export type Collaborator = {
  src: StaticImageData;
  label: string;
};

export const COLLABORATORS: Collaborator[] = [
  { src: MetroLogo, label: 'Butwal Sub-Metropolitan City' },
  { src: MetroLogo, label: 'Lalitpur Metropolitan City' },
  { src: NtbLogo, label: 'Nepal Tourism Board' },
  { src: UndpLogo, label: 'United Nations Development Programme' },
  { src: TataLogo, label: 'TATA' },
  { src: YetiLogo, label: 'Yeti Airlines' },
  { src: HervedaLogo, label: 'Herveda Botanicals' },
  { src: HelmetsNepalLogo, label: 'Helmets Nepal' },
];
