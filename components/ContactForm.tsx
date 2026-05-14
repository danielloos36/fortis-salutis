'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setError('Die Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.')
    }
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm rounded focus:outline-none focus:border-wine transition-colors'

  if (status === 'success') {
    return (
      <div className="border border-wine/40 p-8 rounded flex flex-col items-center justify-center text-center min-h-[340px]">
        <div className="w-12 h-12 border border-wine rounded-full flex items-center justify-center mb-5">
          <svg className="w-5 h-5 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-black text-xl mb-3">Nachricht gesendet</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-wine/40 p-8 rounded space-y-4">
      <h3 className="text-white font-black text-xl mb-2">Nachricht senden</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1.5 font-bold">
            Name *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Max Mustermann"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1.5 font-bold">
            Telefon
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            placeholder="+49 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1.5 font-bold">
          E-Mail *
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          placeholder="ihre@email.de"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1.5 font-bold">
          Nachricht *
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Wie können wir Ihnen helfen?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-xs leading-relaxed">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-wine text-white py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-wine-dark transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Wird gesendet …' : 'Nachricht absenden'}
      </button>

      <p className="text-white/30 text-[10px] leading-relaxed">
        * Pflichtfelder. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
      </p>
    </form>
  )
}
