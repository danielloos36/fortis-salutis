import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { blogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Blog – Fortis Salutis Physiotherapie Reinheim',
  description:
    'Evidenzbasierte Artikel rund um Physiotherapie, Schmerzen, Training und Körperhaltung – geschrieben von unserem Praxisteam in Reinheim.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Startseite', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />

      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">
            Fortis Salutis · Wissen
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] max-w-3xl">
            Evidenzbasiertes<br />Wissen zu Physiotherapie.
          </h1>
          <p className="text-white/70 mt-6 text-base max-w-xl leading-relaxed">
            Unser Team schreibt über Schmerzen, Training und Körperhaltung – fundiert durch
            aktuelle wissenschaftliche Erkenntnisse statt bloßer Erfahrungswerte.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-wine/30 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">Blog</span>
        </div>
      </div>

      {/* Article grid */}
      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-gray-100 rounded overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-[11px] text-gray-400 uppercase tracking-wider mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-xl font-black text-black mb-3 leading-snug group-hover:text-wine transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
