import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactCTA from '@/components/ContactCTA'
import { locations } from '@/lib/locations'

type Props = {
  params: Promise<{ ort: string }>
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ ort: loc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ort } = await params
  const location = locations.find((l) => l.slug === ort)
  if (!location) return {}

  return {
    title: location.hausbesuche
      ? `Physiotherapie & Hausbesuche in ${location.name} – Fortis Salutis Reinheim`
      : `Physiotherapie in ${location.name} – Fortis Salutis Reinheim`,
    description: location.hausbesuche
      ? `Physiotherapie und Hausbesuche in ${location.name}: Wir kommen direkt zu Ihnen nach Hause. Nur ${location.distance} (${location.driveTime}) von Reinheim. Krankengymnastik, Manuelle Therapie, Trainingstherapie. Jetzt Termin vereinbaren.`
      : `Physiotherapie für Patient*innen aus ${location.name}: Nur ${location.distance} (${location.driveTime}) von unserer Praxis in Reinheim entfernt. Krankengymnastik, Manuelle Therapie, Trainingstherapie. Jetzt Termin vereinbaren.`,
  }
}

const services = [
  { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
  { title: 'Trainingstherapie', href: '/leistungen/trainingstherapie' },
  { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
  { title: 'Neurologische Therapie', href: '/leistungen/neurologische-therapie' },
  { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
]

export default async function StandortPage({ params }: Props) {
  const { ort } = await params
  const location = locations.find((l) => l.slug === ort)
  if (!location) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <Image
          src="/standorte-hero.jpg"
          alt={`Physiotherapie in ${location.name} – Einzugsgebiet Fortis Salutis Reinheim`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-3">
            Einzugsgebiet · {location.distance} von Reinheim
          </p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[0.95]">
            {location.hausbesuche ? 'Physiotherapie &' : 'Physiotherapie'}<br />
            {location.hausbesuche ? <>Hausbesuche in<br />{location.name}</> : <>in {location.name}</>}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-wine/30 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/standorte/reinheim" className="hover:text-wine transition-colors">Standorte</Link>
          <span>/</span>
          <span className="text-white">{location.name}</span>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-4">
              Physiotherapie für {location.name}
            </p>
            <h2 className="text-4xl font-black text-black mb-8 leading-tight">
              {location.hausbesuche ? (
                <>Physiotherapie & Hausbesuche<br /><span className="text-neutral-400">in {location.name}.</span></>
              ) : (
                <>Ihre Physiotherapeuten<br /><span className="text-neutral-400">in der Nähe von {location.name}.</span></>
              )}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              Unsere Praxis liegt nur {location.distance} von {location.name} entfernt –
              mit dem Auto in ca. {location.driveTime} erreichbar. Kostenlose Parkmöglichkeiten
              stehen direkt vor der Praxis zur Verfügung.
            </p>

            {location.hausbesuche && (
              <p className="text-black font-bold leading-relaxed mb-5">
                Wir kommen direkt zu Ihnen nach {location.name} – Physiotherapie
                bequem bei Ihnen zuhause.
              </p>
            )}

            {location.hausbesucheOnRequest && (
              <div className="border-l-2 border-gray-300 pl-4 mb-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Für {location.name} können wir leider keine Hausbesuche anbieten.
                  Wir freuen uns aber, Sie in unserer Praxis in Reinheim zu empfangen.
                </p>
              </div>
            )}

            {/* Address box */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded">
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-3">So erreichen Sie uns</p>
              <p className="font-black text-black">Fortis Salutis</p>
              <p className="text-gray-600 text-sm mt-1">
                Darmstädter Straße 43<br />
                64354 Reinheim<br />
                <span className="text-neutral-400 text-xs">{location.distance} {location.direction} von {location.name}</span>
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="tel:+4915773327200"
                  className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +49 157 73327200
                </a>
                <a
                  href="https://wa.me/4915773327200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-4">Unser Angebot</p>
            <h2 className="text-2xl font-black text-black mb-8">
              Alle Leistungen für Patient*innen aus {location.name}
            </h2>
            <div className="space-y-2 mb-10">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center justify-between border border-gray-100 p-5 hover:border-black group transition-colors rounded"
                >
                  <span className="font-medium text-gray-900">{s.title}</span>
                  <svg
                    className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ))}
            </div>

            {location.hausbesuche && (
              <div className="bg-black text-white p-6 rounded">
                <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-3">Hausbesuche</p>
                <p className="font-black mb-2">Wir kommen nach {location.name}.</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                  Sie können die Praxis nicht aufsuchen? Kein Problem – wir kommen zu Ihnen
                  nach Hause in {location.name}.
                </p>
                <Link
                  href="/leistungen/hausbesuche"
                  className="inline-block border border-white/30 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-white transition-colors rounded"
                >
                  Mehr zu Hausbesuchen
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-6">Weitere Standorte</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/standorte/reinheim"
              className="border border-wine bg-wine text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded"
            >
              Reinheim
            </Link>
            {locations
              .filter((l) => l.slug !== ort)
              .slice(0, 8)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/standorte/${l.slug}`}
                  className="border border-gray-300 bg-white text-gray-700 px-4 py-2 text-xs font-medium hover:border-wine hover:bg-wine hover:text-white transition-all rounded"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title={`Termin aus ${location.name} vereinbaren`}
        subtitle={`Nur ${location.distance} von ${location.name} entfernt – vereinbaren Sie jetzt Ihren Termin in unserer Praxis in Reinheim.`}
      />
    </>
  )
}
