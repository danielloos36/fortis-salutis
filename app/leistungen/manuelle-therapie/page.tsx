import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Manuelle Therapie Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Manuelle Therapie in Reinheim: Spezifische Handgrifftechniken bei Gelenkblockierungen, Rückenschmerzen und Muskelverspannungen. Fortis Salutis Reinheim.',
}

export default function ManuelleTherapiePage() {
  return (
    <ServicePage
      title="Manuelle Therapie"
      subtitle="Gezielte Handgrifftechniken für Gelenke und Weichteile"
      image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80"
      intro={[
        'Die Manuelle Therapie ist eine spezialisierte physiotherapeutische Behandlungsform, bei der durch präzise, manuelle Techniken Funktionsstörungen an Gelenken, Muskeln und dem Bindegewebe diagnostiziert und behandelt werden. Die Hände des Therapeuten sind dabei das wichtigste Werkzeug.',
        'Durch spezifische Mobilisations- und Manipulationstechniken werden Gelenkblockierungen gelöst, die Gelenkbeweglichkeit wiederhergestellt und Schmerzen gezielt gelindert. Dabei wird nicht nur das betroffene Gelenk behandelt, sondern immer die gesamte kinematische Kette berücksichtigt.',
        'In unserer Praxis Fortis Salutis in Reinheim wenden unsere Therapeuten fundierte manualtherapeutische Konzepte an. Die Behandlung ist präzise, schonend und hocheffektiv – oft bereits nach wenigen Sitzungen spürbar wirksam.',
      ]}
      indications={[
        'Gelenkblockierungen an Wirbelsäule, Schulter, Knie & Hüfte',
        'Halswirbelsäulen-Beschwerden & Spannungskopfschmerzen',
        'Lendenwirbelsäulen-Schmerzen & Ischias-Symptomatik',
        'Bandscheibenvorfälle & Facettengelenkssyndrome',
        'Schulter-Arm-Syndrome & Impingement',
        'Kiefergelenksbeschwerden (CMD)',
        'Schulterschmerzen & Schultersteife',
        'Knie- & Sprunggelenksbeschwerden',
      ]}
      benefits={[
        {
          title: 'Sofortige Wirkung',
          desc: 'Gelenkblockierungen können oft in einer Sitzung gelöst werden – mit unmittelbarer Schmerzlinderung und verbesserter Beweglichkeit.',
        },
        {
          title: 'Ursachenbehandlung',
          desc: 'Statt nur Symptome zu bekämpfen, suchen wir die Ursache der Beschwerden und behandeln gezielt dort.',
        },
        {
          title: 'Ohne Medikamente',
          desc: 'Manuelle Therapie ist eine natürliche, nebenwirkungsfreie Behandlungsform, die auf den Einsatz von Schmerzmitteln verzichtet.',
        },
        {
          title: 'Individuell & präzise',
          desc: 'Jede Technik wird exakt auf Ihren Befund abgestimmt. Kein Schema F – jede Behandlung ist einzigartig.',
        },
      ]}
      process={[
        {
          step: 'Untersuchung',
          desc: 'Ausführliche Befundaufnahme mit manueller Gelenkuntersuchung zur Identifikation von Blockierungen.',
        },
        {
          step: 'Diagnose',
          desc: 'Auf Basis des Befunds erstellen wir ein klares Bild der Funktionsstörungen und Behandlungsprioritäten.',
        },
        {
          step: 'Behandlung',
          desc: 'Gezielte Mobilisation, Manipulation und Weichteiltechniken – schonend und präzise ausgeführt.',
        },
        {
          step: 'Stabilisierung',
          desc: 'Ergänzende Übungen sichern den Therapieerfolg und verhindern das Wiederauftreten der Beschwerden.',
        },
      ]}
      relatedLinks={[
        { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
        { title: 'Trainingstherapie', href: '/leistungen/trainingstherapie' },
        { title: 'Neurologische Therapie', href: '/leistungen/neurologische-therapie' },
      ]}
    />
  )
}
