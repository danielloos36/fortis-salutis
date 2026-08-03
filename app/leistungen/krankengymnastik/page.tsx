import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import content from '@/content/services/krankengymnastik.json'

export const metadata: Metadata = {
  title: 'Krankengymnastik Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Krankengymnastik in Reinheim: Gezielte Bewegungstherapie zur Wiederherstellung von Beweglichkeit und Kraft. Fortis Salutis Reinheim – individuelle Behandlung auf höchstem Niveau.',
  alternates: {
    canonical: '/leistungen/krankengymnastik',
  },
}

export default function KrankengymnastikPage() {
  return (
    <ServicePage
      title={content.title}
      subtitle={content.subtitle}
      path="/leistungen/krankengymnastik"
      image="/hero-banner-startseite.jpg"
      intro={content.intro}
      indications={content.indications}
      benefits={content.benefits}
      process={content.process}
      relatedLinks={[
        { title: 'Trainingstherapie', href: '/leistungen/trainingstherapie' },
        { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
        { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
      ]}
    />
  )
}
