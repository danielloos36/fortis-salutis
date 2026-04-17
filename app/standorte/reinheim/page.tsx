import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Physiotherapie Reinheim – Fortis Salutis',
  description:
    'Physiotherapiepraxis Fortis Salutis in Reinheim, Hessen. Krankengymnastik, Manuelle Therapie, Trainingstherapie, Neurologische Therapie und Hausbesuche. Individuelle Behandlung auf höchstem Niveau.',
}

const services = [
  { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
  { title: 'Trainingstherapie', href: '/leistungen/trainingstherapie' },
  { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
  { title: 'Neurologische Therapie', href: '/leistungen/neurologische-therapie' },
  { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
]

export default function ReinheimPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <Image
          src="/standorte-hero.jpg"
          alt="Physiotherapie Reinheim – Fortis Salutis"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-3">Standort</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95]">
            Physiotherapie<br />in Reinheim
          </h1>
        </div>
      </section>

      <div className="bg-[#0a0a0a] border-b border-wine/30 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">Reinheim</span>
        </div>
      </div>

      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-4">Ihre Praxis vor Ort</p>
            <h2 className="text-4xl font-black text-black mb-8 leading-tight">
              Fortis Salutis –<br />zu Hause in Reinheim.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Mitten in Reinheim, in der Darmstädter Straße 43, befindet sich Ihre Anlaufstelle für
              Physiotherapie. Wir bieten Reinheimern und allen Patient*innen
              aus der Umgebung eine medizinische Betreuung auf höchstem Niveau.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Reinheim ist eine Stadt im Landkreis Darmstadt-Dieburg mit rund 17.000 Einwohnern und liegt
              am südlichen Rand der Rhein-Main-Region, eingebettet zwischen dem Odenwald und der Ebene.
              Unsere Praxis ist für Patient*innen aus Reinheim selbst sowie aus allen umliegenden Gemeinden
              gut erreichbar.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Wir behandeln alle Beschwerden des Bewegungsapparats, neurologische Erkrankungen und bieten
              Hausbesuche im gesamten 10-km-Umkreis an. Vereinbaren Sie jetzt Ihren Termin.
            </p>
            <div className="bg-gray-50 border border-gray-100 p-6 rounded">
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-3">Adresse</p>
              <p className="font-bold text-black">Fortis Salutis</p>
              <p className="text-gray-600 text-sm mt-1">Darmstädter Straße 43<br />64354 Reinheim</p>
              <div className="mt-4 space-y-1">
                <a href="tel:+4915773327200" className="block text-sm text-gray-600 hover:text-black transition-colors">
                  +49 157 73327200
                </a>
                <a href="mailto:info@fortis-salutis.de" className="block text-sm text-gray-600 hover:text-black transition-colors">
                  info@fortis-salutis.de
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-4">Unser Angebot</p>
            <h2 className="text-2xl font-black text-black mb-8">Alle Leistungen in Reinheim</h2>
            <div className="space-y-2">
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
          </div>
        </div>
      </section>

      <ContactCTA
        title="Termin in Reinheim vereinbaren"
        subtitle="Besuchen Sie uns in der Darmstädter Straße 43 in Reinheim oder vereinbaren Sie Ihren Termin jetzt per Telefon, WhatsApp oder E-Mail."
      />
    </>
  )
}
