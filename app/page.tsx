import Link from 'next/link'

const FEATURES = [
  {
    icon: '▶',
    title: 'Videos',
    desc: 'Free Excel tutorials on YouTube.',
    href: '/videos',
    iconColor: 'text-red-600',
  },
  {
    icon: '📄',
    title: 'Templates',
    desc: 'Premium Excel templates, instant download.',
    href: '/templates',
    iconColor: 'text-[#217346]',
  },
  {
    icon: '⬇',
    title: 'Free Download',
    desc: 'Free Net Worth Tracker — no catch.',
    href: '/free',
    iconColor: 'text-[#0078d4]',
  },
  {
    icon: '📅',
    title: 'Coaching',
    desc: '1-on-1 Excel coaching sessions.',
    href: '/coaching',
    iconColor: 'text-purple-600',
  },
]

const STATS = [
  { num: 1, platform: 'YouTube', content: '50+ tutorials', action: 'Subscribe', href: 'https://youtube.com/@bigdogsexcelerator9853', external: true },
  { num: 2, platform: 'Etsy Shop', content: '16 templates', action: 'Shop Now', href: '/templates', external: false },
  { num: 3, platform: 'Newsletter', content: 'Weekly Excel tips', action: 'Sign Up', href: '/free', external: false },
  { num: 4, platform: 'Coaching', content: '1-on-1 sessions', action: 'Book Now', href: '/coaching', external: false },
]

export default function Home() {
  return (
    <div className="p-3 sm:p-5 max-w-5xl mx-auto space-y-3 sm:space-y-5">

      {/* Hero */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — Jeremy Excel</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
          Master Excel.<br />Build Your Business.
        </h1>
        <p className="text-gray-600 mb-4 max-w-lg text-sm leading-relaxed">
          Free tutorials, premium templates, and 1-on-1 coaching to help you go from Excel beginner to spreadsheet pro.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Link
            href="/free"
            className="bg-[#217346] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#185a34] transition-colors"
          >
            ⬇ Get Free Template
          </Link>
          <Link
            href="/videos"
            className="border border-[#217346] text-[#217346] px-4 py-2 rounded text-sm font-medium hover:bg-[#e8f5ee] transition-colors"
          >
            ▶ Watch Videos
          </Link>
          <Link
            href="/templates"
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            🛒 Shop Templates
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <form action="/free" method="get" className="flex items-center border border-[#d1d1d1] rounded bg-white overflow-hidden shadow-sm">
        <div className="bg-[#f2f2f2] border-r border-[#d1d1d1] px-2 sm:px-3 py-2 text-sm text-[#217346] font-bold italic flex-shrink-0">
          fx
        </div>
        <input
          type="email"
          name="email"
          placeholder='=SUBSCRIBE("your@email.com")'
          className="flex-1 px-2 sm:px-3 py-2 text-xs sm:text-sm font-mono text-[#0078d4] outline-none placeholder:text-[#0078d4]/50 bg-white min-w-0"
        />
        <button
          type="submit"
          className="bg-[#217346] text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-[#185a34] transition-colors flex-shrink-0"
        >
          Subscribe
        </button>
      </form>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#d0d0d0] border border-[#d0d0d0] rounded overflow-hidden">
        {FEATURES.map(card => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-white p-3 sm:p-4 hover:bg-[#f0f8f4] transition-colors group"
          >
            <div className={`text-2xl sm:text-3xl mb-1 sm:mb-2 ${card.iconColor}`}>{card.icon}</div>
            <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 group-hover:text-[#217346] transition-colors">
              {card.title}
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed hidden sm:block">{card.desc}</p>
          </Link>
        ))}
      </div>

      {/* Stats Table */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden text-xs">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
          PLATFORM OVERVIEW
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="bg-[#f9f9f9] border-b border-[#d1d1d1] text-[11px]">
                <th className="px-3 py-1.5 font-semibold text-gray-500 border-r border-[#e8e8e8] w-8 text-center">#</th>
                <th className="text-left px-3 py-1.5 font-semibold text-gray-500 border-r border-[#e8e8e8]">Platform</th>
                <th className="text-left px-3 py-1.5 font-semibold text-gray-500 border-r border-[#e8e8e8]">Content</th>
                <th className="text-left px-3 py-1.5 font-semibold text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {STATS.map(row => (
                <tr key={row.num} className="border-b border-[#f0f0f0] hover:bg-[#f5fbf7] transition-colors last:border-0">
                  <td className="px-3 py-1.5 text-gray-400 border-r border-[#f0f0f0] text-center">{row.num}</td>
                  <td className="px-3 py-1.5 text-gray-800 border-r border-[#f0f0f0] font-medium whitespace-nowrap">{row.platform}</td>
                  <td className="px-3 py-1.5 text-gray-600 border-r border-[#f0f0f0] whitespace-nowrap">{row.content}</td>
                  <td className="px-3 py-1.5">
                    <a
                      href={row.href}
                      target={row.external ? '_blank' : undefined}
                      rel={row.external ? 'noreferrer' : undefined}
                      className="text-[#0078d4] hover:underline whitespace-nowrap"
                    >
                      {row.action} →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
