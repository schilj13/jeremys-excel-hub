import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Free HR Excel Toolkit — Jeremy's Excel Hub",
  description:
    'Get a free HR & Employee Management spreadsheet plus weekly Excel tips for HR managers and small business owners. Instant download.',
}

export default function HRLandingPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}>

      {/* Header */}
      <header className="bg-[#217346] px-4 py-3 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <span className="text-[#217346] font-black text-sm leading-none">X</span>
          </div>
          <span className="text-white font-semibold text-sm">Jeremy&apos;s Excel Hub</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="bg-[#f8fffe] border-b border-[#d1d1d1] px-4 py-12 sm:py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-[#e8f5ee] text-[#217346] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            FREE FOR HR MANAGERS &amp; SMALL BUSINESS OWNERS
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Stop Managing HR in Your Head.<br className="hidden sm:block" />
            <span className="text-[#217346]"> There&apos;s an Excel Template for That.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Get a free HR &amp; Employee Management spreadsheet — handles payroll tracking, attendance, hiring, and onboarding in one file. No software subscription. No learning curve. Just Excel.
          </p>

          {/* Form */}
          <div className="bg-white border border-[#d1d1d1] rounded-xl shadow-sm p-6 max-w-md mx-auto">
            <p className="text-sm font-semibold text-gray-800 mb-4">
              Enter your email to get instant access:
            </p>

            {/*
              KIT FORM: Replace the action URL below with your Kit form action URL.
              It will look like: https://app.kit.com/forms/YOUR_FORM_ID/subscriptions
            */}
            <form
              action="#"
              method="post"
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                name="fields[first_name]"
                placeholder="First name (optional)"
                className="w-full border border-[#d1d1d1] rounded px-4 py-3 text-sm outline-none focus:border-[#217346] focus:ring-1 focus:ring-[#217346] transition-colors"
              />
              <input
                type="email"
                name="email_address"
                placeholder="your@email.com"
                required
                className="w-full border border-[#d1d1d1] rounded px-4 py-3 text-sm outline-none focus:border-[#217346] focus:ring-1 focus:ring-[#217346] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#217346] hover:bg-[#185a34] text-white font-semibold py-3 rounded text-sm transition-colors"
              >
                Send Me the Free Template →
              </button>
            </form>

            <p className="text-[11px] text-gray-400 mt-3 text-center">
              No spam. Unsubscribe anytime. Your email is safe.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-4 py-12 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
          Here&apos;s exactly what you&apos;ll get
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: '📋',
              title: 'HR & Employee Management Spreadsheet',
              desc: 'A $24.99 template — yours free. Covers hiring, onboarding, attendance, payroll, and performance reviews in one workbook.',
            },
            {
              icon: '✅',
              title: 'Works on Mac & PC',
              desc: 'Plain Excel file. No add-ins, no subscriptions, no cloud account required. Download and start using in 2 minutes.',
            },
            {
              icon: '📧',
              title: 'Weekly Excel Tips for HR Pros',
              desc: 'Short, practical tips every week — formulas, shortcuts, and templates that save real time in your HR workflow.',
            },
            {
              icon: '🔓',
              title: 'Fully Editable & Customizable',
              desc: 'Every field, tab, and formula is unlocked. Make it yours — add your logo, rename tabs, adjust for your team size.',
            },
          ].map(item => (
            <div key={item.title} className="flex gap-3 p-4 border border-[#e8e8e8] rounded-lg">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#f9f9f9] border-y border-[#e8e8e8] px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
            This is for you if...
          </h2>
          <ul className="space-y-3 max-w-lg mx-auto">
            {[
              "You're an HR manager or office manager at a small to mid-size company",
              "You're a business owner who handles HR yourself and needs to get organized",
              "You're spending too much money on HR software for what you actually need",
              "You want professional HR systems without a months-long implementation",
              "You already use Excel and just need the right templates to work from",
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#217346] font-bold flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      <section className="px-4 py-12 max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
        <p className="text-gray-700 text-sm italic mb-2 max-w-md mx-auto">
          &ldquo;Exactly what I needed. Saved me hours of setup time and I didn&apos;t have to pay for another HR tool.&rdquo;
        </p>
        <p className="text-xs text-gray-400">— Etsy customer review</p>

        <div className="flex items-center justify-center gap-6 mt-8 text-center">
          <div>
            <p className="text-2xl font-bold text-[#217346]">114+</p>
            <p className="text-xs text-gray-500">templates sold</p>
          </div>
          <div className="w-px h-8 bg-[#e8e8e8]" />
          <div>
            <p className="text-2xl font-bold text-[#217346]">4.5★</p>
            <p className="text-xs text-gray-500">Etsy rating</p>
          </div>
          <div className="w-px h-8 bg-[#e8e8e8]" />
          <div>
            <p className="text-2xl font-bold text-[#217346]">Free</p>
            <p className="text-xs text-gray-500">no catch</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#217346] px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">
            Ready to get organized?
          </h2>
          <p className="text-green-100 text-sm mb-6">
            Join HR managers and small business owners who are running HR in Excel — for free.
          </p>
          <form action="#" method="post" className="flex flex-col gap-3">
            <input
              type="email"
              name="email_address"
              placeholder="your@email.com"
              required
              className="w-full rounded px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full bg-white text-[#217346] font-bold py-3 rounded text-sm hover:bg-green-50 transition-colors"
            >
              Send Me the Free Template →
            </button>
          </form>
          <p className="text-green-200 text-[11px] mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center border-t border-[#e8e8e8]">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Jeremy&apos;s Excel Hub ·{' '}
          <Link href="/" className="hover:text-[#217346] transition-colors">Visit the site</Link>
        </p>
      </footer>

    </div>
  )
}
