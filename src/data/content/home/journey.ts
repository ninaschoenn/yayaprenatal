import type { JourneyContent, LocalizedHomeSection } from './types';

export const journey = {
  de: {
    eyebrow: 'Deine Reise',
    titlePrefix: '6 Monate Complete Care.',
    titleAccent: 'Wann immer du bereit bist.',
    intro:
      'Die meisten Frauen starten zwischen der 12. und 20. Schwangerschaftswoche — aber du entscheidest, wann der richtige Zeitpunkt für dich ist. Wenn du in deiner Schwangerschaft schon weiter bist, passen wir das Angebot individuell an.',
    rhythm: {
      heading: 'Der Rhythmus',
      features: [
        {
          icon: '🩸',
          title: 'Alle 2 Wochen: Dein Termin',
          text: '75 Minuten nur für dich. Blutabnahme, Ergebnisse, Coaching — je nachdem, was du gerade brauchst.',
        },
        {
          icon: '💬',
          title: 'Chat-Zugang',
          text: 'WhatsApp oder Signal. Zwischen den Terminen bin ich eine Nachricht entfernt.',
        },
        {
          icon: '💊',
          title: 'Ernährung & Supplements',
          text: 'Keine Standard-Prenatal-Vitamine — sondern genau das, was deine Werte zeigen.',
        },
        {
          icon: '👫',
          title: 'Partner-Session',
          text: 'Dein Partner ist willkommen. Gemeinsam als Team in die Elternschaft.',
        },
      ],
    },
    arc: {
      heading: 'Der Bogen',
      phases: [
        {
          number: '01',
          title: 'Ankommen & Verstehen',
          body: 'Erstes Kennenlernen. Große Blutanalyse. Wir bauen dein Gesundheitsprofil auf, optimieren deine Supplemente — und du erzählst, wie es dir wirklich geht.',
        },
        {
          number: '02',
          title: 'Vertiefen & Verbinden',
          body: 'Zweite Blutanalyse. Partner-Session. Innere Arbeit: Ängste anschauen statt wegdrücken. Geburt, Partnerschaft, Identität — was brauchst du, um zu vertrauen?',
        },
        {
          number: '03',
          title: 'Vertrauen & Loslassen',
          body: 'Letzte Blutanalyse. Körper-Check. Du bist bereit — und ich bleibe per Chat erreichbar bis zum großen Tag.',
        },
      ],
    },
    closing: 'So sehen sechs Monate Complete Care aus.',
  },
  en: {
    eyebrow: 'Your journey',
    titlePrefix: '6 months of Complete Care.',
    titleAccent: 'Whenever you are ready.',
    intro:
      'Most women begin between week 12 and week 20 of pregnancy — but you decide when the time feels right for you. If you are already further along in your pregnancy, we will adapt the support individually.',
    rhythm: {
      heading: 'The rhythm',
      features: [
        {
          icon: '🩸',
          title: 'Every 2 weeks: your session',
          text: '75 minutes just for you. Blood draw, results, coaching — whatever you need on that day.',
        },
        {
          icon: '💬',
          title: 'Chat access',
          text: 'WhatsApp or Signal. Between sessions, I am one message away.',
        },
        {
          icon: '💊',
          title: 'Nutrition & supplements',
          text: 'Not generic prenatal vitamins — exactly what your bloodwork shows you need.',
        },
        {
          icon: '👫',
          title: 'Partner session',
          text: 'Your partner is welcome. Stepping into parenthood as a team.',
        },
      ],
    },
    arc: {
      heading: 'The arc',
      phases: [
        {
          number: '01',
          title: 'Arrive & Understand',
          body: 'A first meeting. A full blood analysis. We build your health profile, tune your supplements — and you tell me how you are really doing.',
        },
        {
          number: '02',
          title: 'Deepen & Connect',
          body: 'Second blood analysis. Partner session. Inner work: looking at fears instead of pushing them away. Birth, partnership, identity — what do you need in order to trust?',
        },
        {
          number: '03',
          title: 'Trust & Let Go',
          body: 'Final blood analysis. Whole-body check-in. You are ready — and I remain available by chat right up until the big day.',
        },
      ],
    },
    closing: 'This is what six months of Complete Care look like.',
  },
} satisfies LocalizedHomeSection<JourneyContent>;
