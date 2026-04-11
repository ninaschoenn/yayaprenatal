import type { AboutContent, LocalizedHomeSection } from './types';

export const about = {
  de: {
    eyebrow: 'Über Nina',
    title: 'Wer an deiner Seite steht.',
    subtitle: 'Schwanger — und jetzt?',
    paragraphs: [
      'Als ich in deiner Situation war, habe ich nächtelang gegoogelt. Was jetzt zu tun ist. Was normal ist und was nicht. Ich habe nach irgendwas gesucht, das mir Sicherheit gibt. Das mir beweist: alles ist gut, du machst das richtig. Ich habe Kurse gebucht, mich vorbereitet — und irgendwie nie gefunden, was ich brauchte. Jedenfalls nicht an einem Ort.',
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
  en: {
    eyebrow: 'About Nina',
    title: 'Who will be by your side.',
    subtitle: 'Pregnant — and now what?',
    paragraphs: [
      'When I was in your position, I spent night after night searching online. What should I do now? What is normal and what is not? I was looking for something that would give me a sense of safety. Something that would reassure me that everything was okay and that I was doing this right. I booked courses, I prepared — and still I never found what I actually needed. At least not in one place.',
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
} satisfies LocalizedHomeSection<AboutContent>;
