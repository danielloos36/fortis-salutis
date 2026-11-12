export interface BlogImage {
  src: string
  alt: string
  caption?: string
}

export type BlogBlock =
  | { type: 'p'; html: string }
  | { type: 'h3'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'image'; image: BlogImage }
  | { type: 'quote'; html: string }

export interface BlogPost {
  slug: string
  title: string
  subtitle?: string
  date: string
  updated?: string
  readingTime: string
  author: string
  tags: string[]
  heroImage: string
  excerpt: string
  blocks: BlogBlock[]
}
