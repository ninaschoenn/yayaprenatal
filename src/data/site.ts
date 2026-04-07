export const site = {
  name: 'Yaya Prenatal',
  url: 'https://yayaprenatal.de',
  locale: 'de_DE',
  language: 'de',
  publicContact: {
    email: 'nina@yayaprenatal.de',
    phone: '0172 3479464',
    phoneHref: 'tel:+491723479464',
    emailHref: 'mailto:nina@yayaprenatal.de',
    addressShort: 'Krossener Str. 2, Friedrichshain',
  },
  legalContact: {
    name: 'Janina Schoenn',
    displayName: 'Janina Schönn',
    title: 'Heilpraktikerin',
    brand: 'Yaya Prenatal',
    email: 'janina.schoenn@gmail.com',
    emailHref: 'mailto:janina.schoenn@gmail.com',
    phone: '0172 3479464',
    phoneHref: 'tel:+491723479464',
    street: 'Krossener Straße 2',
    postalCode: '10245',
    city: 'Berlin',
    country: 'Deutschland',
  },
  socialImage: {
    path: '/images/optimized/og-yaya-prenatal.jpg',
    width: 1200,
    height: 630,
  },
  business: {
    neighborhood: 'Friedrichshain',
    region: 'Berlin',
    countryCode: 'DE',
    medicalSpecialty: 'Prenatal Care',
    availableLanguages: ['German'],
    priceRange: '€€',
  },
} as const;

export const navLinks = [
  { label: 'Paket', href: '/#paket' },
  { label: 'Über mich', href: '/#ueber' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;
