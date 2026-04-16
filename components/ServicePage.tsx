import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'

interface Props {
  title: string
  subtitle: string
  image: string
  intro: string[]
  indications: string[]
  benefits: { title: string; desc: string }[]
  process?: { step: string; desc: string }[]
  relatedLinks?: { title: string; href: string }[]
}

export default function ServicePage({
  title,
  subtitle,
  image,
  intro,
  indications,
  benefits,
  process,
  relatedLinks,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src={image}
          alt={`${title} – Fortis Salutis Reinheim`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-3 font-bold">
            Leistungen · Fortis Salutis Reinheim
          </p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95]">
            {title}
          </h1>
          <p className="text-white mt-3 text-base max-w-lg">{subtitle}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">{title}</span>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Über diese Therapie</p>
            <h2 className="text-4xl font-black text-black mb-8 leading-tight">
              Was ist<br />{title}?
            </h2>
            {intro.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* Indications */}
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Anwendungsgebiete</p>
            <h2 className="text-2xl font-black text-black mb-8">Bei welchen Beschwerden?</h2>
            <ul className="space-y-3">
              {indications.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 border border-wine flex items-center justify-center shrink-0 mt-0.5 text-wine">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-wine" />
            <p className="text-[10px] text-wine font-bold uppercase tracking-[0.3em]">Ihre Vorteile</p>
          </div>
          <h2 className="text-4xl font-black text-black mb-14">Was Sie erwarten können</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 border-t-2 border-wine">
                <span className="text-wine font-black text-5xl leading-none block mb-6 opacity-40">0{i + 1}</span>
                <h3 className="font-black text-black text-base mb-3">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {/* {process && (
        <section className="bg-gray-100 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">So läuft es ab</p>
            <h2 className="text-4xl font-black text-black mb-14">Ablauf der Behandlung</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <div key={i} className="relative">
                  <span className="text-wine/20 font-black text-6xl leading-none block mb-4">{i + 1}</span>
                  <h3 className="font-black text-black mb-2">{p.step}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-neutral-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Related services */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-6 font-bold">Weitere Leistungen</p>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border border-gray-300 text-gray-800 px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-wine hover:bg-wine hover:text-white transition-all"
                >
                  {l.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        title="Termin vereinbaren"
        subtitle={`Leiden Sie unter Beschwerden, bei denen ${title} helfen kann? Wir beraten Sie gerne und vereinbaren einen Termin in unserer Praxis in Reinheim.`}
      />
    </>
  )
}
