export interface Testimonial {
  quote: string
  author: string
  source: 'Google' | 'Jameda'
}

// Echte, vollständige Bewertungen von Google/Jameda (keine gekürzten "… Mehr"-Zitate).
// Nicht ortsspezifisch – Google verknüpft Bewertungen nicht mit dem Wohnort der
// Patient*innen, daher werden sie über die Standort-Seiten rotiert.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Herr Bischoff verfügt über ein unglaubliches Fachwissen. Seine sympathische Art sucht seinesgleichen. Man kann Herrn Bischoff uneingeschränkt weiterempfehlen.',
    author: 'Verifizierte Patient*in',
    source: 'Jameda',
  },
  {
    quote:
      'Behandlung erfolgreich abgeschlossen. Danke Matthis. Ich habe mich sehr wohlgefühlt. Die Termine waren perfekt getaktet.',
    author: 'Verifizierte Patient*in',
    source: 'Google',
  },
  {
    quote: 'Sehr engagiert und zugewandt. Gute Therapie.',
    author: 'Verifizierte Patient*in',
    source: 'Google',
  },
  {
    quote: 'Top Praxis. Mega professionell. Vielen Dank für alles.',
    author: 'Verifizierte Patient*in',
    source: 'Google',
  },
  {
    quote: 'Freundlich, fachlich top. Tolle Atmosphäre.',
    author: 'Verifizierte Patient*in',
    source: 'Google',
  },
]
