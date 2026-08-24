import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'
import homeContent from '@/content/pages/home.json'

export const metadata: Metadata = {
  title: 'Kursraum & Gym mieten Reinheim – Für Trainer & Kursleiter*innen | Fortis Salutis',
  description:
    'Professionelle Trainingsfläche (ca. 70-75 m²) in Reinheim für Trainer, Therapeuten und Kursleiter*innen. Ideal für Kampfsport, Yoga, Mobility, Functional Training, Rehasport oder Workshops.',
  alternates: {
    canonical: '/kursraum-vermietung',
  },
}

const ausstattung = [
  {
    label: 'ca. 70-75 m²',
    sublabel: 'Trainingsfläche',
    desc: 'Großzügige, freie Fläche für Gruppen- und Einzeltraining.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    label: 'Fuji Grappling-Matten',
    sublabel: 'Hochwertiger Bodenbelag',
    desc: 'Rutschfest und gelenkschonend – ideal für Bodenarbeit und Kampfsport.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    label: 'Box-Equipment',
    sublabel: 'Bereits vorhanden',
    desc: 'Boxsäcke, Pratzen, Boxhandschuhe & Schienbeinschoner stehen zur Verfügung.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: 'Trainingsequipment',
    sublabel: 'Kurzhanteln & mehr',
    desc: 'Kurzhanteln und weiteres Equipment für Kraft- und Functional Training.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Zwei Umkleiden',
    sublabel: '& WC',
    desc: 'Ausreichend Platz zum Umziehen für alle Teilnehmer*innen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Kostenlose Parkplätze',
    sublabel: 'Direkt vor der Tür',
    desc: 'Ausreichend Parkmöglichkeiten für dich und deine Teilnehmer*innen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Zentrale Lage',
    sublabel: 'An der Hauptstraße',
    desc: 'Gut erreichbar in Reinheim, direkt an der Darmstädter Straße.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    label: 'Professionelles Umfeld',
    sublabel: 'Teil der Praxis',
    desc: 'Deine Teilnehmer trainieren im Umfeld einer Physiotherapie-Praxis.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const idealFuer = [
  'Kampfsport',
  'Yoga',
  'Mobility',
  'Functional Training',
  'Rehasport',
  'Personal Training',
  'Workshops',
]

const laufendeKurse = [
  { name: 'Brazilian Jiu-Jitsu', href: '/kurse/bjj' },
  { name: 'Achtsamkeits-/Entspannungstraining', href: '/kurse/entspannungstraining' },
  { name: 'Boxen' },
]

export default function KursraumVermietungPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Startseite', path: '/' },
          { name: 'Kursraum & Gym mieten', path: '/kursraum-vermietung' },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Kursraum- und Gym-Vermietung für Trainer und Kursleiter*innen',
          description:
            'Vermietung einer ca. 70-75 m² großen Trainingsfläche in Reinheim an Trainer, Therapeuten und Kursleiter*innen für Kurse, Personal Training und Workshops.',
          path: '/kursraum-vermietung',
        })}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] lg:min-h-[80vh] flex items-end">
        <Image
          src="/kursraum-hero-banner.jpg"
          alt="Kursraum bei Fortis Salutis Reinheim"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <span className="inline-block border border-white/40 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.35em] px-4 py-2 rounded-sm backdrop-blur-sm mb-5">
            Für Trainer · Therapeuten · Kursleiter*innen
          </span>
          <p className="text-[10px] text-white/60 uppercase tracking-[0.35em] mb-4 font-bold">
            Fortis Salutis Reinheim
          </p>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-6 max-w-4xl">
            Kursraum &amp;<br />Gym mieten
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-10">
            Du suchst einen professionellen Raum für deine Kurse oder dein Personal Training?
            Unsere Kursfläche in Reinheim steht dir zur Verfügung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
            >
              Jetzt anfragen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#ausstattung"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors rounded"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">Kursraum &amp; Gym mieten</span>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Deine Kursfläche in Reinheim</p>
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Trainiere in einem<br />professionellen Umfeld
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unsere Kursfläche steht Trainern, Therapeuten und Kursleitern zur Verfügung – ideal für
              Kampfsport, Yoga, Mobility, Functional Training, Rehasport, Personal Training oder Workshops.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Die Fläche ist Teil von Fortis Salutis – Praxis für Physiotherapie &amp; Fitness, wodurch
              deine Teilnehmer in einem professionellen Umfeld trainieren.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image
              src="/Kursraum-1.jpg"
              alt="Kursraum bei Fortis Salutis Reinheim"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ausstattung */}
      <section id="ausstattung" className="bg-[#0a0a0a] py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-white/30" />
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em]">Auf einen Blick</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-14 leading-tight">
            Die Fläche im Überblick
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ausstattung.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-7 hover:border-white/30 hover:bg-white/8 transition-all rounded group"
              >
                <div className="w-12 h-12 bg-wine text-white flex items-center justify-center mb-5 rounded group-hover:bg-wine-dark transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-black text-white text-base mb-1">{item.label}</h3>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">{item.sublabel}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal für */}
      <section className="bg-gray-50 py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Vielseitig nutzbar</p>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-10 leading-tight">
            Ideal für
          </h2>
          <div className="flex flex-wrap gap-3">
            {idealFuer.map((item) => (
              <span
                key={item}
                className="border-t-2 border-wine bg-white px-6 py-4 rounded text-sm font-bold text-black shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Laufende & geplante Kurse */}
      <section className="bg-white py-20 lg:py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Schon dabei</p>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4 leading-tight">
            Aktuelle &amp; geplante Kurse
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Folgende Kurse laufen bereits an oder sind in Planung. Egal ob regelmäßige Kurse oder
            einzelne Workshops – wir freuen uns auf deine Anfrage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {laufendeKurse.map((kurs) =>
              kurs.href ? (
                <Link
                  key={kurs.name}
                  href={kurs.href}
                  className="flex items-center justify-between border-t-2 border-wine bg-gray-50 hover:bg-gray-100 px-6 py-6 rounded transition-colors group"
                >
                  <span className="font-black text-black text-lg">{kurs.name}</span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-wine group-hover:translate-x-0.5 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div key={kurs.name} className="border-t-2 border-wine bg-gray-50 px-6 py-6 rounded">
                  <span className="font-black text-black text-lg">{kurs.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-4 font-bold">Einblick</p>
          <h2 className="text-4xl font-black text-white mb-10">Unser Kursraum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src="/Kursraum-1.jpg"
                alt="Kursraum bei Fortis Salutis Reinheim – Ansicht 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src="/Kursraum-2.jpg"
                alt="Kursraum bei Fortis Salutis Reinheim – Ansicht 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-100 py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">Bei Fortis Salutis</p>
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-[0.95]">
              Das Team vor Ort
            </h2>
            <p className="text-gray-600 leading-relaxed mt-5">
              Die Kursfläche ist Teil unserer Praxis – vor Ort triffst du auf unser Physiotherapie-Team,
              das für ein professionelles Umfeld sorgt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeContent.team.map((person) => (
              <div key={person.name} className="bg-white rounded p-8">
                <h3 className="text-2xl font-black text-black mb-1">{person.name}</h3>
                <p className="text-wine text-[10px] uppercase tracking-[0.25em] font-bold">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt / CTA */}
      <section id="kontakt" className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-4 font-bold">
            Fortis Salutis · Reinheim
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Interesse an einer<br />Zusammenarbeit?
          </h2>
          <p className="text-neutral-400 text-base mb-2 max-w-xl mx-auto leading-relaxed">
            Egal ob regelmäßige Kurse oder einzelne Workshops – wir freuen uns auf deine Anfrage.
          </p>
          <p className="text-neutral-500 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
            Die Konditionen für Kursleiter*innen geben wir gerne auf Anfrage raus.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded px-6 py-4 mb-10">
            <svg className="w-5 h-5 text-white/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-white text-sm text-left">
              Darmstädter Straße 43 · 64354 Reinheim
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a
              href="https://wa.me/4915773327200?text=Kursraum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp schreiben
            </a>
            <a
              href="tel:+4915773327200"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-wine hover:bg-wine transition-colors rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Anrufen
            </a>
            <a
              href="mailto:info@fortis-salutis.de"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-wine hover:bg-wine transition-colors rounded"
            >
              E-Mail
            </a>
          </div>

          {/* Kontaktformular */}
          <div className="border-t border-white/10 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 text-left items-start">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-4">Direkt kontaktieren</p>
              <div className="space-y-3">
                <a href="tel:+4915773327200" className="flex items-center gap-3 text-white font-bold hover:text-wine transition-colors">
                  <svg className="w-4 h-4 text-wine shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +49 157 73327200
                </a>
                <a href="https://wa.me/4915773327200?text=Kursraum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-bold hover:text-wine transition-colors">
                  <svg className="w-4 h-4 text-wine shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp schreiben
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
