import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  slug: 'die-vorteile-von-evidenzorientierter-physiotherapie',
  title: 'Die Vorteile von evidenzorientierter Physiotherapie',
  subtitle: 'Weshalb sollte das Gesundheitswesen aus fundierten Interventionen schöpfen?',
  date: '29. Mai 2022',
  updated: '2. März 2023',
  readingTime: '7 Min.',
  author: 'Mattis Bischoff',
  tags: ['evidenzbasierte Physiotherapie', 'Physiotherapie', 'Wissenschaft'],
  heroImage: '/blog/evidenz-abb6.png',
  excerpt:
    'Dieser Beitrag stellt das Konzept von evidenzorientierter Physiotherapie samt dessen Vor- und Nachteile für Patienten und Therapeuten dar.',
  blocks: [
    {
      type: 'p',
      html: 'Dieser Beitrag stellt das Konzept von evidenzorientierter Physiotherapie samt dessen Vor- und Nachteile für Patienten und Therapeuten dar.',
    },
    { type: 'h3', text: 'Physiotherapie und Wissenschaft in Deutschland' },
    {
      type: 'p',
      html: 'Um in Deutschland als Physiotherapeut*in tätig zu werden, bedarf es des staatlich anerkannten Abschlusses, der im Zuge eines erfolgreich absolvierten Staatsexamens nach einer dreijährigen Ausbildung verliehen wird. Diese Ausbildung kann zwar ebenfalls im Rahmen eines Studiums durchgeführt werden, jedoch durchläuft der Großteil der Absolventen*innen die schulische Ausbildung, sodass Stand 2018 ungefähr 2,7% aller Physiotherapeuten*innen einen akademischen Abschluss innehatten (<a href="https://www.physio-deutschland.de/fileadmin/data/bund/Dateien_oeffentlich/Beruf_und_Bildung/Studium/Hochschulumfrage-2020.pdf" target="_blank" rel="noopener noreferrer">Physio-Deutschland, 2020</a>).',
    },
    {
      type: 'p',
      html: 'Abgesehen davon ist Physiotherapie noch ein relativ junger Berufszweig, der verschiedene Komponenten aus unterschiedlichen Fachbereichen vereint. Diese Gegebenheiten resultieren darin, dass Wissenschaft innerhalb der Physiotherapie vor allem in Deutschland nicht in dem Maße verbreitet ist, wie in anderen gesundheitlichen Therapie- und Fachbereichen. Folglich stammen viele fundierte Erkenntnisse aus anderen Disziplinen: Medizin, Sportwissenschaft, Biologie, Psychologie, Physik und Philosophie.',
    },
    {
      type: 'p',
      html: 'Im Ausland ist eine Akademisierung des Berufes allerdings nahezu überall vorhanden, dementsprechend forschungsstärker sind Länder wie Groß-Britannien, USA und Australien.',
    },
    { type: 'h3', text: 'Die Folgen fehlender fundierter Interventionen' },
    {
      type: 'p',
      html: 'Eine aktuelle Untersuchung (<a href="https://bmcmusculoskeletdisord.biomedcentral.com/articles/10.1186/s12891-021-04422-2" target="_blank" rel="noopener noreferrer">Bahns et al., 2021</a>) zeigt die Problematik dieses Sachverhaltes auf: Physiotherapeuten in Deutschland, die Patienten mit chronischen Rückenschmerzen therapieren, wählen oftmals Interventionen, die nicht durch wissenschaftliche Erkenntnisse und Leitlinien gestützt werden. In den USA mangelt es den Patienten an Aufklärung und Bewegungstherapie, demgegenüber wird viel Elektrotherapie angewendet, was bei chronischen Rückenschmerzen nicht empfohlen wird (<a href="https://pubmed.ncbi.nlm.nih.gov/31368371/" target="_blank" rel="noopener noreferrer">Meroni et al., 2021</a>).',
    },
    {
      type: 'p',
      html: 'Folglich spiegeln sich diese Umstände im Behandlungserfolg und der Nachhaltigkeit wider: So beträgt die Rückfallrate von unteren Rückenschmerzen 24-33% (<a href="https://pubmed.ncbi.nlm.nih.gov/28355981/" target="_blank" rel="noopener noreferrer">da Silva et al., 2017</a>). Ähnliche Umstände finden sich im Sportbereich: Da beträgt die Rerupturrate nach einem Riss des vorderen Kreuzbandes im Jugendbereich 23% (<a href="https://pubmed.ncbi.nlm.nih.gov/26772611/" target="_blank" rel="noopener noreferrer">Wiggins et al., 2016</a>). Bei einer Muskelverletzung der ischiocruralen Muskulatur beträgt hier die Rerupturrate sogar 30% (<a href="https://pubmed.ncbi.nlm.nih.gov/11854581/" target="_blank" rel="noopener noreferrer">Orchard et al., 2002</a>). Somit scheinen die Return-to-sports-Verfahren genauso Mängeln zu unterliegen wie die Versorgung der breiten Bevölkerung.',
    },
    { type: 'h3', text: 'Aspekte der evidenzbasierten Physiotherapie' },
    {
      type: 'p',
      html: 'Bevor die Vorteile evidenzbasierter Physiotherapie dargelegt werden, sollte diese definiert werden. Eine Forschungsgruppe (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5125490/" target="_blank" rel="noopener noreferrer">Veras et al., 2016</a>) hat sich die Mühe gemacht, die bisherige Definition zu überarbeiten und kam zu folgendem Entschluss:',
    },
    {
      type: 'quote',
      html: '„Evidenzbasierte Physiotherapie ist ein Bereich des Studiums, der Forschung und der Praxis, in dem klinische Entscheidungen auf den am besten verfügbaren Erkenntnissen beruhen und die therapeutische Praxis und das Fachwissen mit ethischen Grundsätzen in Einklang gebracht werden."',
    },
    { type: 'p', html: 'Dieses Augenmerk auf Evidenz bringt jedoch einige Hürden mit sich:' },
    {
      type: 'ul',
      items: [
        'Auswertung: Es existieren einige Probleme in der statistischen Auswertung, sodass Schätzungen (<a href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124" target="_blank" rel="noopener noreferrer">Ioannidis, 2005</a>) zufolge über 25% aller positiven Studien in Wahrheit gar keinen Effekt vorweisen dürften. Dies lässt sich durch die Nutzung des p-Wertes erklären, der für die Wahrscheinlichkeit eines zufälligen Effektes stehen soll. Allerdings ist dies nicht korrekt, da die Vortestwahrscheinlichkeit bzw. die Plausibilität der getesteten Hypothese, Effektgrößen und Konfidenzintervalle unabhängig vom p-Wert die Aussagekraft eines Studienergebnisses deutlich beeinflussen können.',
        'Umfang: Mittlerweile existieren unzählige wissenschaftliche Abhandlungen zu den meisten Themen – darunter auch einige mit zweifelhafter Praxisrelevanz.',
        'Agenda: Beispielsweise scheinen manche Länder in Asien einigen Interventionen wie beispielsweise Akupunktur gegenüber voreingenommen zu sein, da in den Studien hierzu – anders als westliche Publikationen – ausschließlich positive Ergebnisse generiert werden.',
      ],
    },
    { type: 'image', image: { src: '/blog/evidenz-abb1.png', alt: 'p-Wert und Aussagekraft', caption: 'Abb. 1: p-Wert und Aussagekraft (Nuzzo, 2014).' } },
    { type: 'image', image: { src: '/blog/evidenz-abb2.png', alt: 'Topische Knoblauchanwendung als Schutz gegen Vampire', caption: 'Abb. 2: topische Knoblauchanwendung als Schutz gegen Vampire (Sandvik & Baerheim, 1994).' } },
    { type: 'image', image: { src: '/blog/evidenz-abb3.png', alt: 'Wollunterwäsche gegen chronische Rückenschmerzen', caption: 'Abb. 3: Wollunterwäsche gegen chronische Rückenschmerzen (Kiyak, 2012).' } },
    { type: 'image', image: { src: '/blog/evidenz-abb4.png', alt: 'Krokodilblut gegen Muskelkater', caption: 'Abb. 4: Krokodilblut hilft demnach gegen Muskelkater (Paratthakonkun et al., 2021).' } },
    { type: 'image', image: { src: '/blog/evidenz-abb5.png', alt: 'Positive Ergebnisse von Akupunktur in östlichen Publikationen', caption: 'Abb. 5: östliche Publikationen ermitteln fast ausschließlich positive Ergebnisse von Akupunktur (Vickers et al., 1998).' } },
    {
      type: 'p',
      html: 'Darum bedient sich evidenzbasierte Medizin dreier Prinzipien, die aufeinanderfolgend eine hohe Qualität der gesundheitlichen Versorgung sicherstellen sollen und ohne Probleme auf evidenzbasierte Physiotherapie übertragen werden können:',
    },
    {
      type: 'ol',
      items: [
        '<strong>Hierarchie</strong>: Qualitative Unterschiede in der Forschung sollen berücksichtigt werden, sodass beispielsweise Meta-Analysen ein höherer Stellenwert als Expertenmeinungen eingeräumt wird.',
        '<strong>Ganzheitlichkeit</strong>: Die Gesamtheit der verfügbaren Evidenz soll berücksichtigt werden, sodass ein „<a href="https://de.wikipedia.org/wiki/Rosinenpicken" target="_blank" rel="noopener noreferrer">cherry-picking</a>" vermieden wird, bei dem nur Forschungsbelege aufgeführt werden, die die eigene Meinung untermauern.',
        '<strong>Patient</strong>: Der Patient soll in seiner Autonomie gefördert werden, damit eine Abhängigkeit vom Therapeuten vermieden wird. Hierbei sollen auch die Erwartungen des Patienten berücksichtigt werden, sodass eine gemeinsame Zielsetzung für die Therapie beschlossen wird.',
      ],
    },
    { type: 'image', image: { src: '/blog/evidenz-abb6.png', alt: 'EBP als Prozess', caption: 'Abb. 6: EBP als Prozess.' } },
    {
      type: 'p',
      html: 'Zudem kommen innerhalb der Definition für „evidenzbasierte Physiotherapie" medizinethische Aspekte zum Tragen, die bis dahin unberücksichtigt blieben:',
    },
    {
      type: 'ol',
      items: [
        'Das Prinzip der Autonomie, das die Entscheidungsfreiheit und Selbstbestimmung der Patienten gewährleistet.',
        'Das Prinzip der Schadensvermeidung, das dem <a href="https://de.wikipedia.org/wiki/Primum_non_nocere" target="_blank" rel="noopener noreferrer"><em>primum non nocere</em></a> des Hippokratischen Eides angelehnt ist.',
        'Das Prinzip der Fürsorge, das Therapeuten zu aktivem Handeln im Sinne der Gesundheitsförderung des Patienten verpflichtet.',
        'Das Prinzip der Gerechtigkeit, das eine faire und angemessene Verteilung von Gesundheitsleistungen verlangt.',
      ],
    },
    { type: 'p', html: 'Diese Aspekte von evidenzbasierter Physiotherapie sollen letzten Endes eine optimale Therapie gewährleisten.' },
    {
      type: 'p',
      html: 'Des Weiteren sind Therapeuten und andere Leistungserbringer gesetzlich verpflichtet (<a href="https://www.gesetze-im-internet.de/sgb_5/__135a.html" target="_blank" rel="noopener noreferrer">SGB V</a>), dass die Leistungen dem jeweiligen Stand der wissenschaftlichen Erkenntnisse entsprechen müssen. Der Gemeinsame Bundesausschuss (<a href="https://www.sozialgesetzbuch-sgb.de/sgbv/137f.html" target="_blank" rel="noopener noreferrer">§ 137 f</a>) hat diese Gegebenheit in einer ähnlichen Wortwahl deklariert.',
    },
    { type: 'h3', text: 'Kontextfaktoren in der Therapie' },
    {
      type: 'p',
      html: 'Selbst wenn manche Therapeuten immer noch nicht überzeugt sind, stellt sich die Frage, welche Alternative zur wissenschaftlichen Herangehensweise verbleiben? Welchen Prozess wollen wir Therapiemöglichkeiten unterlaufen lassen, um diese hinsichtlich Effektivität und Effizienz bewerten zu können? Manche würden diese Frage mit „Erfahrung" oder „Intuition" beantworten und durch die Rahmenbedingungen im Gesundheitssystem können viele Therapeuten ihre Therapie nach diesen Punkten gestalten. Zudem ist es als Patient nahezu unmöglich, die Qualität einer Therapie zu bewerten. Ein Problem jedoch, die Therapie objektiv zu bewerten, stellt die Tatsache dar, dass in den Therapieprozess viele sogenannte Kontextfaktoren einfließen:',
    },
    {
      type: 'ol',
      items: [
        '<a href="https://sciencebasedmedicine.org/placebo-are-you-there/" target="_blank" rel="noopener noreferrer">Placebo-Effekt</a>: Hier erfährt eine Person positive Gesundheitsveränderungen, obwohl die Intervention oder das Arzneimittel nachgewiesenermaßen keinen nutzbringenden Effekt auf vorliegende Pathologie aufweist.',
        '<a href="https://www.spektrum.de/lexikon/psychologie/halo-effekt/6232" target="_blank" rel="noopener noreferrer">Halo-Effekt</a>: Hier schließt eine Person aufgrund einer bekannten Eigenschaft des Gegenübers auf unbekannte Eigenschaften. Beispielsweise kann ein sympathisches oder attraktives Auftreten fälschlicherweise zur Schlussfolgerung führen, dass die Person demzufolge kompetent ist.',
        '<a href="https://de.wikipedia.org/wiki/Hawthorne-Effekt" target="_blank" rel="noopener noreferrer">Hawthorne-Effekt</a>: Hier ändern Personen ihr natürliches Verhalten, sobald diese unter Beobachtung stehen. So können Leistungssteigerungen oder anderweitige Veränderungen auf die Präsenz des Therapeuten zurückgeführt werden.',
        '<a href="https://de.wikipedia.org/wiki/Regression_zur_Mitte" target="_blank" rel="noopener noreferrer">Regression zur Mitte</a>: Patienten nehmen meistens ärztliche/therapeutische Hilfe in Anspruch, wenn ihre Symptome gipfeln. Dadurch ist die Wahrscheinlichkeit hoch, dass sich die Schwere des Beschwerdebildes auch ohne Therapie anschließend wieder dem Durchschnitt annähert.',
        'natürlicher Heilungsverlauf: Viele Krankheiten und Symptome vergehen von selbst. Inwieweit eine Therapie den Lauf der Dinge beeinflusst, ist schwierig zu bestimmen.',
      ],
    },
    {
      type: 'p',
      html: 'Eine Untersuchung (<a href="https://pubmed.ncbi.nlm.nih.gov/31425144/" target="_blank" rel="noopener noreferrer">Kallergis, 2019</a>) geht sogar so weit zu sagen, dass die Patienten-Therapeuten-Beziehung und die damit verbundenen Kontextfaktoren bis zu 85% des Therapieerfolges ausmachen können. Doch ebenfalls können den Therapeuten einige kognitive Fehlschlüsse unterlaufen, die die Bewertung des Therapieerfolges verzerren: Falls oben genannte Kontextfaktoren unberücksichtigt bleiben und eine Genesung des Patienten unmittelbar auf die gewählte Intervention zurückgeführt wird, kann daraus unbegründet ein kausaler Rückschluss gezogen werden: <a href="https://de.wikipedia.org/wiki/Post_hoc_ergo_propter_hoc" target="_blank" rel="noopener noreferrer"><em>post hoc ergo propter hoc</em></a>. Außerdem neigen Personen dazu, Ereignisse, die ihre Meinung und Erwartung bestätigen, besser und höher in Erinnerung zu behalten als gegensätzliche Geschehnisse. Dieser „<a href="https://de.wikipedia.org/wiki/Best%C3%A4tigungsfehler" target="_blank" rel="noopener noreferrer">confirmation bias</a>" begleitet einen jeden Therapeuten, wenn Interventionen einzig und allein auf Grundlage der Erfahrung und des Gefühls ausgewählt werden. Ein weiterer Punkt ist der <a href="https://de.wikipedia.org/wiki/Dunning-Kruger-Effekt" target="_blank" rel="noopener noreferrer">Dunning-Kruger-Effekt</a>, bei welchem die eigene Kompetenz, wenn das eigene Wissen auf diesem Gebiet mangelhaft ist, durchschnittlich deutlich zu hoch eingeschätzt wird.',
    },
    { type: 'image', image: { src: '/blog/evidenz-abb7.jpg', alt: 'Dunning-Kruger-Effekt', caption: 'Abb. 7: Dunning-Kruger-Effekt am Beispiel eines Testergebnisses (Novella, 2019).' } },
    {
      type: 'p',
      html: 'Evidenzbasierte Physiotherapie bedeutet, sich dieser Faktoren bewusst zu sein und kausale Rückschlüsse von Therapie oder Interventionen auf die Gesundheit mit Vorsicht zu genießen.',
    },
    {
      type: 'p',
      html: 'Darum ist auch der Leitsatz „Wer heilt hat Recht" problematisch zu betrachten, denn kaum jemand kann tatsächlich beweisen, dass deren Handeln „geheilt" hat. Um das zu tun, müsste der Patient vor der Intervention geklont und parallel mit einem anderen Therapeuten zusammengeführt werden, der dann eine andere Intervention wählt. Doch auch dann könnte der andere Therapeut zum Beispiel extrem unfreundlich, unsympathisch und/oder unhygienisch erscheinen, was das Ergebnis der Intervention garantiert beeinflussen würde und somit nicht in einem alleinigen Vergleich der Therapiemethoden resultiert. Und selbst wenn nachgewiesen werden könnte, dass tatsächlich die gewählte Intervention geholfen hat: Wer behauptet, dass eine Genesung durch eine andere Therapiemethode nicht genauso funktioniert hätte? Oder damit sogar eine schnellere Genesung erfolgt wäre? Oder eine Genesung, die autonom durch den Patienten erzielt werden könnte? Oder der Patient gar ohne Therapie wieder genesen wäre? Letzter Punkt ist angesichts der Tatsache, dass bis zu 80% aller Rückenschmerzen innerhalb der ersten Wochen ohne Behandlung wieder vergehen (<a href="https://linkinghub.elsevier.com/retrieve/pii/S0140-6736(18)30480-X" target="_blank" rel="noopener noreferrer">Hartvigsen et al., 2018</a>), von besonderer Relevanz, da nur schwer bewertet werden kann, ob eine Therapie den natürlichen Verlauf der Beschwerden tatsächlich beschleunigt hat.',
    },
    { type: 'h3', text: 'Vorteile und Voraussetzungen von evidenzbasierter Physiotherapie' },
    {
      type: 'p',
      html: 'Um diese Fragen zu beantworten und grundsätzlich Interventionen in der Physiotherapie vergleichen zu können, bedarf es gut gestalteter Studien. Dort können nämlich große Patientengruppen mit ähnlichen Beschwerden zufällig verschiedenen Interventionen zugeordnet werden, deren Effektgrößen nach einer entsprechenden Zeitspanne miteinander verglichen werden. Manche Studien verblinden sogar ihre Therapeuten und Patienten, sodass verhaltenspsychologische Aspekte, die durch visuelle Einflüsse bestärkt werden, stark eingeschränkt werden können. Ebenfalls werden manche Interventionen mit einem Placebo verglichen: Zum Beispiel kann bei therapeutischer Ultraschallanwendung das Ultraschallgerät in der Placebo-Gruppe einfach ausgeschaltet appliziert werden. Die ausgeschalteten Geräte schneiden teilweise sogar besser ab (<a href="https://pubmed.ncbi.nlm.nih.gov/3419838/" target="_blank" rel="noopener noreferrer">Hashish et al., 1988</a>).',
    },
    {
      type: 'p',
      html: 'Dadurch sollten fundierte Interventionen per Definition durchschnittlich bessere Ergebnisse liefern als Therapien, die keine Nachweise für entsprechende Pathologie und Population vorweisen können. Nichtsdestotrotz können die meisten Studienergebnisse in einer Gaußschen Glockenkurve dargestellt werden, sodass einige Probanden besonders gut auf die getestete Intervention ansprechen, während einige Patienten dadurch kaum Verbesserungen erfahren. Das sollte nicht außer Acht gelassen werden, sodass bei fehlender Effektivität einer fundierten Intervention nach einer ausreichenden Zeitspanne immer noch auf weniger evidente Therapieformen zurückgegriffen werden könnte.',
    },
    {
      type: 'p',
      html: 'Zudem ist Wissenschaft – trotz einiger Einwände – sehr praxisnah. Es werden aussagekräftige Modelle an mehreren Probanden mit ähnlichen Charakteristika unter realen Bedingungen getestet. Das heißt, dass als Therapeut bereits getestete Interventionen aufgenommen werden können. Ebenso beinhaltet Wissenschaft einen tentativen Aspekt: Etablierte Modelle und Annahmen werden überarbeitet und entwickeln sich weiter oder werden bei Bedarf auch ersetzt. Dies ist am biomedizinischen Modell zu sehen, das in den 1970er Jahren durch <a href="https://pubmed.ncbi.nlm.nih.gov/847460/" target="_blank" rel="noopener noreferrer">George Engel\'s Appell</a> zum biopsychosozialen Modell erweitert wurde. Viktor Frankl bezeichnete die Medizin bereits als "kalte, gefühlsarme Profession" und mit der Erweiterung um die psychosozialen Faktoren sollte eine Humanisierung des Gesundheitswesens erfolgen. Außerdem unterliegen die meisten publizierten Untersuchungen einer Qualitätskontrolle: Durch das peer-review-Verfahren, dem Wettbewerb zwischen konkurrierenden Forschungsgruppen sowie einer internen Quantifizierung über das Konfidenzniveau reguliert sich die Wissenschaft samt ihrer Akteure mehr oder weniger selbst. Ferner ermöglichen die Digitalisierung und Globalisierung eine grenzübergreifende Vernetzung mit Austausch von Informationen und Ideen - insbesondere in Wissenschaften wie der Physiotherapie, die vor allem von interdisziplinären Erkenntnissen aus der Biologie, Physik, Psychologie, Medizin, Philosophie und Sportwissenschaft profitiert.',
    },
    {
      type: 'p',
      html: 'Um eine evidenzorientierte Physiotherapie zu etablieren, müsste Beispiel an ausländischen Bildungssystemen genommen werden, die großflächig eine Akademisierung des Berufes vorgenommen haben. Theoretisch könnten die Inhalte genauso in einer Ausbildungsstruktur implementiert werden, allerdings birgt ein Studium den Vorteil des autodidaktischen Vorgehens: Literatur wird im Rahmen eines Studiums – im Sinne der evidenzbasierten Medizin – ganzheitlich betrachtet, bewertet und hinsichtlich Patient und Beschwerdebild synthetisiert. Letzten Endes werden Therapeuten dadurch weniger abhängig von externen Fortbildungsangeboten, die oftmals überholt sind und obsolete Inhalte propagieren (z.B. <a href="https://www.tandfonline.com/doi/abs/10.1080/09638288.2019.1590865" target="_blank" rel="noopener noreferrer">Díaz-Arribas et al., 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33069609/" target="_blank" rel="noopener noreferrer">Scrivener et al., 2020</a>; <a href="https://academic.oup.com/ptj/advance-article/doi/10.1093/ptj/pzac031/6556164" target="_blank" rel="noopener noreferrer">Peterson et al., 2022</a>).',
    },
    {
      type: 'p',
      html: 'Noch dazu hat ein Therapeut nicht nur den Patienten gegenüber eine Verpflichtung, sondern ebenfalls den Akademikern und Therapeuten, die einem durch ihre Arbeit und ihr Lebenswerk bis dato den Weg geebnet und Konzepte unter kontrollierten Bedingungen auf die Probe gestellt haben. Diese Arbeit sollte durch die eigene Ignoranz nicht mit Füßen getreten werden, sodass wir mit klarerer Sicht dort ansetzen und fortführen können, wo andere abgeschlossen haben.',
    },
    {
      type: 'quote',
      html: 'Carl Sagan fasst den Stellenwert wissenschaftlicher Erkenntnisse ideal zusammen: „Wissenschaft ist nicht perfekt. Sie kann missbraucht werden. Aber sie ist bei Weitem das beste Werkzeug, das wir haben."',
    },
  ],
}

export default post
