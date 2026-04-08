import type { HeroContent, LocalizedHomeSection } from './types';

export const hero = {
  de: {
    eyebrow: 'Erweiterte Schwangerschaftsbegleitung · Friedrichshain',
    title: {
      line1: 'Verstehen, was',
      line2Prefix: '',
      line2Accent: 'in dir',
      line2Suffix: ' passiert —',
      line3: 'und was dein Körper wirklich braucht.',
    },
    bullets: [
      'Blutanalysen, die dir Klarheit geben.',
      'Supplemente, abgestimmt auf deine Werte.',
      'Innere Arbeit, die dich stärkt.',
    ],
    lead: 'Für eine Schwangerschaft, in der du dich sicher fühlst.',
    ctaLabel: 'Begleitung Anfragen',
    imageAlt: 'Nina von Yaya Prenatal',
  },
  en: {
    eyebrow: 'Expanded Pregnancy Support · Friedrichshain',
    title: {
      line1: 'Understand what',
      line2Prefix: 'is happening',
      line2Accent: 'inside you',
      line2Suffix: ' —',
      line3: 'and what your body truly needs.',
    },
    bullets: [
      'Blood analysis that gives you clarity.',
      'Supplements tailored to your results.',
      'Inner work that strengthens you.',
    ],
    lead: 'For a pregnancy where you feel informed, supported, and safe.',
    ctaLabel: 'Request Support',
    imageAlt: 'Nina from Yaya Prenatal',
  },
} satisfies LocalizedHomeSection<HeroContent>;
