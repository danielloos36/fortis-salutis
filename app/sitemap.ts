import { MetadataRoute } from 'next'
import { locations } from '@/lib/locations'

const BASE_URL = 'https://www.fortis-salutis.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = [
    'krankengymnastik',
    'trainingstherapie',
    'manuelle-therapie',
    'neurologische-therapie',
    'hausbesuche',
  ].map((id) => ({
    url: `${BASE_URL}/leistungen/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const locationPages = locations.map((loc) => ({
    url: `${BASE_URL}/standorte/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages,
    ...locationPages,
  ]
}
