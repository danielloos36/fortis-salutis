import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Krankengymnastik Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Krankengymnastik in Reinheim: Gezielte Bewegungstherapie zur Wiederherstellung von Beweglichkeit und Kraft. Privatpraxis Fortis Salutis – individuelle Behandlung auf höchstem Niveau.',
}

export default function KrankengymnastikPage() {
  return (
    <ServicePage
      title="Kranken­gymnastik"
      subtitle="Gezielte Bewegungstherapie für mehr Lebensqualität"
      image="/hero-banner-startseite.jpg"
      intro={[
        'Die Krankengymnastik ist das Herzstück der Physiotherapie und eine der ältesten und bewährtesten Behandlungsformen in der Medizin. Durch gezielte, therapeutisch angeleitete Übungen werden Bewegungseinschränkungen behoben, muskuläre Ungleichgewichte ausgeglichen und der Körper in seinen natürlichen Funktionen gestärkt.',
        'In unserer Praxis Fortis Salutis in Reinheim setzen wir auf eine individuelle, befundorientierte Krankengymnastik. Jede Behandlung beginnt mit einer ausführlichen Befundaufnahme, bei der wir Ihre aktuelle Situation genau analysieren, um einen maßgeschneiderten Therapieplan zu erstellen.',
        'Ob nach einer Operation, infolge einer Verletzung oder bei chronischen Beschwerden – die Krankengymnastik unterstützt Ihren Körper dabei, verlorene Funktionen wiederzuerlangen und langfristig schmerzfrei zu bleiben. Als Privatpraxis nehmen wir uns die Zeit, die eine wirklich wirksame Therapie benötigt.',
      ]}
      indications={[
        'Rückenschmerzen, LWS-Syndrom & Bandscheibenvorfälle',
        'Nach orthopädischen Operationen (Knie-TEP, Hüft-TEP, Schulter)',
        'Sportverletzungen & Muskelverletzungen',
        'Haltungsschäden & muskuläre Dysbalancen',
        'Chronische Gelenkerkrankungen wie Arthrose',
        'Atemwegserkrankungen (Lungengymnastik)',
        'Schwangerschafts- & Nachsorge',
        'Osteoporose & Stärkung des Knochenstoffwechsels',
      ]}
      benefits={[
        {
          title: 'Beweglichkeit zurückgewinnen',
          desc: 'Durch gezielte Mobilisations- und Dehnübungen werden verkürzte Strukturen gelöst und die Gelenkbeweglichkeit schrittweise verbessert.',
        },
        {
          title: 'Schmerzen dauerhaft lindern',
          desc: 'Aktive und passive Techniken bekämpfen nicht nur die Symptome, sondern beseitigen die Ursachen Ihrer Schmerzen nachhaltig.',
        },
        {
          title: 'Muskulatur stärken',
          desc: 'Durch kräftigende Übungen werden die stabilisierenden Muskelgruppen aufgebaut und der Körper langfristig vor Rückfällen geschützt.',
        },
        {
          title: 'Rückfälle verhindern',
          desc: 'Wir zeigen Ihnen gezielte Heimübungen, die Sie dauerhaft schmerzfrei halten und Ihren Alltag erleichtern.',
        },
      ]}
      process={[
        {
          step: 'Befundaufnahme',
          desc: 'Ausführliche Anamnese, Bewegungsanalyse und Diagnosestellung – wir verstehen Ihre individuelle Situation.',
        },
        {
          step: 'Therapieplan',
          desc: 'Auf Basis des Befunds erstellen wir einen individuellen Behandlungsplan mit klaren Zielen.',
        },
        {
          step: 'Behandlung',
          desc: 'Aktive und passive Therapieeinheiten, angepasst an Ihren Fortschritt – ohne Hektik und Zeitdruck.',
        },
        {
          step: 'Kontrolle & Anpassung',
          desc: 'Regelmäßige Verlaufskontrolle und Anpassung des Therapieplans für optimale Ergebnisse.',
        },
      ]}
      relatedLinks={[
        { title: 'Trainingstherapie', href: '/leistungen/trainingstherapie' },
        { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
        { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
      ]}
    />
  )
}
