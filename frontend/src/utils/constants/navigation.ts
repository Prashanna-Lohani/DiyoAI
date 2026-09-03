import type { IconType } from 'react-icons';
import {
  FiBookOpen,
  FiCode,
  FiFileText,
  FiGithub,
  FiGrid,
  FiLayers,
  FiLinkedin,
  FiMessageCircle,
  FiShield,
  FiTrendingUp,
  FiTwitter,
  FiUsers,
} from 'react-icons/fi';

export type NavSubLink = {
  href: string;
  label: string;
  description: string;
  icon: IconType;
};

export type NavLink = {
  href: string;
  label: string;
  items?: NavSubLink[];
};

export const NAV_LINKS: NavLink[] = [
  {
    href: '#solutions',
    label: 'Solutions',
    items: [
      {
        href: '#startups',
        label: 'For Startups',
        description: 'Move fast without extra overhead',
        icon: FiTrendingUp,
      },
      {
        href: '#teams',
        label: 'For Teams',
        description: 'Collaborate in one shared workspace',
        icon: FiUsers,
      },
      {
        href: '#enterprise',
        label: 'For Enterprise',
        description: 'Security and controls that scale',
        icon: FiShield,
      },
    ],
  },
  {
    href: '#platform',
    label: 'Platform',
    items: [
      {
        href: '#overview',
        label: 'Overview',
        description: 'See how the platform fits together',
        icon: FiLayers,
      },
      {
        href: '#integrations',
        label: 'Integrations',
        description: 'Connect the tools you already use',
        icon: FiGrid,
      },
      {
        href: '#api',
        label: 'API Reference',
        description: 'Build custom workflows on top',
        icon: FiCode,
      },
    ],
  },
  { href: '#customers', label: 'Customers' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#careers', label: 'Careers' },
  {
    href: '#resources',
    label: 'Resources',
    items: [
      {
        href: '#blog',
        label: 'Blog',
        description: 'Product updates and ideas',
        icon: FiFileText,
      },
      {
        href: '#docs',
        label: 'Documentation',
        description: 'Guides to get you up and running',
        icon: FiBookOpen,
      },
      {
        href: '#community',
        label: 'Community',
        description: 'Ask questions, share feedback',
        icon: FiMessageCircle,
      },
    ],
  },
];

export type FooterLink = {
  href: string;
  label: string;
  badge?: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Product',
    links: [
      { href: '#features', label: 'Features' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#platform', label: 'Platform' },
      { href: '#security', label: 'Security' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '#docs', label: 'Documentation' },
      { href: '#api', label: 'API Reference' },
      { href: '#changelog', label: 'Changelog', badge: 'New' },
      { href: '#status', label: 'Status' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#blog', label: 'Blog' },
      { href: '#careers', label: 'Careers' },
      { href: '#community', label: 'Community' },
      { href: '#partnerships', label: 'Partnerships' },
      { href: '#contact', label: 'Contact' },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { href: '#privacy', label: 'Privacy Policy' },
  { href: '#terms', label: 'Terms of Service' },
];

export type SocialLink = {
  href: string;
  label: string;
  icon: IconType;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com', label: 'GitHub', icon: FiGithub },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: FiLinkedin },
  { href: 'https://twitter.com', label: 'X', icon: FiTwitter },
];
