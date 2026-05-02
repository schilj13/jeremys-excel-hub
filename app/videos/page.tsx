import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Excel Videos | Jeremy Excel',
  description: 'Free Excel tutorial shorts — tips, tricks, and formulas in under 60 seconds.',
}

const CHANNEL_URL = 'https://www.youtube.com/@bigdogsexcelerator9853'

const VIDEOS = [
  {
    id: '_3UAeX8qxAI',
    title: 'How to Create a Workout Tracker in Excel',
  },
  {
    id: 'YDBH72zm5AU',
    title: 'How to Create a Net Worth Dashboard in Excel',
  },
  {
    id: '2silTwsk-_Y',
    title: 'How to Find Hardcoded Formulas in Excel',
  },
  {
    id: '6NNRkCMJANA',
    title: 'How to Do a Less Than Match in Excel',
  },
  {
    id: 'A-KbAM3WaZ4',
    title: 'How to Use CHOOSEROWS in Excel',
  },
]

export default function VideosPage() {
  return (
    <div className="p-3 sm:p-5 max-w-5xl mx-auto space-y-4 sm:space-y-5">

      {/* Header */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6">
        <p className="text-[10px] text-[#217346] font-mono mb-1 opacity-70">A1 — Videos</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Excel Shorts</h1>
        <p className="text-sm text-gray-600 max-w-xl mb-4">
          Quick Excel tips in under 60 seconds — formulas, shortcuts, and tricks you can use immediately.
        </p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
        >
          ▶ Subscribe on YouTube
        </a>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {VIDEOS.map(video => (
          <a
            key={video.id}
            href={`https://www.youtube.com/shorts/${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="group border border-[#e8e8e8] rounded-lg overflow-hidden hover:border-[#217346] hover:shadow-md transition-all bg-white"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[9/16] bg-[#f2f2f2] overflow-hidden">
              <Image
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm ml-0.5">▶</span>
                </div>
              </div>
              {/* Shorts badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  SHORT
                </span>
              </div>
            </div>
            {/* Title */}
            <div className="p-2.5">
              <p className="text-[11px] font-medium text-gray-800 leading-snug group-hover:text-[#217346] transition-colors line-clamp-2">
                {video.title}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* More CTA */}
      <div className="border border-[#d1d1d1] rounded p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#fafafa]">
        <div>
          <p className="font-semibold text-gray-900 text-sm">Want more Excel tips?</p>
          <p className="text-xs text-gray-500 mt-0.5">New shorts drop regularly — subscribe so you don&apos;t miss one.</p>
        </div>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
        >
          ▶ Subscribe on YouTube
        </a>
      </div>

    </div>
  )
}
