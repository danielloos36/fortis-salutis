import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteLayout from '@/components/SiteLayout'
import JsonLd from '@/components/JsonLd'
import { physioBusinessSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fortis-salutis.de'),
  title: 'Fortis Salutis – Physiotherapie Reinheim',
  description:
    'Physiotherapie in Reinheim, Hessen. Krankengymnastik, Manuelle Therapie, Trainingstherapie, Neurologische Therapie und Hausbesuche. Individuelle Behandlung. Jetzt Termin vereinbaren.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Fortis Salutis – Physiotherapie Reinheim',
    locale: 'de_DE',
    type: 'website',
    images: ['/hero-banner-startseite.jpg'],
  },
  verification: {
    google: 'wtNZIMCMCu7dyMIMOe-i-ICINNL0u-nz9OjcwKQH_cA',
  },
  icons: {
    icon: '/ODS-FortisSalutis-Logo-Black_13.avif',
    shortcut: '/ODS-FortisSalutis-Logo-Black_13.avif',
    apple: '/ODS-FortisSalutis-Logo-Black_13.avif',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <JsonLd data={physioBusinessSchema()} />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
