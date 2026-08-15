import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroTypewriter from '@/components/HeroTypewriter'
import ContactForm from '@/components/ContactForm'
import homeContent from '@/content/pages/home.json'

export const metadata: Metadata = {
  title: 'Physiotherapie Reinheim – Fortis Salutis',
  description:
    'Physiotherapie in Reinheim, Hessen. Krankengymnastik, Manuelle Therapie, Trainingstherapie, Neurologische Therapie und Hausbesuche. Individuelle Behandlung auf höchstem Niveau. Jetzt Termin vereinbaren.',
  alternates: {
    canonical: '/',
  },
}

const leistungenHrefs = [
  '/leistungen/krankengymnastik',
  '/leistungen/trainingstherapie',
  '/leistungen/manuelle-therapie',
  '/leistungen/neurologische-therapie',
  '/leistungen/hausbesuche',
]

const leistungen = homeContent.leistungenCards
  .slice(0, leistungenHrefs.length)
  .map((card, i) => ({ ...card, href: leistungenHrefs[i] }))

const standorte = [
  ['Groß-Bieberau', '/standorte/gross-bieberau'],
  ['Dieburg', '/standorte/dieburg'],
  ['Ober-Ramstadt', '/standorte/ober-ramstadt'],
  ['Darmstadt', '/standorte/darmstadt'],
  ['Roßdorf', '/standorte/rossdorf'],
  ['Mühltal', '/standorte/muehltal'],
  ['Otzberg', '/standorte/otzberg'],
  ['Modautal', '/standorte/modautal'],
  ['Groß-Zimmern', '/standorte/gross-zimmern'],
  ['Groß-Umstadt', '/standorte/gross-umstadt'],
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/hero-banner-startseite.jpg"
          alt="Physiotherapie Fortis Salutis Reinheim – Behandlung auf höchstem Niveau"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <p className="text-[11px] text-white uppercase tracking-[0.35em] mb-6">
            Physiotherapie · Reinheim, Hessen
          </p>
          <h1 className="text-[2.5rem] sm:text-6xl lg:text-8xl xl:text-[7rem] font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl">
            Physio&shy;therapie,
            <br />
            <HeroTypewriter />
          </h1>
          <p className="text-base sm:text-lg text-white max-w-lg mb-12 leading-relaxed">
            {homeContent.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-block bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors rounded"
            >
              Termin vereinbaren
            </a>
            <a
              href="#leistungen"
              className="inline-block border border-white/40 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors rounded"
            >
              Alle Leistungen
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── LEISTUNGEN ────────────────────────────────────────────────── */}
      <section id="leistungen" className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-3 font-bold">Was wir anbieten</p>
            <h2 className="text-5xl lg:text-6xl font-black text-white">Unsere Leistungen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {leistungen.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-[#111] p-8 hover:bg-[#161616] transition-colors flex flex-col rounded"
              >
                <span className="text-wine font-black text-4xl group-hover:text-wine-light transition-colors mb-6 leading-none">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className="text-white text-sm leading-relaxed flex-1 mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-wine transition-colors">
                  Mehr erfahren
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}

            {/* Contact card */}
            <a
              href="#kontakt"
              className="group bg-wine p-8 flex flex-col justify-between rounded hover:bg-wine-dark transition-colors"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-3 font-bold">Kontakt aufnehmen</p>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  Nachricht
                  <br />
                  schicken
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Schreiben Sie uns direkt über unser Kontaktformular – wir melden uns schnellstmöglich.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white group-hover:gap-3 transition-all">
                  Zum Kontaktformular
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS / TEAM ───────────────────────────────────────────── */}
      <section id="ueber-uns" className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 lg:items-center">
          <div className="contents lg:flex lg:flex-col lg:justify-center">
            <div className="order-1">
              <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Über uns</p>
              <h2 className="text-5xl lg:text-6xl font-black text-black mb-8 leading-[0.95]">
                Fortis Salutis.
                <br />
                <span className="text-neutral-400">Stark durch</span>
                <br />
                <span className="text-neutral-400">Gesundheit.</span>
              </h2>
            </div>

            <div className="order-3">
              <p className="text-gray-600 leading-relaxed mb-5">
                {homeContent.ueberUnsText1}
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                {homeContent.ueberUnsText2}
              </p>
              <a
                href="#kontakt"
                className="inline-block bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors rounded"
              >
                Termin vereinbaren
              </a>
            </div>
          </div>

          <div className="relative order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src="/Therapeuten-Team.jpg"
                alt="Team Fortis Salutis – Mattis Bischoff und Daniel Loos, Physiotherapeuten in Reinheim"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-black text-white px-6 py-5 hidden lg:block rounded">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">Ihr Team</p>
              <p className="font-black text-sm">Mattis Bischoff</p>
              <p className="text-gray-500 text-xs mt-0.5">& Daniel Loos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THERAPEUTEN ───────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">Ihre Therapeuten</p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-[0.95]">
              Qualifiziert.
              <br />
              <span className="text-neutral-400">Persönlich vor Ort.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeContent.team.map((person) => (
              <div key={person.name} className="bg-white rounded overflow-hidden group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={person.image}
                    alt={`${person.name} – Physiotherapeut bei Fortis Salutis Reinheim`}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-black mb-1">{person.name}</h3>
                  <p className="text-wine text-[10px] uppercase tracking-[0.25em] font-bold">
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-12 px-6 border-t border-wine/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'Individuelle', label: 'Behandlung' },
            { value: 'Hausbesuche', label: 'Im 10-km-Umkreis' },
            { value: 'Ganzheitlich', label: 'Körper & Bewegung im Fokus' },
            { value: 'Flexibel', label: 'Termin per Tel., Mail & WhatsApp' },
          ].map((item) => (
            <div key={item.value}>
              <p className="text-white font-black text-lg mb-1">{item.value}</p>
              <p className="text-white text-xs uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HAUSBESUCHE TEASER ────────────────────────────────────────── */}
      <section className="relative py-36 px-6">
        <Image
          src="/hausbesuche-fotobanner.jpg"
          alt="Hausbesuche – Physiotherapie bei Ihnen zuhause in Reinheim und Umgebung"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-xl">
            <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-5">Hausbesuche</p>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.95]">
              Therapie direkt
              <br />
              bei Ihnen.
            </h2>
            <p className="text-white leading-relaxed mb-10 text-base">
              {homeContent.hausbesucheTeaserText}
            </p>
            <Link
              href="/leistungen/hausbesuche"
              className="inline-block bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors rounded"
            >
              Mehr zu Hausbesuchen
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EINZUGSGEBIET ─────────────────────────────────────────────── */}
      <section id="einzugsgebiet" className="py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">Einzugsgebiet</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black leading-tight">
              Eine Praxis – gut erreichbar
              <br />
              aus der ganzen Region.
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mb-5 leading-relaxed">
            {homeContent.einzugsgebietText}
          </p>
          <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Reinheim ist eine Stadt im Landkreis Darmstadt-Dieburg mit rund 17.000 Einwohnern und liegt
            am südlichen Rand der Rhein-Main-Region, eingebettet zwischen dem Odenwald und der Ebene.
            Unsere Praxis in der Darmstädter Straße 43 ist für Patient*innen aus Reinheim selbst sowie
            aus allen umliegenden Gemeinden gut erreichbar – mit kostenlosen Parkmöglichkeiten direkt
            vor der Tür.
          </p>

          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded p-6 mb-10">
            <div>
              <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-1">Unsere Praxis</p>
              <span className="font-black text-black text-lg">Reinheim, Darmstädter Straße 43</span>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-4">
            Patient*innen kommen u. a. aus
          </p>
          <div className="flex flex-wrap gap-2">
            {standorte.map(([name, href]) => (
              <Link
                key={href as string}
                href={href as string}
                className="border border-gray-300 bg-white text-gray-700 px-4 py-2 text-xs font-medium hover:border-wine hover:bg-wine hover:text-white transition-all rounded-full"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ───────────────────────────────────────────────────── */}
      <section id="kontakt" className="bg-[#0a0a0a] py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-4 font-bold">Kontakt</p>
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              Wir freuen uns
              <br />
              auf Sie.
            </h2>
            <p className="text-white leading-relaxed mb-8">
              {homeContent.kontaktText}
            </p>

            <div className="flex items-center gap-4 mb-10">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0">
                <Image
                  src="/Therapeuten-Mattis.jpg"
                  alt="Mattis Bischoff – Physiotherapeut bei Fortis Salutis Reinheim"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <div>
                <p className="text-white font-black text-lg">Mattis Bischoff</p>
                <p className="text-white/50 text-sm">Ihr Ansprechpartner</p>
              </div>
            </div>

            <div className="space-y-7">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Adresse',
                  content: <p className="text-white text-sm">Darmstädter Straße 43<br />64354 Reinheim</p>,
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Telefon',
                  content: (
                    <a href="tel:+4915773327200" className="text-white text-sm hover:text-gray-300 transition-colors">
                      +49 157 73327200
                    </a>
                  ),
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'E-Mail',
                  content: (
                    <a href="mailto:info@fortis-salutis.de" className="text-white text-sm hover:text-gray-300 transition-colors">
                      info@fortis-salutis.de
                    </a>
                  ),
                },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-wine flex items-center justify-center shrink-0 text-wine rounded">
                    {row.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1 font-bold">{row.label}</p>
                    {row.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Privatpraxis-Hinweis */}
            <div className="mt-10 border border-wine/30 bg-wine/10 rounded p-5">
              <p className="text-xs text-wine uppercase tracking-[0.25em] mb-2 font-bold">Hinweis zur Abrechnung</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Fortis Salutis ist eine <strong className="text-white font-bold">Privatpraxis</strong>. Gesetzlich Versicherte können bei ihrer Krankenkasse anfragen, ob die Behandlungskosten im Rahmen einer Kostenerstattung übernommen werden. Viele Kassen erstatten die Kosten ganz oder anteilig – es lohnt sich, nachzufragen.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
