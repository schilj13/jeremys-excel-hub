'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, topic: 'General', _trap: '' }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="p-3 sm:p-5 max-w-2xl mx-auto space-y-3 sm:space-y-5">

      {/* Header */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — Contact</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Questions, feedback, or just want to say hi — send me a message and I&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {/* Form */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          MESSAGE
        </div>
        <div className="p-4 sm:p-6 bg-white">
          {status === 'success' ? (
            <div className="text-center py-8">
              <p className="text-2xl mb-2">✅</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Message sent!</p>
              <p className="text-[11px] text-gray-500">I&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              {/* Honeypot */}
              <input type="text" name="_trap" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    className="w-full border border-[#d1d1d1] rounded px-3 py-2 text-sm outline-none focus:border-[#217346] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    className="w-full border border-[#d1d1d1] rounded px-3 py-2 text-sm outline-none focus:border-[#217346] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  className="w-full border border-[#d1d1d1] rounded px-3 py-2 text-sm outline-none focus:border-[#217346] transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-600">Something went wrong — please try again or email schilj13@outlook.com directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#217346] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#185a34] transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  )
}
