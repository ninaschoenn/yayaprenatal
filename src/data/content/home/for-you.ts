import type { ForYouContent, LocalizedHomeSection } from './types';

export const forYou = {
  de: {
    eyebrow: 'Für wen',
    titlePrefix: 'Vielleicht erkennst du',
    titleAccent: 'dich hier wieder.',
    items: [
      'Du möchtest deine Blutwerte wirklich verstehen — nicht nur „im Normbereich" sein.',
      'Du fragst dich, ob dein Körper optimal versorgt ist, oder ob etwas übersehen wird.',
      'Du willst Supplemente nicht „auf Verdacht" nehmen, sondern wissen, was du wirklich brauchst.',
      'Du möchtest dich innerlich vorbereiten auf das, was vor dir liegt.',
    ],
    closing: 'Dann bist du hier richtig.',
  },
  en: {
    eyebrow: 'Who it is for',
    titlePrefix: 'You may recognize',
    titleAccent: 'yourself here.',
    items: [
      'You want to truly understand your bloodwork — not just hear that everything is “within range.”',
      'You are wondering whether your body is genuinely well nourished, or whether something important is being missed.',
      'You do not want to take supplements by guesswork. You want to know what you actually need.',
      'You want to prepare inwardly for what is ahead of you.',
    ],
    closing: 'Then you are in the right place.',
  },
} satisfies LocalizedHomeSection<ForYouContent>;
