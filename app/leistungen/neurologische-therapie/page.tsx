import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import content from '@/content/services/neurologische-therapie.json'

export const metadata: Metadata = {
  title: 'Neurologische Therapie Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Neurologische Therapie in Reinheim: Spezialisierte Behandlung bei Schlaganfall, Parkinson, MS und weiteren Erkrankungen des Nervensystems. Fortis Salutis Reinheim.',
  alternates: {
    canonical: '/leistungen/neurologische-therapie',
  },
}

export default function NeurologischeTherapiePage() {
  return (
    <ServicePage
      title={content.title}
      subtitle={content.subtitle}
      path="/leistungen/neurologische-therapie"
      image="/hero-banner-startseite.jpg"
      intro={content.intro}
      indications={content.indications}
      benefits={content.benefits}
      relatedLinks={[
        { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
        { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
        { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
      ]}
    />
  )
}
