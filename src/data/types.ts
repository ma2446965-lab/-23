export interface FaqItem {
  q: string;
  a: string;
}

export interface ToolContent {
  /** Short intro paragraph shown under the title. */
  intro: string;
  /** Ordered "how to use" steps. */
  howTo: string[];
  /** A worked example (optional). */
  example?: string;
  /** Assumptions & limitations (optional). */
  assumptions?: string[];
}

export type CategorySlug = 'calculators' | 'converters' | 'generators';

export interface ToolMeta {
  slug: string;
  category: CategorySlug;
  title: string;
  description: string;
  keywords: string[];
  icon: string;
  faq: FaqItem[];
  content: ToolContent;
  /** Slugs of related tools (used for internal linking). */
  related: string[];
  /** Key used to look up the interactive component. */
  component: string;
}

export interface CategoryMeta {
  slug: CategorySlug;
  title: string;
  description: string;
  icon: string;
}
