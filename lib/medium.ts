const MEDIUM_RSS = 'https://medium.com/feed/@excelerator'

const EXCLUDED_SLUGS = new Set([
  'lose-50lbs-with-notion-86a7c53f5720',
  'youtube-shorts-growth-my-3-strategies-for-gaining-3-300-subscribers-in-just-4-months-702bb0434ff7',
])

function isExcluded(slug: string, title: string): boolean {
  if (EXCLUDED_SLUGS.has(slug)) return true
  const t = title.toLowerCase()
  return t.includes('cs:go') || t.includes('silver 1 to gold') || t.includes('gold nova')
}

export type Post = {
  title: string
  slug: string
  link: string
  pubDate: string
  content: string
  excerpt: string
  categories: string[]
}

function cdata(text: string, tag: string): string {
  const m = text.match(new RegExp(`<${tag}>[\\s]*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>[\\s]*<\\/${tag}>`))
  return m?.[1] ?? ''
}

function parseRSS(xml: string): Post[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
  return items.flatMap(([, item]) => {
    const title = cdata(item, 'title')
    const link = item.match(/<link>(https:\/\/medium\.com[^<]*)<\/link>/)?.[1] ?? ''
    const pubDate = item.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1]?.trim() ?? ''
    const content = cdata(item, 'content:encoded')
    const categories = [...item.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)].map(m => m[1])
    const slug = link.split('/').pop()?.split('?')[0] ?? ''
    const excerpt = content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 240)

    if (!title || !slug || isExcluded(slug, title)) return []
    return [{ title, slug, link, pubDate, content, excerpt, categories }]
  })
}

export function formatDate(pubDate: string): string {
  const d = new Date(pubDate)
  return isNaN(d.getTime()) ? pubDate : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch(MEDIUM_RSS, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const xml = await res.text()
    return parseRSS(xml)
  } catch {
    return []
  }
}

export async function fetchPost(slug: string): Promise<Post | null> {
  const posts = await fetchPosts()
  return posts.find(p => p.slug === slug) ?? null
}
