'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const INCLUDES = [
  'Assets tracker (cash, savings, investments, real estate, vehicles)',
  'Liabilities tracker (mortgage, loans, credit cards)',
  'Automatic net worth calculation',
  'Month-by-month trend chart',
  'Year-over-year net worth comparison',
  'Financial health summary section',
]

export default function FreePage() {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe-free', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      if (!res.ok) throw new Error()
      router.push('/free/thank-you')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="p-3 sm:p-5 max-w-3xl mx-auto space-y-3 sm:space-y-5">

      {/* Hero */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — Free Download</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Free Excel Net Worth Tracker
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
          Know exactly where you stand financially. Track assets, liabilities, and net worth over time — all in a clean, automated Excel workbook. No software, no subscriptions. Just download and go.
        </p>
      </div>

      {/* Preview + Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {/* Preview image + includes */}
        <div className="border border-[#d1d1d1] rounded overflow-hidden">
          <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
            WHAT&apos;S INCLUDED
          </div>
          <div className="p-4 bg-white">
            <div className="relative w-full aspect-video rounded overflow-hidden border border-[#e8e8e8] bg-[#f9f9f9] mb-4">
              <Image
                src="/templates/net-worth-calculator.webp"
                alt="Net Worth Tracker"
                fill
                className="object-contain"
              />
            </div>
            <ul className="space-y-1.5">
              {INCLUDES.map(item => (
                <li key={item} className="flex items-start gap-2 text-[11px] text-gray-600">
                  <span className="text-[#217346] font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="border border-[#d1d1d1] rounded overflow-hidden">
          <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
            GET THE FREE TEMPLATE
          </div>
          <div className="p-4 bg-white">
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Enter your email and I&apos;ll send you the template instantly. You&apos;ll also get weekly Excel tips — unsubscribe anytime.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="First name (optional)"
                  className="w-full border border-[#d1d1d1] rounded px-3 py-2 text-sm outline-none focus:border-[#217346] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-[#d1d1d1] rounded px-3 py-2 text-sm outline-none focus:border-[#217346] transition-colors"
                />
              </div>
              {status === 'error' && (
                <p className="text-xs text-red-600">Something went wrong — please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#217346] text-white py-2.5 rounded text-sm font-semibold hover:bg-[#185a34] transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : '⬇ Send Me the Free Template'}
              </button>
              <p className="text-[10px] text-gray-400 text-center">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}
