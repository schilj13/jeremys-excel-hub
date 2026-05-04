import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PixelLead from '@/components/PixelLead'
import DownloadButton from '@/components/DownloadButton'

export const metadata: Metadata = {
  title: 'Your Free Template | Jeremy Excel',
  description: 'Download your free HR Excel template instantly.',
}

const HR_BUNDLE_ETSY_URL = 'https://www.etsy.com/listing/4482536270/hr-template-bundle-digital-download'

export default function ThankYouPage() {
  return (
    <div className="p-3 sm:p-5 max-w-2xl mx-auto space-y-4">
      <PixelLead />

      {/* Hero cell */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-6 text-center">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — Thank You</p>
        <div className="text-4xl mb-3">🎉</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          You&apos;re on the list!
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
          Your free HR &amp; Employee Management template is on its way to your inbox — but you can also download it instantly right here.
        </p>
      </div>

      {/* Download box */}
      <div className="border border-[#217346] rounded-lg overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-4 py-2 text-[11px] font-semibold text-gray-500 tracking-wide">
          INSTANT DOWNLOAD
        </div>
        <div className="p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="relative w-28 h-28 flex-shrink-0 rounded overflow-hidden border border-[#e8e8e8] bg-[#f9f9f9]">
            <Image
              src="/templates/employee-onboarding.avif"
              alt="New Hire Checklist"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs text-[#217346] font-semibold mb-1">FREE TEMPLATE</p>
            <h2 className="text-lg font-bold text-gray-900 mb-1">New Hire Checklist</h2>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Excel workbook — onboarding tasks, orientation schedule, 30/60/90-day goals, and equipment log. Works on Mac &amp; PC.
            </p>
            <DownloadButton />
          </div>
        </div>
      </div>

      {/* What's next */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-4 py-2 text-[11px] font-semibold text-gray-500 tracking-wide">
          WHAT HAPPENS NEXT
        </div>
        <ul className="divide-y divide-[#f5f5f5]">
          {[
            { icon: '📧', text: 'Check your inbox — the template download link is on its way.' },
            { icon: '📋', text: 'Open the file in Excel and start customizing for your team.' },
            { icon: '💡', text: "Every week you'll get a short Excel tip to save time in your HR workflow." },
          ].map(item => (
            <li key={item.icon} className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700">
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Upsell */}
      <div className="border border-[#e8e8e8] rounded-lg p-5 bg-[#fafafa]">
        <p className="text-[10px] text-gray-400 font-mono mb-2 uppercase tracking-wide">Want the full toolkit?</p>
        <h3 className="text-base font-bold text-gray-900 mb-1">
          HR Template Bundle — 15 Templates
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          Get every HR template you need in one bundle — hiring, onboarding, attendance, payroll, performance reviews, and more. Save 40% vs. buying individually.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-[#217346]">$37.00</span>
            <span className="text-gray-400 line-through text-xs">$61.66</span>
          </div>
          <a
            href={HR_BUNDLE_ETSY_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-[#217346] border border-[#217346] px-4 py-2 rounded hover:bg-[#e8f5ee] transition-colors"
          >
            View Bundle on Etsy →
          </a>
        </div>
      </div>

      {/* Back link */}
      <div className="text-center pb-2">
        <Link href="/" className="text-xs text-[#0078d4] hover:underline font-mono">
          ← Back to Jeremy Excel
        </Link>
      </div>

    </div>
  )
}
