export type Locale = 'de' | 'en';
export type PageKey = 'home' | 'imprint' | 'privacy';

export const localeInfo = {
  de: {
    lang: 'de',
    ogLocale: 'de_DE',
    name: 'Deutsch',
    shortName: 'DE',
  },
  en: {
    lang: 'en',
    ogLocale: 'en_GB',
    name: 'English',
    shortName: 'EN',
  },
} as const;

export const pageRoutes = {
  de: {
    home: '/',
    imprint: '/impressum/',
    privacy: '/datenschutz/',
  },
  en: {
    home: '/en/',
    imprint: '/en/imprint/',
    privacy: '/en/privacy/',
  },
} as const;

export const sectionIds = {
  de: {
    packages: 'paket',
    about: 'ueber',
    contact: 'kontakt',
  },
  en: {
    packages: 'packages',
    about: 'about',
    contact: 'contact',
  },
} as const;

export const uiCopy = {
  de: {
    nav: {
      packageLabel: 'Paket',
      aboutLabel: 'Über mich',
      contactLabel: 'Kontakt',
      menuOpenLabel: 'Menü öffnen',
      menuCloseLabel: 'Menü schließen',
      languageSwitcherLabel: 'Sprache wechseln',
    },
    footer: {
      imprintLabel: 'Impressum',
      privacyLabel: 'Datenschutz',
    },
    legalEyebrow: 'Rechtliches',
  },
  en: {
    nav: {
      packageLabel: 'Offerings',
      aboutLabel: 'About',
      contactLabel: 'Contact',
      menuOpenLabel: 'Open menu',
      menuCloseLabel: 'Close menu',
      languageSwitcherLabel: 'Switch language',
    },
    footer: {
      imprintLabel: 'Imprint',
      privacyLabel: 'Privacy',
    },
    legalEyebrow: 'Legal',
  },
} as const;

export function getNavLinks(locale: Locale) {
  const routes = pageRoutes[locale];
  const ids = sectionIds[locale];
  const labels = uiCopy[locale].nav;

  return [
    { label: labels.packageLabel, href: `${routes.home}#${ids.packages}` },
    { label: labels.aboutLabel, href: `${routes.home}#${ids.about}` },
    { label: labels.contactLabel, href: `${routes.home}#${ids.contact}` },
  ];
}

export function getLanguageLinks(pageKey: PageKey) {
  return (Object.keys(localeInfo) as Locale[]).map((locale) => ({
    locale,
    href: pageRoutes[locale][pageKey],
    lang: localeInfo[locale].lang,
    label: localeInfo[locale].shortName,
  }));
}

export function getAlternateLinks(pageKey: PageKey) {
  return [
    { hreflang: 'de-DE', href: pageRoutes.de[pageKey] },
    { hreflang: 'en', href: pageRoutes.en[pageKey] },
    { hreflang: 'x-default', href: pageRoutes.de[pageKey] },
  ];
}
