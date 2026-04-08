import type { CtaContent, LocalizedHomeSection } from './types';

export const cta = {
  de: {
    titlePrefix: 'Bereit für',
    titleAccent: 'mehr',
    titleSuffix: '?',
    body:
      'Du kannst mir jederzeit schreiben und wir schauen gemeinsam, ob diese Form der Begleitung zu dir passt.',
    buttonLabel: 'Schreib Mir',
    labels: {
      email: 'Email',
      phone: 'Telefon',
      address: 'Adresse',
      copy: 'Klicken zum Kopieren',
      copied: 'Kopiert',
    },
  },
  en: {
    titlePrefix: 'Ready for',
    titleAccent: 'more',
    titleSuffix: '?',
    body:
      'You can write to me any time, and we can look together at whether this kind of support is right for you.',
    buttonLabel: 'Write To Me',
    labels: {
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      copy: 'Click to copy',
      copied: 'Copied',
    },
  },
} satisfies LocalizedHomeSection<CtaContent>;
