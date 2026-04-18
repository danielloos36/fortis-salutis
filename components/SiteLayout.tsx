'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/keystatic')

  return (
    <>
      {!isAdmin && <Navigation />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
    </>
  )
}
