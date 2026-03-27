import { useState } from 'react';

interface Marker {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  side: 'L' | 'R';
  cat: 'blood' | 'vitamin' | 'organ' | 'safety';
  mother: string;
  baby: string;
  gap: string;
}

const cats = {
  blood: { color: '#E8A89A', label: 'Blut & Eisen' },
  vitamin: { color: '#D4A856', label: 'Vitamine & Hormone' },
  organ: { color: '#7EA882', label: 'Organe' },
  safety: { color: '#8AAEC4', label: 'Sicherheit' },
} as const;

const markers: Marker[] = [
  {
    id: 'tsh', label: 'Schilddrüse', sub: 'TSH + fT4', x: 47, y: 15, side: 'L', cat: 'vitamin',
    mother: 'Steuert deinen Energiehaushalt, Stimmung und Stoffwechsel. Eine unterschwellige Schilddrüsenschwäche bleibt oft unerkannt — du fühlst dich einfach nur „müde".',
    baby: 'Essentiell für die Gehirnentwicklung deines Babys. Besonders im 1. und 2. Trimester, wenn das Baby noch keine eigene Schilddrüse hat.',
    gap: 'Nicht im Mutterpass. Die meisten Frauenärztinnen testen das nie.',
  },
  {
    id: 'vitd', label: 'Vitamin D', sub: '25-OH', x: 49, y: 27, side: 'L', cat: 'vitamin',
    mother: '80% der Schwangeren in Berlin haben einen Mangel. Beeinflusst Immunsystem, Stimmung und Knochengesundheit.',
    baby: 'Wichtig für Knochenwachstum, Immunentwicklung und kann das Risiko für Frühgeburt senken.',
    gap: 'Nicht im Mutterpass. Wird fast nie getestet.',
  },
  {
    id: 'iron', label: 'Eisenspeicher', sub: 'Ferritin', x: 45, y: 40, side: 'L', cat: 'blood',
    mother: 'Nicht nur Hämoglobin — Ferritin zeigt deine echten Eisenreserven. Du kannst „normale" Blutwerte haben und trotzdem erschöpft sein.',
    baby: 'Dein Baby baut im 3. Trimester eigene Eisenreserven auf. Wenn deine leer sind, fehlt es auch dem Baby.',
    gap: 'Frauenärztinnen messen meist nur Hämoglobin. Das zeigt Eisenmangel erst, wenn es zu spät ist.',
  },
  {
    id: 'b12', label: 'Vitamin B12', sub: 'Cobalamin', x: 43, y: 53, side: 'L', cat: 'vitamin',
    mother: 'Nervensystem, Energieproduktion, DNA-Synthese. Mangel macht müde und vergesslich — wird oft als „normal in der Schwangerschaft" abgetan.',
    baby: 'Kritisch für das Nervensystem und die Gehirnentwicklung deines Babys.',
    gap: 'Nicht im Mutterpass.',
  },
  {
    id: 'folate', label: 'Folsäure', sub: 'Folat', x: 47, y: 66, side: 'L', cat: 'vitamin',
    mother: 'Das bekannteste Schwangerschaftsvitamin — aber wird dein Spiegel jemals gemessen? Supplemente sind nicht gleich ausreichend.',
    baby: 'Schützt vor Neuralrohrdefekten. Im 1. Trimester am wichtigsten, bleibt aber die ganze Schwangerschaft relevant.',
    gap: 'Alle nehmen Folsäure, aber kaum jemand kontrolliert den tatsächlichen Spiegel.',
  },
  {
    id: 'minerals', label: 'Mineralien', sub: 'Magnesium · Calcium · Zink', x: 46, y: 79, side: 'L', cat: 'vitamin',
    mother: 'Wadenkrämpfe, Herzrasen, Schlafprobleme — oft Magnesiummangel. Calcium für dein Skelett. Zink für Immunsystem und Wundheilung bei der Geburt.',
    baby: 'Knochen, Zähne, Herzrhythmus, Zellteilung — dein Baby nimmt sich was es braucht. Aus deinen Reserven.',
    gap: 'Nicht im Mutterpass.',
  },
  {
    id: 'hb', label: 'Blutbild', sub: 'Hb · MCV · WBC · Thrombo', x: 50, y: 21, side: 'R', cat: 'blood',
    mother: 'Zeigt Anämie, Immunstatus und Gerinnungsfähigkeit. Dein Blutvolumen steigt in der Schwangerschaft um 50%.',
    baby: 'Sauerstofftransport zum Baby. Anämie erhöht das Frühgeburtsrisiko.',
    gap: 'Wird gemessen, aber Yaya kontrolliert häufiger und genauer.',
  },
  {
    id: 'liver', label: 'Leber', sub: 'ALT · AST', x: 43, y: 34, side: 'R', cat: 'organ',
    mother: 'Schwangerschaftscholestase und HELLP-Syndrom zeigen sich zuerst in den Leberwerten. Früherkennung kann lebensrettend sein.',
    baby: 'Leberkomplikationen können zu Frühgeburt führen.',
    gap: 'Nicht im Mutterpass. Wird erst getestet, wenn Symptome auftreten — dann oft zu spät.',
  },
  {
    id: 'sugar', label: 'Blutzucker', sub: 'Glucose · HbA1c', x: 55, y: 47, side: 'R', cat: 'blood',
    mother: 'Gestationsdiabetes betrifft 5–10% aller Schwangeren. HbA1c zeigt den Langzeit-Trend.',
    baby: 'Dauerhaft erhöhter Zucker lässt das Baby zu schnell wachsen. Erhöhtes Risiko für Komplikationen bei der Geburt.',
    gap: 'Standard-Glucosetest kommt erst spät. HbA1c ist nicht im Mutterpass.',
  },
  {
    id: 'kidney', label: 'Niere', sub: 'Kreatinin · Urin', x: 52, y: 60, side: 'R', cat: 'organ',
    mother: 'Deine Nieren arbeiten in der Schwangerschaft auf Hochtouren. Frühzeichen von Präeklampsie zeigen sich hier.',
    baby: 'Präeklampsie ist eine der gefährlichsten Schwangerschaftskomplikationen.',
    gap: 'Urin-Schnelltest ist Standard. Kreatinin im Blut? Nicht im Mutterpass.',
  },
  {
    id: 'infect', label: 'Infektionen', sub: 'Toxo · CMV · Röteln', x: 50, y: 73, side: 'R', cat: 'safety',
    mother: 'Einmalige Tests die zeigen, ob du immun bist. Besonders CMV — das häufigste angeborene Virus — wird fast nie getestet.',
    baby: 'Erstinfektionen in der Schwangerschaft können zu Hörschäden, Entwicklungsverzögerungen oder schweren Komplikationen führen.',
    gap: 'CMV ist der größte blinde Fleck in der Standardvorsorge.',
  },
  {
    id: 'inflam', label: 'Entzündung', sub: 'CRP · D-Dimere', x: 48, y: 86, side: 'R', cat: 'safety',
    mother: 'Stille Entzündungen und Gerinnungsrisiken. D-Dimere steigen in der Schwangerschaft natürlich — aber zu stark erhöhte Werte können auf Thrombose hinweisen.',
    baby: 'Chronische Entzündung beeinflusst die Plazenta-Funktion.',
    gap: 'Nicht im Mutterpass.',
  },
];

