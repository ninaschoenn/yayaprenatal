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
    additions: {
      eyebrow: 'Was Yaya hinzufügt',
      titlePrefix: 'Dein Team,',
      titleAccent: 'eine Ebene erweitert.',
      intro:
        'Dein medizinisches Team begleitet dich gut. Yaya kommt dazu — mit dem, wofür in Sprechstunden kaum Zeit bleibt.',
      steps: [
        {
          number: '01',
          title: 'Deine Ärztin sieht dein Baby.',
          text: 'Ultraschall, Blutdruck, Mutterpass — die medizinische Grundversorgung.',
        },
        {
          number: '02',
          title: 'Deine Hebamme begleitet die Geburt.',
          text: 'Geburtsvorbereitung, Atemtechniken, Wochenbett.',
        },
        {
          number: '03',
          title: 'Yaya sieht dich.',
          text: 'Erweiterte Blutanalyse, individuelle Supplements nach deinen Werten, systemisches Coaching.',
          accent: true,
        },
      ],
    },
    bridge: 'Dein Körper schickt dir Botschaften. Yaya hilft dir, sie zu lesen.',
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
    additions: {
      eyebrow: 'What Yaya adds',
      titlePrefix: 'Your team,',
      titleAccent: 'one layer deeper.',
      intro:
        'Your medical team takes good care of you. Yaya comes alongside — with what short appointments cannot cover.',
      steps: [
        {
          number: '01',
          title: 'Your doctor sees your baby.',
          text: 'Ultrasound, blood pressure, maternity record — the medical basics.',
        },
        {
          number: '02',
          title: 'Your midwife prepares you for birth.',
          text: 'Birth preparation, breathing techniques, postpartum support.',
        },
        {
          number: '03',
          title: 'Yaya sees you.',
          text: 'Advanced blood analysis, tailored supplements based on your results, and systemic coaching.',
          accent: true,
        },
      ],
    },
    bridge: 'Your body is sending you messages. Yaya helps you read them.',
  },
} satisfies LocalizedHomeSection<ForYouContent>;
