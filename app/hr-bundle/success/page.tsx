'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function HRBundleSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [status, setStatus] = useState<'loading' | 'verified' | 'failed'>('loading')

  useEffect(() => {
    if (!sessionId) { setStatus('failed'); return }

    fetch(`/api/verify-purchase?session_id=${sessionId}`)
      .then(r => r.json())
      .then(({ verified }) => {
        setStatus(verified ? 'verified' : 'failed')
        if (verified && (window as any).fbq) {
          (window as any).fbq('track', 'Purchase', { value: 37.00, currency: 'USD' })
        }
      })
      .catch(() => setStatus('failed'))
  }, [sessionId])

  if (status === 'loading') {
    return (
      <div className="p-5 max-w-2xl mx-auto text-center mt-10">
        <p className="text-sm text-gray-500">Verifying your purchase...</p>
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div className="p-5 max-w-2xl mx-auto text-center mt-10 space-y-3">
        <p className="text-sm text-gray-700">We couldn&apos;t verify your purchase. If you were charged, please email <a href="mailto:jeremy@jeremyexcel.com" className="text-[#217346] underline">jeremy@jeremyexcel.com</a> and I&apos;ll sort it out immediately.</p>
        <Link href="/hr-bundle" className="text-xs text-[#0078d4] hover:underline">← Back to HR Bundle</Link>
      </div>
    )
  }

  return (
    <div className="p-3 sm:p-5 max-w-2xl mx-auto space-y-4">

      {/* Hero */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-6 text-center">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — Thank You</p>
        <div className="text-4xl mb-3">🎉</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          You&apos;re all set!
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
          Your HR Template Bundle is ready to download. All 15 templates in one zip file — open in Excel and start using immediately.
        </p>
      </div>

      {/* Download */}
      <div className="border border-[#217346] rounded-lg overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-4 py-2 text-[11px] font-semibold text-gray-500 tracking-wide">
          YOUR DOWNLOAD
        </div>
        <div className="p-6 text-center bg-white">
          <p className="text-sm font-semibold text-gray-900 mb-1">HR & Employee Management Bundle</p>
          <p className="text-[11px] text-gray-500 mb-5">15 Excel templates · All categories included · Fully editable</p>
          <a
            href="/hr-bundle.zip"
            download
            onClick={() => {
              if ((window as any).fbq) (window as any).fbq('track', 'CompleteRegistration')
            }}
            className="inline-flex items-center gap-2 bg-[#217346] hover:bg-[#185a34] text-white font-semibold px-8 py-3 rounded text-sm transition-colors"
          >
            ⬇ Download All 15 Templates
          </a>
          <p className="text-[10px] text-gray-400 mt-3">A receipt has been sent to your email by Stripe.</p>
        </div>
      </div>

      {/* What's next */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-4 py-2 text-[11px] font-semibold text-gray-500 tracking-wide">
          GETTING STARTED
        </div>
        <ul className="divide-y divide-[#f5f5f5]">
          {[
            { icon: '📂', text: 'Unzip the file and you\'ll find all 15 templates organized by category.' },
            { icon: '📊', text: 'Open each template in Excel, add your logo, and customize for your team.' },
            { icon: '💡', text: 'Start with the Employee Database — other templates reference it for employee names.' },
          ].map(item => (
            <li key={item.icon} className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700">
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div className="border border-[#d1d1d1] rounded p-4 bg-white text-center">
        <p className="text-xs text-gray-500">
          Questions or need help with any template? Email <a href="mailto:jeremy@jeremyexcel.com" className="text-[#217346] underline">jeremy@jeremyexcel.com</a> — I read every one.
        </p>
      </div>

      <div className="text-center pb-2">
        <Link href="/" className="text-xs text-[#0078d4] hover:underline font-mono">
          ← Back to Jeremy Excel
        </Link>
      </div>

    </div>
  )
}
