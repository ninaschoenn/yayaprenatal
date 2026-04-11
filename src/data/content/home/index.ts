import type { Locale } from '../../i18n';
import { about } from './about';
import { babyFirst } from './baby-first';
import { bodyMap } from './body-map';
import { coaching } from './coaching';
import { cta } from './cta';
import { disclaimer } from './disclaimer';
import { forYou } from './for-you';
import { hero } from './hero';
import { journey } from './journey';
import { meta } from './meta';
import { offer } from './offer';
import { packages } from './packages';
import { testimonials } from './testimonials';
import type { HomeContent } from './types';
import { uspBridge } from './usp-bridge';

export const homeContent = {
  de: {
    meta: meta.de,
    hero: hero.de,
    forYou: forYou.de,
    uspBridge: uspBridge.de,
    offer: offer.de,
    babyFirst: babyFirst.de,
    bodyMap: bodyMap.de,
    coaching: coaching.de,
    packages: packages.de,
    journey: journey.de,
    about: about.de,
    testimonials: testimonials.de,
    cta: cta.de,
    disclaimer: disclaimer.de,
  },
  en: {
    meta: meta.en,
    hero: hero.en,
    forYou: forYou.en,
    uspBridge: uspBridge.en,
    offer: offer.en,
    babyFirst: babyFirst.en,
    bodyMap: bodyMap.en,
    coaching: coaching.en,
    packages: packages.en,
    journey: journey.en,
    about: about.en,
    testimonials: testimonials.en,
    cta: cta.en,
    disclaimer: disclaimer.en,
  },
} satisfies Record<Locale, HomeContent>;

export type { HomeContent } from './types';
