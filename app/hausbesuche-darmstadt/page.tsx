import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'
import { testimonials } from '@/lib/testimonials'

export const metadata: Metadata = {
  title: 'Physiotherapie Hausbesuch Darmstadt – Fortis Salutis kommt zu Ihnen',
  description:
    'Physiotherapie-Hausbesuche in Darmstadt: Krankengymnastik, Manuelle Therapie und Trainingstherapie bei Ihnen zuhause – u. a. in Innenstadt, Bessungen, Martins-, Paulus- und Johannesviertel. Jetzt Termin vereinbaren.',
  alternates: {
    canonical: '/hausbesuche-darmstadt',
  },
}

const stadtteile = [
  'Innenstadt', 'Bessungen', 'Martinsviertel', 'Paulusviertel', 'Johannesviertel',
]

const ablauf = [
  {
    step: '01',
    title: 'Kontakt aufnehmen',
    desc: 'Sie rufen uns an, schreiben per WhatsApp oder nutzen das Kontaktformular – mit kurzer Schilderung Ihres Anliegens.',
  },
  {
    step: '02',
    title: 'Termin vereinbaren',
    desc: 'Wir sprechen Ihren Bedarf durch und finden gemeinsam einen passenden Termin bei Ihnen in Darmstadt.',
  },
  {
    step: '03',
    title: 'Behandlung bei Ihnen zuhause',
    desc: 'Unser Therapeutenteam kommt zu Ihnen und behandelt Sie in gewohnter Umgebung – mit derselben fachlichen Sorgfalt wie in der Praxis.',
  },
  {
    step: '04',
    title: 'Verlauf & Anschlusstermine',
    desc: 'Nach jeder Einheit besprechen wir die Fortschritte und planen die nächsten Termine passend zu Ihrem Alltag.',
  },
]

const vorteile = [
  {
    title: 'Keine Anfahrt für Sie',
    desc: 'Statt den Weg von Darmstadt nach Reinheim auf sich zu nehmen, kommt unser Team zu Ihnen – ganz ohne Fahrt, Parkplatzsuche oder Wartezeit.',
  },
  {
    title: 'Therapie in Ihrem Alltag',
    desc: 'Übungen lassen sich direkt in Ihrer Wohnsituation erproben – vom Treppensteigen im eigenen Haus bis zur Bewegung in vertrauten Räumen.',
  },
  {
    title: 'Flexible Terminabsprache',
    desc: 'Wir stimmen die Termine individuell mit Ihnen ab – auch wenn Sie durch Beruf, Pflege von Angehörigen oder eingeschränkte Mobilität zeitlich gebunden sind.',
  },
  {
    title: 'Geprüfte Qualität wie in der Praxis',
    desc: 'Unsere Therapeuten bringen dieselbe fachliche Sorgfalt mit, die Sie auch aus der Praxis in Reinheim kennen.',
  },
]

const faqItems = [
  {
    question: 'In welchen Stadtteilen von Darmstadt bieten Sie Hausbesuche an?',
    answer:
      'Wir kommen unter anderem in die Innenstadt, nach Bessungen sowie ins Martins-, Paulus- und Johannesviertel. Ist Ihr Stadtteil hier nicht genannt, rufen Sie uns einfach an – wir finden eine Lösung.',
  },
  {
    question: 'Wie schnell kann ein Hausbesuch in Darmstadt stattfinden?',
    answer:
      'In der Regel vereinbaren wir innerhalb weniger Tage einen Termin bei Ihnen vor Ort. Bei dringendem Bedarf, etwa nach einer Operation oder einem Krankenhausaufenthalt, sprechen Sie uns gerne direkt darauf an.',
  },
  {
    question: 'Was kostet ein Hausbesuch in Darmstadt?',
    answer:
      'Die Kosten setzen sich aus dem Behandlungspreis sowie einer Fahrtkostenpauschale zusammen. Die genauen Konditionen teilen wir Ihnen gerne telefonisch oder per E-Mail mit.',
  },
  {
    question: 'Übernimmt meine Krankenkasse die Kosten für den Hausbesuch?',
    answer:
      'Fortis Salutis ist eine Privatpraxis. Gesetzlich Versicherte können bei ihrer Krankenkasse anfragen, ob die Behandlungs- und Fahrtkosten im Rahmen einer Kostenerstattung übernommen werden.',
  },
  {
    question: 'Muss ich für den Hausbesuch etwas vorbereiten?',
    answer:
      'Nein. Sie brauchen lediglich etwas Platz für die Behandlung, zum Beispiel auf einer Liege, dem Bett oder einer Trainingsmatte. Das notwendige Equipment bringt unser Team mit.',
  },
]

