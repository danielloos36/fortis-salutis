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
        <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-3">Rechtliches</p>
        <h1 className="text-5xl font-black text-black mb-12">Impressum</h1>

        <div className="space-y-10">

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
            <h2 className="text-xl font-black text-black mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="font-bold text-black">Berufsbezeichnung:</strong><br />
              Physiotherapeut (verliehen in der Bundesrepublik Deutschland)
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="font-bold text-black">Zuständige Kammer:</strong><br />
              Gesundheitsamt Darmstadt
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong className="font-bold text-black">Anwendbare berufsrechtliche Regelungen:</strong>
            </p>
            <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
              <li>Masseur- und Physiotherapeutengesetz (MPhG)</li>
              <li>Berufsordnung der zuständigen Landesbehörde</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong className="font-bold text-black">Name und Sitz des Versicherers:</strong><br />
              Continentale AG<br />
              <strong className="font-bold text-black">Geltungsraum der Versicherung:</strong><br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Redaktionell verantwortlich</h2>
            <p className="text-gray-600 leading-relaxed">
              Mattis Bischoff<br />
              Darmstädter Straße 43<br />
              64354 Reinheim
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Umsatzsteuer</h2>
            <p className="text-gray-600 leading-relaxed">
              Physiotherapeutische Leistungen sind gemäß § 4 Nr. 14 UStG von der Umsatzsteuer befreit.
              Eine Umsatzsteuer-Identifikationsnummer ist daher nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-600 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Haftung für Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Urheberrecht</h2>
            <p className="text-gray-600 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
              nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Bildnachweise</h2>
            <p className="text-gray-600 leading-relaxed">
              Einzelne auf dieser Website verwendete Fotos stammen von{' '}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                Unsplash
              </a>{' '}
              und werden gemäß der Unsplash-Lizenz verwendet. Alle übrigen Fotos sind Eigentum von
              Fortis Salutis bzw. wurden mit Genehmigung der abgebildeten Personen veröffentlicht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">Streitschlichtung</h2>
            <p className="text-gray-600 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-6">
          <Link href="/" className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            ← Zurück zur Startseite
          </Link>
          <Link href="/datenschutz" className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  )
}
