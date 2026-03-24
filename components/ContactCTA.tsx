interface Props {
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function ContactCTA({
  title = 'Termin vereinbaren',
  subtitle = 'Wir sind für Sie da. Vereinbaren Sie jetzt Ihren Termin per Telefon, E-Mail oder WhatsApp.',
  dark = true,
}: Props) {
  return (
    <section className={`py-20 px-6 ${dark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black border-t border-gray-100'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-[10px] uppercase tracking-[0.3em] mb-4 font-bold ${dark ? 'text-white/50' : 'text-wine'}`}>
          Fortis Salutis · Reinheim
        </p>
        <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">{title}</h2>
        <p className={`text-base mb-10 max-w-xl mx-auto leading-relaxed ${dark ? 'text-white' : 'text-gray-600'}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+4915773327200"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
              dark
                ? 'bg-wine text-white hover:bg-wine-dark'
                : 'bg-wine text-white hover:bg-wine-dark'
            }`}
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
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] border transition-colors ${
              dark
                ? 'border-white/20 text-white hover:border-wine hover:bg-wine'
                : 'border-gray-300 text-black hover:border-wine hover:bg-wine hover:text-white'
            }`}
          >
            WhatsApp
          </a>
          <a
            href="mailto:info@fortis-salutis.de"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] border transition-colors ${
              dark
                ? 'border-white/20 text-white hover:border-wine hover:bg-wine'
                : 'border-gray-300 text-black hover:border-wine hover:bg-wine hover:text-white'
            }`}
          >
            E-Mail
          </a>
        </div>
      </div>
    </section>
  )
}
