import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Brazilian Jiu-Jitsu Kurs Reinheim · Fortis Salutis × Zero Pressure BJJ',
  description:
    'Brazilian Jiu-Jitsu in Reinheim – gemeinsam mit Zero Pressure BJJ Offenbach. Einstieg jederzeit möglich. Training Montag & Mittwoch, Open Mat sonntags.',
}

const programFeatures = [
  {
    label: 'Anfänger willkommen',
    sublabel: 'Für alle Level',
    desc: 'Egal ob du noch nie trainiert hast oder schon Erfahrung mitbringst – du bist willkommen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 3.5a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v3h16v-3c0-2.21-3.582-4-8-4z" />
      </svg>
    ),
  },
  {
    label: 'Einstieg jederzeit möglich',
    sublabel: 'Kein fester Starttermin nötig',
    desc: 'Du kannst jederzeit einsteigen – ganz ohne Wartezeit auf den nächsten Kursbeginn.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: 'Technik',
    sublabel: 'Sauber vermittelt',
    desc: 'BJJ-Technik, Schritt für Schritt aufgebaut für Beginner und Fortgeschrittene.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Grappling',
    sublabel: 'Rollen & Anwenden',
    desc: 'Das Gelernte im Live-Training direkt anwenden und ausprobieren.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    label: 'Community',
    sublabel: 'Zusammen trainieren',
    desc: 'Werde Teil der Fortis Community und trainiere gemeinsam mit anderen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Open Mat',
    sublabel: 'Sonntag',
    desc: 'Freies Rollen und Anwenden des Gelernten in entspannter Atmosphäre.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const performanceCoachingFeatures = [
  {
    title: 'Physiotherapeutische Eingangsanalyse',
    desc: 'Individuelle Analyse deiner Beweglichkeit, Schwächen und Belastbarkeit.',
  },
  {
    title: 'Individueller Trainingsplan',
    desc: 'Ergänzendes Krafttraining, abgestimmt auf dein Level und deine Ziele.',
  },
  {
    title: 'Monatliches Physio-Follow-up',
    desc: 'Anpassung deines Trainings und frühzeitiges Erkennen von Problemen.',
  },
  {
    title: 'Unbegrenzter Gym-Zugang',
    desc: 'Trainiere flexibel zusätzlich zu den BJJ-Einheiten.',
  },
]

