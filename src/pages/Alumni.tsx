import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import StatHighlightCard from '../components/StatHighlightCard'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const spotlights = [
  {
    name: 'Ananya Rao',
    batch: 'CSE · 2016',
    role: 'Principal Engineer, Cloud control plane',
    quote:
      'KPPIT taught me to show receipts — docs, graphs, and demos. I still run student brown-bags on outages and postmortems from campus.',
    initials: 'AR',
  },
  {
    name: 'Mohit Saxena',
    batch: 'Mechanical · 2014',
    role: 'Founder, thermal retrofit startup',
    quote:
      'Our capstone sponsor became our first customer. The institute’s legal clinic helped us land an MoU without drowning in jargon.',
    initials: 'MS',
  },
  {
    name: 'Fatima Khader',
    batch: 'MBA · 2018',
    role: 'Director, CSR & partnerships',
    quote:
      'The MBA’s live cases gave me negotiation reps with real P&Ls. I mentor two capstone teams each year now.',
    initials: 'FK',
  },
]

const chapters = [
  { city: 'Bengaluru', members: '1.2k+', detail: 'Quarterly meetups · mentorship pods' },
  { city: 'Hyderabad', members: '640+', detail: 'Founder office hours' },
  { city: 'Pune', members: '510+', detail: 'PM–engineer mixer' },
  { city: 'Dubai', members: '220+', detail: 'Global chapter · virtual sync' },
]

const impact = [
  { value: '₹4.2Cr', label: 'Scholarships pledged (demo cumulative)', hint: 'Giving pledges & CSR mirrors' },
  { value: '312', label: 'Mentorship hours / year', hint: '1:1s + office-hour blocks' },
  { value: '48', label: 'Campus talks hosted', hint: 'Founders, policy, deep-tech' },
]

export default function Alumni() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % spotlights.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [paused])

  const s = spotlights[index]

  return (
    <div>
      <PageHero
        imageUrl={campusImages.alumni}
        title="Alumni"
        subtitle="Stay connected, mentor boldly, and fund the next cohort — interactions that feel alive, not like a PDF graveyard."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Spotlight carousel</h2>
              <p className="mt-2 max-w-2xl text-[#5c5349]">
                Auto-advances every 6 seconds; pauses on hover/focus for accessibility. Same typography scale on all breakpoints.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-md border border-[#e2ddd4] px-3 py-2 text-sm font-semibold text-[#5c1a2a] hover:bg-[#faf7f2]"
                aria-label="Previous story"
                onClick={() => {
                  setPaused(true)
                  setIndex((i) => (i - 1 + spotlights.length) % spotlights.length)
                }}
              >
                Prev
              </button>
              <button
                type="button"
                className="rounded-md border border-[#e2ddd4] px-3 py-2 text-sm font-semibold text-[#5c1a2a] hover:bg-[#faf7f2]"
                aria-label="Next story"
                onClick={() => {
                  setPaused(true)
                  setIndex((i) => (i + 1) % spotlights.length)
                }}
              >
                Next
              </button>
            </div>
          </div>

          <article
            className="mt-8 overflow-hidden rounded-2xl border border-[#e2ddd4] bg-[#faf7f2] shadow-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid md:grid-cols-5">
              <div className="relative min-h-[200px] bg-gradient-to-br from-[#5c1a2a] to-[#3d111c] md:col-span-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-5xl font-bold text-[#c9a227]">{s.initials}</span>
                </div>
              </div>
              <div className="p-6 md:col-span-3 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9a7212]">{s.batch}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#5c1a2a]">{s.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#5c5349]">{s.role}</p>
                <blockquote className="mt-4 border-l-4 border-[#c9a227] pl-4 text-lg leading-relaxed text-[#1a1410]">
                  “{s.quote}”
                </blockquote>
              </div>
            </div>
            <div className="flex gap-2 border-t border-[#e2ddd4] bg-white px-4 py-3">
              {spotlights.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show story ${i + 1}`}
                  className={[
                    'h-2 flex-1 rounded-full transition-colors',
                    i === index ? 'bg-[#5c1a2a]' : 'bg-[#e2ddd4] hover:bg-[#c9a227]/50',
                  ].join(' ')}
                  onClick={() => {
                    setPaused(true)
                    setIndex(i)
                  }}
                />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `url(${campusImages.quad})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-[#1a1410]/80 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="font-serif text-2xl font-semibold text-[#faf7f2] md:text-3xl">Impact dashboard</h2>
            <p className="mt-2 max-w-2xl text-sm text-[#f0ebe3] md:text-base">
              Illustrative numbers for demo day — swap with audited giving reports.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {impact.map((x, i) => (
                <li key={x.label}>
                  <StatHighlightCard value={x.value} label={x.label} hint={x.hint} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Chapters & meetups</h2>
          <p className="mt-2 text-[#5c5349]">Hover cards lift slightly — subtle depth without a separate mobile skin.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((c, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={c.city}>
                  <article
                    className={`group h-full rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl ${t.card}`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wide ${t.value}`}>{c.city}</p>
                    <p className={`mt-2 font-serif text-xl font-bold ${t.title}`}>{c.members} members</p>
                    <p className={`mt-2 text-sm font-medium ${t.hint}`}>{c.detail}</p>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#e2ddd4] bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Giving & mentorship</h2>
              <p className="mt-4 text-[#5c5349]">
                Name a lab, sponsor travel grants, or pair with capstone teams. Compliance briefings are part of onboarding — see demo
                copy in policy appendix.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#5c5349]">
                <li className="flex gap-2">
                  <span className="text-[#c9a227]" aria-hidden>
                    ✓
                  </span>
                  Dedicated giving desk + receipt templates for Indian & NRI routes (placeholder).
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c9a227]" aria-hidden>
                    ✓
                  </span>
                  Mentor matchmaking with faculty oversight each term.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#e2ddd4] bg-gradient-to-br from-[#5c1a2a] to-[#3d111c] p-8 text-[#faf7f2] shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a227]">Join the guild</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">tell us how you want to help</h3>
              <p className="mt-3 text-sm text-[#f0ebe3]">
                We respond within two working days with next steps and compliance checklists.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-md bg-[#c9a227] px-5 py-3 text-sm font-semibold text-[#1a1410] hover:bg-[#b8860b]"
              >
                Contact alumni affairs →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
