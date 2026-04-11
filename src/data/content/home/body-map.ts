import type { BodyMapContent, LocalizedHomeSection } from './types';

export const bodyMap = {
  de: {
    eyebrow: 'Dein Körper-Check',
    title: 'Was uns dein Blut verrät.',
    intro:
      'Wir schauen nicht einfach auf Werte — wir verstehen, was sie für dich und dein Baby bedeuten.',
    description:
      '22 Marker. 18 davon testet die Standardvorsorge nicht.\nDie anderen 4 ohne das volle Bild.\nKlick auf einen Bereich und erfahre, warum er wichtig ist.',
    hint:
      'Wir bieten zwei Analyse-Pakete an. Je nachdem, in welcher SSW du bist. Klicke auf einen Button und erfahre, welche Werte in welchem Bluttest enthalten sind.',
    closeLabel: 'Details schließen',
    testFilter: {
      basis: 'Basis Bluttest',
      verlauf: 'Verlaufs Bluttest',
    },
    testDescriptions: {
      basis:
        'Frühes Screening, bevor Symptome entstehen. Dein Baby hat im 1. und 2. Trimester noch keine eigene Schilddrüse und braucht deine Hormone für die Gehirnentwicklung. Auch für Nervenentwicklung und Zellteilung ist es anfangs komplett auf deine Reserven angewiesen.',
      verlauf:
        'Dein Körper verändert sich rasant — 40 % mehr Blutvolumen, höherer Mineralstoffbedarf, steigende Belastung für Leber und Nieren. Der Verlaufs-Bluttest zeigt, ob deine Reserven mithalten und dein Baby gut versorgt ist.',
    },
    testTimings: {
      basis: 'optimal in SSW 12–16',
      verlauf: 'optimal in SSW 24–28 und SSW 32–36',
    },
    detailLabels: {
      mother: 'Für dich',
      baby: 'Für dein Baby',
      gap: 'Die Lücke',
    },
    categories: {
      blood: { color: '#E07856', label: 'Blut & Eisen' },
      vitamin: { color: '#D4A856', label: 'Vitamine & Hormone' },
      organ: { color: '#7EA882', label: 'Organe' },
      safety: { color: '#8AAEC4', label: 'Sicherheit' },
    },
    markers: [
      {
        id: 'tsh',
        label: 'Schilddrüse',
        sub: 'TSH + fT4',
        x: 48,
        y: 14,
        side: 'L',
        cat: 'vitamin',
        tests: ['basis'],
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
        x: 52,
        y: 26,
        side: 'R',
        cat: 'vitamin',
        tests: ['basis'],
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
        tests: ['basis', 'verlauf'],
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
        x: 52,
        y: 54,
        side: 'R',
        cat: 'vitamin',
        tests: ['basis'],
        mother:
          'Nervensystem, Energieproduktion, DNA-Synthese. Mangel macht müde und vergesslich — wird oft als „normal in der Schwangerschaft" abgetan.',
        baby: 'Kritisch für das Nervensystem und die Gehirnentwicklung deines Babys.',
        gap: 'Nicht im Mutterpass.',
      },
      {
        id: 'folate',
        label: 'Folsäure',
        sub: 'Folat',
        x: 48,
        y: 66,
        side: 'L',
        cat: 'vitamin',
        tests: ['basis'],
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
        x: 58,
        y: 72,
        side: 'R',
        cat: 'vitamin',
        tests: ['verlauf'],
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
        x: 42,
        y: 22,
        side: 'L',
        cat: 'blood',
        tests: ['verlauf'],
        mother:
          'Zeigt Anämie, Immunstatus und Gerinnungsfähigkeit. Dein Blutvolumen steigt in der Schwangerschaft um 50%.',
        baby: 'Sauerstofftransport zum Baby. Anämie erhöht das Frühgeburtsrisiko.',
        gap: 'Wird gemessen, aber Yaya kontrolliert häufiger und genauer.',
      },
      {
        id: 'liver',
        label: 'Leber',
        sub: 'ALT · AST',
        x: 58,
        y: 34,
        side: 'R',
        cat: 'organ',
        tests: ['verlauf'],
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
        x: 58,
        y: 46,
        side: 'R',
        cat: 'blood',
        tests: ['verlauf'],
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
        x: 42,
        y: 58,
        side: 'L',
        cat: 'organ',
        tests: ['verlauf'],
        mother:
          'Deine Nieren arbeiten in der Schwangerschaft auf Hochtouren. Frühzeichen von Präeklampsie zeigen sich hier.',
        baby: 'Präeklampsie ist eine der gefährlichsten Schwangerschaftskomplikationen.',
        gap: 'Urin-Schnelltest ist Standard. Kreatinin im Blut? Nicht im Mutterpass.',
      },
      {
        id: 'infect',
        label: 'Infektionen',
        sub: 'Toxo · CMV · Röteln',
        x: 52,
        y: 80,
        side: 'R',
        cat: 'safety',
        tests: ['basis'],
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
        x: 45,
        y: 88,
        side: 'L',
        cat: 'safety',
        tests: ['verlauf'],
        mother:
          'Stille Entzündungen und Gerinnungsrisiken. D-Dimere steigen in der Schwangerschaft natürlich — aber zu stark erhöhte Werte können auf Thrombose hinweisen.',
        baby: 'Chronische Entzündung beeinflusst die Plazenta-Funktion.',
        gap: 'Nicht im Mutterpass.',
      },
    ],
  },
  en: {
    eyebrow: 'Your body check',
    title: 'What your blood tells us.',
    intro:
      'We do not just look at numbers — we look at what they mean for you and for your baby.',
    description:
      '22 markers. 18 of them are not part of standard gynecological screening. The other 4 may be checked, but in isolation and without the full picture. Click on an area to see why it matters.',
    hint:
      'We offer two analysis packages, depending on your stage of pregnancy. Click a button to see which markers each blood test includes.',
    closeLabel: 'Close details',
    testFilter: {
      basis: 'Baseline test',
      verlauf: 'Follow-up test',
    },
    testDescriptions: {
      basis:
        'Early screening, before symptoms appear. In the first and second trimester, your baby does not yet have its own thyroid and depends on your hormones for brain development. For nerve development and cell division too, your baby relies entirely on your reserves at the start.',
      verlauf:
        'Your body is changing rapidly — 40% more blood volume, higher mineral demand, increasing load on liver and kidneys. The follow-up blood test shows whether your reserves are keeping up and your baby is well supplied.',
    },
    testTimings: {
      basis: 'best in weeks 12–16',
      verlauf: 'best in weeks 24–28 and 32–36',
    },
    detailLabels: {
      mother: 'For you',
      baby: 'For your baby',
      gap: 'The gap',
    },
    categories: {
      blood: { color: '#E07856', label: 'Blood & Iron' },
      vitamin: { color: '#D4A856', label: 'Vitamins & Hormones' },
      organ: { color: '#7EA882', label: 'Organs' },
      safety: { color: '#8AAEC4', label: 'Safety' },
    },
    markers: [
      {
        id: 'tsh',
        label: 'Thyroid',
        sub: 'TSH + fT4',
        x: 48,
        y: 14,
        side: 'L',
        cat: 'vitamin',
        tests: ['basis'],
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
        x: 52,
        y: 26,
        side: 'R',
        cat: 'vitamin',
        tests: ['basis'],
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
        tests: ['basis', 'verlauf'],
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
        x: 52,
        y: 54,
        side: 'R',
        cat: 'vitamin',
        tests: ['basis'],
        mother:
          'It matters for your nervous system, energy production, and DNA synthesis. Deficiency can cause fatigue and forgetfulness and is often dismissed as “normal in pregnancy.”',
        baby: 'Critical for your baby’s nervous system and brain development.',
        gap: 'Not part of the maternity record.',
      },
      {
        id: 'folate',
        label: 'Folate',
        sub: 'Folate',
        x: 48,
        y: 66,
        side: 'L',
        cat: 'vitamin',
        tests: ['basis'],
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
        x: 58,
        y: 72,
        side: 'R',
        cat: 'vitamin',
        tests: ['verlauf'],
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
        x: 42,
        y: 22,
        side: 'L',
        cat: 'blood',
        tests: ['verlauf'],
        mother:
          'It shows anemia, immune status, and clotting capacity. Your blood volume increases by around 50% during pregnancy.',
        baby: 'It affects oxygen transport to the baby. Anemia increases the risk of preterm birth.',
        gap: 'It is tested, but Yaya checks more closely and in better context.',
      },
      {
        id: 'liver',
        label: 'Liver',
        sub: 'ALT · AST',
        x: 58,
        y: 34,
        side: 'R',
        cat: 'organ',
        tests: ['verlauf'],
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
        x: 58,
        y: 46,
        side: 'R',
        cat: 'blood',
        tests: ['verlauf'],
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
        x: 42,
        y: 58,
        side: 'L',
        cat: 'organ',
        tests: ['verlauf'],
        mother:
          'Your kidneys work at full capacity during pregnancy. Early signs of preeclampsia often appear here.',
        baby: 'Preeclampsia is one of the most dangerous pregnancy complications.',
        gap: 'A quick urine dipstick is standard. Blood creatinine? Not part of the maternity record.',
      },
      {
        id: 'infect',
        label: 'Infections',
        sub: 'Toxo · CMV · Rubella',
        x: 52,
        y: 80,
        side: 'R',
        cat: 'safety',
        tests: ['basis'],
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
        x: 45,
        y: 88,
        side: 'L',
        cat: 'safety',
        tests: ['verlauf'],
        mother:
          'Silent inflammation and clotting risks matter. D-dimers naturally rise during pregnancy, but values that are too high can point to thrombosis.',
        baby: 'Chronic inflammation can affect placental function.',
        gap: 'Not part of the maternity record.',
      },
    ],
  },
} satisfies LocalizedHomeSection<BodyMapContent>;
