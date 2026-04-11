import type { LocalizedHomeSection, PackagesContent } from './types';

export const packages = {
  de: {
    eyebrow: 'Das Angebot',
    titlePrefix: 'Finde deinen Weg zu',
    titleAccent: 'Yaya.',
    introEyebrow: 'Das Paket',
    introText:
      'Die umfassendste Form der Begleitung — für Frauen, die tiefer schauen wollen.',
    featuredBadge: 'Empfehlung',
    oneOffEyebrow: 'Einzelleistungen',
    oneOffIntro: 'Wenn Complete Care nicht passt — einzelne Bausteine für deinen Weg.',
    introOffer: {
      label: 'Kennenlernen',
      title: 'Erstgespräch',
      price: 'Kostenlos',
      details: [
        '20 Minuten, die Klarheit schaffen.',
        'Wir lernen uns kennen.',
        'Deine Fragen, deine Situation.',
        'Kein Verkaufsgespräch. Versprochen.',
      ],
    },
    primaryOffer: {
      label: 'Blut + Coaching + Begleitung',
      title: 'Complete Care',
      tagline: 'Die volle Begleitung, die du gerade kennengelernt hast.',
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
      note: '',
    },
    oneOffOffers: [
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
    ],
  },
  en: {
    eyebrow: 'Offerings',
    titlePrefix: 'Find your way to',
    titleAccent: 'Yaya.',
    introEyebrow: 'The package',
    introText:
      'The most comprehensive form of support — for women who want to look deeper.',
    featuredBadge: 'Recommended',
    oneOffEyebrow: 'Single sessions',
    oneOffIntro: 'If Complete Care is not the right fit — single building blocks for your path.',
    introOffer: {
      label: 'Introduction',
      title: 'Intro Call',
      price: 'Free',
      details: [
        '20 minutes that create clarity.',
        'We get to know each other.',
        'Your questions, your situation.',
        'Not a sales call. Promise.',
      ],
    },
    primaryOffer: {
      label: 'Blood + coaching + support',
      title: 'Complete Care',
      tagline: 'The full journey you just read about.',
      price: '€495',
      priceSuffix: '/ month',
      duration: '6 months · 12 sessions of 75 min.',
      savings: 'Or €2,790 as a one-time payment (save €180).',
      details: [
        '3 blood analyses: baseline check + 2 progress checks (22 markers).',
        'Systemic coaching.',
        'Chat access between sessions.',
        'Welcome kit.',
        'Optional partner session.',
      ],
      note: '',
    },
    oneOffOffers: [
      {
        title: 'Basic Blood Analysis',
        price: '€270',
        accent: 'border-terra/60',
        details: [
          '1 appointment · 45 minutes.',
          '9 markers your gynecologist does not usually test.',
          'Thyroid, iron, vitamin D, and more.',
          'Detailed review + written report.',
        ],
      },
      {
        title: 'Basic + Extended',
        price: '€490',
        accent: 'border-terra/60',
        details: [
          '2 appointments across your pregnancy.',
          '22 markers — micronutrients, trace elements, thyroid, liver, and more.',
          'We test exactly the nutrients your body especially needs in that stage of pregnancy.',
        ],
      },
      {
        title: 'Coaching Session',
        price: '€190',
        accent: 'border-blush/60',
        details: [
          '60 minutes just for you.',
          'Systemic coaching for whatever is moving through you.',
          'Not generic advice. Real support.',
        ],
      },
      {
        title: 'Couples Session',
        price: '€220',
        accent: 'border-blush/60',
        details: [
          '60 minutes for both of you.',
          'Expectations, roles, uncertainties.',
          'So you can move into this new time as a team.',
        ],
      },
    ],
  },
} satisfies LocalizedHomeSection<PackagesContent>;
