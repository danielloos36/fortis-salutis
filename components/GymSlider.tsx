'use client'

import { useState } from 'react'
import Image from 'next/image'

const sliderImages = [
  '/trainingsflaeche-1.jpg',
  '/trainingsflaeche-2.jpg',
  '/trainingsflaeche-3.jpg',
  '/trainingsflaeche-4.jpg',
]

export default function GymSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + sliderImages.length) % sliderImages.length)
  const next = () => setCurrent((c) => (c + 1) % sliderImages.length)

  return (
    <div className="relative overflow-hidden aspect-[16/9] lg:aspect-[21/9]">
      {sliderImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <Image
            src={src}
            alt={`Trainingsfläche ${i + 1} – Fortis Salutis Reinheim`}
            fill
            className="object-cover object-center"
          />
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
        aria-label="Vorheriges Bild"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
        aria-label="Nächstes Bild"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40 w-2'}`}
            aria-label={`Bild ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
