import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Physiotherapie Reinheim – Fortis Salutis',
  description:
    'Physiotherapie in Reinheim, Hessen. Krankengymnastik, Manuelle Therapie, Trainingstherapie, Neurologische Therapie und Hausbesuche. Individuelle Behandlung auf höchstem Niveau. Jetzt Termin vereinbaren.',
}

const leistungen = [
  {
    title: 'Krankengymnastik',
    desc: 'Gezielte Bewegungstherapie zur Wiederherstellung von Beweglichkeit, Kraft und Koordination.',
    href: '/leistungen/krankengymnastik',
  },
  {
    title: 'Trainingstherapie',
    desc: 'Gerätegestütztes therapeutisches Training zur Rehabilitation und Prävention.',
    href: '/leistungen/trainingstherapie',
  },
  {
    title: 'Manuelle Therapie',
    desc: 'Gezielte manuelle Grifftechniken bei Bewegungseinschränkungen, Rückenschmerzen und Muskelverspannungen.',
    href: '/leistungen/manuelle-therapie',
  },
  {
    title: 'Neurologische Therapie',
    desc: 'Spezialisierte Behandlung bei Erkrankungen des Nervensystems wie Schlaganfall oder Parkinson.',
    href: '/leistungen/neurologische-therapie',
  },
  {
    title: 'Hausbesuche',
    desc: 'Physiotherapie direkt bei Ihnen zuhause – für Patient*innen mit eingeschränkter Mobilität.',
    href: '/leistungen/hausbesuche',
  },
]

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
  ['Babenhausen', '/standorte/babenhausen'],
  ['Seeheim-Jugenheim', '/standorte/seeheim-jugenheim'],
  ['Eppertshausen', '/standorte/eppertshausen'],
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
            Physio&shy;therapie
            <br />
            <span className="text-white/50">ganzheitlich.</span>
          </h1>
          <p className="text-base sm:text-lg text-white max-w-lg mb-12 leading-relaxed">
            Damit Sie als Patient*in Schmerzen nachhaltig reduzieren und an Mobilität sowie Autonomie gewinnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+4915773327200"
              className="inline-block bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors rounded"
            >
              Termin vereinbaren
            </a>
            <Link
              href="/leistungen/krankengymnastik"
              className="inline-block border border-white/40 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors rounded"
            >
              Alle Leistungen
            </Link>
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
      <section className="bg-[#0a0a0a] py-24 px-6">
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
            <div className="bg-white p-8 flex flex-col justify-between rounded">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-wine mb-3 font-bold">Termin vereinbaren</p>
                <h3 className="text-2xl font-black text-black mb-4 leading-tight">
                  Jetzt Termin
                  <br />
                  vereinbaren
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Telefonisch, per E-Mail oder WhatsApp. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </div>
              <div className="mt-8 space-y-2">
                <a
                  href="tel:+4915773327200"
                  className="block bg-wine text-white text-center py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-wine-dark transition-colors rounded"
                >
                  Anrufen
                </a>
                <a
                  href="https://wa.me/4915773327200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 text-black text-center py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:border-wine hover:bg-wine hover:text-white transition-colors rounded"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS / TEAM ───────────────────────────────────────────── */}
      <section id="ueber-uns" className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Über uns</p>
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-8 leading-[0.95]">
              Fortis Salutis.
              <br />
              <span className="text-neutral-400">Stark durch</span>
              <br />
              <span className="text-neutral-400">Gesundheit.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Fortis Salutis ist Ihre Privatpraxis für Physiotherapie in Reinheim, Hessen. Als Praxis
              mit Heilpraktikerzulassung bieten wir Ihnen umfassende physiotherapeutische Behandlungen
              auf höchstem Niveau – individuell, ganzheitlich und evidenzbasiert.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Unser Team unter der Leitung von{' '}
              <strong className="font-bold text-black">Mattis Bischoff</strong> setzt auf individuelle,
              evidenzbasierte Therapiekonzepte. Jede*r Patient*in erhält eine maßgeschneiderte Behandlung,
              die genau auf ihre bzw. seine Bedürfnisse abgestimmt ist.
            </p>
            <a
              href="tel:+4915773327200"
              className="inline-block bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors rounded"
            >
              Termin vereinbaren
            </a>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src="/team-foto.jpg"
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
              Sie können die Praxis nicht aufsuchen? Kein Problem. Wir kommen zu Ihnen nach
              Hause, im gesamten Umkreis von 10 km
              um Reinheim.
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
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">Einzugsgebiet</p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight">
              Für Patient*innen
              <br />
              aus der ganzen Region.
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Unsere Praxis in Reinheim liegt zentral im Landkreis Darmstadt-Dieburg und ist aus der
            gesamten Umgebung gut erreichbar. Hausbesuche bieten wir im Umkreis von bis zu 10 km an.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <Link
              href="/standorte/reinheim"
              className="border border-wine bg-wine text-white text-center py-3 px-3 text-xs font-bold uppercase tracking-wider rounded"
            >
              Reinheim
            </Link>
            {standorte.map(([name, href]) => (
              <Link
                key={href as string}
                href={href as string}
                className="border border-gray-300 bg-white text-gray-900 text-center py-3 px-3 text-xs font-medium hover:border-wine hover:bg-wine hover:text-white transition-all rounded"
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
            <p className="text-white leading-relaxed mb-12">
              Vereinbaren Sie Ihren Termin ganz einfach per Telefon, E-Mail oder WhatsApp.
              Wir melden uns so schnell wie möglich bei Ihnen zurück.
            </p>

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
          </div>

          <div className="border border-wine/40 p-8 rounded">
            <h3 className="text-white font-black text-xl mb-6">Termin vereinbaren</h3>
            <div className="space-y-3">
              <a
                href="tel:+4915773327200"
                className="flex items-center gap-3 bg-white text-black px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-gray-100 transition-colors rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4915773327200"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-white/20 text-white px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:border-wine hover:bg-wine transition-colors rounded"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp schreiben
              </a>
              <a
                href="mailto:info@fortis-salutis.de"
                className="flex items-center gap-3 border border-white/20 text-white px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:border-wine hover:bg-wine transition-colors rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
