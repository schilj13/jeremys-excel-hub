'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CATEGORIES, TEMPLATES, type Template } from '../data/templates'

function TemplateCard({ template }: { template: Template }) {
  const savings = ((1 - template.price / template.originalPrice) * 100).toFixed(0)

  return (
    <div className="border border-[#d1d1d1] rounded overflow-hidden hover:border-[#217346] hover:shadow-md transition-all group bg-white flex flex-col">
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] bg-[#f2f2f2] overflow-hidden">
        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Badge overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {template.bestseller && (
            <span className="bg-yellow-400 text-yellow-900 text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
              BESTSELLER
            </span>
          )}
          {template.featured && !template.bestseller && (
            <span className="bg-[#217346] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
              FEATURED
            </span>
          )}
        </div>
        {/* Sale badge */}
        <div className="absolute top-2 right-2">
          <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
            {savings}% OFF
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-xs font-semibold text-gray-900 group-hover:text-[#217346] transition-colors leading-snug mb-1">
          {template.name}
        </h3>

        <p className="text-[11px] text-gray-500 leading-relaxed mb-3 flex-1 line-clamp-2">
          {template.tagline}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#217346] font-bold text-sm">${template.price}</span>
          <span className="text-gray-400 line-through text-xs">${template.originalPrice}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-1.5">
          <Link
            href={`/templates/${template.slug}`}
            className="block text-center bg-[#e8f5ee] text-[#217346] text-xs font-medium py-1.5 rounded hover:bg-[#d0eedd] transition-colors"
          >
            View Details + FAQ
          </Link>
          <a
            href={template.etsyUrl}
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-[#217346] text-white text-xs font-medium py-1.5 rounded hover:bg-[#185a34] transition-colors"
          >
            Buy on Etsy →
          </a>
        </div>
      </div>
    </div>
  )
}

export default function TemplateGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered =
    activeCategory === 'all'
      ? TEMPLATES
      : TEMPLATES.filter(t => t.category === activeCategory)

  return (
    <div>
      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3 py-1.5 text-xs rounded border transition-colors ${
              activeCategory === cat.key
                ? 'bg-[#217346] text-white border-[#217346]'
                : 'bg-white text-gray-600 border-[#d1d1d1] hover:border-[#217346] hover:text-[#217346]'
            }`}
          >
            {cat.label}
          </button>
        ))}
        <span className="text-[11px] text-gray-400 ml-1">
          {filtered.length} template{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map(template => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>
    </div>
  )
}
