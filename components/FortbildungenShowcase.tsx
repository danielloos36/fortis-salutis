'use client'

import { useEffect, useRef, useState } from 'react'

export default function FortbildungenShowcase({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="border-t border-gray-200 divide-y divide-gray-200">
      {items.map((item, i) => (
        <div
          key={item}
          className={`flex items-center gap-4 py-5 transition-all duration-500 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
        >
          <span className="w-6 h-6 bg-wine text-white flex items-center justify-center shrink-0 rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-black font-bold text-base sm:text-lg">{item}</span>
        </div>
      ))}
    </div>
  )
}
