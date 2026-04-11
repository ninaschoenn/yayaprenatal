import type { LocalizedHomeSection, OfferContent } from './types';

export const offer = {
  de: {
    eyebrow: 'Das Angebot',
    title: 'Was Yaya tut.',
  },
  en: {
    eyebrow: 'The Offer',
    title: 'What Yaya does.',
  },
} satisfies LocalizedHomeSection<OfferContent>;
