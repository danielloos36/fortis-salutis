export interface Service {
  id: string
  title: string
  href: string
  shortDesc: string
  image: string
  indications: string[]
  benefits: string[]
}

export const services: Service[] = [
  {
    id: 'krankengymnastik',
    title: 'Krankengymnastik',
    href: '/leistungen/krankengymnastik',
    shortDesc: 'Gezielte Bewegungstherapie zur Wiederherstellung von Beweglichkeit, Kraft und Koordination.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    indications: [
      'Rückenschmerzen & Bandscheibenvorfälle',
      'Nach orthopädischen Operationen (Knie, Hüfte, Schulter)',
      'Sportverletzungen & Muskelverletzungen',
      'Haltungsschäden & muskuläre Dysbalancen',
      'Chronische Gelenkerkrankungen (Arthrose)',
      'Atemwegserkrankungen (Atemtherapie)',
    ],
    benefits: [
      'Wiederherstellung der vollen Beweglichkeit',
      'Stärkung der stützenden Muskulatur',
      'Schmerzreduktion durch gezielte Therapie',
      'Prävention von Rückfällen und Folgeschäden',
    ],
  },
  {
    id: 'trainingstherapie',
    title: 'Trainingstherapie',
    href: '/leistungen/trainingstherapie',
    shortDesc: 'Gerätegestütztes therapeutisches Training zur Rehabilitation und Leistungssteigerung.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80',
    indications: [
      'Muskelaufbau nach Verletzungen oder Operationen',
      'Chronische Rückenschmerzen & Fehlhaltungen',
      'Sportunfälle & Überlastungssyndrome',
      'Prävention von Beschwerden am Bewegungsapparat',
      'Osteoporose-Prophylaxe & Knochenaufbau',
      'Steigerung der Alltagsbelastbarkeit',
    ],
    benefits: [
      'Gezielter Aufbau schwacher Muskelgruppen',
      'Verbesserung von Kraft und Ausdauer',
      'Funktionelles Training für den Alltag',
      'Langfristige Schmerzfreiheit durch Stabilität',
    ],
  },
  {
    id: 'manuelle-therapie',
    title: 'Manuelle Therapie',
    href: '/leistungen/manuelle-therapie',
    shortDesc: 'Spezifische Handgrifftechniken an Gelenken und Weichteilen zur Schmerzlinderung.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80',
    indications: [
      'Bewegungseinschränkungen',
      'Halswirbelsäulen-Beschwerden & Kopfschmerzen',
      'Lendenwirbelsäulen-Schmerzen & Ischias',
      'Schulter-, Knie- & Hüftbeschwerden',
      'Bandscheibenvorfälle',
    ],
    benefits: [
      'Schmerzlinderung ohne Medikamente',
      'Normalisierung von Muskelverspannungen',
      'Verbesserung der Gelenkfunktion',
    ],
  },
  {
    id: 'neurologische-therapie',
    title: 'Neurologische Therapie',
    href: '/leistungen/neurologische-therapie',
    shortDesc: 'Spezialisierte Therapie bei Erkrankungen des Nervensystems.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80',
    indications: [
      'Schlaganfall (Apoplex) & Hemiplegie',
      'Morbus Parkinson',
      'Multiple Sklerose (MS)',
      'Schädel-Hirn-Traumata',
      'Periphere Lähmungen & Nervenverletzungen',
      'Polyneuropathien',
    ],
    benefits: [
      'Verbesserung der motorischen Funktionen',
      'Förderung der neurologischen Plastizität',
      'Wiederherstellung von Alltagsfertigkeiten',
      'Steigerung der Lebensqualität und Selbstständigkeit',
    ],
  },
  {
    id: 'hausbesuche',
    title: 'Hausbesuche',
    href: '/leistungen/hausbesuche',
    shortDesc: 'Physiotherapie direkt bei Ihnen zuhause – professionell, individuell, komfortabel.',
    image: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1920&q=80',
    indications: [
      'Eingeschränkte Mobilität & Bettlägerigkeit',
      'Frisch operierte Patienten ohne Transportmöglichkeit',
      'Ältere Patienten & Senioren',
      'Schwere chronische Erkrankungen',
      'Rehabilitationsphase nach Krankenhausaufenthalt',
      'Palliativpatienten',
    ],
    benefits: [
      'Therapie im gewohnten Umfeld',
      'Keine Belastung durch An- und Abreise',
      'Behandlung angepasst an die häusliche Situation',
      'Flexibel nach Terminwunsch',
    ],
  },
]
