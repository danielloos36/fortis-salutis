'use client'

import { useState, useEffect } from 'react'

const phrases = [
  'die bewegt.',
  'fundiert.',
  'die wirkt.',
]

export default function HeroTypewriter() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Typewriter logic
  useEffect(() => {
    const current = phrases[phraseIndex]

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2200)
      return () => clearTimeout(pause)
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
      return
    }

    const speed = isDeleting ? 45 : 75
    const timeout = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, phraseIndex])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="text-white/50">
      {displayed}
      <span className={`ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  )
}
