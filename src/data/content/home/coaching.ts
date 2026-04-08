import type { CoachingContent, LocalizedHomeSection } from './types';

export const coaching = {
  de: {
    eyebrow: 'Systemisches Coaching',
    titlePrefix: 'Der Termin endet.',
    titleAccent: 'Die Frage bleibt.',
    intro:
      'Schwangerschaft verändert alles — Beziehung, Identität, Ängste, Träume. Das verdient einen Raum, der nur dir gehört.',
    labels: {
      previous: 'Vorherige Frage',
      next: 'Nächste Frage',
      region: 'Beispiele für Coaching-Fragen',
      thought: 'Du denkst',
      coach: 'Nina',
      dotPrefix: 'Frage',
    },
    dialogues: [
      {
        thought: 'Ich habe Angst vor der Geburt.',
        response: 'Was genau macht dir Angst? Lass uns das gemeinsam anschauen.',
      },
      {
        thought: 'Alle sagen, ich soll mich freuen. Aber ich fühle mich nur überfordert.',
        response: 'Was wäre, wenn beides gleichzeitig da sein darf?',
      },
      {
        thought: 'Mein Partner und ich streiten mehr.',
        response: 'Was hat sich zwischen euch verändert? Was brauchst du gerade von ihm?',
      },
      {
        thought: 'Ich habe das Gefühl, ich verliere mich selbst.',
        response: 'Was von dir möchtest du unbedingt behalten?',
      },
      {
        thought: 'Ich weiß nicht, ob ich bereit bin, Mutter zu sein.',
        response: 'Wer warst du bisher — und wer möchtest du als Mutter sein?',
      },
      {
        thought: 'Meine Mutter mischt sich ständig ein.',
        response: 'Was davon ist Fürsorge — und was ist Grenzüberschreitung?',
      },
      {
        thought: 'Was, wenn ich es nicht schaffe?',
        response: 'Was genau bedeutet „schaffen" für dich? Und wer hat das definiert?',
      },
    ],
    note:
      'Systemisches Coaching ist keine Therapie und keine Beratung. Es ist ein Raum, in dem du deine eigenen Antworten findest. Nina gibt keine Ratschläge — sie stellt die Fragen, die dich weiterbringen. Geburtsängste, Identitätswandel, Partnerschaftsdynamik, Entscheidungen, Selbstvertrauen — innere Arbeit, die dich stärkt, bevor das Baby da ist.',
  },
  en: {
    eyebrow: 'Systemic Coaching',
    titlePrefix: 'The appointment ends.',
    titleAccent: 'The question stays.',
    intro:
      'Pregnancy changes everything — relationship, identity, fears, dreams. That deserves a space that belongs only to you.',
    labels: {
      previous: 'Previous question',
      next: 'Next question',
      region: 'Examples of coaching questions',
      thought: 'You think',
      coach: 'Nina',
      dotPrefix: 'Question',
    },
    dialogues: [
      {
        thought: 'I am afraid of giving birth.',
        response: 'What exactly feels frightening about it? Let us look at that together.',
      },
      {
        thought: 'Everyone says I should be happy. But I only feel overwhelmed.',
        response: 'What if both feelings are allowed to exist at the same time?',
      },
      {
        thought: 'My partner and I argue more than before.',
        response: 'What has changed between you? What do you need from him right now?',
      },
      {
        thought: 'I feel like I am losing myself.',
        response: 'What part of yourself do you want to hold on to no matter what?',
      },
      {
        thought: 'I do not know if I am ready to become a mother.',
        response: 'Who have you been so far — and who do you want to become as a mother?',
      },
      {
        thought: 'My mother keeps interfering.',
        response: 'What part of that is care — and what part crosses a boundary?',
      },
      {
        thought: 'What if I cannot do this?',
        response: 'What does “doing this” actually mean for you — and who defined that standard?',
      },
    ],
    note:
      'Systemic coaching is not therapy and not advice-giving. It is a space in which you find your own answers. Nina does not hand out instructions — she asks the questions that help you move forward. Birth fears, changing identity, relationship dynamics, decisions, self-trust — inner work that strengthens you before your baby arrives.',
  },
} satisfies LocalizedHomeSection<CoachingContent>;
