/**
 * Global site constants.
 *
 * Public env vars (prefixed with PUBLIC_) are exposed to the browser bundle.
 * Set PUBLIC_SITE_URL and PUBLIC_ADSENSE_CLIENT in your deploy environment.
 */

const RAW_SITE_URL = (import.meta.env.PUBLIC_SITE_URL || 'https://calcutils.example').trim();
export const SITE_URL: string = RAW_SITE_URL.replace(/\/+$/, ''); // no trailing slash

export const SITE = {
  name: 'CalcUtils',
  url: SITE_URL,
  tagline: 'Free online calculators, converters & generators',
  description:
    'CalcUtils offers 100% free, fast and accurate online calculators, unit & currency converters, and handy generators. No sign-up, no tracking, works on every device.',
  locale: 'en-US',
  lang: 'en',
  twitter: '@calcutils',
  author: 'CalcUtils',
} as const;

export const ADSENSE_CLIENT: string = (import.meta.env.PUBLIC_ADSENSE_CLIENT || '').toString().trim();

export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Calculators', href: '/calculators/' },
  { label: 'Converters', href: '/converters/' },
  { label: 'Generators', href: '/generators/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/** Reserved ad-slot identifiers (replace with real AdSense slot IDs after approval). */
export const AD_SLOTS = {
  top: 'TOP_DISPLAY',
  inContent: 'IN_CONTENT_DISPLAY',
  sidebar: 'SIDEBAR_DISPLAY',
  related: 'RELATED_INFEED',
} as const;
