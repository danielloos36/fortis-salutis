const BASE_URL = 'https://www.fortis-salutis.de'

const address = {
  '@type': 'PostalAddress',
  streetAddress: 'Darmstädter Straße 43',
  addressLocality: 'Reinheim',
  postalCode: '64354',
  addressRegion: 'Hessen',
  addressCountry: 'DE',
}

export function physioBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${BASE_URL}/#praxis`,
    name: 'Fortis Salutis',
    medicalSpecialty: 'Physiotherapy',
    description:
      'Physiotherapiepraxis in Reinheim, Hessen. Krankengymnastik, Manuelle Therapie, Trainingstherapie, Neurologische Therapie und Hausbesuche.',
    url: BASE_URL,
    telephone: '+4915773327200',
    email: 'info@fortis-salutis.de',
    image: `${BASE_URL}/hero-banner-startseite.jpg`,
    address,
    employee: [
      { '@type': 'Person', name: 'Mattis Bischoff', jobTitle: 'Physiotherapeut' },
      { '@type': 'Person', name: 'Daniel Loos', jobTitle: 'Physiotherapeut' },
    ],
  }
}

const WEEKDAY_ORDER = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
const WEEKDAY_NAMES: Record<string, string> = {
  Mo: 'Monday',
  Di: 'Tuesday',
  Mi: 'Wednesday',
  Do: 'Thursday',
  Fr: 'Friday',
  Sa: 'Saturday',
  So: 'Sunday',
}

// Liest Tagesangaben wie "Mo. – Fr.", "Sa." oder "Sonn- & Feiertag" aus dem
// redaktionell gepflegten Content (content/pages/training.json) und wandelt
// sie in schema.org-taugliche dayOfWeek-Werte um.
function parseDayRange(label: string): string[] {
  if (/sonn/i.test(label)) return ['Sunday']
  const parts = label
    .replace(/\./g, '')
    .split(/[–-]/)
    .map((s) => s.trim().slice(0, 2))
  if (parts.length === 2) {
    const start = WEEKDAY_ORDER.indexOf(parts[0])
    const end = WEEKDAY_ORDER.indexOf(parts[1])
    if (start !== -1 && end !== -1) {
      return WEEKDAY_ORDER.slice(start, end + 1).map((d) => WEEKDAY_NAMES[d])
    }
  }
  const single = WEEKDAY_ORDER.find((d) => label.startsWith(d))
  return single ? [WEEKDAY_NAMES[single]] : []
}

// Liest Uhrzeiten wie "06:00 – 22:00 Uhr" aus demselben Content.
function parseTimeRange(label: string): { opens: string; closes: string } | null {
  const [opens, closes] = label
    .replace(/uhr/i, '')
    .split(/[–-]/)
    .map((s) => s.trim())
  return opens && closes ? { opens, closes } : null
}

// Liest Preise wie "44 €" aus demselben Content.
function parsePrice(label: string): string | undefined {
  return label.match(/\d+([.,]\d+)?/)?.[0]?.replace(',', '.')
}

export function gymBusinessSchema({
  hours,
  preise,
}: {
  hours: { day: string; time: string }[]
  preise: { label: string; price: string; sub: string }[]
}) {
  const openingHoursSpecification = hours
    .map((h) => {
      const dayOfWeek = parseDayRange(h.day)
      const time = parseTimeRange(h.time)
      if (!dayOfWeek.length || !time) return null
      return { '@type': 'OpeningHoursSpecification', dayOfWeek, ...time }
    })
    .filter((v): v is NonNullable<typeof v> => v !== null)

  const makesOffer = preise.map((p) => ({
    '@type': 'Offer',
    name: p.label,
    price: parsePrice(p.price),
    priceCurrency: 'EUR',
    description: p.sub,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    '@id': `${BASE_URL}/training#gym`,
    name: 'Fortis Salutis – Fitnessstudio Reinheim',
    url: `${BASE_URL}/training`,
    telephone: '+4915773327200',
    email: 'info@fortis-salutis.de',
    image: `${BASE_URL}/training.jpg`,
    address,
    openingHoursSpecification,
    makesOffer,
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${path}`,
    areaServed: {
      '@type': 'City',
      name: 'Reinheim',
    },
    provider: {
      '@id': `${BASE_URL}/#praxis`,
    },
  }
}
