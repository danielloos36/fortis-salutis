import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Trainingstherapie Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Trainingstherapie in Reinheim: Gerätegestütztes therapeutisches Training zur Rehabilitation und Prävention. Privatpraxis Fortis Salutis – individuell, effektiv, nachhaltig.',
}

export default function TrainingstherapiePage() {
  return (
    <ServicePage
      title="Trainings­therapie"
      subtitle="Aktiv zurück ins Leben – therapeutisch geführtes Training"
      image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
      intro={[
        'Die Trainingstherapie verbindet das Beste aus Physiotherapie und gezieltem körperlichem Training. Unter therapeutischer Anleitung stärken Sie Ihren Körper systematisch – mit dem Ziel, Beschwerden dauerhaft zu überwinden und die körperliche Leistungsfähigkeit langfristig zu steigern.',
        'Anders als im normalen Fitnessstudio wird jede Trainingseinheit bei uns individuell geplant und medizinisch begleitet. Die Übungsauswahl, Intensität und Progression richten sich ausschließlich nach Ihrem Befund und Ihrem persönlichen Therapieziel. So wird das Training zur Medizin.',
        'Die Trainingstherapie eignet sich besonders in der Rehabilitation nach Verletzungen oder Operationen, bei chronischen Schmerzen am Bewegungsapparat sowie als gezielte Prävention. In unserer Praxis in Reinheim stehen Ihnen modernste Geräte und unser erfahrenes Therapeutenteam zur Verfügung.',
      ]}
      indications={[
        'Rehabilitation nach Verletzungen und Operationen',
        'Chronische Rückenschmerzen & Bandscheibenvorfälle',
        'Muskelschwäche & funktionelle Einschränkungen',
        'Haltungsschäden & muskuläre Dysbalancen',
        'Osteoporose-Prophylaxe & Sturtzprophylaxe',
        'Sport-Wiedereinstieg nach Verletzungspause',
        'Prävention bei Büro- und Bildschirmarbeitsplätzen',
        'Allgemeine Kräftigung im Alter',
      ]}
      benefits={[
        {
          title: 'Medizinisch begleitet',
          desc: 'Jede Einheit wird von unseren Therapeuten überwacht und angepasst. Kein Risiko durch falsche Belastung.',
        },
        {
          title: 'Individuelle Progression',
          desc: 'Ihr Trainingsplan entwickelt sich mit Ihnen – immer genau auf Ihren aktuellen Stand abgestimmt.',
        },
        {
          title: 'Dauerhafter Erfolg',
          desc: 'Durch gezielten Aufbau der stabilisierenden Muskulatur werden Schmerzen langfristig eliminiert.',
        },
        {
          title: 'Ganzheitlicher Ansatz',
          desc: 'Kraft, Ausdauer, Koordination und Beweglichkeit werden in Einklang gebracht – für optimale Alltagsfunktion.',
        },
      ]}
      process={[
        {
          step: 'Leistungstest',
          desc: 'Zu Beginn analysieren wir Ihre aktuelle körperliche Leistungsfähigkeit und Einschränkungen.',
        },
        {
          step: 'Trainingsplan',
          desc: 'Wir erstellen Ihren persönlichen, medizinisch fundierten Trainingsplan mit klaren Zielen.',
        },
        {
          step: 'Training',
          desc: 'Geführtes Training unter Aufsicht – mit korrekter Ausführung und optimaler Dosierung.',
        },
        {
          step: 'Erfolgskontrolle',
          desc: 'Regelmäßige Tests zeigen Ihren Fortschritt und ermöglichen die gezielte Weiterentwicklung.',
        },
      ]}
      relatedLinks={[
        { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
        { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
        { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
      ]}
    />
  )
}
