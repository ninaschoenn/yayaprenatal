import type { HowItWorksContent, LocalizedHomeSection } from './types';

export const howItWorks = {
  de: {
    eyebrow: 'So läuft es ab',
    title: 'Blut + Coaching + alles dazwischen.',
    noteBefore: 'Deine Begleitung im ',
    noteAccent: 'Complete Care',
    noteAfter: ' Paket.',
    features: [
      {
        icon: '🩸',
        title: 'Alle 2 Wochen: Dein Termin',
        text: '75 Minuten nur für dich. Je nach Bedarf mit Blutabnahme und Besprechung der Ergebnisse, immer mit systemischem Coaching. Kein Zeitdruck.',
      },
      {
        icon: '💬',
        title: 'Chat-Zugang',
        text: 'WhatsApp oder Signal — du wählst. Zwischen den Terminen bin ich eine Nachricht entfernt.',
      },
      {
        icon: '💊',
        title: 'Ernährung & Supplements',
        text: 'Basierend auf deinen Blutwerten: was dein Körper jetzt wirklich braucht. Keine Standard-Prenatal-Vitamine.',
      },
      {
        icon: '👫',
        title: 'Partner-Session',
        text: 'Dein Partner ist willkommen. Systemisches Coaching zu zweit — Kommunikation, gemeinsame Ängste, als Team in die Elternschaft.',
      },
    ],
  },
  en: {
    eyebrow: 'How it works',
    title: 'Blood + coaching + everything in between.',
    noteBefore: 'Your support inside the ',
    noteAccent: 'Complete Care',
    noteAfter: ' package.',
    features: [
      {
        icon: '🩸',
        title: 'Every 2 weeks: your session',
        text: '75 minutes that are just for you. Depending on what you need, this may include blood draws and reviewing the results, always together with systemic coaching. No rush.',
      },
      {
        icon: '💬',
        title: 'Chat access',
        text: 'WhatsApp or Signal — you choose. Between sessions, I am one message away.',
      },
      {
        icon: '💊',
        title: 'Nutrition & supplements',
        text: 'Based on your bloodwork: what your body truly needs right now. Not generic prenatal vitamins.',
      },
      {
        icon: '👫',
        title: 'Partner session',
        text: 'Your partner is welcome. Systemic coaching for the two of you — communication, shared fears, and stepping into parenthood as a team.',
      },
    ],
  },
} satisfies LocalizedHomeSection<HowItWorksContent>;
