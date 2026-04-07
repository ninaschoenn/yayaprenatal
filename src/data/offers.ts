export const introOffer = {
  label: 'Kennenlernen',
  title: 'Erstgespräch',
  price: 'Kostenlos',
  details: [
    '20 Minuten, die Klarheit schaffen.',
    'Wir lernen uns kennen.',
    'Deine Fragen, deine Situation.',
    'Kein Verkaufsgespräch. Versprochen.',
  ],
} as const;

export const primaryOffer = {
  label: 'Blut + Coaching + Begleitung',
  title: 'Complete Care',
  price: '€495',
  priceSuffix: '/ Monat',
  duration: '6 Monate · 12 Termine à 75 Min.',
  savings: 'Oder €2.790 bei Einmalzahlung (spare €180).',
  details: [
    '3 Blutanalysen: Basis-Check + 2 Verlaufs-Checks (22 Marker).',
    'Systemisches Coaching.',
    'Chat-Zugang zwischen Terminen.',
    'Welcome Kit.',
    'Partner-Session optional.',
  ],
  note: 'Diese Begleitung ist kein einmaliger Termin — sondern ein gemeinsamer Prozess.',
} as const;

export const oneOffOffers = [
  {
    title: 'Blutanalyse Basis',
    price: '€270',
    accent: 'border-terra/60',
    details: [
      '1 Termin · 45 Minuten.',
      '9 Marker, die deine Ärztin nicht testet.',
      'Schilddrüse, Eisen, Vitamin D & mehr.',
      'Ausführliche Besprechung + Bericht.',
    ],
  },
  {
    title: 'Basis + Erweitert',
    price: '€490',
    accent: 'border-terra/60',
    details: [
      '2 Termine über deine Schwangerschaft verteilt.',
      '22 Marker — Mikronährstoffe, Spurenelemente, Schilddrüse, Leber & mehr.',
      'Wir testen genau die Nährstoffe, die dein Körper in der jeweiligen SSW besonders braucht.',
    ],
  },
  {
    title: 'Coaching-Session',
    price: '€190',
    accent: 'border-blush/60',
    details: [
      '60 Minuten nur für dich.',
      'Systemisches Coaching für alles, was dich bewegt.',
      'Kein Ratgeber-Gespräch. Echte Begleitung.',
    ],
  },
  {
    title: 'Paarsession',
    price: '€220',
    accent: 'border-blush/60',
    details: [
      '60 Minuten für euch beide.',
      'Erwartungen, Rollen, Unsicherheiten.',
      'Damit ihr als Team in diese neue Zeit geht.',
    ],
  },
] as const;
