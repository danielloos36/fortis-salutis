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
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isLight = (scrolled || dropdownOpen || trainingDropdownOpen) && !mobileOpen
  const textColor = isLight ? 'text-black' : 'text-white'
  const hoverColor = isLight ? 'hover:text-gray-500' : 'hover:text-white/70'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen ? 'bg-[#0a0a0a]' : scrolled || dropdownOpen || trainingDropdownOpen ? 'bg-white shadow-sm' : 'bg-transparent'
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
            className={`h-12 w-auto transition-all ${isLight ? '' : 'brightness-0 invert'}`}
          />
          <span className={`font-black text-xl tracking-tight transition-colors ${textColor}`}>
            Fortis Salutis
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Leistungen dropdown */}
          <div
            className="relative self-stretch flex items-center"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${textColor} ${hoverColor}`}
            >
              Leistungen
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 transition-all duration-200 ease-out ${
              dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <div className="bg-white shadow-xl border-t-2 border-wine">
                {leistungen.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black border-b border-gray-100 last:border-0 transition-colors group"
                  >
                    {item.title}
                    <svg className="w-3 h-3 text-gray-300 group-hover:text-wine group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Training dropdown */}
          <div
            className="relative self-stretch flex items-center"
            onMouseEnter={() => setTrainingDropdownOpen(true)}
            onMouseLeave={() => setTrainingDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${textColor} ${hoverColor}`}
            >
              Training
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${trainingDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 transition-all duration-200 ease-out ${
              trainingDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <div className="bg-white shadow-xl border-t-2 border-wine">
                {[
                  { title: 'Preise', href: '/training#preis' },
                  { title: 'Öffnungszeiten', href: '/training#oeffnungszeiten' },
                  { title: 'Galerie', href: '/training#galerie' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black border-b border-gray-100 last:border-0 transition-colors group"
                  >
                    {item.title}
                    <svg className="w-3 h-3 text-gray-300 group-hover:text-wine group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
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
            className="bg-black text-white text-sm font-bold uppercase tracking-[0.12em] px-5 py-3 hover:bg-gray-900 transition-colors rounded"
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
      <div
        className={`md:hidden fixed inset-0 top-0 z-[-1] bg-[#0a0a0a] transition-all duration-300 ease-in-out ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`h-full flex flex-col px-6 pt-28 pb-10 overflow-y-auto transition-all duration-300 ${mobileOpen ? 'translate-y-0' : '-translate-y-4'}`}>

          {/* Leistungen */}
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-4">Leistungen</p>
            <div className="space-y-1">
              {leistungen.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-white/10 text-white font-bold text-lg hover:text-wine transition-colors group"
                >
                  {item.title}
                  <svg className="w-4 h-4 text-white/20 group-hover:text-wine transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Training */}
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-4">Training</p>
            <div className="space-y-1">
              {[
                { title: 'Preise', href: '/training#preis' },
                { title: 'Öffnungszeiten', href: '/training#oeffnungszeiten' },
                { title: 'Galerie', href: '/training#galerie' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-white/10 text-white font-bold text-lg hover:text-wine transition-colors group"
                >
                  {item.title}
                  <svg className="w-4 h-4 text-white/20 group-hover:text-wine transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Weitere Links */}
          <div className="space-y-1 mb-auto">
            {[
              { title: 'Über uns', href: '/#ueber-uns' },
              { title: 'Kontakt', href: '/#kontakt' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/10 text-white/60 font-bold text-base hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-8 space-y-3">
            <a
              href="tel:+4915773327200"
              className="block bg-white text-black text-center py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors rounded"
            >
              Jetzt anrufen
            </a>
            <a
              href="https://wa.me/4915773327200"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/20 text-white text-center py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-wine hover:bg-wine transition-colors rounded"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
