import type { JourneyContent, LocalizedHomeSection } from './types';

export const journey = {
  de: {
    eyebrow: 'Deine Reise',
    titlePrefix: '6 Monate mit Nina.',
    titleAccent: 'Wann immer du bereit bist.',
    intro:
      'Die meisten Frauen starten zwischen der 12. und 20. Schwangerschaftswoche — aber du entscheidest, wann der richtige Zeitpunkt für dich ist.',
    chapters: [
      {
        number: 'Kapitel 1',
        theme: 'Ankommen',
        body: 'Erstes Kennenlernen. Große Blutanalyse. Wir bauen dein Gesundheitsprofil auf und du erzählst: Wie geht es dir wirklich?',
      },
      {
        number: 'Kapitel 2',
        theme: 'Verstehen',
        body: 'Supplementoptimierung. Ergebnisse vertiefen. Coaching: Was verändert sich gerade in dir und deinem Leben?',
      },
      {
        number: 'Kapitel 3',
        theme: 'Verbinden',
        body: 'Zweite Blutanalyse: Nährstoffe und Vitamine, die dein Baby jetzt für den Organaufbau braucht. Coaching: Du, dein Partner, das neue Wir. Partner-Session möglich.',
      },
      {
        number: 'Kapitel 4',
        theme: 'Loslassen',
        body: 'Innere Arbeit. Ängste anschauen — nicht wegdrücken. Geburt, Partnerschaft danach, Identität, Arbeit, Freiheit. Was brauchst du, um zu vertrauen?',
      },
      {
        number: 'Kapitel 5',
        theme: 'Vertrauen',
        body: 'Letzte große Blutanalyse. Körper-Check. Coaching: Dein Körper weiß, was er tut. Kannst du ihm glauben?',
      },
      {
        number: 'Kapitel 6',
        theme: 'Bereit',
        body: 'Letzte Termine. Du bist bereit. Nina bleibt per Chat erreichbar bis zum großen Tag.',
      },
    ],
  },
  en: {
    eyebrow: 'Your journey',
    titlePrefix: '6 months with Nina.',
    titleAccent: 'Whenever you are ready.',
    intro:
      'Most women begin between week 12 and week 20 of pregnancy — but you decide when the time feels right for you.',
    chapters: [
      {
        number: 'Chapter 1',
        theme: 'Arriving',
        body: 'A first meeting. A full blood analysis. We build your health profile and you tell me: how are you really doing?',
      },
      {
        number: 'Chapter 2',
        theme: 'Understanding',
        body: 'Supplement adjustments. A deeper look at the results. Coaching: what is shifting in you and in your life right now?',
      },
      {
        number: 'Chapter 3',
        theme: 'Connecting',
        body: 'Second blood analysis: the nutrients and vitamins your baby now needs for organ development. Coaching: you, your partner, and the new “us.” Optional partner session.',
      },
      {
        number: 'Chapter 4',
        theme: 'Letting go',
        body: 'Inner work. Looking at fears instead of pushing them away. Birth, partnership afterwards, identity, work, freedom. What do you need in order to trust?',
      },
      {
        number: 'Chapter 5',
        theme: 'Trusting',
        body: 'Final major blood analysis. Whole-body check-in. Coaching: your body knows what it is doing. Can you believe it?',
      },
      {
        number: 'Chapter 6',
        theme: 'Ready',
        body: 'Final sessions. You are ready. Nina remains available by chat right up until the big day.',
      },
    ],
  },
} satisfies LocalizedHomeSection<JourneyContent>;
