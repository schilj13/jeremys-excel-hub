import Link from 'next/link'
import { fetchPosts, formatDate } from '@/lib/medium'

export default async function BlogPage() {
  const posts = await fetchPosts()

  return (
    <div className="p-3 sm:p-5 max-w-4xl mx-auto space-y-3 sm:space-y-5">

      {/* Header */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">A1 — Blog</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Articles
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Excel tips, Power BI deep dives, and productivity strategies — straight from the spreadsheet.
        </p>
      </div>

      {/* Article list */}
      {posts.length === 0 ? (
        <div className="border border-[#d1d1d1] rounded p-6 text-center text-sm text-gray-500">
          No articles found.
        </div>
      ) : (
        <div className="border border-[#d1d1d1] rounded overflow-hidden">
          <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide">
            ALL POSTS — {posts.length} articles
          </div>
          <div className="divide-y divide-[#f0f0f0]">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-start gap-3 px-3 py-3 sm:py-4 hover:bg-[#f5fbf7] transition-colors group"
              >
                <span className="text-[11px] text-gray-400 font-mono mt-0.5 w-5 flex-shrink-0 text-right">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-semibold text-gray-900 group-hover:text-[#217346] transition-colors leading-snug mb-1">
                    {post.title}
                  </h2>
                  <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 mb-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] text-gray-400 font-mono">{formatDate(post.pubDate)}</span>
                    {post.categories.slice(0, 3).map(cat => (
                      <span key={cat} className="text-[10px] bg-[#f0f0f0] text-gray-500 px-1.5 py-0.5 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[#217346] text-xs flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}
