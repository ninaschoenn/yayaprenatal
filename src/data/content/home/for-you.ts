import type { ForYouContent, LocalizedHomeSection } from './types';

export const forYou = {
  de: {
    eyebrow: 'Für wen',
    titlePrefix: 'Vielleicht erkennst du',
    titleAccent: 'dich hier wieder.',
    items: [
      'Du möchtest deine Blutwerte verstehen — und Supplemente nicht „auf Verdacht" nehmen, sondern wissen, was du wirklich brauchst.',
      'Du fragst dich, ob dein Körper optimal versorgt ist, oder ob etwas übersehen wird.',
      'Du möchtest dich innerlich vorbereiten auf das, was vor dir liegt.',
    ],
    closing: 'Dann bist du hier richtig.',
  },
  en: {
    eyebrow: 'Who it is for',
    titlePrefix: 'You may recognize',
    titleAccent: 'yourself here.',
    items: [
      'You want to truly understand your bloodwork — and not take supplements by guesswork, but know what you actually need.',
      'You are wondering whether your body is genuinely well nourished, or whether something important is being missed.',
      'You want to prepare inwardly for what is ahead of you.',
    ],
    closing: 'Then you are in the right place.',
  },
} satisfies LocalizedHomeSection<ForYouContent>;
