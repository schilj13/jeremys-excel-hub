import type { Metadata } from 'next'
import TemplateGrid from '../../components/TemplateGrid'

export const metadata: Metadata = {
  title: "Excel Templates | Jeremy Excel",
  description:
    'Premium Excel templates for HR, employee management, personal finance, and fitness. Instant download from Etsy. Works on Mac and PC.',
}

export default function TemplatesPage() {
  return (
    <div className="p-5 max-w-6xl mx-auto">
      {/* Header cell */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-5 mb-5">
        <p className="text-[10px] text-[#217346] font-mono mb-1 opacity-70">A1 — Templates</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Excel Templates</h1>
        <p className="text-sm text-gray-600 max-w-xl">
          Ready-to-use Excel spreadsheets for HR, finance, and fitness. Instant digital download — works on Mac and PC, no software subscription needed.
        </p>
      </div>

      <TemplateGrid />
    </div>
  )
}
