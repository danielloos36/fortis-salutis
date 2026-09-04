import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Entspannungstraining Reinheim – „Entspannt in den Feierabend" | Fortis Salutis',
  description:
    'Achtsamkeits- und Entspannungstraining mit Sybille Mierau-Brinson im neuen Kursraum von Fortis Salutis Reinheim. Jeden Dienstag um 18 Uhr, 10 Termine à 60 Minuten.',
  alternates: {
    canonical: '/kurse/entspannungstraining',
  },
}

const vorteile = [
  {
    label: 'Anspannungen lösen',
    desc: 'Achtsame Bewegungen und bewusste Atemübungen helfen dir, Verspannungen loszulassen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: 'Stresshormone reduzieren',
    desc: 'Regelmäßige Entspannung wirkt sich nachweislich positiv auf deinen Cortisolspiegel aus.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'Konzentrationsfähigkeit steigern',
    desc: 'Ein ruhiger Kopf schafft Raum für Fokus im Alltag.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: 'Schlafqualität verbessern',
    desc: 'Wer abends zur Ruhe findet, schläft nachweislich besser ein und durch.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    label: 'Dich mal wieder selbst spüren',
    desc: 'Eine kleine Auszeit nur für dich – ganz ohne „Höher – Schneller – Weiter“.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const mitbringen = ['Yogamatte', 'Eine dünne Decke', 'Ein kleines Kissen', 'Bequeme Kleidung']

export default function EntspannungstrainingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Startseite', path: '/' },
          { name: 'Entspannt in den Feierabend', path: '/kurse/entspannungstraining' },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Entspannt in den Feierabend – Achtsamkeits- und Entspannungstraining',
          description:
            'Achtsamkeits- und Entspannungstraining mit Sybille Mierau-Brinson im Kursraum von Fortis Salutis Reinheim.',
          path: '/kurse/entspannungstraining',
        })}
      />

      {/* Hero */}
      <section className="relative min-h-[100vh] lg:min-h-[85vh] flex items-end">
        <Image
          src="/alejandro-pinero-amerio-KBn4-lyqRgQ-unsplash.jpg"
          alt="Gestapelte Steine am Meer – Entspannt in den Feierabend"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <span className="inline-block border border-white/40 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.35em] px-4 py-2 rounded-sm backdrop-blur-sm mb-5">
            Achtsamkeit &amp; Entspannung · Um Anmeldung wird gebeten
          </span>
          <p className="text-[10px] text-white/60 uppercase tracking-[0.35em] mb-4 font-bold">
            Kurse · Fortis Salutis Reinheim
          </p>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-6 max-w-4xl">
            Entspannt in den<br />Feierabend
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-10">
            Eine kleine Auszeit nur für dich. Du kommst zur Ruhe, schöpfst neue Kraft und lernst
            einfache Techniken kennen, die dich im Alltag gelassener machen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
            >
              Jetzt anmelden
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#termine"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors rounded"
            >
              Termine &amp; Preise
            </a>
          </div>
        </div>
      </section>

      {/* Kooperation */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold shrink-0">In Kooperation mit</p>
          <div className="hidden sm:block w-px h-6 bg-white/10 shrink-0" />
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-wine/20 border border-wine/40 flex items-center justify-center text-wine font-black text-xs shrink-0">
              SM
            </div>
            <span className="text-white font-bold text-sm">Sybille Mierau-Brinson · Entspannungstrainerin</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">Entspannt in den Feierabend</span>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">achtsam entspannt</p>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
            Zur Ruhe kommen,<br />den Alltag ausklingen lassen
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Achtsame Bewegungen und bewusste Atemübungen unterstützen dich dabei, Spannungen zu
            lösen – Körper und Geist dürfen los lassen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ein Kurs für alle, denen „Höher – Schneller – Weiter" heute nicht mehr so wichtig ist.
          </p>
        </div>
      </section>

      {/* Termine & Preise */}
      <section id="termine" className="bg-gray-50 py-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Auf einen Blick</p>
            <h2 className="text-3xl font-black text-black mb-10">Termine</h2>
            <div className="border-t-2 border-wine bg-white px-6 py-5 rounded">
              <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-2">Jeden Dienstag</p>
              <p className="font-black text-black text-xl">18:00 Uhr</p>
            </div>
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">
              Wöchentlich dienstags im neuen Kursraum von Fortis Salutis in Reinheim.
            </p>
          </div>

          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Konditionen</p>
            <h2 className="text-3xl font-black text-black mb-10">Preise</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-t-2 border-wine bg-white px-6 py-6 rounded">
                <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-3">10er-Karte</p>
                <p className="font-black text-black text-4xl leading-none">150&nbsp;€</p>
                <p className="text-gray-600 text-sm mt-2">10 × 60 Minuten</p>
              </div>
              <div className="border-t-2 border-wine bg-white px-6 py-6 rounded">
                <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-3">Einzelstunde</p>
                <p className="font-black text-black text-4xl leading-none">15&nbsp;€</p>
                <p className="text-gray-600 text-sm mt-2">/ Termin</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">
              Um Anmeldung wird gebeten.
            </p>
          </div>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-white/30" />
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em]">Was dich erwartet</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-14 leading-tight break-words">
            Warum Entspannungstraining
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vorteile.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-7 hover:border-white/30 hover:bg-white/8 transition-all rounded group"
              >
                <div className="w-12 h-12 bg-wine text-white flex items-center justify-center mb-5 rounded group-hover:bg-wine-dark transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-black text-white text-base mb-2">{item.label}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bitte mitbringen + Trainerin */}
      <section className="bg-gray-50 py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Vor dem ersten Termin</p>
            <h2 className="text-3xl font-black text-black mb-8">Bitte mitbringen</h2>
            <ul className="space-y-3">
              {mitbringen.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-wine shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Deine Kursleiterin</p>
            <h2 className="text-3xl font-black text-black mb-6">Sybille Mierau-Brinson</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sybille Mierau-Brinson ist Entspannungstrainerin und leitet den Kurs „Entspannt in den
              Feierabend" im neuen Kursraum von Fortis Salutis in Reinheim.
            </p>
            <a
              href="https://www.sybille-mierau-brinson.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-wine font-bold text-sm hover:text-wine-dark transition-colors"
            >
              www.sybille-mierau-brinson.de
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt / CTA */}
      <section id="kontakt" className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-4 font-bold">
            Anmeldung &amp; Infos
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Nimm dir bewusst<br />Zeit für dich
          </h2>
          <p className="text-neutral-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Um Anmeldung wird gebeten. Melde dich einfach direkt bei Sybille Mierau-Brinson.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a
              href="tel:+491792324139"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0179 232 41 39
            </a>
            <a
              href="mailto:sonne-im-bauch@t-online.de"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-wine hover:bg-wine transition-colors rounded"
            >
              E-Mail
            </a>
            <a
              href="https://www.sybille-mierau-brinson.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-wine hover:bg-wine transition-colors rounded"
            >
              Website
            </a>
          </div>

          {/* Ort */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded px-6 py-4 mb-10">
            <svg className="w-5 h-5 text-white/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-white text-sm text-left">
              Neuer Kursraum von Fortis Salutis · Darmstädter Straße 43 · 64354 Reinheim
            </p>
          </div>

          {/* Kontaktformular */}
          <div className="border-t border-white/10 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 text-left items-start">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-4">Fortis Salutis erreichen</p>
              <div className="space-y-3">
                <a href="tel:+4915773327200" className="flex items-center gap-3 text-white font-bold hover:text-wine transition-colors">
                  <svg className="w-4 h-4 text-wine shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +49 157 73327200
                </a>
                <a href="https://wa.me/4915773327200?text=Entspannungstraining" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-bold hover:text-wine transition-colors">
                  <svg className="w-4 h-4 text-wine shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp – Fortis Salutis
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
