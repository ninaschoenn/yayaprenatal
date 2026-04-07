import type { Locale } from './i18n';

export const homeContent = {
  de: {
    meta: {
      title: 'Yaya Prenatal — Ganzheitliche Schwangerschaftsbegleitung Berlin',
      description:
        'Blutanalysen, systemisches Coaching und persönliche Begleitung für deine Schwangerschaft. Heilpraktiker-Praxis in Friedrichshain, Berlin.',
    },
    hero: {
      eyebrow: 'Erweiterte Schwangerschaftsbegleitung · Friedrichshain',
      title: {
        line1: 'Verstehen, was',
        line2Prefix: '',
        line2Accent: 'in dir',
        line2Suffix: ' passiert —',
        line3: 'und was dein Körper wirklich braucht.',
      },
      bullets: [
        'Blutanalysen, die dir Klarheit geben.',
        'Supplemente, abgestimmt auf deine Werte.',
        'Innere Arbeit, die dich stärkt.',
      ],
      lead: 'Für eine Schwangerschaft, in der du dich sicher fühlst.',
      ctaLabel: 'Begleitung Anfragen',
      imageAlt: 'Nina von Yaya Prenatal',
    },
    forYou: {
      eyebrow: 'Für wen',
      titlePrefix: 'Vielleicht erkennst du',
      titleAccent: 'dich hier wieder.',
      items: [
        'Du möchtest deine Blutwerte wirklich verstehen — nicht nur „im Normbereich" sein.',
        'Du fragst dich, ob dein Körper optimal versorgt ist, oder ob etwas übersehen wird.',
        'Du willst Supplemente nicht „auf Verdacht" nehmen, sondern wissen, was du wirklich brauchst.',
        'Du möchtest dich innerlich vorbereiten auf das, was vor dir liegt.',
      ],
      closing: 'Dann bist du hier richtig.',
    },
    uspBridge: {
      prefix: 'Yaya verbindet, was bisher meist getrennt bleibt:',
      items: ['Blutwerte.', 'Versorgung.', 'Innere Begleitung.'],
    },
    gapStats: {
      eyebrow: 'Die Lücke',
      titlePrefix: 'Was die Standardvorsorge',
      titleAccent: 'nicht sieht.',
      intro:
        'Standardvorsorge ist gut. Aber sie zeigt dir nicht alles. Zwischen den kurzen Arztterminen bleiben Fragen offen — über deinen Körper und über dich.',
      stats: [
        {
          num: '10',
          unit: 'Minuten',
          text: 'So lange dauert ein durchschnittlicher Frauenarzt-Termin. Für Blutwerte jenseits vom Standard hat das System weder Zeit noch Budget.',
          accent: 'border-red-600',
          numColor: 'text-red-600',
        },
        {
          num: '18',
          unit: 'Marker',
          text: 'Achtzehn kritische Blutwerte — von Schilddrüse bis Leber — werden im Mutterpass nie getestet. Nie.',
          accent: 'border-terra',
          numColor: 'text-terra',
        },
        {
          num: '0',
          unit: 'Minuten',
          text: 'Für deine Ängste, deine Fragen, dein inneres Erleben. Emotionale Vorbereitung? Nicht Teil der Standardvorsorge.',
          accent: 'border-deep',
          numColor: 'text-deep',
        },
      ],
      steps: [
        {
          number: '01',
          title: 'Deine Ärztin sieht dein Baby.',
          text: 'Ultraschall, Blutdruck, Mutterpass — medizinische Grundversorgung.',
          numberClass: 'text-deep',
          titleClass: 'text-deep',
        },
        {
          number: '02',
          title: 'Deine Hebamme begleitet die Geburt.',
          text: 'Geburtsvorbereitung, Atemtechniken, Wochenbett.',
          numberClass: 'text-deep',
          titleClass: 'text-deep',
        },
        {
          number: '03',
          title: 'Yaya sieht dich.',
          text: 'Erweiterte Blutanalyse, individuelle Supplements nach deinen Werten, systemisches Coaching.',
          numberClass: 'text-terra',
          titleClass: 'text-terra',
        },
      ],
    },
    babyFirst: {
      intro:
        'Dein Körper schickt dir Signale. Müdigkeit, Heißhunger, Vergesslichkeit — das sind keine normalen Schwangerschaftsbeschwerden. Das sind',
      introAccent: 'Botschaften.',
      body: [
        'Die Natur lebt nach dem Motto: Baby first. Dein Baby nimmt sich, was es braucht — aus deinen Reserven. Deshalb spürst du den Mangel zuerst.',
        'Und was die Forschung heute weiß: Was dein Körper in der Schwangerschaft bereitstellt, prägt dein Kind weit über die Geburt hinaus. Nährstoffversorgung in diesen neun Monaten beeinflusst die Gesundheit deines Kindes — ein Leben lang. In der Wissenschaft heißt das',
      ],
      bodyAccent: 'fetale Programmierung.',
      bodySuffix: 'Lass uns hinschauen, was dein Körper dir sagen will.',
    },
    bodyMap: {
      eyebrow: 'Dein Körper-Check',
      title: 'Was wir in deinem Blut lesen.',
      intro:
        'Wir schauen nicht einfach auf Werte — wir verstehen, was sie für dich und dein Baby bedeuten.',
      description:
        '22 Marker. 18 davon testet deine Frauenärztin nicht. Die anderen 4 schon — aber isoliert, ohne das volle Bild. Klick auf einen Bereich und erfahre, warum er wichtig ist.',
      hint: 'Klick auf einen Marker',
      closeLabel: 'Details schließen',
      detailLabels: {
        mother: 'Für dich',
        baby: 'Für dein Baby',
        gap: 'Die Lücke',
      },
      categories: {
        blood: { color: '#E8A89A', label: 'Blut & Eisen' },
        vitamin: { color: '#D4A856', label: 'Vitamine & Hormone' },
        organ: { color: '#7EA882', label: 'Organe' },
        safety: { color: '#8AAEC4', label: 'Sicherheit' },
      },
      markers: [
        {
          id: 'tsh',
          label: 'Schilddrüse',
          sub: 'TSH + fT4',
          x: 47,
          y: 15,
          side: 'L',
          cat: 'vitamin',
          mother:
            'Steuert deinen Energiehaushalt, Stimmung und Stoffwechsel. Eine unterschwellige Schilddrüsenschwäche bleibt oft unerkannt — du fühlst dich einfach nur „müde".',
          baby:
            'Essentiell für die Gehirnentwicklung deines Babys. Besonders im 1. und 2. Trimester, wenn das Baby noch keine eigene Schilddrüse hat.',
          gap: 'Nicht im Mutterpass. Die meisten Frauenärztinnen testen das nie.',
        },
        {
          id: 'vitd',
          label: 'Vitamin D',
          sub: '25-OH',
          x: 49,
          y: 27,
          side: 'L',
          cat: 'vitamin',
          mother:
            '80% der Schwangeren in Berlin haben einen Mangel. Beeinflusst Immunsystem, Stimmung und Knochengesundheit.',
          baby:
            'Wichtig für Knochenwachstum, Immunentwicklung und kann das Risiko für Frühgeburt senken.',
          gap: 'Nicht im Mutterpass. Wird fast nie getestet.',
        },
        {
          id: 'iron',
          label: 'Eisenspeicher',
          sub: 'Ferritin',
          x: 45,
          y: 40,
          side: 'L',
          cat: 'blood',
          mother:
            'Nicht nur Hämoglobin — Ferritin zeigt deine echten Eisenreserven. Du kannst „normale" Blutwerte haben und trotzdem erschöpft sein.',
          baby:
            'Dein Baby baut im 3. Trimester eigene Eisenreserven auf. Wenn deine leer sind, fehlt es auch dem Baby.',
          gap:
            'Frauenärztinnen messen meist nur Hämoglobin. Das zeigt Eisenmangel erst, wenn es zu spät ist.',
        },
        {
          id: 'b12',
          label: 'Vitamin B12',
          sub: 'Cobalamin',
          x: 43,
          y: 53,
          side: 'L',
          cat: 'vitamin',
          mother:
            'Nervensystem, Energieproduktion, DNA-Synthese. Mangel macht müde und vergesslich — wird oft als „normal in der Schwangerschaft" abgetan.',
          baby: 'Kritisch für das Nervensystem und die Gehirnentwicklung deines Babys.',
          gap: 'Nicht im Mutterpass.',
        },
        {
          id: 'folate',
          label: 'Folsäure',
          sub: 'Folat',
          x: 47,
          y: 66,
          side: 'L',
          cat: 'vitamin',
          mother:
            'Das bekannteste Schwangerschaftsvitamin — aber wird dein Spiegel jemals gemessen? Supplemente sind nicht gleich ausreichend.',
          baby:
            'Schützt vor Neuralrohrdefekten. Im 1. Trimester am wichtigsten, bleibt aber die ganze Schwangerschaft relevant.',
          gap:
            'Alle nehmen Folsäure, aber kaum jemand kontrolliert den tatsächlichen Spiegel.',
        },
        {
          id: 'minerals',
          label: 'Mineralien',
          sub: 'Magnesium · Calcium · Zink',
          x: 46,
          y: 79,
          side: 'L',
          cat: 'vitamin',
          mother:
            'Wadenkrämpfe, Herzrasen, Schlafprobleme — oft Magnesiummangel. Calcium für dein Skelett. Zink für Immunsystem und Wundheilung bei der Geburt.',
          baby:
            'Knochen, Zähne, Herzrhythmus, Zellteilung — dein Baby nimmt sich, was es braucht. Aus deinen Reserven.',
          gap: 'Nicht im Mutterpass.',
        },
        {
          id: 'hb',
          label: 'Blutbild',
          sub: 'Hb · MCV · WBC · Thrombo',
          x: 50,
          y: 21,
          side: 'R',
          cat: 'blood',
          mother:
            'Zeigt Anämie, Immunstatus und Gerinnungsfähigkeit. Dein Blutvolumen steigt in der Schwangerschaft um 50%.',
          baby: 'Sauerstofftransport zum Baby. Anämie erhöht das Frühgeburtsrisiko.',
          gap: 'Wird gemessen, aber Yaya kontrolliert häufiger und genauer.',
        },
        {
          id: 'liver',
          label: 'Leber',
          sub: 'ALT · AST',
          x: 43,
          y: 34,
          side: 'R',
          cat: 'organ',
          mother:
            'Schwangerschaftscholestase und HELLP-Syndrom zeigen sich zuerst in den Leberwerten. Früherkennung kann lebensrettend sein.',
          baby: 'Leberkomplikationen können zu Frühgeburt führen.',
          gap:
            'Nicht im Mutterpass. Wird erst getestet, wenn Symptome auftreten — dann oft zu spät.',
        },
        {
          id: 'sugar',
          label: 'Blutzucker',
          sub: 'Glucose · HbA1c',
          x: 55,
          y: 47,
          side: 'R',
          cat: 'blood',
          mother:
            'Gestationsdiabetes betrifft 5–10% aller Schwangeren. HbA1c zeigt den Langzeit-Trend.',
          baby:
            'Dauerhaft erhöhter Zucker lässt das Baby zu schnell wachsen. Erhöhtes Risiko für Komplikationen bei der Geburt.',
          gap: 'Standard-Glucosetest kommt erst spät. HbA1c ist nicht im Mutterpass.',
        },
        {
          id: 'kidney',
          label: 'Niere',
          sub: 'Kreatinin · Urin',
          x: 52,
          y: 60,
          side: 'R',
          cat: 'organ',
          mother:
            'Deine Nieren arbeiten in der Schwangerschaft auf Hochtouren. Frühzeichen von Präeklampsie zeigen sich hier.',
          baby: 'Präeklampsie ist eine der gefährlichsten Schwangerschaftskomplikationen.',
          gap: 'Urin-Schnelltest ist Standard. Kreatinin im Blut? Nicht im Mutterpass.',
        },
        {
          id: 'infect',
          label: 'Infektionen',
          sub: 'Toxo · CMV · Röteln',
          x: 50,
          y: 73,
          side: 'R',
          cat: 'safety',
          mother:
            'Einmalige Tests die zeigen, ob du immun bist. Besonders CMV — das häufigste angeborene Virus — wird fast nie getestet.',
          baby:
            'Erstinfektionen in der Schwangerschaft können zu Hörschäden, Entwicklungsverzögerungen oder schweren Komplikationen führen.',
          gap: 'CMV ist der größte blinde Fleck in der Standardvorsorge.',
        },
        {
          id: 'inflam',
          label: 'Entzündung',
          sub: 'CRP · D-Dimere',
          x: 48,
          y: 86,
          side: 'R',
          cat: 'safety',
          mother:
            'Stille Entzündungen und Gerinnungsrisiken. D-Dimere steigen in der Schwangerschaft natürlich — aber zu stark erhöhte Werte können auf Thrombose hinweisen.',
          baby: 'Chronische Entzündung beeinflusst die Plazenta-Funktion.',
          gap: 'Nicht im Mutterpass.',
        },
      ],
    },
    coaching: {
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
    howItWorks: {
      eyebrow: 'So läuft es ab',
      title: 'Blut + Coaching + alles dazwischen.',
      noteBefore: 'Deine Begleitung im ',
      noteAccent: 'Complete Care',
      noteAfter: ' Paket.',
      features: [
        {
          icon: '🩸',
          title: 'Alle 2 Wochen: Dein Termin',
          text: '75 Minuten nur für dich. Je nach Bedarf mit Blutabnahme und Besprechung der Ergebnisse, immer mit systemischem Coaching. Kein Zeitdruck.',
        },
        {
          icon: '💬',
          title: 'Chat-Zugang',
          text: 'WhatsApp oder Signal — du wählst. Zwischen den Terminen bin ich eine Nachricht entfernt.',
        },
        {
          icon: '💊',
          title: 'Ernährung & Supplements',
          text: 'Basierend auf deinen Blutwerten: was dein Körper jetzt wirklich braucht. Keine Standard-Prenatal-Vitamine.',
        },
        {
          icon: '👫',
          title: 'Partner-Session',
          text: 'Dein Partner ist willkommen. Systemisches Coaching zu zweit — Kommunikation, gemeinsame Ängste, als Team in die Elternschaft.',
        },
      ],
    },
    packages: {
      eyebrow: 'Das Angebot',
      titlePrefix: 'Finde deinen Weg zu',
      titleAccent: 'Yaya.',
      introEyebrow: 'Das Paket',
      introText:
        'Die umfassendste Form der Begleitung — für Frauen, die tiefer schauen wollen.',
      featuredBadge: 'Empfehlung',
      oneOffEyebrow: 'Einzelleistungen',
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
    journey: {
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
    about: {
      eyebrow: 'Über Nina',
      title: 'Wer an deiner Seite steht.',
      subtitle: 'Schwanger — und jetzt?',
      paragraphs: [
        'Als ich in deiner Situation war, habe ich nächtelang gegoogelt. Was jetzt zu tun ist. Was normal ist und was nicht. Ich habe nach irgendwas gesucht, das mir Sicherheit gibt. Das mir beweist: alles ist gut, du machst das richtig. Ich habe Kurse gebucht, mich vorbereitet — und irgendwie nie gefunden, was ich brauchte. Jedenfalls nicht an einem Ort.',
        'Zwischen Gynäkologin und Hebamme - die beide unerlässlich sind - gibt es eine Lücke. Einen Ort, an dem du als Mama im Mittelpunkt stehst. Mit all deinen Bedürfnissen. Deinen Blutwerten. Deinen Ängsten.',
        'Elf Jahre später habe ich diesen Ort selbst erschaffen. Meine Praxis.',
      ],
      practiceName: 'Yaya.',
      closing:
        'Für mich seid ihr Mamas die beeindruckendsten und schönsten Lebewesen auf diesem Planeten. Ihr habt alles verdient. Alles. Ich freue mich, euch durch diese besondere Zeit zu begleiten.',
      credentialsLabel: 'Nina ist:',
      credentials: [
        'Heilpraktikerin',
        'Zertifizierte Ernährungsberaterin',
        'Ausgebildet im Systemischen Coaching',
      ],
      imageAlt: 'Nina von Yaya Prenatal',
    },
    testimonials: {
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
    cta: {
      titlePrefix: 'Bereit für',
      titleAccent: 'mehr',
      titleSuffix: '?',
      body:
        'Du kannst mir jederzeit schreiben und wir schauen gemeinsam, ob diese Form der Begleitung zu dir passt.',
      buttonLabel: 'Schreib Mir',
      responseLabel: 'Ich antworte dir persönlich.',
      labels: {
        email: 'Email',
        phone: 'Telefon',
        address: 'Adresse',
      },
    },
    disclaimer:
      'Yaya ist eine ganzheitliche Ergänzung zu deiner Schwangerschaftsvorsorge — kein Ersatz. Unsere Begleitung ersetzt weder die ärztlichen Vorsorgeuntersuchungen noch die Arbeit deiner Hebamme. Wir arbeiten Hand in Hand mit deinem bestehenden Betreuungsteam, damit du die umfassendste Begleitung bekommst, die möglich ist.',
  },
  en: {
    meta: {
      title: 'Yaya Prenatal — Holistic Pregnancy Support in Berlin',
      description:
        'Advanced blood analysis, systemic coaching, and personal support throughout pregnancy in Friedrichshain, Berlin.',
    },
    hero: {
      eyebrow: 'Expanded Pregnancy Support · Friedrichshain',
      title: {
        line1: 'Understand what',
        line2Prefix: 'is happening',
        line2Accent: 'inside you',
        line2Suffix: ' —',
        line3: 'and what your body truly needs.',
      },
      bullets: [
        'Blood analysis that gives you clarity.',
        'Supplements tailored to your results.',
        'Inner work that strengthens you.',
      ],
      lead: 'For a pregnancy where you feel informed, supported, and safe.',
      ctaLabel: 'Request Support',
      imageAlt: 'Nina from Yaya Prenatal',
    },
    forYou: {
      eyebrow: 'Who it is for',
      titlePrefix: 'You may recognize',
      titleAccent: 'yourself here.',
      items: [
        'You want to truly understand your bloodwork — not just hear that everything is “within range.”',
        'You are wondering whether your body is genuinely well nourished, or whether something important is being missed.',
        'You do not want to take supplements by guesswork. You want to know what you actually need.',
        'You want to prepare inwardly for what is ahead of you.',
      ],
      closing: 'Then you are in the right place.',
    },
    uspBridge: {
      prefix: 'Yaya brings together what is usually kept apart:',
      items: ['Bloodwork.', 'Nourishment.', 'Inner support.'],
    },
    gapStats: {
      eyebrow: 'The gap',
      titlePrefix: 'What standard prenatal care',
      titleAccent: 'does not see.',
      intro:
        'Standard prenatal care matters. But it does not show you everything. Between short appointments, questions remain open — about your body and about you.',
      stats: [
        {
          num: '10',
          unit: 'Minutes',
          text: 'That is the average length of a gynecologist appointment. The system has neither the time nor the budget for bloodwork beyond the basics.',
          accent: 'border-red-600',
          numColor: 'text-red-600',
        },
        {
          num: '18',
          unit: 'Markers',
          text: 'Eighteen critical blood markers — from thyroid to liver — are never tested in the maternity record. Never.',
          accent: 'border-terra',
          numColor: 'text-terra',
        },
        {
          num: '0',
          unit: 'Minutes',
          text: 'For your fears, your questions, your inner experience. Emotional preparation? Not part of standard prenatal care.',
          accent: 'border-deep',
          numColor: 'text-deep',
        },
      ],
      steps: [
        {
          number: '01',
          title: 'Your doctor sees your baby.',
          text: 'Ultrasound, blood pressure, maternity record — the medical basics.',
          numberClass: 'text-deep',
          titleClass: 'text-deep',
        },
        {
          number: '02',
          title: 'Your midwife prepares you for birth.',
          text: 'Birth preparation, breathing techniques, postpartum support.',
          numberClass: 'text-deep',
          titleClass: 'text-deep',
        },
        {
          number: '03',
          title: 'Yaya sees you.',
          text: 'Advanced blood analysis, tailored supplements based on your results, and systemic coaching.',
          numberClass: 'text-terra',
          titleClass: 'text-terra',
        },
      ],
    },
    babyFirst: {
      intro:
        'Your body is sending you signals. Fatigue, cravings, forgetfulness — these are not just normal pregnancy discomforts. They are',
      introAccent: 'messages.',
      body: [
        'Nature works by one rule: baby first. Your baby takes what it needs — from your reserves. That is why you feel the shortage first.',
        'And what research now shows is this: what your body provides during pregnancy shapes your child far beyond birth. Nutrient support during these nine months influences your child’s health for a lifetime. In science, this is called',
      ],
      bodyAccent: 'fetal programming.',
      bodySuffix: 'Let us look at what your body is trying to tell you.',
    },
    bodyMap: {
      eyebrow: 'Your body check',
      title: 'What we read in your blood.',
      intro:
        'We do not just look at numbers — we look at what they mean for you and for your baby.',
      description:
        '22 markers. 18 of them are not part of standard gynecological screening. The other 4 may be checked, but in isolation and without the full picture. Click on an area to see why it matters.',
      hint: 'Click on a marker',
      closeLabel: 'Close details',
      detailLabels: {
        mother: 'For you',
        baby: 'For your baby',
        gap: 'The gap',
      },
      categories: {
        blood: { color: '#E8A89A', label: 'Blood & Iron' },
        vitamin: { color: '#D4A856', label: 'Vitamins & Hormones' },
        organ: { color: '#7EA882', label: 'Organs' },
        safety: { color: '#8AAEC4', label: 'Safety' },
      },
      markers: [
        {
          id: 'tsh',
          label: 'Thyroid',
          sub: 'TSH + fT4',
          x: 47,
          y: 15,
          side: 'L',
          cat: 'vitamin',
          mother:
            'It regulates your energy, mood, and metabolism. Mild thyroid dysfunction often goes unnoticed — you are simply told that you are tired.',
          baby:
            'Essential for your baby’s brain development, especially in the first and second trimester, before the baby has its own functioning thyroid.',
          gap: 'Not part of the maternity record. Most gynecologists never test it.',
        },
        {
          id: 'vitd',
          label: 'Vitamin D',
          sub: '25-OH',
          x: 49,
          y: 27,
          side: 'L',
          cat: 'vitamin',
          mother:
            'Around 80% of pregnant women in Berlin are deficient. It affects the immune system, mood, and bone health.',
          baby:
            'Important for bone growth, immune development, and may reduce the risk of preterm birth.',
          gap: 'Not part of the maternity record. It is rarely tested.',
        },
        {
          id: 'iron',
          label: 'Iron Stores',
          sub: 'Ferritin',
          x: 45,
          y: 40,
          side: 'L',
          cat: 'blood',
          mother:
            'Hemoglobin is not the whole story — ferritin shows your real iron reserves. Your lab work can look “normal” and you can still be depleted.',
          baby:
            'Your baby builds up its own iron stores in the third trimester. If yours are empty, your baby starts with less as well.',
          gap:
            'Most gynecologists only measure hemoglobin. That often reveals iron deficiency only when it is already advanced.',
        },
        {
          id: 'b12',
          label: 'Vitamin B12',
          sub: 'Cobalamin',
          x: 43,
          y: 53,
          side: 'L',
          cat: 'vitamin',
          mother:
            'It matters for your nervous system, energy production, and DNA synthesis. Deficiency can cause fatigue and forgetfulness and is often dismissed as “normal in pregnancy.”',
          baby: 'Critical for your baby’s nervous system and brain development.',
          gap: 'Not part of the maternity record.',
        },
        {
          id: 'folate',
          label: 'Folate',
          sub: 'Folate',
          x: 47,
          y: 66,
          side: 'L',
          cat: 'vitamin',
          mother:
            'It is the best-known pregnancy vitamin — but is your level ever actually measured? Supplements are not automatically enough.',
          baby:
            'It protects against neural tube defects. Most important in the first trimester, but relevant throughout pregnancy.',
          gap:
            'Almost everyone takes folate, but very few people ever check whether their actual levels are sufficient.',
        },
        {
          id: 'minerals',
          label: 'Minerals',
          sub: 'Magnesium · Calcium · Zinc',
          x: 46,
          y: 79,
          side: 'L',
          cat: 'vitamin',
          mother:
            'Calf cramps, palpitations, and poor sleep can point to magnesium deficiency. Calcium supports your skeleton. Zinc matters for immunity and wound healing during birth.',
          baby:
            'Bones, teeth, heart rhythm, cell division — your baby takes what it needs, from your reserves.',
          gap: 'Not part of the maternity record.',
        },
        {
          id: 'hb',
          label: 'Blood Count',
          sub: 'Hb · MCV · WBC · Platelets',
          x: 50,
          y: 21,
          side: 'R',
          cat: 'blood',
          mother:
            'It shows anemia, immune status, and clotting capacity. Your blood volume increases by around 50% during pregnancy.',
          baby: 'It affects oxygen transport to the baby. Anemia increases the risk of preterm birth.',
          gap: 'It is tested, but Yaya checks more closely and in better context.',
        },
        {
          id: 'liver',
          label: 'Liver',
          sub: 'ALT · AST',
          x: 43,
          y: 34,
          side: 'R',
          cat: 'organ',
          mother:
            'Pregnancy cholestasis and HELLP syndrome can show up first in liver values. Early recognition can be life-saving.',
          baby: 'Liver complications can lead to preterm birth.',
          gap:
            'Not part of the maternity record. It is usually tested only once symptoms appear — often too late.',
        },
        {
          id: 'sugar',
          label: 'Blood Sugar',
          sub: 'Glucose · HbA1c',
          x: 55,
          y: 47,
          side: 'R',
          cat: 'blood',
          mother:
            'Gestational diabetes affects roughly 5–10% of pregnancies. HbA1c shows the longer-term trend.',
          baby:
            'Persistently elevated blood sugar can cause the baby to grow too quickly and increases the risk of birth complications.',
          gap: 'The standard glucose test comes late. HbA1c is not part of the maternity record.',
        },
        {
          id: 'kidney',
          label: 'Kidneys',
          sub: 'Creatinine · Urine',
          x: 52,
          y: 60,
          side: 'R',
          cat: 'organ',
          mother:
            'Your kidneys work at full capacity during pregnancy. Early signs of preeclampsia often appear here.',
          baby: 'Preeclampsia is one of the most dangerous pregnancy complications.',
          gap: 'A quick urine dipstick is standard. Blood creatinine? Not part of the maternity record.',
        },
        {
          id: 'infect',
          label: 'Infections',
          sub: 'Toxo · CMV · Rubella',
          x: 50,
          y: 73,
          side: 'R',
          cat: 'safety',
          mother:
            'These one-time tests show whether you are immune. CMV in particular — the most common congenital virus — is still rarely checked.',
          baby:
            'A first infection during pregnancy can lead to hearing loss, developmental delays, or severe complications.',
          gap: 'CMV remains one of the biggest blind spots in standard prenatal care.',
        },
        {
          id: 'inflam',
          label: 'Inflammation',
          sub: 'CRP · D-Dimers',
          x: 48,
          y: 86,
          side: 'R',
          cat: 'safety',
          mother:
            'Silent inflammation and clotting risks matter. D-dimers naturally rise during pregnancy, but values that are too high can point to thrombosis.',
          baby: 'Chronic inflammation can affect placental function.',
          gap: 'Not part of the maternity record.',
        },
      ],
    },
    coaching: {
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
    howItWorks: {
      eyebrow: 'How it works',
      title: 'Blood + coaching + everything in between.',
      noteBefore: 'Your support inside the ',
      noteAccent: 'Complete Care',
      noteAfter: ' package.',
      features: [
        {
          icon: '🩸',
          title: 'Every 2 weeks: your session',
          text: '75 minutes that are just for you. Depending on what you need, this may include blood draws and reviewing the results, always together with systemic coaching. No rush.',
        },
        {
          icon: '💬',
          title: 'Chat access',
          text: 'WhatsApp or Signal — you choose. Between sessions, I am one message away.',
        },
        {
          icon: '💊',
          title: 'Nutrition & supplements',
          text: 'Based on your bloodwork: what your body truly needs right now. Not generic prenatal vitamins.',
        },
        {
          icon: '👫',
          title: 'Partner session',
          text: 'Your partner is welcome. Systemic coaching for the two of you — communication, shared fears, and stepping into parenthood as a team.',
        },
      ],
    },
    packages: {
      eyebrow: 'Offerings',
      titlePrefix: 'Find your way to',
      titleAccent: 'Yaya.',
      introEyebrow: 'The package',
      introText:
        'The most comprehensive form of support — for women who want to look deeper.',
      featuredBadge: 'Recommended',
      oneOffEyebrow: 'Single sessions',
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
        note: 'This support is not a one-off appointment — it is a shared process.',
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
    journey: {
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
    about: {
      eyebrow: 'About Nina',
      title: 'Who will be by your side.',
      subtitle: 'Pregnant — and now what?',
      paragraphs: [
        'When I was in your position, I spent night after night searching online. What should I do now? What is normal and what is not? I was looking for something that would give me a sense of safety. Something that would reassure me that everything was okay and that I was doing this right. I booked courses, I prepared — and still I never found what I actually needed. At least not in one place.',
        'Between the gynecologist and the midwife — both of whom are essential — there is a gap. A place where you, as the mother, are at the center. With all of your needs. Your blood values. Your fears.',
        'Eleven years later, I created that place myself. My practice.',
      ],
      practiceName: 'Yaya.',
      closing:
        'To me, mothers are the most impressive and beautiful beings on this planet. You deserve everything. Everything. I look forward to supporting you through this extraordinary time.',
      credentialsLabel: 'Nina is:',
      credentials: [
        'Heilpraktikerin',
        'Certified nutrition counselor',
        'Trained in systemic coaching',
      ],
      imageAlt: 'Nina from Yaya Prenatal',
    },
    testimonials: {
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
    cta: {
      titlePrefix: 'Ready for',
      titleAccent: 'more',
      titleSuffix: '?',
      body:
        'You can write to me any time, and we can look together at whether this kind of support is right for you.',
      buttonLabel: 'Write To Me',
      responseLabel: 'I reply personally.',
      labels: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
      },
    },
    disclaimer:
      'Yaya is a holistic addition to your prenatal care — not a replacement. Our support does not replace prenatal check-ups by your doctor or the work of your midwife. We work hand in hand with your existing care team so that you receive the most comprehensive support possible.',
  },
} as const satisfies Record<Locale, unknown>;

export type HomeContent = (typeof homeContent)[Locale];
