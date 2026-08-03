import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import content from '@/content/services/manuelle-therapie.json'

export const metadata: Metadata = {
  title: 'Manuelle Therapie Reinheim – Physiotherapie Fortis Salutis',
  description:
    'Manuelle Therapie in Reinheim: Gezielte manuelle Grifftechniken bei Rückenschmerzen, Muskelverspannungen und Bewegungseinschränkungen. Fortis Salutis Reinheim.',
  alternates: {
    canonical: '/leistungen/manuelle-therapie',
  },
}

export default function ManuelleTherapiePage() {
  return (
    <ServicePage
      title={content.title}
      subtitle={content.subtitle}
      path="/leistungen/manuelle-therapie"
      image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80"
      intro={content.intro}
      indications={content.indications}
      benefits={content.benefits}
      relatedLinks={[
        { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
        { title: 'Trainingstherapie', href: '/leistungen/trainingstherapie' },
        { title: 'Neurologische Therapie', href: '/leistungen/neurologische-therapie' },
      ]}
    />
  )
}
