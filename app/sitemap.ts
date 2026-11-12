import { MetadataRoute } from 'next'
import { locations } from '@/lib/locations'
import { blogPosts } from '@/content/blog'

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

  const hausbesucheDarmstadtPage = {
    url: `${BASE_URL}/hausbesuche-darmstadt`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }

  const blogIndexPage = {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages,
    hausbesucheDarmstadtPage,
    ...locationPages,
    blogIndexPage,
    ...blogPages,
  ]
}
