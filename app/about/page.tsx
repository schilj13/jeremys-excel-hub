import Image from 'next/image'
import Link from 'next/link'

const SKILLS = [
  { category: 'Spreadsheets', items: ['Excel (advanced modeling & automation)', 'Power Query', 'VBA'] },
  { category: 'BI & Reporting', items: ['Power BI (data modeling, DAX, reporting)', 'SSRS'] },
  { category: 'Data', items: ['SQL (complex querying & transformation)', 'SAP', 'BusinessObjects', 'QlikView'] },
  { category: 'Expertise', items: ['Financial modeling', 'Pricing analysis', 'Profitability costing'] },
]

const HIGHLIGHTS = [
  { cell: 'B2', label: 'Experience', value: '10+ years in analytics & business intelligence' },
  { cell: 'B3', label: 'Specialty', value: 'Excel, Power BI, and financial modeling' },
  { cell: 'B4', label: 'Background', value: 'Commercial finance, pricing, and R&D analytics' },
  { cell: 'B5', label: 'Models Built', value: '$250M+ in customer financial models' },
]

export default function About() {
  return (
    <div className="p-3 sm:p-5 max-w-4xl mx-auto space-y-3 sm:space-y-5">

      {/* Hero */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6 flex gap-4 sm:gap-6 items-center">
        <Image
          src="/jeremy.jpg"
          alt="Jeremy Schilling"
          width={80}
          height={80}
          className="rounded-full flex-shrink-0 border-2 border-[#217346] object-cover w-16 h-16 sm:w-20 sm:h-20"
        />
        <div>
          <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — About</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Hi, I&apos;m Jeremy.
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
            Analytics professional with 10+ years of experience building financial models, reporting platforms,
            and data systems. I created Jeremy&apos;s Excel Hub to share what I&apos;ve learned — so you can
            work faster, smarter, and stop dreading spreadsheets.
          </p>
        </div>
      </div>

      {/* Stats table */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden text-xs">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          BACKGROUND
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-[#f9f9f9] border-b border-[#d1d1d1] text-[11px]">
              <th className="px-3 py-1.5 font-semibold text-gray-500 border-r border-[#e8e8e8] w-12 text-center">Cell</th>
              <th className="text-left px-3 py-1.5 font-semibold text-gray-500 border-r border-[#e8e8e8] w-32">Field</th>
              <th className="text-left px-3 py-1.5 font-semibold text-gray-500">Value</th>
            </tr>
          </thead>
          <tbody>
            {HIGHLIGHTS.map(row => (
              <tr key={row.cell} className="border-b border-[#f0f0f0] hover:bg-[#f5fbf7] transition-colors last:border-0">
                <td className="px-3 py-1.5 text-gray-400 border-r border-[#f0f0f0] text-center font-mono">{row.cell}</td>
                <td className="px-3 py-1.5 text-gray-500 border-r border-[#f0f0f0] font-medium">{row.label}</td>
                <td className="px-3 py-1.5 text-gray-800">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Story */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          THE STORY
        </div>
        <div className="p-4 sm:p-5 space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            I&apos;ve spent over a decade working in commercial finance and analytics — building the kinds of
            models and reports that leadership actually uses to make decisions. That means financial summaries
            for hundreds of millions of dollars in business opportunities, pricing tools, and BI platforms
            built from scratch.
          </p>
          <p>
            Along the way I learned that most Excel problems aren&apos;t about Excel — they&apos;re about
            not knowing the right approach. Once you do, the spreadsheet almost builds itself. That&apos;s
            what I teach here.
          </p>
          <p>
            Whether you&apos;re automating a repetitive workflow, building a financial model, or just trying
            to stop copy-pasting data around — the tutorials, templates, and coaching on this site are built
            from real problems I&apos;ve solved in real jobs.
          </p>
        </div>
      </div>

      {/* Skills grid */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          SKILLS
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#d0d0d0]">
          {SKILLS.map(group => (
            <div key={group.category} className="bg-white p-3 sm:p-4">
              <p className="text-[11px] font-semibold text-[#217346] mb-2 uppercase tracking-wide">{group.category}</p>
              <ul className="space-y-1">
                {group.items.map(item => (
                  <li key={item} className="text-[11px] text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-[#d1d1d1] rounded p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-0.5">Ready to level up your Excel skills?</p>
          <p className="text-xs text-gray-500">Start with a free template or book a 1-on-1 session.</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Link
            href="/free"
            className="bg-[#217346] text-white px-4 py-2 rounded text-xs font-medium hover:bg-[#185a34] transition-colors whitespace-nowrap"
          >
            ⬇ Free Download
          </Link>
          <Link
            href="/coaching"
            className="border border-[#217346] text-[#217346] px-4 py-2 rounded text-xs font-medium hover:bg-[#e8f5ee] transition-colors whitespace-nowrap"
          >
            📅 Book Coaching
          </Link>
        </div>
      </div>

    </div>
  )
}
