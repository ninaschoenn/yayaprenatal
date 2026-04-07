export interface BodyMapMarker {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  side: 'L' | 'R';
  cat: keyof typeof bodyMapCategories;
  mother: string;
  baby: string;
  gap: string;
}

export const bodyMapCategories = {
  blood: { color: '#E8A89A', label: 'Blut & Eisen' },
  vitamin: { color: '#D4A856', label: 'Vitamine & Hormone' },
  organ: { color: '#7EA882', label: 'Organe' },
  safety: { color: '#8AAEC4', label: 'Sicherheit' },
} as const;

export const bodyMapMarkers: BodyMapMarker[] = [
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
      'Knochen, Zähne, Herzrhythmus, Zellteilung — dein Baby nimmt sich was es braucht. Aus deinen Reserven.',
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
];
