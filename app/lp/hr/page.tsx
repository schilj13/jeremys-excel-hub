'use client'

import Link from 'next/link'
import { useState } from 'react'

function SubscribeForm({ variant }: { variant: 'hero' | 'bottom' }) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`text-center py-4 ${variant === 'bottom' ? 'text-white' : 'text-[#217346]'}`}>
        <p className="text-2xl mb-1">🎉</p>
        <p className="font-bold text-lg">You&apos;re in!</p>
        <p className={`text-sm mt-1 ${variant === 'bottom' ? 'text-green-100' : 'text-gray-600'}`}>
          Check your inbox — the template is on its way.
        </p>
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          className="w-full border border-[#d1d1d1] rounded px-4 py-3 text-sm outline-none focus:border-[#217346] focus:ring-1 focus:ring-[#217346] transition-colors"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full border border-[#d1d1d1] rounded px-4 py-3 text-sm outline-none focus:border-[#217346] focus:ring-1 focus:ring-[#217346] transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#217346] hover:bg-[#185a34] disabled:opacity-60 text-white font-semibold py-3 rounded text-sm transition-colors"
        >
          {status === 'loading' ? 'Sending…' : 'Send Me the Free Template →'}
        </button>
        {status === 'error' && (
          <p className="text-red-500 text-xs text-center">Something went wrong — please try again.</p>
        )}
        <p className="text-[11px] text-gray-400 text-center">No spam. Unsubscribe anytime. Your email is safe.</p>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="w-full rounded px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-white text-[#217346] font-bold py-3 rounded text-sm hover:bg-green-50 disabled:opacity-60 transition-colors"
      >
        {status === 'loading' ? 'Sending…' : 'Send Me the Free Template →'}
      </button>
      {status === 'error' && (
        <p className="text-red-300 text-xs text-center">Something went wrong — please try again.</p>
      )}
      <p className="text-green-200 text-[11px] text-center">No spam. Unsubscribe anytime.</p>
    </form>
  )
}

export default function HRLandingPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>

      {/* Header */}
      <header className="bg-[#217346] px-4 py-3 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <span className="text-[#217346] font-black text-sm leading-none">X</span>
          </div>
          <span className="text-white font-semibold text-sm">Jeremy Excel</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="bg-[#f8fffe] border-b border-[#d1d1d1] px-4 py-12 sm:py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-[#e8f5ee] text-[#217346] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            FREE FOR HR MANAGERS &amp; SMALL BUSINESS OWNERS
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Stop Managing HR in Your Head.<br className="hidden sm:block" />
            <span className="text-[#217346]"> There&apos;s an Excel Template for That.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Get a free HR &amp; Employee Management spreadsheet — handles payroll tracking, attendance, hiring, and onboarding in one file. No software subscription. No learning curve. Just Excel.
          </p>

          {/* Hero form */}
          <div className="bg-white border border-[#d1d1d1] rounded-xl shadow-sm p-6 max-w-md mx-auto">
            <p className="text-sm font-semibold text-gray-800 mb-4">
              Enter your email to get instant access:
            </p>
            <SubscribeForm variant="hero" />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
          Here&apos;s exactly what you&apos;ll get
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: '📋',
              title: 'HR & Employee Management Spreadsheet',
              desc: 'A $24.99 template — yours free. Covers hiring, onboarding, attendance, payroll, and performance reviews in one workbook.',
            },
            {
              icon: '✅',
              title: 'Works on Mac & PC',
              desc: 'Plain Excel file. No add-ins, no subscriptions, no cloud account required. Download and start using in 2 minutes.',
            },
            {
              icon: '📧',
              title: 'Weekly Excel Tips for HR Pros',
              desc: 'Short, practical tips every week — formulas, shortcuts, and templates that save real time in your HR workflow.',
            },
            {
              icon: '🔓',
              title: 'Fully Editable & Customizable',
              desc: 'Every field, tab, and formula is unlocked. Make it yours — add your logo, rename tabs, adjust for your team size.',
            },
          ].map(item => (
            <div key={item.title} className="flex gap-3 p-4 border border-[#e8e8e8] rounded-lg">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#f9f9f9] border-y border-[#e8e8e8] px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
            This is for you if...
          </h2>
          <ul className="space-y-3 max-w-lg mx-auto">
            {[
              "You're an HR manager or office manager at a small to mid-size company",
              "You're a business owner who handles HR yourself and needs to get organized",
              "You're spending too much money on HR software for what you actually need",
              "You want professional HR systems without a months-long implementation",
              "You already use Excel and just need the right templates to work from",
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#217346] font-bold flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      <section className="px-4 py-12 max-w-2xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-8">What customers are saying</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
          <div className="border border-[#e8e8e8] rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm italic mb-2">&ldquo;Very helpful tool for everyone.&rdquo;</p>
            <p className="text-xs text-gray-400">— Djessica, verified Etsy buyer · Oct 2025</p>
          </div>
          <div className="border border-[#e8e8e8] rounded-lg p-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
              <span className="text-gray-300">★</span>
            </div>
            <p className="text-gray-700 text-sm italic mb-2">&ldquo;Exactly what I was looking for!&rdquo;</p>
            <p className="text-xs text-gray-400">— Hayley, verified Etsy buyer · Sep 2025</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 text-center">
          <div>
            <p className="text-2xl font-bold text-[#217346]">114+</p>
            <p className="text-xs text-gray-500">templates sold</p>
          </div>
          <div className="w-px h-8 bg-[#e8e8e8]" />
          <div>
            <p className="text-2xl font-bold text-[#217346]">4.5★</p>
            <p className="text-xs text-gray-500">Etsy rating</p>
          </div>
          <div className="w-px h-8 bg-[#e8e8e8]" />
          <div>
            <p className="text-2xl font-bold text-[#217346]">Free</p>
            <p className="text-xs text-gray-500">no catch</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#217346] px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">
            Ready to get organized?
          </h2>
          <p className="text-green-100 text-sm mb-6">
            Join HR managers and small business owners who are running HR in Excel — for free.
          </p>
          <SubscribeForm variant="bottom" />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center border-t border-[#e8e8e8]">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Jeremy Excel ·{' '}
          <Link href="/" className="hover:text-[#217346] transition-colors">Visit the site</Link>
        </p>
      </footer>

    </div>
  )
}
