import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
