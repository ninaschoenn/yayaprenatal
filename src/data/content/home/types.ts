import type { Locale } from '../../i18n';

export type LocalizedHomeSection<T> = Record<Locale, T>;

export interface MetaContent {
  title: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  title: {
    line1: string;
    line2Prefix: string;
    line2Accent: string;
    line2Suffix: string;
    line3: string;
  };
  bullets: string[];
  lead: string;
  ctaLabel: string;
  imageAlt: string;
}

export interface ForYouContent {
  eyebrow: string;
  titlePrefix: string;
  titleAccent: string;
  items: string[];
  closing: string;
}

export interface UspBridgeContent {
  prefix: string;
  items: string[];
}

export interface GapStatsContent {
  eyebrow: string;
  titlePrefix: string;
  titleAccent: string;
  intro: string;
  stats: Array<{
    num: string;
    unit: string;
    text: string;
    accent: string;
    numColor: string;
  }>;
  steps: Array<{
    number: string;
    title: string;
    text: string;
    numberClass: string;
    titleClass: string;
  }>;
}

export interface BabyFirstContent {
  intro: string;
  introAccent: string;
  body: [string, string];
  bodyAccent: string;
  bodySuffix: string;
}

export type BodyMapCategoryKey = 'blood' | 'vitamin' | 'organ' | 'safety';

export interface BodyMapMarker {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  side: 'L' | 'R';
  cat: BodyMapCategoryKey;
  mother: string;
  baby: string;
  gap: string;
}

export interface BodyMapContent {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  hint: string;
  closeLabel: string;
  detailLabels: {
    mother: string;
    baby: string;
    gap: string;
  };
  categories: Record<BodyMapCategoryKey, { color: string; label: string }>;
  markers: BodyMapMarker[];
}

export interface CoachingContent {
  eyebrow: string;
  titlePrefix: string;
  titleAccent: string;
  intro: string;
  labels: {
    previous: string;
    next: string;
    region: string;
    thought: string;
    coach: string;
    dotPrefix: string;
  };
  dialogues: Array<{
    thought: string;
    response: string;
  }>;
  note: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  title: string;
  noteBefore: string;
  noteAccent: string;
  noteAfter: string;
  features: Array<{
    icon: string;
    title: string;
    text: string;
  }>;
}

export interface PackagesContent {
  eyebrow: string;
  titlePrefix: string;
  titleAccent: string;
  introEyebrow: string;
  introText: string;
  featuredBadge: string;
  oneOffEyebrow: string;
  introOffer: {
    label: string;
    title: string;
    price: string;
    details: string[];
  };
  primaryOffer: {
    label: string;
    title: string;
    price: string;
    priceSuffix: string;
    duration: string;
    savings: string;
    details: string[];
    note: string;
  };
  oneOffOffers: Array<{
    title: string;
    price: string;
    accent: string;
    details: string[];
  }>;
}

export interface JourneyContent {
  eyebrow: string;
  titlePrefix: string;
  titleAccent: string;
  intro: string;
  chapters: Array<{
    number: string;
    theme: string;
    body: string;
  }>;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  practiceName: string;
  closing: string;
  credentialsLabel: string;
  credentials: string[];
  imageAlt: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  items: Array<{
    quote: string;
    name: string;
    tag: string;
  }>;
}

export interface CtaContent {
  titlePrefix: string;
  titleAccent: string;
  titleSuffix: string;
  body: string;
  buttonLabel: string;
  labels: {
    email: string;
    phone: string;
    address: string;
    copy: string;
    copied: string;
  };
}

export interface HomeContent {
  meta: MetaContent;
  hero: HeroContent;
  forYou: ForYouContent;
  uspBridge: UspBridgeContent;
  gapStats: GapStatsContent;
  babyFirst: BabyFirstContent;
  bodyMap: BodyMapContent;
  coaching: CoachingContent;
  howItWorks: HowItWorksContent;
  packages: PackagesContent;
  journey: JourneyContent;
  about: AboutContent;
  testimonials: TestimonialsContent;
  cta: CtaContent;
  disclaimer: string;
}
