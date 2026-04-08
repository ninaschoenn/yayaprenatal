import type { LocalizedHomeSection, UspBridgeContent } from './types';

export const uspBridge = {
  de: {
    prefix: 'Yaya verbindet, was bisher meist getrennt bleibt:',
    items: ['Blutwerte.', 'Versorgung.', 'Innere Begleitung.'],
  },
  en: {
    prefix: 'Yaya brings together what is usually kept apart:',
    items: ['Bloodwork.', 'Nourishment.', 'Inner support.'],
  },
} satisfies LocalizedHomeSection<UspBridgeContent>;
