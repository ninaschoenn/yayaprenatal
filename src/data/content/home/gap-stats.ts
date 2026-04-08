import type { GapStatsContent, LocalizedHomeSection } from './types';

export const gapStats = {
  de: {
    eyebrow: 'Die Lücke',
    titlePrefix: 'Was die Standardvorsorge',
    titleAccent: 'nicht sieht.',
    intro:
      'Standardvorsorge ist gut. Aber sie zeigt dir nicht alles. Zwischen den kurzen Arztterminen bleiben Fragen offen — über deinen Körper und über dich.',
    stats: [
      {
        num: '10',
        unit: 'Minuten',
        text: 'So lange dauert ein durchschnittlicher Frauenarzt-Termin. Für Blutwerte jenseits vom Standard hat das System weder Zeit noch Budget.',
        accent: 'border-red-600',
        numColor: 'text-red-600',
      },
      {
        num: '18',
        unit: 'Marker',
        text: 'Achtzehn kritische Blutwerte — von Schilddrüse bis Leber — werden im Mutterpass nie getestet. Nie.',
        accent: 'border-terra',
        numColor: 'text-terra',
      },
      {
        num: '0',
        unit: 'Minuten',
        text: 'Für deine Ängste, deine Fragen, dein inneres Erleben. Emotionale Vorbereitung? Nicht Teil der Standardvorsorge.',
        accent: 'border-deep',
        numColor: 'text-deep',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Deine Ärztin sieht dein Baby.',
        text: 'Ultraschall, Blutdruck, Mutterpass — medizinische Grundversorgung.',
        numberClass: 'text-deep',
        titleClass: 'text-deep',
      },
      {
        number: '02',
        title: 'Deine Hebamme begleitet die Geburt.',
        text: 'Geburtsvorbereitung, Atemtechniken, Wochenbett.',
        numberClass: 'text-deep',
        titleClass: 'text-deep',
      },
      {
        number: '03',
        title: 'Yaya sieht dich.',
        text: 'Erweiterte Blutanalyse, individuelle Supplements nach deinen Werten, systemisches Coaching.',
        numberClass: 'text-terra',
        titleClass: 'text-terra',
      },
    ],
  },
  en: {
    eyebrow: 'The gap',
    titlePrefix: 'What standard prenatal care',
    titleAccent: 'does not see.',
    intro:
      'Standard prenatal care matters. But it does not show you everything. Between short appointments, questions remain open — about your body and about you.',
    stats: [
      {
        num: '10',
        unit: 'Minutes',
        text: 'That is the average length of a gynecologist appointment. The system has neither the time nor the budget for bloodwork beyond the basics.',
        accent: 'border-red-600',
        numColor: 'text-red-600',
      },
      {
        num: '18',
        unit: 'Markers',
        text: 'Eighteen critical blood markers — from thyroid to liver — are never tested in the maternity record. Never.',
        accent: 'border-terra',
        numColor: 'text-terra',
      },
      {
        num: '0',
        unit: 'Minutes',
        text: 'For your fears, your questions, your inner experience. Emotional preparation? Not part of standard prenatal care.',
        accent: 'border-deep',
        numColor: 'text-deep',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Your doctor sees your baby.',
        text: 'Ultrasound, blood pressure, maternity record — the medical basics.',
        numberClass: 'text-deep',
        titleClass: 'text-deep',
      },
      {
        number: '02',
        title: 'Your midwife prepares you for birth.',
        text: 'Birth preparation, breathing techniques, postpartum support.',
        numberClass: 'text-deep',
        titleClass: 'text-deep',
      },
      {
        number: '03',
        title: 'Yaya sees you.',
        text: 'Advanced blood analysis, tailored supplements based on your results, and systemic coaching.',
        numberClass: 'text-terra',
        titleClass: 'text-terra',
      },
    ],
  },
} satisfies LocalizedHomeSection<GapStatsContent>;
