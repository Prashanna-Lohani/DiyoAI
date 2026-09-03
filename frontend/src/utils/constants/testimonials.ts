import type { StaticImageData } from 'next/image';

import FrancoisPhoto from '@/assets/images/sunyfrancois1.png';
import RoshanPhoto from '@/assets/images/roshan.jpg';
import SwopnilPhoto from '@/assets/images/swopnil.jpg';

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo: StaticImageData;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Incorporating local languages is a challenge, but AI chatbot has become a necessity!',
    name: 'Dr. François Rameau',
    role: 'Assistant Professor @Sunny University',
    photo: FrancoisPhoto,
  },
  {
    quote:
      '... have been helping us in managing grievances and educating citizens about public services in a simplest way with a shorter ...',
    name: 'Roshan Kumar Regmi',
    role: 'IT Officer @Butwal Sub-Metropolitan',
    photo: RoshanPhoto,
  },
  {
    quote:
      'This team has been working on next-gen technology! Wishing them the best of luck.',
    name: 'Swopnil Shakya',
    role: 'Cyber Security and Multimedia Specialist',
    photo: SwopnilPhoto,
  },
];
