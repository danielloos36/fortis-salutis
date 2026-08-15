import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import content from '@/content/services/trainingstherapie.json'

export const metadata: Metadata = {
  title: 'Trainingstherapie Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Trainingstherapie in Reinheim: Gerätegestütztes therapeutisches Training zur Rehabilitation und Prävention. Fortis Salutis Reinheim – individuell, effektiv, nachhaltig.',
  alternates: {
    canonical: '/leistungen/trainingstherapie',
  },
}

export default function TrainingstherapiePage() {
  return (
    <ServicePage
      title={content.title}
      subtitle={content.subtitle}
      path="/leistungen/trainingstherapie"
      image="/training-hero-banner.jpg"
      intro={content.intro}
      indications={content.indications}
      benefits={content.benefits}
      relatedLinks={[
        { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
        { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
        { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
      ]}
    />
  )
}