export default function BJJPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] lg:min-h-[85vh] flex items-end">
        <Image
          src="/Gemini_Generated_Image_d7o28ud7o28ud7o2.png"
          alt="Brazilian Jiu-Jitsu – Fortis Salutis Reinheim"
          fill
          className="object-cover object-[75%_top] lg:object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <span className="inline-block border border-white/40 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.35em] px-4 py-2 rounded-sm backdrop-blur-sm mb-5">
            Anfänger willkommen · Einstieg jederzeit möglich
          </span>
          <p className="text-[10px] text-white/60 uppercase tracking-[0.35em] mb-4 font-bold">
            Kurse · Fortis Salutis Reinheim
          </p>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-6 max-w-4xl">
            Brazilian<br />
            Jiu-Jitsu
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-10">
            Brazilian Jiu-Jitsu in Reinheim – in Kooperation mit Zero Pressure BJJ Offenbach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
            >
              Jetzt einsteigen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#programm"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors rounded"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Kooperation */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold shrink-0">In Kooperation mit</p>
          <div className="w-px h-6 bg-white/10 shrink-0" />
          <Image
            src="/zpjj-logo.webp"
            alt="Zero Pressure Jiu Jitsu Offenbach"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white font-bold text-sm">Zero Pressure BJJ Offenbach</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-white/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <span className="text-white">Brazilian Jiu-Jitsu</span>
        </div>
      </div>

      {/* Trainingszeiten & Preise */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Auf einen Blick</p>
            <h2 className="text-3xl font-black text-black mb-10">Trainingszeiten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { day: 'Montag', time: '19:30 Uhr', label: 'BJJ Training' },
                { day: 'Mittwoch', time: '19:30 Uhr', label: 'BJJ Training' },
                { day: 'Sonntag', time: 'Open Mat', label: 'Freies Training' },
              ].map(({ day, time, label }) => (
                <div key={label} className="border-t-2 border-wine bg-gray-50 px-6 py-5 rounded">
                  <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-2">{label}</p>
                  <p className="font-black text-black text-xl">{day}</p>
                  <p className="text-gray-600 text-sm mt-1">{time}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Abo-Modell</p>
            <h2 className="text-3xl font-black text-black mb-10">Preise</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-t-2 border-wine bg-gray-50 px-6 py-6 rounded">
                <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-3">Mitglieder</p>
                <p className="font-black text-black text-4xl leading-none">
                  59&nbsp;€
                </p>
                <p className="text-gray-600 text-sm mt-2">/ Monat</p>
              </div>
              <div className="border-t-2 border-wine bg-gray-50 px-6 py-6 rounded">
                <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-3">Externe</p>
                <p className="font-black text-black text-4xl leading-none">
                  69&nbsp;€
                </p>
                <p className="text-gray-600 text-sm mt-2">/ Monat</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">
              Mitglieder = bestehende Fortis Salutis Mitglieder. Externe = alle anderen Teilnehmer*innen.
            </p>
          </div>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section id="programm" className="bg-[#0a0a0a] py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-white/30" />
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em]">Das Rundum-Paket</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Was dich erwartet
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-14 leading-relaxed">
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-7 hover:border-white/30 hover:bg-white/8 transition-all rounded group"
              >
                <div className="w-12 h-12 bg-wine text-white flex items-center justify-center mb-5 rounded group-hover:bg-wine-dark transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-black text-white text-base mb-1">{feature.label}</h3>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">{feature.sublabel}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Coaching Add-on */}
      <section className="bg-gray-50 py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-wine" />
            <p className="text-[10px] text-wine font-bold uppercase tracking-[0.3em]">Zusatzangebot · Auf Anfrage</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-4 leading-tight">
            BJJ Performance Coaching
          </h2>
          <p className="text-gray-600 max-w-2xl mb-14 leading-relaxed">
            Wer strukturiert und sicher vorankommen möchte, kann sich zusätzlich zum Kurs für unser Performance Coaching anmelden – mit physiotherapeutischer Betreuung und individuellem Trainingsplan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {performanceCoachingFeatures.map((feature, i) => (
              <div key={i} className="border-t-2 border-wine bg-white p-6 rounded shadow-sm">
                <h3 className="font-black text-black text-base mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-wine text-white px-6 py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
          >
            Performance Coaching anfragen
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Kontakt / CTA */}
      <section id="kontakt" className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-4 font-bold">
            Fortis Salutis · Reinheim
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Jetzt einsteigen oder<br />mehr erfahren
          </h2>
          <p className="text-neutral-400 text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Einstieg jederzeit möglich – melde dich einfach für weitere Infos.
          </p>

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded px-6 py-4 mb-10">
            <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.562 4.14 1.541 5.879L0 24l6.305-1.52A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.399l-.371-.22-3.744.902.944-3.63-.242-.374A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            <p className="text-white text-sm text-left">
              Schreib einfach <span className="font-black text-white bg-white/10 px-2 py-0.5 rounded">&quot;BJJ&quot;</span> per WhatsApp für mehr Infos oder um direkt deinen Platz zu sichern.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a
              href="https://wa.me/4915773327200?text=BJJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
            >
              WhatsApp – „BJJ" schreiben
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
              href="https://wa.me/4915773327200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-wine hover:bg-wine transition-colors rounded"
            >
              WhatsApp
            </a>
            <a
              href="mailto:info@fortis-salutis.de"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-wine hover:bg-wine transition-colors rounded"
            >
              E-Mail
            </a>
          </div>

          {/* Kooperation */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <Image
              src="/logo.png"
              alt="Fortis Salutis"
              width={44}
              height={44}
              className="brightness-0 invert opacity-60"
            />
            <span className="text-white/30 font-black text-xl">×</span>
            <Image
              src="/zpjj-logo.webp"
              alt="Zero Pressure Jiu Jitsu"
              width={44}
              height={44}
              className="rounded-full opacity-80"
            />
            <div className="text-left">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">In Kooperation mit</p>
              <p className="text-white/70 text-sm font-bold">Zero Pressure BJJ Offenbach</p>
            </div>
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
                <a href="https://wa.me/4915773327200?text=BJJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-bold hover:text-wine transition-colors">
                  <svg className="w-4 h-4 text-wine shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp – „BJJ" schreiben
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
