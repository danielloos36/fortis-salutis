import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Neurologische Therapie Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Neurologische Therapie in Reinheim: Spezialisierte Behandlung bei Schlaganfall, Parkinson, MS und weiteren Erkrankungen des Nervensystems. Fortis Salutis Reinheim.',
}

export default function NeurologischeTherapiePage() {
  return (
    <ServicePage
      title="Neurologische Therapie"
      subtitle="Spezialisierte Rehabilitation bei Erkrankungen des Nervensystems"
      image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80"
      intro={[
        'Die Neurologische Therapie widmet sich der Behandlung und Rehabilitation von Patienten mit Erkrankungen oder Verletzungen des zentralen und peripheren Nervensystems. Sie erfordert spezielles Fachwissen und einfühlsames Vorgehen – beides bringt unser Team bei Fortis Salutis mit.',
        'Erkrankungen wie Schlaganfall, Parkinson oder Multiple Sklerose hinterlassen oft tiefe Spuren in der Bewegungsfähigkeit, Koordination und dem Alltag der Betroffenen. Durch neurophysiologische Therapiekonzepte wie Bobath, PNF und funktionelles Training unterstützen wir das Nervensystem dabei, neue Wege zu bahnen und verloren geglaubte Funktionen zurückzugewinnen.',
        'In unserer Praxis in Reinheim arbeiten wir mit jedem Patienten nach einem individuellen, zielgerichteten Therapieplan. Wir begleiten Sie mit Geduld, Fachwissen und echter Fürsorge – damit Sie so viel Lebensqualität wie möglich zurückgewinnen.',
      ]}
      indications={[
        'Schlaganfall (Apoplex) & Hemiplegie',
        'Morbus Parkinson & Parkinson-Syndrome',
        'Multiple Sklerose (MS)',
        'Schädel-Hirn-Trauma',
        'Periphere Lähmungen & Nervenverletzungen',
        'Polyneuropathien',
        'Gleichgewichts- & Koordinationsstörungen',
        'Spinale Muskelatrophie & neuromuskuläre Erkrankungen',
      ]}
      benefits={[
        {
          title: 'Neuroplastizität nutzen',
          desc: 'Das Gehirn kann lernen. Wir nutzen die Plastizität des Nervensystems, um neue neuronale Verbindungen aufzubauen.',
        },
        {
          title: 'Alltagsfunktion verbessern',
          desc: 'Im Mittelpunkt steht die Wiederherstellung von Alltagsfähigkeiten – Gehen, Greifen, Gleichgewicht, Sprechen.',
        },
        {
          title: 'Selbstständigkeit stärken',
          desc: 'Wir fördern Ihre Eigenständigkeit und helfen Ihnen, so unabhängig wie möglich im Alltag zu sein.',
        },
        {
          title: 'Einfühlsame Begleitung',
          desc: 'Neurologische Erkrankungen sind belastend. Wir behandeln Sie mit Geduld, Respekt und echter menschlicher Wärme.',
        },
      ]}
      process={[
        {
          step: 'Neurologische Befundung',
          desc: 'Umfassende Analyse der neurologischen Ausfälle, Tonus, Koordination und Alltagsfunktionen.',
        },
        {
          step: 'Zieldefinition',
          desc: 'Gemeinsam legen wir realistische, motivierende Therapieziele fest – kurz-, mittel- und langfristig.',
        },
        {
          step: 'Gezielte Therapie',
          desc: 'Bobath, PNF, Vojta, funktionelles Training – wir wählen die optimale Methodik für Ihre Situation.',
        },
        {
          step: 'Fortlaufende Anpassung',
          desc: 'Die Therapie entwickelt sich mit Ihrem Fortschritt – immer am Puls Ihrer aktuellen Fähigkeiten.',
        },
      ]}
      relatedLinks={[
        { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
        { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
        { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
      ]}
    />
  )
}
