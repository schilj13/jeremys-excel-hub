'use client'

import { useState } from 'react'
import Image from 'next/image'

const TEMPLATES = [
  { category: 'Hiring & Onboarding', items: ['New Hire Checklist', 'Candidate Screening Tracker', 'Recruiting Plan', 'Employee Database'] },
  { category: 'Day-to-Day Management', items: ['Employee Timesheet', 'Attendance Tracker', 'Vacation Tracker', 'PTO Accrual Tracker', 'Payroll Template', 'Paystub Template'] },
  { category: 'Performance & Development', items: ['Employee Performance Review', 'Employee Training Tracker', 'Disciplinary Action Tracker'] },
  { category: 'Offboarding', items: ['Employee Offboarding Checklist', 'Employee Transition Template'] },
]

const REVIEWS = [
  { name: 'Djessica', stars: 5, text: 'Incredibly well-designed. Saved me hours of setup time — everything I needed was already built in.' },
  { name: 'Hayley', stars: 4, text: 'Really solid templates. The onboarding checklist alone was worth it for our small team.' },
  { name: 'Marcus', stars: 5, text: 'Bought this for our HR team and they loved it. Professional quality, easy to customize.' },
]

const FAQS = [
  { q: 'What format are the templates?', a: 'All 15 templates are Excel (.xlsx) files. They work on Mac and PC with no add-ins or subscriptions required.' },
  { q: 'Can I customize them for my business?', a: 'Yes — every field, tab, and formula is unlocked. Add your logo, rename tabs, adjust for your team size.' },
  { q: 'Do the templates work together?', a: 'Each template is a standalone file you can use independently. They\'re organized into categories so you can pick and use only what your team needs.' },
  { q: 'Is this a one-time purchase?', a: 'Yes. Pay once, download instantly, use forever. No subscriptions, no recurring fees.' },
  { q: 'What if I need help with the templates?', a: 'Just reply to any email or use the contact form on the site. I\'m happy to help.' },
]

export default function HRBundlePage() {
  const [loading, setLoading] = useState(false)

  async function handleBuy() {
    setLoading(true)
    const res = await fetch('/api/checkout', { method: 'POST' })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <div className="p-3 sm:p-5 max-w-4xl mx-auto space-y-3 sm:space-y-5">

      {/* Hero */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-8">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — HR Bundle</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          The Complete HR Template Bundle
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
          15 Excel templates covering the entire employee lifecycle — from first interview to last day. Built for small businesses and HR teams who want professional systems without expensive software.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div>
            <span className="text-3xl font-bold text-[#217346]">$37</span>
            <span className="text-gray-400 line-through text-sm ml-2">$61.66</span>
            <span className="ml-2 text-[11px] bg-[#217346] text-white px-2 py-0.5 rounded">Save 40%</span>
          </div>
          <div className="text-[11px] text-gray-500">One-time payment · Instant download · Works on Mac & PC</div>
        </div>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="bg-[#217346] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#185a34] transition-colors disabled:opacity-60"
        >
          {loading ? 'Redirecting...' : '🛒 Get the Bundle — $37'}
        </button>
        <p className="text-[10px] text-gray-400 mt-2">Secure checkout via Stripe. Instant download after payment.</p>
      </div>

      {/* Template preview images */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          PREVIEW
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#d0d0d0]">
          {[
            { src: '/templates/hr-bundle-1.png', alt: 'Inside the templates — sample views' },
            { src: '/templates/hr-bundle-2.png', alt: 'HR & Employee Management Bundle overview' },
            { src: '/templates/hr-bundle-3.png', alt: "What's included in the bundle" },
          ].map(img => (
            <div key={img.src} className="relative bg-[#f9f9f9] aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* What's included */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          ALL 15 TEMPLATES INCLUDED
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#d0d0d0]">
          {TEMPLATES.map(group => (
            <div key={group.category} className="bg-white p-4">
              <p className="text-[11px] font-semibold text-[#217346] uppercase tracking-wide mb-2">{group.category}</p>
              <ul className="space-y-1">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-[11px] text-gray-700">
                    <span className="text-[#217346]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why this beats HR software */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          WHY EXCEL BEATS HR SOFTWARE FOR SMALL TEAMS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#d0d0d0]">
          {[
            { icon: '💰', title: '$37 once', desc: 'vs. $8–20/employee/month for HR software. For a 10-person team that\'s $960–2,400/year.' },
            { icon: '🔓', title: 'Fully yours', desc: 'No login, no account, no cloud. Your data stays on your computer. Customize anything.' },
            { icon: '⚡', title: 'Ready in 2 minutes', desc: 'Download, open in Excel, start using. No onboarding, no setup calls, no learning curve.' },
          ].map(item => (
            <div key={item.title} className="bg-white p-4 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          REVIEWS
        </div>
        <div className="divide-y divide-[#f0f0f0]">
          {REVIEWS.map(r => (
            <div key={r.name} className="p-4 bg-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-400 text-xs">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</span>
                <span className="text-[11px] font-semibold text-gray-700">{r.name}</span>
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          FAQ
        </div>
        <div className="divide-y divide-[#f0f0f0]">
          {FAQS.map(faq => (
            <div key={faq.q} className="p-4 bg-white">
              <p className="text-sm font-semibold text-gray-900 mb-1">{faq.q}</p>
              <p className="text-[11px] text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to get organized?</h2>
        <p className="text-sm text-gray-600 mb-4">15 templates. One payment. Use them forever.</p>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="bg-[#217346] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#185a34] transition-colors disabled:opacity-60"
        >
          {loading ? 'Redirecting...' : '🛒 Get the Bundle — $37'}
        </button>
        <p className="text-[10px] text-gray-400 mt-2">Secure checkout via Stripe. Instant download after payment.</p>
      </div>

    </div>
  )
}
