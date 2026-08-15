import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

interface Props {
  title?: string
  subtitle?: string
}

export default function ContactCTA({
  title = 'Termin vereinbaren',
  subtitle = 'Wir sind für Sie da. Schreiben Sie uns direkt über das Formular oder kontaktieren Sie uns per Telefon und WhatsApp.',
}: Props) {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-4 font-bold text-white/50">
            Fortis Salutis · Reinheim
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-white">{title}</h2>
          <p className="text-base mb-8 leading-relaxed text-white/80">{subtitle}</p>

          <div className="flex items-center gap-4 mb-8">
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

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+4915773327200"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors rounded bg-wine text-white hover:bg-wine-dark"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] border transition-colors rounded border-white/20 text-white hover:border-wine hover:bg-wine"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-10 border border-wine/30 bg-wine/10 rounded p-5">
            <p className="text-xs text-wine uppercase tracking-[0.25em] mb-2 font-bold">Hinweis zur Abrechnung</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Fortis Salutis ist eine <strong className="text-white font-bold">Privatpraxis</strong>. Gesetzlich Versicherte können bei ihrer Krankenkasse anfragen, ob die Behandlungskosten im Rahmen einer Kostenerstattung übernommen werden. Viele Kassen erstatten die Kosten ganz oder anteilig – es lohnt sich, nachzufragen.
            </p>
          </div>
        </div>

        {/* Right – contact form */}
        <ContactForm />
      </div>
    </section>
  )
}
