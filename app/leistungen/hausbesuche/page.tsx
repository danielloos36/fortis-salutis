import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'
import JsonLd from '@/components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { locations } from '@/lib/locations'
import hbContent from '@/content/pages/hausbesuche.json'

export const metadata: Metadata = {
  title: 'Hausbesuche Physiotherapie Reinheim & Umgebung – Fortis Salutis',
  description:
    'Physiotherapie Hausbesuche in Reinheim, Groß-Bieberau, Dieburg, Ober-Ramstadt und Umgebung. Wir kommen direkt zu Ihnen nach Hause – individuell, ganzheitlich, auf höchstem Niveau. Jetzt Termin vereinbaren.',
  alternates: {
    canonical: '/leistungen/hausbesuche',
  },
}

const hausbesuchLocations = locations.filter((l) => l.hausbesuche)

export default function HausbesuchePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: 'Hausbesuche',
          description: 'Physiotherapie direkt bei Ihnen zuhause in Reinheim und Umgebung.',
          path: '/leistungen/hausbesuche',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Startseite', path: '/' },
          { name: 'Hausbesuche', path: '/leistungen/hausbesuche' },
        ])}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="/hausbesuche-fotobanner.jpg"
          alt="Hausbesuche – Physiotherapie bei Ihnen zuhause in Reinheim und Umgebung"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-3">
            Leistungen · Fortis Salutis Reinheim
          </p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95]">
            Hausbesuche
          </h1>
          <p className="text-white mt-3 text-base max-w-lg">
            Physiotherapie direkt bei Ihnen zuhause
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-wine/30 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">Hausbesuche</span>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-4">Therapie zu Ihnen</p>
            <h2 className="text-4xl font-black text-black mb-8 leading-tight">
              Wenn der Weg zur<br />Praxis zu weit ist.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">{hbContent.introText1}</p>
            <p className="text-gray-600 leading-relaxed mb-5">{hbContent.introText2}</p>
            <p className="text-gray-600 leading-relaxed mb-10">{hbContent.introText3}</p>
            <a
              href="tel:+4915773327200"
              className="inline-block bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors rounded"
            >
              Hausbesuch anfragen
            </a>
          </div>

          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-4">Wer profitiert?</p>
            <h2 className="text-2xl font-black text-black mb-8">Für wen sind Hausbesuche geeignet?</h2>
            <ul className="space-y-3">
              {hbContent.indications.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 border border-black flex items-center justify-center shrink-0 mt-0.5 rounded">
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

      {/* Team */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded order-2 lg:order-1">
            <Image
              src="/team-foto.jpg"
              alt="Mattis Bischoff und Daniel Loos – Ihr Physiotherapie-Team von Fortis Salutis"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Persönlich für Sie da</p>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6 leading-tight">
              Mattis & Daniel kommen zu Ihnen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Beim Hausbesuch begegnen Sie keinem Unbekannten: Mattis Bischoff und Daniel Loos
              betreuen Sie mit derselben Sorgfalt und Erfahrung wie in der Praxis – persönlich,
              verlässlich und mit einem vertrauten Gesicht.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-3 font-bold">Ihre Vorteile</p>
          <h2 className="text-4xl font-black text-white mb-14">Was Sie erwarten können</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                title: 'Gewohnte Umgebung',
                desc: 'Therapie im eigenen Zuhause – ohne Stress, ohne Fahrtweg. Sie können sich voll auf die Behandlung konzentrieren.',
              },
              {
                title: 'Kein Transportaufwand',
                desc: 'Wir kommen zu Ihnen. Keine Organisation von Krankentransport oder Fahrdienst notwendig.',
              },
              {
                title: 'Alltagsgerechte Therapie',
                desc: 'Wir können die Therapie auf Ihre tatsächliche Wohnsituation anpassen und alltagsrelevante Übungen einbauen.',
              },
              {
                title: 'Gleiche Qualität',
                desc: 'Ein Hausbesuch von Fortis Salutis bedeutet dieselbe Expertise und Sorgfalt wie in der Praxis – kein Kompromiss.',
              },
            ].map((b, i) => (
              <div key={i} className="bg-[#111] p-8 rounded">
                <span className="text-wine font-black text-3xl leading-none block mb-5">0{i + 1}</span>
                <h3 className="text-white font-black mb-3">{b.title}</h3>
                <p className="text-white text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Einzugsgebiet */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-3">Einzugsgebiet</p>
          <h2 className="text-4xl font-black text-black mb-6 leading-tight">
            Diese Orte fahren wir an.
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Unsere Hausbesuche umfassen Reinheim und die gesamte Umgebung im Umkreis von ca. 10 km.
            Nachfolgend finden Sie alle Orte, in die wir regelmäßig fahren. Ist Ihr Ort nicht dabei?
            Rufen Sie uns an – wir suchen nach einer Lösung.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-black bg-black text-white p-5 rounded">
              <p className="font-black">Reinheim</p>
              <p className="text-gray-400 text-xs mt-1">Hauptstandort der Praxis</p>
            </div>
            {hausbesuchLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/standorte/${loc.slug}`}
                className="border border-gray-200 bg-white p-5 hover:border-black group transition-colors rounded"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-black group-hover:text-black">{loc.name}</p>
                    <p className="text-neutral-400 text-xs mt-1">
                      {loc.distance} · ca. {loc.driveTime}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-neutral-400 text-sm mt-8">
            Nicht dabei? <a href="tel:+4915773327200" className="underline hover:text-black transition-colors">Rufen Sie uns an</a> – wir klären gerne,
            ob wir auch in Ihre Gemeinde kommen können.
          </p>
        </div>
      </section>

      <ContactCTA
        title="Hausbesuch anfragen"
        subtitle="Rufen Sie uns an oder schreiben Sie uns – wir vereinbaren einen Termin bei Ihnen zuhause. Schnell, unkompliziert und persönlich."
      />
    </>
  )
}