export default function HausbesucheDarmstadtPage() {
  const testimonial = testimonials[1]

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Startseite', path: '/' },
          { name: 'Hausbesuche', path: '/leistungen/hausbesuche' },
          { name: 'Darmstadt', path: '/hausbesuche-darmstadt' },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Physiotherapie-Hausbesuche in Darmstadt',
          description:
            'Physiotherapie-Hausbesuche in Darmstadt: Krankengymnastik, Manuelle Therapie und Trainingstherapie bei Ihnen zuhause, erbracht von Fortis Salutis aus Reinheim.',
          path: '/hausbesuche-darmstadt',
          areaServed: 'Darmstadt',
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />

      {/* Hero */}
      <section className="relative h-[64vh] min-h-[440px] flex items-end">
        <Image
          src="/hausbesuche-fotobanner.jpg"
          alt="Physiotherapie-Hausbesuch in Darmstadt – Fortis Salutis"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-[10px] text-white uppercase tracking-[0.35em] mb-3">
            Hausbesuche · Fortis Salutis Reinheim
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] max-w-3xl">
            Physiotherapie-Hausbesuche<br />in Darmstadt
          </h1>
          <p className="text-white mt-4 text-base max-w-lg leading-relaxed">
            Krankengymnastik, Manuelle Therapie und Trainingstherapie bei Ihnen zuhause – in
            allen Darmstädter Stadtteilen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="tel:+4915773327200"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors rounded"
            >
              Hausbesuch anfragen
            </a>
            <a
              href="#stadtteile"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors rounded"
            >
              Stadtteile ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] border-b border-wine/30 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-wider">
          <Link href="/" className="hover:text-wine transition-colors">Startseite</Link>
          <span>/</span>
          <Link href="/leistungen/hausbesuche" className="hover:text-wine transition-colors">Hausbesuche</Link>
          <span>/</span>
          <span className="text-white">Darmstadt</span>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-4">Physiotherapie für Darmstadt</p>
            <h2 className="text-4xl font-black text-black mb-8 leading-tight">
              Wir kommen zu Ihnen<br />nach Darmstadt.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Unser Team kommt direkt zu Ihnen nach Hause – ob bei eingeschränkter Mobilität,
              nach einer frischen Operation oder einfach aus Zeitgründen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Darmstadt gehört fest zu unserem Einzugsgebiet – wir fahren regelmäßig in die
              Stadt, von der Innenstadt bis in die Stadtteile am Rand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Die Behandlung erfolgt dabei mit derselben fachlichen Sorgfalt, die Sie auch aus
              unserer Praxis in Reinheim kennen – individuell abgestimmt auf Ihre Beschwerden
              und Ihren Alltag.
            </p>
          </div>

          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-4">Wer profitiert?</p>
            <h2 className="text-2xl font-black text-black mb-8">Für wen eignet sich ein Hausbesuch?</h2>
            <ul className="space-y-3">
              {[
                'Patient*innen mit eingeschränkter Mobilität & Bettlägerige',
                'Frisch operierte Patient*innen ohne Transportmöglichkeit',
                'Ältere Patient*innen & Senior*innen',
                'Schwere chronische Erkrankungen',
                'Patient*innen in der häuslichen Rehabilitation',
              ].map((item) => (
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

      {/* Ablauf */}
      <section className="bg-gray-100 py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">So läuft es ab</p>
          <h2 className="text-4xl font-black text-black mb-14 leading-tight">
            Vier Schritte bis zur<br />Behandlung bei Ihnen.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ablauf.map((a) => (
              <div key={a.step} className="bg-white p-7 rounded border-t-2 border-wine">
                <span className="text-wine font-black text-3xl leading-none block mb-5">{a.step}</span>
                <h3 className="font-black text-black text-base mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stadtteile */}
      <section id="stadtteile" className="bg-white py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-3 font-bold">Unser Einsatzgebiet</p>
          <h2 className="text-4xl font-black text-black mb-6 leading-tight">
            In allen Darmstädter<br />Stadtteilen für Sie da.
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Wir fahren regelmäßig in ganz Darmstadt – unter anderem in diese Stadtteile. Ist Ihr
            Stadtteil nicht gelistet, rufen Sie uns einfach an, wir finden eine Lösung.
          </p>
          <div className="flex flex-wrap gap-2">
            {stadtteile.map((s) => (
              <span
                key={s}
                className="border border-gray-200 bg-gray-50 text-gray-700 px-4 py-2.5 text-sm font-medium rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mb-3 font-bold">Ihre Vorteile</p>
          <h2 className="text-4xl font-black text-white mb-14">Warum ein Hausbesuch in Darmstadt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {vorteile.map((v, i) => (
              <div key={i} className="bg-[#111] p-7 rounded">
                <h3 className="text-white font-black mb-3">{v.title}</h3>
                <p className="text-white text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded order-2 lg:order-1">
            <Image
              src="/Therapeuten-Team.jpg"
              alt="Mattis Bischoff und Daniel Loos – Ihr Physiotherapie-Team von Fortis Salutis"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Ihr Team in Darmstadt</p>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-6 leading-tight">
              Mattis Bischoff &amp; Daniel Loos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Beide behandeln Sie bei Hausbesuchen in Darmstadt persönlich – mit derselben
              fachlichen Sorgfalt, die Sie auch aus unserer Praxis in Reinheim kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20 px-6 border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-6 font-bold">
            Das sagen unsere Patient*innen
          </p>
          <svg className="w-8 h-8 text-wine mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm17.472 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L26.824 4z" />
          </svg>
          <p className="text-black text-xl sm:text-2xl leading-relaxed font-medium mb-6">
            „{testimonial.quote}"
          </p>
          <p className="text-gray-500 text-sm">
            {testimonial.author} · {testimonial.source}-Bewertung
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] text-wine uppercase tracking-[0.3em] mb-4 font-bold">Häufige Fragen</p>
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-12">
            Fragen zum Hausbesuch in Darmstadt
          </h2>
          <div className="divide-y divide-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="font-black text-black mb-2">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAP / So erreichen Sie uns */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex flex-wrap items-center gap-4 bg-gray-50 border border-gray-100 rounded p-6">
            <div>
              <p className="text-[10px] text-wine uppercase tracking-[0.2em] font-bold mb-1">Unsere Praxis</p>
              <span className="font-black text-black text-lg">Fortis Salutis, Darmstädter Straße 43, 64354 Reinheim</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-6">Wir kommen auch in diese Orte rund um Darmstadt</p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Roßdorf', slug: 'rossdorf' },
              { name: 'Mühltal', slug: 'muehltal' },
              { name: 'Ober-Ramstadt', slug: 'ober-ramstadt' },
              { name: 'Groß-Umstadt', slug: 'gross-umstadt' },
              { name: 'Groß-Zimmern', slug: 'gross-zimmern' },
            ].map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/standorte/${slug}`}
                className="border border-gray-300 bg-white text-gray-700 px-4 py-2 text-xs font-medium hover:border-wine hover:bg-wine hover:text-white transition-all rounded-full"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Hausbesuch in Darmstadt anfragen"
        subtitle="Rufen Sie uns an oder schreiben Sie uns – wir vereinbaren einen Termin bei Ihnen zuhause in Darmstadt. Schnell, unkompliziert und persönlich."
      />
    </>
  )
}
