import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import content from '@/content/services/trainingstherapie.json'

export const metadata: Metadata = {
  title: 'Trainingstherapie Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Trainingstherapie in Reinheim: Gerätegestütztes therapeutisches Training zur Rehabilitation und Prävention. Fortis Salutis Reinheim – individuell, effektiv, nachhaltig.',
}

export default function TrainingstherapiePage() {
  return (
    <ServicePage
      title={content.title}
      subtitle={content.subtitle}
      image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
      imageMobile="/training.jpg"
      intro={content.intro}
      indications={content.indications}
      benefits={content.benefits}
      process={content.process}
      relatedLinks={[
        { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
        { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
        { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
      ]}
    />
  )
}
