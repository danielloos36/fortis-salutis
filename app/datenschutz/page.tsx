import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Fortis Salutis Reinheim',
  description: 'Datenschutzerklärung der Physiotherapiepraxis Fortis Salutis in Reinheim gemäß DSGVO.',
  robots: 'noindex',
}

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mb-3">Rechtliches</p>
        <h1 className="text-5xl font-black text-black mb-12">Datenschutz&shy;erklärung</h1>

        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">1. Datenschutz auf einen Blick</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <div className="bg-gray-50 border border-gray-100 p-6 rounded space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-black">Wer ist verantwortlich?</strong><br />
                Mattis Bischoff, Fortis Salutis, Darmstädter Straße 43, 64354 Reinheim
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-black">Welche Daten werden erfasst?</strong><br />
                Beim Besuch der Website werden technisch notwendige Daten (Server-Logs, IP-Adresse)
                erfasst. Kontaktdaten werden nur verarbeitet, wenn Sie aktiv Kontakt aufnehmen.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-black">Cookies & Tracking?</strong><br />
                Diese Website verwendet keine Tracking-Cookies und keine Analyse-Tools.
                Es werden keine Werbecookies gesetzt.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-black">Ihre Rechte?</strong><br />
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und weitere
                Rechte gemäß DSGVO. Kontakt: <a href="mailto:info@fortis-salutis.de" className="text-black underline">info@fortis-salutis.de</a>
              </p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">2. Verantwortliche Stelle</h2>
            <p className="text-gray-600 leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong className="font-bold text-black">Fortis Salutis – Mattis Bischoff</strong><br />
              Darmstädter Straße 43<br />
              64354 Reinheim<br />
              Telefon: <a href="tel:+4915773327200" className="text-black underline">+49 157 73327200</a><br />
              E-Mail: <a href="mailto:info@fortis-salutis.de" className="text-black underline">info@fortis-salutis.de</a>
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten entscheidet.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">3. Hosting</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Diese Website wird bei einem externen Dienstleister (Webhoster) gehostet.
              Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
              Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
              durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung
              seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf
              diese Daten befolgen. Wir haben mit dem Hoster einen Auftragsverarbeitungsvertrag
              (AVV) gemäß Art. 28 DSGVO abgeschlossen.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">4. Allgemeine Hinweise zur Datenverarbeitung</h2>

            <h3 className="font-bold text-black mb-2">Datensicherheit</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://"
              auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h3 className="font-bold text-black mb-2">Keine Weitergabe an Dritte</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ihre personenbezogenen Daten werden nicht ohne Ihre ausdrückliche Einwilligung
              an Dritte weitergegeben, außer es besteht eine gesetzliche Verpflichtung zur
              Weitergabe oder die Weitergabe dient der Vertragserfüllung.
            </p>

            <h3 className="font-bold text-black mb-2">Speicherdauer</h3>
            <p className="text-gray-600 leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
              genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
              für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen
              geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden
              Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen);
              im letzteren Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">5. Datenerfassung auf dieser Website</h2>

            <h3 className="font-bold text-black mb-2">Server-Log-Dateien</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
              Dies sind:
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert oder vollständig, abhängig vom Hoster)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>

            <h3 className="font-bold text-black mb-2">Cookies</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Diese Website verwendet keine Tracking-Cookies oder Marketing-Cookies.
              Es werden lediglich technisch notwendige Prozesse genutzt, die für den Betrieb
              der Website erforderlich sind. Ein Cookie-Banner ist daher nicht erforderlich.
            </p>

            <h3 className="font-bold text-black mb-2">Kontakt per Telefon oder E-Mail</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anliegen) zum Zwecke
              der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
              zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
              Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
              abgefragt wurde.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die von Ihnen im Rahmen von Kontaktanfragen übermittelten Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
              – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="font-bold text-black mb-2">Schriftarten</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Diese Website verwendet die Schriftart „Inter" (Google Fonts). Die Schriftart
              wird beim Aufbau der Website vom Server des Betreibers selbst ausgeliefert
              (Self-Hosting) und nicht von Drittservern geladen. Es findet daher kein
              Datenaustausch mit Google-Servern statt.
            </p>

            <h3 className="font-bold text-black mb-2">Externe Links (WhatsApp, Telefon)</h3>
            <p className="text-gray-600 leading-relaxed">
              Diese Website enthält Links zu WhatsApp (wa.me) sowie Telefon-Links (tel:).
              Dabei handelt es sich um einfache Hyperlinks – es werden keine Daten von
              unserer Website an WhatsApp oder andere Dienste übermittelt, bevor Sie einen
              solchen Link aktiv anklicken. Wenn Sie einen dieser Links anklicken, verlassen
              Sie unsere Website und es gelten die Datenschutzbestimmungen des jeweiligen
              Dienstanbieters.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">6. Ihre Rechte als betroffene Person</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sie haben gemäß DSGVO folgende Rechte gegenüber uns als verantwortlicher Stelle:
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-bold text-black text-sm">Auskunftsrecht (Art. 15 DSGVO)</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten
                  verlangen. Dies umfasst insbesondere die Verarbeitungszwecke, die Datenkategorie,
                  die Empfänger sowie die geplante Speicherdauer.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-bold text-black text-sm">Recht auf Berichtigung (Art. 16 DSGVO)</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung
                  unvollständiger personenbezogener Daten zu verlangen.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-bold text-black text-sm">Recht auf Löschung (Art. 17 DSGVO)</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen
                  Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf
                  freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung,
                  aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder
                  Verteidigung von Rechtsansprüchen erforderlich ist.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-bold text-black text-sm">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird,
                  die Verarbeitung unrechtmäßig ist oder Sie Widerspruch gegen die Verarbeitung
                  eingelegt haben.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-bold text-black text-sm">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Sie haben das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben,
                  in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die
                  Übermittlung an einen anderen Verantwortlichen zu verlangen.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-bold text-black text-sm">Widerspruchsrecht (Art. 21 DSGVO)</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen
                  Daten, die auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                  Widerspruch einzulegen. Der Verantwortliche verarbeitet die personenbezogenen
                  Daten dann nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für
                  die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der
                  betroffenen Person überwiegen.
                </p>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <p className="font-bold text-black text-sm">Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Sofern die Datenverarbeitung auf einer Einwilligung beruht, haben Sie das Recht,
                  diese jederzeit mit Wirkung für die Zukunft zu widerrufen. Durch den Widerruf
                  wird die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
                  nicht berührt.
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mt-6">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:info@fortis-salutis.de" className="text-black underline">
                info@fortis-salutis.de
              </a>
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Gemäß Art. 77 DSGVO haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
              Daten gegen die DSGVO verstößt.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Die zuständige Aufsichtsbehörde für Hessen ist:
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong className="font-bold text-black">
                Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)
              </strong><br />
              Postfach 3163<br />
              65021 Wiesbaden<br />
              Telefon: +49 611 1408-0<br />
              E-Mail:{' '}
              <a href="mailto:poststelle@datenschutz.hessen.de" className="text-black underline">
                poststelle@datenschutz.hessen.de
              </a><br />
              Website:{' '}
              <a
                href="https://datenschutz.hessen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                datenschutz.hessen.de
              </a>
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">8. Aktualität dieser Datenschutzerklärung</h2>
            <p className="text-gray-600 leading-relaxed">
              Diese Datenschutzerklärung hat den Stand April 2025. Durch die Weiterentwicklung
              unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben
              kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils
              aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-6">
          <Link href="/" className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            ← Zurück zur Startseite
          </Link>
          <Link href="/impressum" className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            Impressum
          </Link>
        </div>
      </div>
    </div>
  )
}
