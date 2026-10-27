'use client'

import { useState } from 'react'
import Image from 'next/image'

const sliderImages = [
  '/Trainingsflaeche-2026-2.jpg',
  '/Trainingsflaeche-2026-4.jpg',
  '/Trainingsflaeche-2026-5.jpg',
  '/Trainingsflaeche-2026-8.jpg',
  '/Trainingsflaeche-2026-9.jpg',
  '/Trainingsflaeche-2026-11.jpg',
  '/Trainingsflaeche-2026-12.jpg',
  '/Trainingsflaeche-2026-14.jpg',
  '/Trainingsflaeche-2026-15.jpg',
  '/Trainingsflaeche-2026-16.jpg',
  '/Trainingsflaeche-2026-17.jpg',
  '/Trainingsflaeche-2026-18.jpg',
  '/Trainingsflaeche-2026-19.jpg',
  '/Trainingsflaeche-2026-29.jpg',
  '/Trainingsflaeche-2026-100.jpg',
]

interface Props {
  eyebrow?: string
  title?: string
}

export default function GymSlider({ eyebrow, title }: Props) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + sliderImages.length) % sliderImages.length)
  const next = () => setCurrent((c) => (c + 1) % sliderImages.length)

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] min-h-[480px] max-h-[900px] overflow-hidden bg-[#0a0a0a]">
      {sliderImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <Image
            src={src}
            alt={`Trainingsfläche ${i + 1} – Fortis Salutis Reinheim`}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40 pointer-events-none" />

      {(eyebrow || title) && (
        <div className="absolute top-0 left-0 right-0 px-6 pt-10 sm:pt-14 max-w-7xl mx-auto">
          {eyebrow && (
            <p className="text-[10px] text-white/70 uppercase tracking-[0.3em] mb-3 font-bold">{eyebrow}</p>
          )}
          {title && (
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">{title}</h2>
          )}
        </div>
      )}

      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors rounded-full backdrop-blur-sm"
        aria-label="Vorheriges Bild"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors rounded-full backdrop-blur-sm"
        aria-label="Nächstes Bild"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 transition-all rounded-full ${i === current ? 'bg-white w-8' : 'bg-white/40 w-2'}`}
            aria-label={`Bild ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
