import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import ContactCTA from '@/components/ContactCTA'
import { breadcrumbSchema } from '@/lib/schema'
import { blogPosts, getBlogPost } from '@/content/blog'
import type { BlogBlock } from '@/lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} – Fortis Salutis Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

function Block({ block, slug }: { block: BlogBlock; slug: string }) {
  switch (block.type) {
    case 'p':
      return (
        <p
          className="text-gray-700 leading-relaxed mb-5 text-base sm:text-lg [&_a]:text-wine [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-wine-dark"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )
    case 'h3':
      return (
        <h3 className="text-2xl sm:text-3xl font-black text-black mt-12 mb-5 leading-tight">
          {block.text}
        </h3>
      )
    case 'ul':
      return (
        <ul className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-wine rounded-full shrink-0 mt-2.5" />
              <span
                className="text-gray-700 leading-relaxed [&_a]:text-wine [&_a]:underline [&_a]:underline-offset-2"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 bg-wine text-white text-xs font-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span
                className="text-gray-700 leading-relaxed [&_a]:text-wine [&_a]:underline [&_a]:underline-offset-2"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ol>
      )
    case 'image':
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded bg-gray-50">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              width={900}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          {block.image.caption && (
            <figcaption className="text-sm text-gray-500 mt-3 text-center leading-relaxed">
              {block.image.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'quote':
      return (
        <blockquote
          className="border-l-2 border-wine pl-6 my-8 text-gray-800 italic leading-relaxed text-lg [&_a]:text-wine [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )
    default:
      return null
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Startseite', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: `https://www.fortis-salutis.de${post.heroImage}`,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: { '@type': 'Organization', name: 'Fortis Salutis' },
        }}
      />

      {/* Hero */}
      <section className="relative h-[52vh] min-h-[380px] flex items-end">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-3">
            {post.tags[0]} · Fortis Salutis Blog
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05]">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-white/80 mt-4 text-base sm:text-lg max-w-2xl">{post.subtitle}</p>
          )}
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-wine/30 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-wine transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-white truncate max-w-[50vw]">{post.title}</span>
        </div>
      </div>

      {/* Meta bar */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-5">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
          <span className="font-bold text-black">{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readingTime} Lesezeit</span>
          {post.updated && <span>Aktualisiert: {post.updated}</span>}
        </div>
      </div>

      {/* Article body */}
      <article className="bg-white py-14 lg:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} slug={post.slug} />
          ))}

          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="bg-gray-100 py-16 lg:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">
              Weiterlesen
            </p>
            <h2 className="text-3xl font-black text-black mb-10">Weitere Artikel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-white rounded overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-black text-base leading-snug group-hover:text-wine transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        title="Fragen zu Ihrer Beschwerde?"
        subtitle="Gerne besprechen wir Ihr individuelles Beschwerdebild persönlich – rufen Sie uns an oder schreiben Sie uns über das Formular."
      />
    </>
  )
}
