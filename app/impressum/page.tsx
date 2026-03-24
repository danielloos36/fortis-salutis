import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum – Fortis Salutis Reinheim',
  description: 'Impressum der Physiotherapiepraxis Fortis Salutis in Reinheim, Hessen.',
  robots: 'noindex',
}

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-3">Rechtliches</p>
        <h1 className="text-5xl font-black text-black mb-12">Impressum</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-black text-black mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong className="font-bold text-black">Fortis Salutis</strong><br />
              Mattis Bischoff<br />
              Darmstädter Straße 43<br />
              64354 Reinheim
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Kontakt</h2>
            <p className="text-gray-600 leading-relaxed">
              Telefon: <a href="tel:+4915773327200" className="text-black underline">+49 157 73327200</a><br />
              E-Mail: <a href="mailto:info@fortis-salutis.de" className="text-black underline">info@fortis-salutis.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Berufsbezeichnung</h2>
            <p className="text-gray-600 leading-relaxed">
              Physiotherapeut / Heilpraktiker<br />
              (Berufsbezeichnung wurde in Deutschland verliehen)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-600 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht obligiert, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Haftung für Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Urheberrecht</h2>
            <p className="text-gray-600 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
