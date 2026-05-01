'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Videos', href: '/videos' },
  { label: 'Templates', href: '/templates' },
  { label: 'Playground', href: '/playground' },
  { label: 'Free Download', href: '/free' },
  { label: 'Blog', href: '/blog' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

export default function ExcelLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const currentPage = NAV.find(n => n.href === pathname)?.label ?? 'Home'

  return (
    <div
      className="flex flex-col h-screen overflow-hidden select-none"
      style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}
    >
      {/* ── Title Bar ── */}
      <div className="bg-[#217346] flex items-center justify-between h-8 px-2 text-white flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
            <span className="text-[#217346] font-black text-[11px] leading-none">X</span>
          </div>
          <span className="text-[12px] truncate hidden xs:block">
            Jeremy&apos;s Excel Hub
          </span>
          <span className="text-[12px] truncate xs:hidden">
            Excel Hub
          </span>
          <span className="text-[11px] text-green-200 truncate hidden sm:block">— {currentPage}</span>
        </div>
        <div className="flex items-center text-[12px] flex-shrink-0">
          <span className="hidden md:flex items-center px-2 h-8 hover:bg-[#185a34] cursor-default transition-colors">
            Share
          </span>
          <span className="flex items-center px-2 h-8 hover:bg-[#185a34] cursor-default transition-colors">─</span>
          <span className="flex items-center px-2 h-8 hover:bg-[#185a34] cursor-default transition-colors">□</span>
          <span className="flex items-center px-2 h-8 hover:bg-red-600 cursor-default transition-colors">✕</span>
        </div>
      </div>

      {/* ── Ribbon ── */}
      <div className="bg-[#f3f2f1] border-b border-[#d1d1d1] flex-shrink-0 relative">
        {/* Tab Row */}
        <div className="flex items-end pt-1 px-2 gap-0.5">
          {/* Mobile: hamburger */}
          <button
            className="sm:hidden flex items-center gap-1.5 px-3 py-1 mb-0.5 text-xs text-gray-700 bg-white border border-[#d1d1d1] rounded"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
          >
            <span>{menuOpen ? '✕' : '☰'}</span>
            <span>{currentPage}</span>
          </button>

          {/* Desktop: nav tabs */}
          {NAV.map(item => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hidden sm:flex items-center px-3 py-1.5 text-xs rounded-t border border-b-0 transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-[#217346] text-white border-[#217346]'
                    : 'text-gray-700 border-transparent hover:bg-white/60 hover:border-[#d1d1d1]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 z-50 bg-white border-b border-[#d1d1d1] shadow-lg">
            {NAV.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 text-sm border-b border-gray-100 last:border-0 ${
                  pathname === item.href
                    ? 'bg-[#e8f5ee] text-[#217346] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pathname === item.href && (
                  <span className="w-2 h-2 rounded-full bg-[#217346] flex-shrink-0" />
                )}
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* Ribbon Body — desktop only */}
        <div className="hidden sm:flex items-stretch border-t border-[#d1d1d1] px-2">
          <div className="flex items-center gap-1 px-2 py-1 border-r border-[#d1d1d1]">
            <RibbonButton href="https://youtube.com/@jeremysexcelhub" icon="▶" label="Subscribe" external />
            <RibbonButton href="/free" icon="⬇" label="Download" />
          </div>
          <div className="flex items-center gap-1 px-2 py-1 border-r border-[#d1d1d1]">
            <RibbonButton href="/templates" icon="🛒" label="Shop" />
            <RibbonButton href="/coaching" icon="📅" label="Book" />
          </div>
          <div className="flex items-center gap-1 px-2 py-1">
            <RibbonButton href="/free" icon="📧" label="Newsletter" />
          </div>
        </div>
      </div>

      {/* ── Formula Bar ── */}
      <div className="flex items-center bg-white border-b border-[#d1d1d1] h-7 px-2 gap-2 flex-shrink-0">
        <div className="w-10 sm:w-16 h-5 flex-shrink-0 border border-[#d1d1d1] flex items-center justify-center text-[11px] text-gray-700 font-mono">
          A1
        </div>
        <div className="w-px h-4 bg-[#d1d1d1] flex-shrink-0" />
        <span className="text-[#217346] text-[12px] font-bold italic flex-shrink-0">fx</span>
        <span className="flex-1 text-[10px] sm:text-[11px] text-[#0078d4] font-mono truncate select-text">
          =IF(LearningExcel=TRUE, &quot;You&apos;re in the right place&quot;, &quot;Subscribe and let&apos;s fix that&quot;)
        </span>
      </div>

      {/* ── Content Area ── */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Column headers — desktop only */}
        <div className="hidden sm:flex flex-shrink-0 sticky top-0 z-20 bg-[#f2f2f2] border-b border-[#d0d0d0]">
          <div className="w-8 flex-shrink-0 border-r border-[#d0d0d0]" />
          {COLS.map(col => (
            <div
              key={col}
              className="flex-1 text-center text-[10px] text-gray-500 border-r border-[#e0e0e0] py-0.5"
            >
              {col}
            </div>
          ))}
        </div>

        {/* Body row: row numbers + page content */}
        <div className="flex flex-1">
          {/* Row numbers — desktop only */}
          <div className="hidden sm:block w-8 flex-shrink-0 bg-[#f2f2f2] border-r border-[#d0d0d0]">
            {Array.from({ length: 100 }, (_, i) => (
              <div
                key={i}
                className="h-5 flex items-center justify-end pr-1 text-[9px] text-gray-400 border-b border-[#ebebeb]"
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Page content */}
          <div className="flex-1 bg-white select-text min-w-0">
            {children}
          </div>
        </div>
      </div>

      {/* ── Sheet Tabs ── */}
      <div className="bg-[#f3f2f1] border-t border-[#d1d1d1] h-7 flex items-end flex-shrink-0 overflow-x-auto">
        <div className="flex items-end h-full px-1 gap-0.5">
          {NAV.map(item => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1 px-2 sm:px-3 h-6 text-[10px] sm:text-[11px] border border-b-0 rounded-t whitespace-nowrap transition-colors flex-shrink-0 ${
                  active
                    ? 'bg-white border-[#d1d1d1] text-[#217346] font-semibold'
                    : 'bg-[#e0e0e0] border-[#d1d1d1] text-gray-600 hover:bg-gray-100'
                }`}
              >
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#217346] flex-shrink-0" />
                )}
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* ── Status Bar ── */}
      <div className="bg-[#217346] text-white flex items-center justify-between h-6 px-2 sm:px-3 flex-shrink-0 text-[10px]">
        <span>Ready</span>
        <div className="hidden md:flex items-center gap-4 opacity-80">
          <span>Subscribers: Growing</span>
          <span>Videos: 50+</span>
          <span>Templates: 16</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="hidden sm:inline opacity-60">─</span>
          <span className="opacity-80">100%</span>
          <span className="hidden sm:inline opacity-60">+</span>
        </div>
      </div>
    </div>
  )
}

function RibbonButton({
  href,
  icon,
  label,
  external,
}: {
  href: string
  icon: string
  label: string
  external?: boolean
}) {
  const cls =
    'flex flex-col items-center gap-0.5 px-2.5 py-1 text-[10px] text-gray-600 hover:bg-[#e8f5ee] rounded transition-colors min-w-[40px]'
  const content = (
    <>
      <span className="text-xl leading-none">{icon}</span>
      <span>{label}</span>
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
