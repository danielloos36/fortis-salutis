import type { BlogPost } from '@/lib/blog'
import arthrose from './arthrose'
import koerperhaltung from './koerperhaltung'
import muskelaufbau from './muskelaufbau'
import evidenzbasiertePhysiotherapie from './evidenzbasierte-physiotherapie'

export const blogPosts: BlogPost[] = [
  evidenzbasiertePhysiotherapie,
  muskelaufbau,
  koerperhaltung,
  arthrose,
].sort((a, b) => parseGermanDate(b.date) - parseGermanDate(a.date))

function parseGermanDate(date: string): number {
  const months: Record<string, number> = {
    jan: 0, feb: 1, mär: 2, apr: 3, mai: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, okt: 9, nov: 10, dez: 11,
  }
  const match = date.match(/(\d+)\.\s*(\p{L}+)\.?\s*(\d{4})/u)
  if (!match) return 0
  const [, day, month, year] = match
  const key = month.toLowerCase().slice(0, 3)
  return new Date(Number(year), months[key] ?? 0, Number(day)).getTime()
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
