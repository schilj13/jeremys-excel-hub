'use client'

export default function DownloadButton() {
  function handleClick() {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration')
    }
  }

  return (
    <a
      href="/new-hire-checklist.xlsx"
      download
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-[#217346] hover:bg-[#185a34] text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
    >
      ⬇ Download Now — It&apos;s Free
    </a>
  )
}
