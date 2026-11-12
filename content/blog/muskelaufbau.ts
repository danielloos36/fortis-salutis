import type { BlogPost } from '@/lib/blog'

const post: BlogPost = {
  slug: 'auswirkungen-der-uebungsauswahl-auf-muskelaufbau',
  title: 'Auswirkungen der Übungsauswahl auf Muskelaufbau',
  subtitle: 'Einfluss der Übungsauswahl auf Muskelaufbau',
  date: '13. Okt. 2022',
  updated: '2. März 2023',
  readingTime: '4 Min.',
  author: 'Mattis Bischoff',
  tags: ['Training', 'Hypertrophie', 'Übungsauswahl', 'Muskelaufbau'],
  heroImage: '/blog/muskelaufbau-abb3.png',
  excerpt:
    'Dieser Beitrag soll Trainierenden die Auswahlmöglichkeiten bei Übungen erleichtern und generalistische sowie dogmatische Vorstellungen gegenüber Grundübungen unterbinden.',
  blocks: [
    {
      type: 'p',
      html: 'Dieser Beitrag soll Trainierenden die Auswahlmöglichkeiten bei Übungen erleichtern und generalistische sowie dogmatische Vorstellungen gegenüber Grundübungen unterbinden. Und das kommt von jemandem, der Grundübungen sehr gerne in Pläne involviert und selbst durchführt.',
    },
    { type: 'p', html: 'Alle Thesen basieren auf der Annahme, dass das Trainingsziel Muskelaufbau bzw. Hypertrophie darstellt.' },
    {
      type: 'p',
      html: 'Im Folgenden werden Mechanismen für den Muskelaufbau vorgestellt und anschließend die praktische Implikation bei verschiedenen Übungen erläutert.',
    },
    { type: 'h3', text: 'Mechanismen für Muskelaufbau' },
    {
      type: 'ol',
      items: [
        '<em>mechanical tension</em>: Der wahrscheinlich wichtigste Mechanismus, um Muskelaufbau zu erzielen: Ein Muskel muss kontrahieren und Kraft entwickeln, was wiederum zu einer mechanischen Anspannung der Muskelfasern führt. Dieser mechanische Stimulus auf Fokalkontakte wird über Glykoproteine in einen biochemischen Stimulus konvertiert. Da die mechanische Anspannung der wichtigste Faktor für Muskelaufbau ist, ist zum Beispiel verhältnismäßig niedrigintensives kardiovaskuläres Training kein ausreichender Stimulus, um langfristig Hypertrophie herbeizuführen. Eine gewisse Intensität im sportwissenschaftlichen Sinn, d.h. relative Last, ist beim Training notwendig.',
        '<em>metabolic stress</em> und <em>muscle damage</em>: Mechanische Anspannung ist somit notwendig, aber noch nicht ausreichend: Eine einmalige maximale Kontraktion (bspw. eine Wiederholung mit Maximalgewicht bei Übung X) reicht nicht aus, um einen anabolen Effekt zu generieren. An dieser Stelle kommt die metabolische Komponente bzw. das Volumen ins Spiel: Ein Muskel muss mehrere Kontraktionen mit ausreichender Intensität durchführen, um die Muskelproteinsynthese zu aktivieren. Dieser Prozess führt zur Ermüdung und teilweisen Schädigung der Muskulatur. Letzteres kann insbesondere durch einen Fokus auf exzentrisches Training erzielt werden, jedoch nur kurzfristig (Margaritelis et al., 2020). Nach ungefähr zehn Wochen hatten sich die Probanden dahingehend angepasst, als dass keine vermehrte Schädigung der Muskulatur oder Muskelkater im Vergleich zur konzentrisch-dominanten Gruppe nachweisbar war. Dies erklärt auch, warum eine langsame oder schnelle Exzentrik kaum Auswirkungen im Hinblick auf Muskelaufbau mit sich bringt (<a href="https://pubmed.ncbi.nlm.nih.gov/33665031/" target="_blank" rel="noopener noreferrer">Lacerda et al., 2021</a>).',
      ],
    },
    { type: 'h3', text: 'Muskelfaserrekrutierung' },
    {
      type: 'p',
      html: 'Sehr wahrscheinlich hat eine höhere Rekrutierung der Muskelfasern positive Auswirkungen auf Muskelaufbau. Darum eine kurze Erläuterung: Je höher die aufgebrachte Kraft eines Muskels ist (im Training durch die Intensität der Übung gesteuert), desto mehr Muskelfasern werden rekrutiert. Eine fast vollständige Muskelfaserrekrutierung wird bei einer Intensität von 80-85% erzielt: Das bedeutet, dass eine Person, die beim Beinstrecker als Maximalgewicht für eine Wiederholung 100 Kilogramm schafft, mit 85kg eine nahezu vollständige Muskelfaserrekrutierung von der ersten Wiederholung an erreicht. Als subjektive Maßeinheit für die Intensität wird oft RPE oder RIR genutzt. Nachfolgende Tabelle soll diese Begrifflichkeiten erläutern:',
    },
    { type: 'image', image: { src: '/blog/muskelaufbau-tab1.png', alt: 'RPE und RIR', caption: 'Tab. 1: RPE und RIR.' } },
    {
      type: 'p',
      html: 'Hätte die Person vom oben genannten Beispiel mit den 85kg beim Beinstrecker fünf Wiederholungen bei Muskelversagen erzielt, hätte die Intensität mit RPE 10 oder RIR 0 betitelt werden können. Wären dagegen noch weitere 4 Wiederholungen möglich gewesen, wäre ein RPE 6 oder RIR 4 angemessen.',
    },
    {
      type: 'p',
      html: 'Bei niedrigeren Intensitäten werden zu Beginn des Satzes noch nicht sämtliche Typ-II-Muskelfasern (stärkere/schnellere Variante) aktiviert, sondern erst, wenn sich die Person zum Ende des Satzes dem Muskelversagen nähert. Dies erklärt, weshalb ein Muskelversagen bei niedrigeren Wiederholungsbereichen weniger relevant hinsichtlich Muskelaufbau ist als bei höheren: Bei einem Wiederholungsbereich von 5-10 mit ausreichender Intensität werden dennoch fast alle Muskelfasern rekrutiert, sodass drei bis vier Wiederholungen vor Muskelversagen (RPE 6-7) trotzdem eine Hypertrophie getriggert werden kann, während Sätze mit höheren Wiederholungsbereichen ohne Muskelversagen suboptimale Ergebnisse liefern (<a href="https://pubmed.ncbi.nlm.nih.gov/31895290/" target="_blank" rel="noopener noreferrer">Lasevicius et al., 2022</a>).',
    },
    { type: 'image', image: { src: '/blog/muskelaufbau-abb1.jpg', alt: 'Muskelfasertypen', caption: 'Abb. 1: Muskelfasertypen (strongerbyscience).' } },
    { type: 'h3', text: 'Wie beide Aspekte kombinieren?' },
    {
      type: 'p',
      html: 'Um Muskelaufbau zu erzielen, muss also ein Gewicht bei ausreichender Intensität, abhängig von ebenjener Intensität, wiederholt mehr oder weniger nah ans Muskelversagen gebracht werden. Im Laufe einer Trainingskarriere ist dies ein Prozess, der bei steigender Kraft und variierenden Rahmenbedingungen (Ermüdung, Tagesform, …) regelmäßig angepasst werden muss.',
    },
    {
      type: 'p',
      html: 'Wenn diese Prinzipien angewendet und erfolgreich umgesetzt werden, dürfte jede Trainingskarriere – mit wenigen Ausnahmen – von Erfolg gekrönt sein. Doch nun kommt die Übungsauswahl ins Spiel.',
    },
    { type: 'h3', text: 'Übungsauswahl' },
    {
      type: 'p',
      html: 'Muskelaufbau wird lokal erzielt: Bizeps-Curls werden Muskelaufbau im Bizeps bewirken, aber nicht in den Waden. Was bei Isolationsübungen trivial scheint, wird bei Verbundübungen undurchsichtiger:',
    },
    {
      type: 'p',
      html: 'Wenn die oben genannten Prinzipen angewendet werden und bspw. bei einer Kniebeuge acht Wiederholungen bei RPE 8 erzielt werden können, dann bezieht sich das RPE auf die Übung. Doch welcher Muskel war letzten Endes ausschlaggebend dafür, dass nur noch zwei Wiederholungen durchgeführt werden konnten? Quadrizeps? Gluteen? Adduktoren? Rückenstrecker? Das ist abhängig von Technik und Anthropometrie der Person nicht wirklich klar zu beantworten. Frauen haben proportional mehr Muskelmasse im Unterkörper und tendieren im Vergleich zu Männern eher zu längeren Femurknochen, sodass der untere Rücken durch eine vorgelehnte Position, um die Hantelstange über den Körpermittelpunkt zu halten, eher ermüden könnte als beispielsweise der Quadrizeps. Bei Personen mit kurzen Femurknochen hingegen, die folglich aufrechter und mit höherer Knieflexion beugen können, eignet sich die Kniebeuge vermutlich deutlich besser, um Muskelaufbau im Quadrizeps bewirken zu können.',
    },
    { type: 'image', image: { src: '/blog/muskelaufbau-abb2.jpg', alt: 'Anthropometrie beim Kniebeugen', caption: 'Abb. 2: Anthropometrie beim Kniebeugen (barbellrehab).' } },
    { type: 'image', image: { src: '/blog/muskelaufbau-abb3.png', alt: 'Anthropometrie beim Kniebeugen in vivo', caption: 'Abb. 3: Anthropometrie beim Kniebeugen in vivo (pinterest; building-better-athlete).' } },
    {
      type: 'p',
      html: 'Beim Bankdrücken sieht das Ganze ähnlich aus: Pectoralis, Trizeps, Deltoiden, Serratus? Je nachdem, welche Muskelgruppe das schwächste Glied der Kette ist, wird die maximale Last beim Bankdrücken dadurch eingeschränkt. Bei Personen mit längeren Armen und schmalem Thorax wird wahrscheinlich der Trizeps limitierend sein, da während der Exzentrik eine größere Flexion im Ellenbogen stattfindet.',
    },
    {
      type: 'p',
      html: 'Kreuzheben wird ebenfalls gerne als Übung bezeichnet, die <strong>alles</strong> trainiert. Dass sehr viele Muskeln beteiligt sind, ist unumstritten. Laut Karl Popper erklärt eine Theorie, die alles zu erklären versucht, schlussendlich überhaupt nichts. Diese Aussage lässt sich aus einem Hypertrophie-Blickwinkel ebenfalls auf das Kreuzheben übertragen, weshalb viele Bodybuilder eher Variationen davon einbauen (rumänisches Kreuzheben) oder diese Übung überhaupt nicht durchführen.',
    },
    {
      type: 'p',
      html: 'Aus diesen Gründen beinhaltet fast jeder Trainingsplan Assistenzübungen, die Schwachstellen isolierter als Verbundübungen angehen. Ein weiterer Schritt wäre es, Grundübungen komplett außen vor zu lassen und den Fokus auf Isolationsübungen und Maschinen zu legen. Beides ist für Muskelaufbau zielführend, allerdings soll dieser Beitrag kein Pamphlet gegenüber Grundübungen sein, sondern nur deren suboptimale Quantifizierbarkeit für Hypertrophie darlegen.',
    },
    {
      type: 'p',
      html: 'Weiterhin propagieren einige Gruppen deren exorbitanten Stellenwert für jedwede Population, was in dieser Form schlichtweg nicht korrekt ist. Es existieren keine pauschalen gesundheitlichen Benefits einer Übung einer anderen gegenüber, sodass eine Beinpresse anstelle einer Kniebeuge oder eine Brustmaschine anstelle des Bankdrückens eine legitime Alternative darstellt. Ferner eignen sich Beinpresse und eine Maschine für die Brustmuskulatur wahrscheinlich besser, um gezielten Muskelaufbau in ausgewählten Bereichen zu initiieren.',
    },
    { type: 'h3', text: 'Zusammenfassung' },
    {
      type: 'ol',
      items: [
        'Eine Übung muss eine ausreichend hohe Intensität (<em>mechanical tension</em>) mit genügend Volumen verknüpfen (<em>metabolic stress</em> und <em>muscle damage</em>),',
        'der gewünschte Muskel muss adäquat beansprucht werden (keine technischen, biomechanischen oder koordinativen Faktoren, die ein künstliches Muskelversagen herbeiführen) und',
        'eine Art von Progression über Zeit muss erfolgen.',
      ],
    },
    { type: 'p', html: '<em>Dieser Beitrag ist an einen Blogpost von Lyle McDonald angelehnt.</em>' },
  ],
}

export default post
