import Link from 'next/link'
import { fetchPosts, fetchPost, formatDate } from '@/lib/medium'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await fetchPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetchPost(slug)
  if (!post) notFound()

  return (
    <div className="p-3 sm:p-5 max-w-3xl mx-auto space-y-4">

      {/* Back */}
      <Link href="/blog" className="text-[11px] text-[#217346] hover:underline font-mono">
        ← Back to Blog
      </Link>

      {/* Article header */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded p-4 sm:p-6">
        <p className="text-[10px] text-[#217346] font-mono mb-2 opacity-70">
          A1 — {formatDate(post.pubDate)}
        </p>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-3">
          {post.title}
        </h1>
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.categories.slice(0, 5).map(cat => (
              <span key={cat} className="text-[10px] bg-white border border-[#217346]/30 text-[#217346] px-2 py-0.5 rounded">
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Article content */}
      <div
        className="blog-content border border-[#d1d1d1] rounded p-4 sm:p-8 bg-white"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer */}
      <div className="border border-[#d1d1d1] rounded p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white">
        <p className="text-xs text-gray-500">Originally published on Medium</p>
        <div className="flex gap-2">
          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="text-xs border border-[#d1d1d1] text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors"
          >
            View on Medium →
          </a>
          <Link
            href="/blog"
            className="text-xs bg-[#217346] text-white px-3 py-1.5 rounded hover:bg-[#185a34] transition-colors"
          >
            ← All Articles
          </Link>
        </div>
      </div>

    </div>
  )
}
