import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BJJ Performance Coaching – Brazilian Jiu-Jitsu Reinheim · Fortis Salutis',
  description:
    'Brazilian Jiu-Jitsu Coaching in Reinheim: Strukturiert starten mit BJJ Training, Krafttraining und physiotherapeutischer Betreuung. Max. 10 Teilnehmer. Startet im Juni.',
}

const programFeatures = [
  {
    label: '2x BJJ Training pro Woche',
    sublabel: 'Montag & Mittwoch · 19:30 Uhr',
    desc: 'Training in kleiner Gruppe (max. 10 Teilnehmer)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    label: 'Physiotherapeutische Eingangsanalyse',
    sublabel: 'Individuelle Analyse',
    desc: 'Individuelle Analyse deiner Beweglichkeit, Schwächen und Belastbarkeit',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Individueller Trainingsplan',
    sublabel: 'Ergänzendes Krafttraining',
    desc: 'Ergänzendes Krafttraining abgestimmt auf dein Level und deine Ziele',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Monatliches Physio-Follow-up',
    sublabel: 'Anpassung & Prävention',
    desc: 'Anpassung deines Trainings und frühzeitiges Erkennen von Problemen',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: 'Unbegrenzter Gym-Zugang',
    sublabel: 'Flexibel trainieren',
    desc: 'Trainiere flexibel zusätzlich zu den BJJ-Einheiten',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'Open Mat',
    sublabel: 'Sonntag · 8–10 Uhr',
    desc: 'Freies Rollen und Anwenden des Gelernten in entspannter Atmosphäre',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const targetAudience = [
  'Anfänger ohne Vorerfahrung',
  'Wiedereinsteiger',
  'Menschen, die strukturiert trainieren wollen',
  'alle, die Wert auf sauberes und sicheres Training legen',
]

const goals = [
  {
    title: 'BJJ-Grundlagen',
    desc: 'die Grundlagen von Brazilian Jiu-Jitsu',
  },
  {
    title: 'Körper stärken',
    desc: 'deinen Körper gezielt stärker und belastbarer zu machen',
  },
  {
    title: 'Verletzungsfrei trainieren',
    desc: 'von Anfang an sauber und verletzungsfrei zu trainieren',
  },
]

export default function BJJPerformanceCoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] lg:min-h-[85vh] flex items-end">
        <Image
          src="/Gemini_Generated_Image_ut828yut828yut82.png"
          alt="BJJ Performance Coaching – Fortis Salutis Reinheim"
          fill
          className="object-cover object-[75%_top] lg:object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <span className="inline-block border border-white/40 bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.35em] px-4 py-2 rounded-sm backdrop-blur-sm mb-5">
            Startet Juni 2026 · 12 Wochen · Max. 10 Plätze
          </span>
          <p className="text-[10px] text-white/60 uppercase tracking-[0.35em] mb-4 font-bold">
            Kurse · Fortis Salutis Reinheim
          </p>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-6 max-w-4xl">
            BJJ<br />
            Performance<br />
            Coaching
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-10">
            Brazilian Jiu-Jitsu von Grund auf – kombiniert mit gezieltem Krafttraining und physiotherapeutischer Betreuung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-wine text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
            >
              Jetzt Platz sichern
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#programm"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors rounded"
            >
              Programm ansehen
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
          <span className="text-white">BJJ Performance Coaching</span>
        </div>
      </div>

      {/* Intro – Das Programm */}
      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Das Programm</p>
              <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 leading-tight">
                Strukturiert.<br />Sicher.<br />Mit System.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                Dieses Programm richtet sich an Anfänger und Wiedereinsteiger, die nicht einfach nur „irgendwo mittrainieren" möchten, sondern strukturiert, sicher und mit System starten wollen.
              </p>

              <div className="mt-10 flex items-center gap-6">
                <div className="text-center">
                  <span className="text-4xl font-black text-black">12</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">Wochen</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <span className="text-4xl font-black text-black">10</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">Teilnehmer max.</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <span className="text-4xl font-black text-black">2×</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">Training / Woche</span>
                </div>
              </div>
            </div>

            {/* Ziele */}
            <div>
              <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Dein Ziel</p>
              <h2 className="text-2xl font-black text-black mb-4">In diesem Coaching lernst du:</h2>
              <div className="space-y-4">
                {goals.map((goal, i) => (
                  <div key={i} className="border-t-2 border-wine bg-gray-50 p-6 rounded">
                    <div className="flex items-start gap-3">
                      <span className="text-wine font-black text-2xl opacity-50 leading-none shrink-0">0{i + 1}</span>
                      <p className="text-gray-800 font-medium leading-relaxed pt-0.5">{goal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            Kein Einzelbaustein, sondern ein durchdachtes System – von der ersten Analyse bis zum freien Rollen.
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

      {/* Warum dieses Konzept */}
      <section className="bg-wine py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/70 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Die Realität</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Warum dieses Konzept?
              </h2>
              <p className="text-white/90 leading-relaxed mb-6 text-base">
                Viele steigen in den Kampfsport ein – und hören schnell wieder auf.
                Nicht, weil BJJ nicht funktioniert, sondern weil:
              </p>
              <ul className="space-y-4 mb-8">
                {['Struktur fehlt', 'Der Körper nicht vorbereitet ist', 'Überlastungen entstehen'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-8 h-8 border-2 border-white/40 flex items-center justify-center shrink-0 text-white rounded">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-white font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/90 leading-relaxed text-base font-bold">
                Dieses Coaching verbindet Technik, Kraft und Betreuung, damit du langfristig Fortschritt machst.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded border border-white/20">
                <div className="text-5xl font-black text-white/20 mb-4">→</div>
                <h3 className="font-black text-white text-xl mb-3">Technik</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  BJJ-Grundlagen, die wirklich sitzen. Sauber vermittelt, Schritt für Schritt.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded border border-white/20">
                <div className="text-5xl font-black text-white/20 mb-4">→</div>
                <h3 className="font-black text-white text-xl mb-3">Kraft</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Ergänzendes Krafttraining, das deinen Körper auf BJJ vorbereitet und belastbar macht.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded border border-white/20">
                <div className="text-5xl font-black text-white/20 mb-4">→</div>
                <h3 className="font-black text-white text-xl mb-3">Betreuung</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Physiotherapeutische Eingangsanalyse und monatliche Follow-ups – du wirst nicht allein gelassen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen & Wichtig */}
      <section className="bg-gray-50 py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Für wen */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-wine" />
              <p className="text-[10px] text-wine font-bold uppercase tracking-[0.3em]">Zielgruppe</p>
            </div>
            <h2 className="text-3xl font-black text-black mb-8 leading-tight">Für wen ist das geeignet?</h2>
            <ul className="space-y-3">
              {targetAudience.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-wine text-white flex items-center justify-center shrink-0 mt-0.5 rounded-sm">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Wichtig & Einstieg */}
          <div className="space-y-6">
            <div className="bg-[#0a0a0a] p-8 rounded">
              <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-3 font-bold">Wichtig</p>
              <h3 className="font-black text-white text-xl mb-4 leading-tight">
                Maximal 10 Teilnehmer
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Die Teilnehmerzahl ist bewusst auf maximal 10 Personen begrenzt, um eine individuelle Betreuung zu gewährleisten.
              </p>
            </div>

            <div className="bg-white border-t-2 border-wine p-8 rounded shadow-sm">
              <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">Einstieg</p>
              <h3 className="font-black text-black text-xl mb-4 leading-tight">
                Das Programm startet im Juni<br />und läuft über 12 Wochen.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Wenn du Interesse hast, sichere dir jetzt deinen Platz oder melde dich für weitere Infos.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-wine text-white px-6 py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-wine-dark transition-colors rounded"
              >
                Platz sichern
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trainingszeiten Übersicht */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Auf einen Blick</p>
          <h2 className="text-3xl font-black text-black mb-10">Trainingszeiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { day: 'Montag', time: '19:30 Uhr', label: 'BJJ Training' },
              { day: 'Mittwoch', time: '19:30 Uhr', label: 'BJJ Training' },
              { day: 'Sonntag', time: '08:00 – 10:00 Uhr', label: 'Open Mat' },
              { day: '90 – 120 Min.', time: 'pro Einheit', label: 'Dauer' },
            ].map(({ day, time, label }) => (
              <div key={label} className="border-t-2 border-wine bg-gray-50 px-6 py-5 rounded">
                <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-2">{label}</p>
                <p className="font-black text-black text-xl">{day}</p>
                <p className="text-gray-600 text-sm mt-1">{time}</p>
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
            Platz sichern oder<br />mehr erfahren
          </h2>
          <p className="text-neutral-400 text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Wenn du Interesse hast, sichere dir jetzt deinen Platz oder melde dich für weitere Infos.
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

          {/* Kontaktdaten */}
          <div className="border-t border-white/10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-2">Telefon</p>
              <a href="tel:+4915773327200" className="text-white font-bold hover:text-wine transition-colors">
                +49 157 73327200
              </a>
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-2">E-Mail</p>
              <a href="mailto:info@fortis-salutis.de" className="text-white font-bold hover:text-wine transition-colors">
                info@fortis-salutis.de
              </a>
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold mb-2">Standort</p>
              <span className="text-white font-bold">Reinheim, Hessen</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