export default function BodyMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const selected = markers.find((m) => m.id === activeId);

  return (
    <section className="relative overflow-hidden py-20 px-4 md:py-30 md:px-12">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-15 h-[3px] rounded-full bg-[#C4856C]" />

      {/* Section header */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-xs tracking-[3px] uppercase text-[#C4856C] mb-4 font-medium">
          Dein Körper-Check
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-[#5C3D2E] mb-3">
          Was wir in deinem Blut lesen.
        </h2>
        <p className="text-sm md:text-base text-[#7A6B60] font-light max-w-lg mx-auto leading-relaxed">
          22 Marker. 18 davon testet deine Frauenärztin nicht. Die anderen 4 schon — aber isoliert, ohne das volle Bild. Klick auf einen Bereich und erfahre, warum er wichtig ist.
        </p>
      </div>

      {/* Category legend */}
      <div className="flex gap-3 md:gap-6 mb-6 md:mb-10 flex-wrap justify-center">
        {Object.values(cats).map((c) => (
          <div key={c.label} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c.color, boxShadow: `0 0 6px ${c.color}44` }}
            />
            <span className="text-xs text-[#7A6B60] font-medium tracking-wide">{c.label}</span>
          </div>
        ))}
      </div>

      {/* Body map container */}
      <div className="relative w-full max-w-sm md:max-w-2xl mx-auto">
        {/* SVG Body */}
        <svg
          viewBox="0 0 100 105"
          className="w-full h-auto transition-opacity duration-300"
          style={{ opacity: selected ? 0.15 : 1 }}
        >
          <defs>
            <radialGradient id="bodyGlow" cx="50%" cy="45%" r="35%">
              <stop offset="0%" stopColor="#C4856C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#C4856C" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bellyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C4856C" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#C4856C" stopOpacity="0" />
            </radialGradient>
          </defs>

          <ellipse cx="50" cy="48" rx="16" ry="32" fill="url(#bodyGlow)" />

          {/* Head */}
          <ellipse cx="50" cy="7.5" rx="3.8" ry="4.5" fill="none" stroke="#5C3D2E" strokeWidth="0.35" opacity="0.25" />
          <path d="M46.5 6 Q47 3 50 2.5 Q53 3 53.5 6" fill="none" stroke="#5C3D2E" strokeWidth="0.25" opacity="0.15" />
          {/* Neck */}
          <path d="M48.5 12 L48.8 15 M51.5 12 L51.2 15" fill="none" stroke="#5C3D2E" strokeWidth="0.3" opacity="0.22" />
          {/* Shoulders */}
          <path d="M48.8 15 Q48 16 44 18 Q41 19.5 39 21" fill="none" stroke="#5C3D2E" strokeWidth="0.35" opacity="0.22" />
          <path d="M51.2 15 Q52 16 56 18 Q59 19.5 61 21" fill="none" stroke="#5C3D2E" strokeWidth="0.35" opacity="0.22" />
          {/* Arms */}
          <path d="M39 21 Q37 27 36 33 Q35.5 36 36 38" fill="none" stroke="#5C3D2E" strokeWidth="0.28" opacity="0.15" />
          <path d="M61 21 Q63 27 62 33 Q60 38 57 42" fill="none" stroke="#5C3D2E" strokeWidth="0.28" opacity="0.15" />
          {/* Torso */}
          <path d="M39 21 L38 28 Q37 35 37.5 42 Q38 50 40 56 Q41 60 42 65" fill="none" stroke="#5C3D2E" strokeWidth="0.35" opacity="0.22" />
          <path d="M61 21 L60 28 Q59 32 58 36" fill="none" stroke="#C4856C" strokeWidth="0.35" opacity="0.22" />
          {/* Belly */}
          <path d="M38 28 Q39 36 43 44 Q47 52 50 54 Q53 52 57 44 Q61 36 60 28" fill="none" stroke="#C4856C" strokeWidth="0.3" opacity="0.25" strokeDasharray="1.2 0.8" />
          <path d="M58 36 Q60 44 60 50 Q59 56 57 62 Q56 65 55 68" fill="none" stroke="#5C3D2E" strokeWidth="0.35" opacity="0.22" />
          {/* Hips & Legs */}
          <path d="M42 65 Q43 68 44 72 Q44.5 78 45 85 Q45 90 45 95" fill="none" stroke="#5C3D2E" strokeWidth="0.3" opacity="0.18" />
          <path d="M55 68 Q55 72 54.5 78 Q54 85 54 90 Q54 93 54 95" fill="none" stroke="#5C3D2E" strokeWidth="0.3" opacity="0.18" />

          {/* Baby */}
          <ellipse cx="50" cy="44" rx="6.5" ry="7" fill="url(#bellyGlow)" stroke="#C4856C" strokeWidth="0.25" opacity="0.18" strokeDasharray="1.5 1" />
          <circle cx="49" cy="42" r="2.5" fill="none" stroke="#C4856C" strokeWidth="0.2" opacity="0.25" />
          <path d="M50.5 44 Q52 46 51 48" fill="none" stroke="#C4856C" strokeWidth="0.15" opacity="0.2" />

          {/* Markers */}
          {markers.map((t) => {
            const isActive = activeId === t.id;
            const catColor = cats[t.cat].color;
            const labelX = t.side === 'L' ? 2 : 98;
            const elbowX = t.side === 'L' ? 22 : 78;
            const textAnchor = t.side === 'L' ? 'start' : 'end';
            const dotX = t.side === 'L' ? 1 : 99;
            return (
              <g
                key={t.id}
                onClick={() => setActiveId(isActive ? null : t.id)}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={t.side === 'L' ? 0 : 60}
                  y={t.y - 4}
                  width={40}
                  height={9}
                  fill="transparent"
                />
                <circle cx={t.x} cy={t.y} r="4" fill={catColor} opacity={isActive ? 0.12 : 0.08}>
                  <animate attributeName="r" values={isActive ? "3;5;3" : "2;4;2"} dur={isActive ? "2s" : "3s"} repeatCount="indefinite" />
                  <animate attributeName="opacity" values={isActive ? "0.12;0.06;0.12" : "0.1;0.02;0.1"} dur={isActive ? "2s" : "3s"} repeatCount="indefinite" />
                </circle>
                <circle
                  cx={t.x}
                  cy={t.y}
                  r={isActive ? 2 : 1.4}
                  fill={catColor}
                  opacity={isActive ? 1 : 0.5}
                >
                  <animate attributeName="r" values={isActive ? "2;2.8;2" : "1.4;1.8;1.4"} dur={isActive ? "2s" : "3s"} repeatCount="indefinite" />
                </circle>
                <path
                  d={`M${t.x} ${t.y} L${elbowX} ${t.y}`}
                  fill="none"
                  stroke={isActive ? catColor : '#7A6B60'}
                  strokeWidth={isActive ? 0.4 : 0.18}
                  opacity={isActive ? 0.9 : 0.25}
                />
                <path
                  d={`M${elbowX} ${t.y} L${labelX} ${t.y}`}
                  fill="none"
                  stroke={isActive ? catColor : '#7A6B60'}
                  strokeWidth={isActive ? 0.25 : 0.12}
                  opacity={isActive ? 0.6 : 0.15}
                />
                <circle cx={dotX} cy={t.y} r="1" fill={catColor} opacity={isActive ? 1 : 0.6} />
                <text
                  x={t.side === 'L' ? 4 : 96.5}
                  y={t.y - 1.2}
                  textAnchor={textAnchor}
                  fill={isActive ? '#5C3D2E' : '#7A6B60'}
                  fontSize={isActive ? 3.2 : 2.8}
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="DM Sans, sans-serif"
                  opacity={isActive ? 1 : 0.8}
                >
                  {t.label}
                </text>
                <text
                  x={t.side === 'L' ? 4 : 96.5}
                  y={t.y + 2}
                  textAnchor={textAnchor}
                  fill={isActive ? catColor : '#7A6B60'}
                  fontSize={1.9}
                  fontFamily="DM Sans, sans-serif"
                  opacity={isActive ? 0.9 : 0.5}
                >
                  {t.sub}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Detail overlay */}
        {selected && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[85%] max-w-lg bg-[#FFFCF9] rounded-xl p-5 md:p-7 z-10 animate-fade-in"
            style={{
              boxShadow: '0 8px 40px rgba(92,61,46,0.18)',
              borderLeft: `4px solid ${cats[selected.cat].color}`,
            }}
          >
            <div className="flex justify-between items-start mb-3.5">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: cats[selected.cat].color }}
                  />
                  <span
                    className="text-[10px] tracking-[1.5px] uppercase font-medium"
                    style={{ color: cats[selected.cat].color }}
                  >
                    {cats[selected.cat].label}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-light text-[#5C3D2E]">
                  {selected.label}
                </h3>
                <p className="text-xs text-[#C4856C] mt-0.5">{selected.sub}</p>
              </div>
              <button
                onClick={() => setActiveId(null)}
                className="text-[#7A6B60] text-xl leading-none px-2 py-1 rounded bg-black/[0.04] hover:bg-black/[0.08] transition-colors cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="p-3.5 rounded-md" style={{ background: 'rgba(196,133,108,0.1)' }}>
                <p className="text-[10px] tracking-[2px] uppercase text-[#C4856C] mb-1.5 font-semibold">
                  Für dich
                </p>
                <p className="text-xs leading-relaxed text-[#7A6B60] font-light">
                  {selected.mother}
                </p>
              </div>
              <div className="p-3.5 rounded-md" style={{ background: 'rgba(212,168,154,0.1)' }}>
                <p className="text-[10px] tracking-[2px] uppercase text-[#C4856C] mb-1.5 font-semibold">
                  Für dein Baby
                </p>
                <p className="text-xs leading-relaxed text-[#7A6B60] font-light">
                  {selected.baby}
                </p>
              </div>
            </div>

            <div
              className="mt-3 p-2.5 px-3.5 rounded-md"
              style={{
                background: 'rgba(220,38,38,0.06)',
                borderLeft: '2px solid rgba(220,38,38,0.4)',
              }}
            >
              <p className="text-[10px] tracking-[2px] uppercase text-red-800 mb-1 font-semibold">
                Die Lücke
              </p>
              <p className="text-xs leading-snug text-red-900 font-light">{selected.gap}</p>
            </div>
          </div>
        )}
      </div>

      {!selected && (
        <p className="text-center mt-6 text-sm text-[#7A6B60] font-light opacity-70">
          Klick auf einen Marker
        </p>
      )}
    </section>
  );
}
