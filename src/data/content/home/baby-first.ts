import type { BabyFirstContent, LocalizedHomeSection } from './types';

export const babyFirst = {
  de: {
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
  en: {
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
} satisfies LocalizedHomeSection<BabyFirstContent>;
