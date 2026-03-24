'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const leistungen = [
  { title: 'Krankengymnastik', href: '/leistungen/krankengymnastik' },
  { title: 'Trainingstherapie', href: '/leistungen/trainingstherapie' },
  { title: 'Manuelle Therapie', href: '/leistungen/manuelle-therapie' },
  { title: 'Neurologische Therapie', href: '/leistungen/neurologische-therapie' },
  { title: 'Hausbesuche', href: '/leistungen/hausbesuche' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'text-black' : 'text-white'
  const hoverColor = scrolled ? 'hover:text-gray-500' : 'hover:text-white/70'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Fortis Salutis Logo"
            width={52}
            height={52}
            className={`h-13 w-auto transition-all ${scrolled ? '' : 'invert brightness-0 invert'}`}
          />
          <span className={`font-black text-xl tracking-tight transition-colors ${textColor}`}>
            Fortis Salutis
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Leistungen dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${textColor} ${hoverColor}`}
            >
              Leistungen
              <svg
                className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52">
                <div className="bg-white shadow-2xl border border-gray-100">
                  {leistungen.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-sm text-gray-800 hover:bg-gray-50 hover:text-black border-b border-gray-50 last:border-0 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#ueber-uns"
            className={`text-sm font-bold uppercase tracking-[0.12em] transition-colors ${textColor} ${hoverColor}`}
          >
            Über uns
          </Link>

          <Link
            href="/#kontakt"
            className={`text-sm font-bold uppercase tracking-[0.12em] transition-colors ${textColor} ${hoverColor}`}
          >
            Kontakt
          </Link>

          <a
            href="tel:+4915773327200"
            className="bg-black text-white text-sm font-bold uppercase tracking-[0.12em] px-5 py-3 hover:bg-gray-900 transition-colors"
          >
            Termin vereinbaren
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-1 ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-6 space-y-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 pb-3">Leistungen</p>
            {leistungen.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-900 border-b border-gray-50 hover:text-black"
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 space-y-1">
              <Link
                href="/#ueber-uns"
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-900 border-b border-gray-50"
              >
                Über uns
              </Link>
              <Link
                href="/#kontakt"
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-900"
              >
                Kontakt
              </Link>
            </div>
            <div className="pt-6 space-y-3">
              <a
                href="tel:+4915773327200"
                className="block bg-black text-white text-center py-4 text-xs font-bold uppercase tracking-[0.15em]"
              >
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4915773327200"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-black text-black text-center py-4 text-xs font-bold uppercase tracking-[0.15em]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
