'use client'

import { useState } from 'react'

const SERVICES = [
  {
    id: 'financial-models',
    label: 'Financial Modeling',
    desc: 'Build or fix P&L models, profitability analyses, pricing tools, and business case templates.',
    icon: '📊',
    highlight: true,
  },
  {
    id: 'dashboards',
    label: 'Dashboards & Reporting',
    desc: 'Turn raw data into clean, decision-ready dashboards in Excel or Power BI.',
    icon: '📈',
    highlight: false,
  },
  {
    id: 'automation',
    label: 'Automation & VBA',
    desc: 'Eliminate manual work with macros, Power Query pipelines, and automated workflows.',
    icon: '⚡',
    highlight: false,
  },
  {
    id: 'cleanup',
    label: 'Workbook Cleanup',
    desc: 'Audit and restructure broken or unwieldy spreadsheets so they actually make sense.',
    icon: '🔧',
    highlight: false,
  },
  {
    id: 'general',
    label: 'General Excel Coaching',
    desc: 'One-on-one skill building — formulas, pivot tables, data modeling, whatever you need.',
    icon: '🎯',
    highlight: false,
  },
  {
    id: 'power-bi',
    label: 'Power BI',
    desc: 'Data modeling, DAX measures, report design, and connecting BI to your existing data.',
    icon: '🟡',
    highlight: false,
  },
]

const TOPICS = [
  'Financial Modeling',
  'Dashboards & Reporting',
  'Automation & VBA',
  'Workbook Cleanup',
  'Power BI',
  'General Excel Coaching',
  'Group Session',
  'Other',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function CoachingPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })
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
        body: JSON.stringify({ ...form, _trap: '' }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="p-3 sm:p-5 max-w-4xl mx-auto space-y-3 sm:space-y-5">

      {/* Hero */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — Coaching</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          1-on-1 Excel Coaching
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          10 years of building financial models and BI platforms in the real world — now available to you directly.
          Whether you need a model built, a dashboard cleaned up, or just want to get better at Excel fast.
        </p>
      </div>

      {/* Services grid */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          WHAT I CAN HELP WITH
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d0d0d0]">
          {SERVICES.map(s => (
            <div
              key={s.id}
              className={`p-4 ${s.highlight ? 'bg-[#f0f8f4]' : 'bg-white'}`}
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <h3 className={`text-sm font-semibold mb-1 ${s.highlight ? 'text-[#217346]' : 'text-gray-900'}`}>
                {s.label}
                {s.highlight && <span className="ml-2 text-[10px] bg-[#217346] text-white px-1.5 py-0.5 rounded">Popular</span>}
              </h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Format + Pricing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="border border-[#d1d1d1] rounded overflow-hidden">
          <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
            FORMAT
          </div>
          <div className="p-4 space-y-3 bg-white">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">1-on-1 Sessions</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">Focused, private sessions tailored to your exact problem or goal. Screen share, live workbook review, or skill building.</p>
            </div>
            <div className="border-t border-[#f0f0f0] pt-3">
              <p className="text-sm font-semibold text-gray-900 mb-0.5">Group Sessions</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">Team training or small group workshops. Great for onboarding or leveling up a whole department.</p>
            </div>
          </div>
        </div>
        <div className="border border-[#d1d1d1] rounded overflow-hidden">
          <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
            PRICING
          </div>
          <div className="p-4 bg-white flex flex-col justify-between h-full">
            <div>
              <p className="text-2xl font-bold text-[#217346] mb-1">Custom</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Pricing depends on session length, scope, and format. Reach out and I&apos;ll send a quote within 24 hours.
              </p>
            </div>
            <p className="text-[10px] text-gray-400 mt-3 font-mono">No commitment to inquire.</p>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          GET IN TOUCH
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
              {/* Honeypot — hidden from real users */}
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
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">What do you need help with?</label>
                <select
                  value={form.topic}
                  onChange={e => update('topic', e.target.value)}
                  className="w-full border border-[#d1d1d1] rounded px-3 py-2 text-sm outline-none focus:border-[#217346] transition-colors bg-white text-gray-700"
                >
                  <option value="">Select a topic...</option>
                  {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">Tell me more</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  className="w-full border border-[#d1d1d1] rounded px-3 py-2 text-sm outline-none focus:border-[#217346] transition-colors resize-none"
                  placeholder="Describe what you're working on, what's not working, or what you want to learn..."
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
