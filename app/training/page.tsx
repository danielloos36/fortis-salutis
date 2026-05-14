import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GymSlider from '@/components/GymSlider'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Fitnessstudio Reinheim – Training bei Fortis Salutis',
  description:
    'Fitnessstudio in Reinheim: Flexibel trainieren zu günstigen Konditionen. Probetraining mit individueller Trainingsplanung. Montag bis Freitag ab 06:00 Uhr geöffnet.',
}

const hours = [
  { day: 'Mo. – Fr.', time: '06:00 – 22:00 Uhr' },
  { day: 'Sa.', time: '08:00 – 18:00 Uhr' },
  { day: 'Sonn- & Feiertag', time: '08:00 – 12:00 Uhr' },
]

const preise = [
  { label: 'Regulär', price: '44 €', sub: 'pro Monat' },
  { label: 'Schüler:innen, Student:innen & Rentner:innen', price: '39 €', sub: 'pro Monat' },
]

export default function GymPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="/training.jpg"
          alt="Fitnessstudio Training – Fortis Salutis Reinheim"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-3 font-bold">
            Gym · Fortis Salutis Reinheim
          </p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95]">
            Training
          </h1>
          <p className="text-white mt-3 text-base max-w-lg">
            Unser Fitnessstudio – offen, flexibel und zu fairen Konditionen.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">Training</span>
        </div>
      </div>

      {/* Öffnungszeiten & Konditionen */}
      <section id="oeffnungszeiten" className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Öffnungszeiten */}
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Wann Sie trainieren können</p>
            <h2 className="text-4xl font-black text-black mb-10 leading-tight">Öffnungszeiten</h2>
            <div className="divide-y divide-gray-100">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex items-center justify-between py-5">
                  <span className="font-bold text-black text-sm">{day}</span>
                  <span className="text-gray-600 text-sm">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Konditionen */}
          <div id="preis">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Was es kostet</p>
            <h2 className="text-4xl font-black text-black mb-10 leading-tight">Konditionen</h2>
            <div className="space-y-4">
              {preise.map(({ label, price, sub }) => (
                <div key={label} className="border-t-2 border-wine bg-gray-50 p-6 flex items-center justify-between gap-6 rounded">
                  <span className="text-sm text-gray-700 leading-snug max-w-xs">{label}</span>
                  <div className="text-right shrink-0">
                    <span className="font-black text-3xl text-black">{price}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-wine/30 bg-wine/5 px-6 py-5 rounded">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="font-bold text-black">Probetraining möglich –</strong> inklusive
                persönlicher Einweisung und individuell erstellter Trainingsplanung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-gray-50 py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Warum Training?</p>
          <h2 className="text-4xl font-black text-black mb-6 leading-tight">
            Vorteile von Kraft- &<br />Ausdauertraining
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-4">
            Körperliches Training birgt unzählige Vorteile. Die Weltgesundheitsorganisation empfiehlt
            erwachsenen Personen 150–300 Minuten moderate oder 75–150 Minuten intensive aerobe Belastung
            pro Woche sowie zusätzlich an zwei Tagen Krafttraining mit höherer Intensität.
          </p>

          {/* Körperliche Vorteile – Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">

            {/* Knochen */}
            <div className="bg-white p-7 border-t-2 border-wine rounded">
              <div className="w-10 h-10 bg-wine/10 flex items-center justify-center mb-5 text-wine rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-black text-black text-base mb-2">Knochen</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strukturiertes Training steigert die Knochendichte deutlich – besonders vorteilhaft für Frauen nach der Menopause.
              </p>
            </div>

            {/* Knorpel */}
            <div className="bg-white p-7 border-t-2 border-wine rounded">
              <div className="w-10 h-10 bg-wine/10 flex items-center justify-center mb-5 text-wine rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-black text-black text-base mb-2">Knorpel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Training verbessert den Querschnitt des Gelenkknorpels – einem Gewebe mit begrenzter Durchblutung und eingeschränkter Regenerationsfähigkeit.
              </p>
            </div>

            {/* Sehnen */}
            <div className="bg-white p-7 border-t-2 border-wine rounded">
              <div className="w-10 h-10 bg-wine/10 flex items-center justify-center mb-5 text-wine rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-black text-black text-base mb-2">Sehnen</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sehnen werden durch Training strukturell verändert – Steifigkeit, Dicke und Energietransfer nehmen positiv zu.
              </p>
            </div>

            {/* Muskulatur */}
            <div className="bg-white p-7 border-t-2 border-wine rounded">
              <div className="w-10 h-10 bg-wine/10 flex items-center justify-center mb-5 text-wine rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-black text-black text-base mb-2">Muskulatur</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Muskelwachstum und verbesserte Ansteuerung ermöglichen es, Alltagslasten effizienter zu bewältigen und das Sturzrisiko zu senken.
              </p>
            </div>

            {/* Bänder */}
            <div className="bg-white p-7 border-t-2 border-wine rounded">
              <div className="w-10 h-10 bg-wine/10 flex items-center justify-center mb-5 text-wine rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-black text-black text-base mb-2">Bänder</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Olympische Gewichtheber weisen ein um 75 % größeres vorderes Kreuzband auf als untrainierte Gleichaltrige – ein eindrucksvoller Beleg für die Anpassungsfähigkeit des Bandapparats.
              </p>
            </div>

            {/* Immunsystem */}
            <div className="bg-white p-7 border-t-2 border-wine rounded">
              <div className="w-10 h-10 bg-wine/10 flex items-center justify-center mb-5 text-wine rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-black text-black text-base mb-2">Immunsystem</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regelmäßiges Training senkt Infektionsraten und Mortalität durch bessere Biomarker und erhöhte Immunzellaktivität – und steigert sogar die Wirksamkeit von Impfprogrammen.
              </p>
            </div>
          </div>

          {/* Neuro + Abschluss */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-[#0a0a0a] p-7 rounded">
              <div className="w-10 h-10 bg-wine/20 flex items-center justify-center mb-5 text-wine rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-black text-white text-base mb-2">Neuroprotektiver Effekt</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Training wird ein neuroprotektiver Mechanismus zugesprochen und ist daher auch bei neurodegenerativen Erkrankungen wie Depression und Alzheimer empfohlen. Eine Untersuchung belegte die Wirksamkeit für <strong className="text-white font-bold">26 verschiedene Krankheitsbilder</strong> – darunter kardiovaskuläre, pulmonale, neurologische, psychische, onkologische und rheumatische Erkrankungen.
              </p>
            </div>

            <div className="bg-wine p-7 flex flex-col justify-center rounded">
              <p className="text-white/70 text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">Fazit</p>
              <p className="text-white font-black text-2xl leading-tight">
                Lange Rede,<br />kurzer Sinn:<br />Es lohnt sich.
              </p>
              <p className="text-white/80 text-sm mt-3">Für jede und für jeden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <section id="galerie" className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-4 font-bold">Einblick</p>
          <h2 className="text-4xl font-black text-white mb-10">Unsere Trainingsfläche</h2>
          <GymSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] border-t border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-3 font-bold">Jetzt starten</p>
            <h2 className="text-4xl font-black text-white mb-6">Interesse geweckt?</h2>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Melden Sie sich bei uns – wir vereinbaren Ihr Probetraining und erstellen Ihren
              persönlichen Trainingsplan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+4915773327200"
                className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-wine-dark transition-colors rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Anrufen
              </a>
              <a
                href="https://wa.me/4915773327200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:border-wine hover:bg-wine transition-colors rounded"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
