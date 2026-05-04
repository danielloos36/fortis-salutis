import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteLayout from '@/components/SiteLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fortis-salutis.de'),
  title: {
    default: 'Fortis Salutis – Physiotherapie Reinheim',
    template: '%s | Fortis Salutis Reinheim',
  },
  description:
    'Physiotherapie in Reinheim, Hessen. Krankengymnastik, Manuelle Therapie, Trainingstherapie, Neurologische Therapie und Hausbesuche. Individuelle Behandlung. Jetzt Termin vereinbaren.',
  openGraph: {
    siteName: 'Fortis Salutis – Physiotherapie Reinheim',
    locale: 'de_DE',
    type: 'website',
  },
  verification: {
    google: 'wtNZIMCMCu7dyMIMOe-i-ICINNL0u-nz9OjcwKQH_cA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
