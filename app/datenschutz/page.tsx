import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Fortis Salutis Reinheim',
  description: 'Datenschutzerklärung der Physiotherapiepraxis Fortis Salutis in Reinheim gemäß DSGVO.',
  robots: 'noindex',
  alternates: {
    canonical: '/datenschutz',
  },
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
            <h3 className="font-bold text-black mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="font-bold text-black mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="font-semibold text-black">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
              Datenschutzerklärung entnehmen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="font-semibold text-black">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – z. B. per
              Telefon oder E-Mail. Andere Daten werden automatisch beim Besuch der Website durch
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="font-semibold text-black">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Bearbeitung von Anfragen genutzt werden.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="font-semibold text-black">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung und Datenübertragbarkeit. Außerdem steht Ihnen ein Beschwerderecht bei
              der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">2. Hosting</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Diese Website wird bei einem externen Dienstleister (Webhoster) gehostet.
              Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten sowie Websitezugriffe handeln.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch
              einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
              Leistungspflichten erforderlich ist. Wir haben mit dem Hoster einen
              Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="font-bold text-black mb-2">Datenschutz</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="font-bold text-black mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-600 leading-relaxed mb-1">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mattis Bischoff<br />
              Darmstädter Straße 43<br />
              64354 Reinheim<br />
              Telefon: <a href="tel:+4915773327200" className="text-black underline">+49 157 73327200</a><br />
              E-Mail: <a href="mailto:info@fortis-salutis.de" className="text-black underline">info@fortis-salutis.de</a>
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten entscheidet.
            </p>

            <h3 className="font-bold text-black mb-2">Speicherdauer</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
              oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben
              (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
              erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="font-bold text-black mb-2">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sind Ihre
              Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen
              Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
              Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach
              Art. 6 Abs. 1 lit. f DSGVO erfolgen.
            </p>

            <h3 className="font-bold text-black mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://"
              auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
              an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h3 className="font-bold text-black mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
              Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
              Widerruf unberührt.
            </p>

            <h3 className="font-bold text-black mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <p className="text-gray-600 leading-relaxed mb-4 font-semibold uppercase text-sm tracking-wide">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
              erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
              einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
              Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser
              Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
              personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
              und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung
              oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 font-semibold uppercase text-sm tracking-wide">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben,
              so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
              personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch
              für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
              widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum
              Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 className="font-bold text-black mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
              bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
              Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die zuständige Aufsichtsbehörde für Hessen ist:<br />
              <strong className="font-bold text-black">Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)</strong><br />
              Postfach 3163, 65021 Wiesbaden<br />
              Telefon: +49 611 1408-0<br />
              E-Mail: <a href="mailto:poststelle@datenschutz.hessen.de" className="text-black underline">poststelle@datenschutz.hessen.de</a><br />
              <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="text-black underline">datenschutz.hessen.de</a>
            </p>

            <h3 className="font-bold text-black mb-2">Recht auf Datenübertragbarkeit</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
              Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
              in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
              dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="font-bold text-black mb-2">Auskunft, Löschung und Berichtigung</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
              Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
              Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
              personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="font-bold text-black mb-2">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
              Daten zu verlangen. Das Recht auf Einschränkung der Verarbeitung besteht in
              folgenden Fällen:
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2 mb-4">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
                benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                Sie das Recht, die Einschränkung der Verarbeitung zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben
                Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung
                der Verarbeitung zu verlangen.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen
              diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
              wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
              verarbeitet werden.
            </p>

            <h3 className="font-bold text-black mb-2">Widerspruch gegen Werbe-E-Mails</h3>
            <p className="text-gray-600 leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
              rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
              etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="font-bold text-black mb-2">Cookies</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Diese Website verwendet keine Tracking-Cookies, keine Marketing-Cookies und keine
              Analyse-Tools. Es werden ausschließlich technisch notwendige Prozesse genutzt,
              die für den fehlerfreien Betrieb der Website erforderlich sind. Ein Cookie-Banner
              ist daher nicht erforderlich.
            </p>

            <h3 className="font-bold text-black mb-2">Server-Log-Dateien</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website.
            </p>

            <h3 className="font-bold text-black mb-2">Anfrage per E-Mail oder Telefon</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke
              der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde;
              die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns,
              bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen
              oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
              gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="font-bold text-black mb-2">Schriftarten (Self-Hosted)</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Diese Website verwendet die Schriftart „Inter". Die Schriftart wird beim Aufbau
              der Website vom eigenen Server ausgeliefert (Self-Hosting) und nicht von
              Drittservern geladen. Es findet daher kein Datenaustausch mit externen Servern
              (z. B. Google) statt.
            </p>

            <h3 className="font-bold text-black mb-2">Externe Links (WhatsApp, Telefon)</h3>
            <p className="text-gray-600 leading-relaxed">
              Diese Website enthält Links zu WhatsApp (wa.me) sowie Telefon-Links (tel:).
              Dabei handelt es sich um einfache Hyperlinks – es werden keine Daten von
              unserer Website an Dritte übermittelt, bevor Sie einen solchen Link aktiv
              anklicken. Wenn Sie einen dieser Links anklicken, verlassen Sie unsere Website
              und es gelten die Datenschutzbestimmungen des jeweiligen Dienstanbieters.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-black text-black mb-4">5. Aktualität dieser Datenschutzerklärung</h2>
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
