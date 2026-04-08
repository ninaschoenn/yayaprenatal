import type { LocalizedHomeSection, TestimonialsContent } from './types';

export const testimonials = {
  de: {
    eyebrow: 'Stimmen',
    title: 'Was Mamas sagen.',
    items: [
      {
        quote:
          'Meine Frauenärztin hat meine Schilddrüse nie gecheckt. Nina hat es sofort gefunden. Zum Glück.',
        name: '— Maria K.',
        tag: 'Blutanalyse',
      },
      {
        quote:
          'Ich hatte so viel Angst vor der Geburt. Nina hat mir nicht gesagt, was ich tun soll. Sie hat mir geholfen zu verstehen, woher die Angst kommt. Das hat alles verändert.',
        name: '— Sophie L.',
        tag: 'Coaching',
      },
      {
        quote:
          'Endlich jemand, der sich wirklich Zeit nimmt. 75 Minuten nur für mich. Ich habe mich zum ersten Mal wirklich gehört gefühlt in dieser Schwangerschaft.',
        name: '— Lena M.',
        tag: 'Begleitung',
      },
    ],
  },
  en: {
    eyebrow: 'Voices',
    title: 'What mothers say.',
    items: [
      {
        quote:
          'My gynecologist never checked my thyroid. Nina spotted it immediately. Thank goodness.',
        name: '— Maria K.',
        tag: 'Blood analysis',
      },
      {
        quote:
          'I was so afraid of giving birth. Nina did not tell me what I should do. She helped me understand where the fear came from. That changed everything.',
        name: '— Sophie L.',
        tag: 'Coaching',
      },
      {
        quote:
          'At last, someone who truly takes time. 75 minutes just for me. For the first time in this pregnancy, I felt fully heard.',
        name: '— Lena M.',
        tag: 'Support',
      },
    ],
  },
} satisfies LocalizedHomeSection<TestimonialsContent>;
