import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutz – Fortis Salutis Reinheim',
  description: 'Datenschutzerklärung der Physiotherapiepraxis Fortis Salutis in Reinheim.',
  robots: 'noindex',
}

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-3">Rechtliches</p>
        <h1 className="text-5xl font-black text-black mb-12">Datenschutz&shy;erklärung</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-black text-black mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-bold text-black mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">2. Verantwortliche Stelle</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong className="font-bold text-black">Fortis Salutis – Mattis Bischoff</strong><br />
              Darmstädter Straße 43<br />
              64354 Reinheim<br />
              Telefon: <a href="tel:+4915773327200" className="text-black underline">+49 157 73327200</a><br />
              E-Mail: <a href="mailto:info@fortis-salutis.de" className="text-black underline">info@fortis-salutis.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-bold text-black mb-2">Cookies</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Diese Website verwendet keine Cookies für Tracking oder Marketingzwecke.
            </p>
            <h3 className="font-bold text-black mb-2">Server-Log-Dateien</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt.
              Dies sind: Browsertyp und -version, verwendetes Betriebssystem,
              Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage,
              IP-Adresse.
            </p>
            <h3 className="font-bold text-black mb-2">Kontakt per E-Mail oder Telefon</h3>
            <p className="text-gray-600 leading-relaxed">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke
              der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
              Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black mb-4">4. Ihre Rechte</h2>
            <p className="text-gray-600 leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
              und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
              außerdem ein Recht auf Berichtigung oder Löschung dieser Daten. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit widerrufen. Bitte wenden Sie sich dazu an:{' '}
              <a href="mailto:info@fortis-salutis.de" className="text-black underline">
                info@fortis-salutis.de
              </a>
            </p>
          </section>

          <p className="text-gray-500 text-sm italic">
            Diese Datenschutzerklärung ist ein Platzhalter und muss durch einen
            rechtlich geprüften Text ersetzt werden.
          </p>
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
