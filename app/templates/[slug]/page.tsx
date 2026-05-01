import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TEMPLATES } from '../../../data/templates'

export function generateStaticParams() {
  return TEMPLATES.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = TEMPLATES.find(t => t.slug === slug)
  if (!template) return {}
  return {
    title: `${template.name} | Jeremy Excel`,
    description: template.description.slice(0, 160),
  }
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = TEMPLATES.find(t => t.slug === slug)
  if (!template) notFound()

  const related = TEMPLATES.filter(
    t => t.slug !== template.slug && t.category === template.category
  ).slice(0, 3)

  const categoryLabel =
    template.category === 'hr'
      ? 'HR & Employee'
      : template.category === 'finance'
      ? 'Finance'
      : 'Fitness'

  return (
    <div className="p-5 max-w-4xl mx-auto space-y-5">

      {/* Breadcrumb */}
      <div className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
        <Link href="/templates" className="hover:text-[#217346] transition-colors">
          Templates
        </Link>
        <span>›</span>
        <span className="text-gray-600">{template.name}</span>
      </div>

      {/* Hero cell */}
      <div className="bg-[#e8f5ee] border border-[#217346] rounded overflow-hidden">
        {/* Thumbnail */}
        <div className="relative w-full aspect-[16/7] bg-[#d0eedd]">
          <Image
            src={template.image}
            alt={template.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#e8f5ee] via-transparent to-transparent" />
        </div>

        <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] bg-[#217346] text-white px-2 py-0.5 rounded font-medium">
            {categoryLabel}
          </span>
          {template.bestseller && (
            <span className="text-[10px] bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded font-bold">
              BESTSELLER
            </span>
          )}
          <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded font-bold ml-auto">
            {((1 - template.price / template.originalPrice) * 100).toFixed(0)}% OFF
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-snug">
          {template.name}
        </h1>
        <p className="text-sm text-gray-600 mb-4">{template.tagline}</p>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#217346]">${template.price}</span>
            <span className="text-gray-400 line-through text-sm">${template.originalPrice}</span>
          </div>
          <a
            href={template.etsyUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#217346] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#185a34] transition-colors"
          >
            Buy on Etsy →
          </a>
          <span className="text-[11px] text-gray-400">Instant digital download · Works on Mac &amp; PC</span>
        </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Description */}
        <div className="border border-[#d1d1d1] rounded overflow-hidden">
          <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] font-semibold text-gray-500 tracking-wide">
            DESCRIPTION
          </div>
          <div className="p-4 text-sm text-gray-700 leading-relaxed">
            {template.description}
          </div>
        </div>

        {/* What's Included */}
        <div className="border border-[#d1d1d1] rounded overflow-hidden">
          <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] font-semibold text-gray-500 tracking-wide">
            WHAT&apos;S INCLUDED
          </div>
          <ul className="p-4 space-y-2">
            {template.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#217346] font-bold flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="border border-[#d1d1d1] rounded overflow-hidden">
        <div className="bg-[#f2f2f2] border-b border-[#d1d1d1] px-3 py-1.5 text-[11px] font-semibold text-gray-500 tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="divide-y divide-[#f0f0f0]">
          {template.faqs.map((faq, i) => (
            <div key={i} className="p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1 flex items-start gap-2">
                <span className="text-[#217346] flex-shrink-0">Q.</span>
                {faq.q}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-[#217346] bg-[#e8f5ee] rounded p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-gray-900 text-sm">Ready to get started?</p>
          <p className="text-xs text-gray-500 mt-0.5">Instant download · No subscription · Works on Excel 2016+</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-[#217346]">${template.price}</span>
            <span className="text-gray-400 line-through text-sm">${template.originalPrice}</span>
          </div>
          <a
            href={template.etsyUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#217346] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#185a34] transition-colors"
          >
            Buy on Etsy →
          </a>
        </div>
      </div>

      {/* Related Templates */}
      {related.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Related Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map(t => (
              <Link
                key={t.slug}
                href={`/templates/${t.slug}`}
                className="border border-[#d1d1d1] rounded p-3 hover:border-[#217346] hover:bg-[#f8fff8] transition-colors group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-800 group-hover:text-[#217346] transition-colors leading-snug">
                    {t.name}
                  </span>
                  <span className="text-xs font-bold text-[#217346] flex-shrink-0 ml-2">${t.price}</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="pb-2">
        <Link
          href="/templates"
          className="text-xs text-[#0078d4] hover:underline font-mono"
        >
          ← Back to all templates
        </Link>
      </div>

    </div>
  )
}
