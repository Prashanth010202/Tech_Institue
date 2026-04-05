import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PlacementHighlightCard from '../components/PlacementHighlightCard'
import { placementHighlights } from '../data/placementHighlights'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const salaryBands = [
  { label: '≥ 18 LPA', pct: 92, note: 'Illustrative upper band share (demo)' },
  { label: '12–18 LPA', pct: 78, note: 'Core tech + product roles' },
  { label: '8–12 LPA', pct: 65, note: 'Broader engineering & analytics' },
  { label: '6–8 LPA', pct: 45, note: 'MSME + operations pipelines' },
]

const recruiters = [
  'AI / product labs',
  'Semiconductor OSAT',
  'Civil EPC',
  'BFSI risk tech',
  'Campus-founded startups',
  'Public sector projects',
  'Global capability centres',
  'Social impact orgs',
]

const skills = ['Systems design storytelling', 'Data + ethics portfolio', 'Regional language comms', 'Internship defense decks', 'Negotiation clinics']

const recruiterMarqueeItems = [...recruiters, ...recruiters]

const internships = [
  { term: 'After 2nd year', focus: 'Society / maker internships — graded reflection journal.' },
  { term: 'After 3rd year', focus: '8-week core internship — rubric signed by industry mentor + faculty.' },
  { term: 'Pre-placement', focus: 'Mock loops with alumni shadow panels and recorded feedback.' },
]

export default function Placements() {
  const [showBands, setShowBands] = useState(true)

  return (
    <div>
      <PageHero
        imageUrl={campusImages.careerHub}
        title="Placements & careers"
        subtitle="Training velocity, recruiter diversity, and outcome storytelling — what modern families expect beyond a single “highest package” line."
      />

      <section className="border-b border-[#5c1a2a]/10 bg-gradient-to-b from-[#fffdf8] via-white to-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Offer gallery</p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-[#5c1a2a] md:text-3xl">Placed students — company and CTC</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#5c5349] md:text-base">
                Demo portraits and illustrative packages — replace with your graduates and audited placement report figures.
              </p>
            </div>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {placementHighlights.map((p, i) => (
              <li key={p.id}>
                <PlacementHighlightCard item={p} index={i} variant="grid" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Training that compounds</h2>
              <p className="mt-2 max-w-2xl text-[#5c5349]">
                The cell syncs with department electives — domain capsules, Git narratives, and executive presence labs — so students
                don’t cram a fake persona in week twelve.
              </p>
            </div>
            <Link
              to="/students"
              className="inline-flex shrink-0 rounded-md border border-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#5c1a2a] hover:bg-[#faf7f2]"
            >
              Student readiness hub →
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {internships.map((x, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={x.term}>
                  <article
                    className={`h-full rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wide ${t.value}`}>{x.term}</p>
                    <p className={`mt-2 text-sm font-medium leading-relaxed ${t.hint}`}>{x.focus}</p>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-[#fcd34d]/30"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255,253,248,0.92) 0%, rgba(254,243,199,0.55) 40%, rgba(255,255,255,0.94) 100%), url(${campusImages.homeGraduation})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 text-[#431b24] md:px-6 md:py-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Offer distribution — demo viz</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#57534e] md:text-base">
                Toggle to compare cohort self-reported bands. Publish audited placement reports on your live site.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowBands((v) => !v)}
              className="self-start rounded-full border-2 border-[#5c1a2a] bg-white/80 px-4 py-2 text-sm font-bold text-[#5c1a2a] hover:bg-[#fef3c7]"
            >
              {showBands ? 'Hide chart' : 'Show chart'}
            </button>
          </div>
          {showBands ? (
            <ul className="mt-10 space-y-5">
              {salaryBands.map((b) => (
                <li key={b.label}>
                  <div className="flex items-end justify-between gap-4 text-sm">
                    <span className="font-semibold text-[#b45309]">{b.label}</span>
                    <span className="text-[#57534e]">{b.note}</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-[#e7e5e4]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#c9a227] to-[#fbbf24]"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section className="border-t border-amber-200/40 bg-gradient-to-b from-[#fffdf8] via-[#fef3c7]/25 to-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-bold text-[#5c1a2a] md:text-3xl">Recruiter diversity strip</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#5c5349] md:text-base">
            Continuous marquee of sector buckets — replace with partner logo strips when you have brand permissions.
          </p>

          <div
            className="relative mt-8 overflow-hidden rounded-2xl border border-[#e2ddd4]/80 bg-white/40 py-5 shadow-inner backdrop-blur-sm"
            aria-label="Recruiter categories scrolling"
          >
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fffdf8] to-transparent sm:w-20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#faf7f2] to-transparent sm:w-20"
              aria-hidden
            />
            <div className="kpp-recruiter-marquee flex w-max items-center gap-3 px-4">
              {recruiterMarqueeItems.map((label, i) => {
                const t = getHighlightTheme(i)
                return (
                  <span
                    key={`${label}-${i}`}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold backdrop-blur-sm md:text-sm ${t.card}`}
                  >
                    <span className={t.title}>{label}</span>
                  </span>
                )
              })}
            </div>
          </div>

          <h3 className="mt-14 font-serif text-xl font-bold text-[#5c1a2a] md:text-2xl">Skill badges we coach</h3>
          <p className="mt-2 text-sm text-[#5c5349]">Each badge uses the same rotating palette as our highlight cards — easy to scan on mobile.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => {
              const t = getHighlightTheme(i)
              return (
                <div
                  key={s}
                  className={`flex items-center gap-3 rounded-2xl p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/75 text-lg shadow-inner"
                    aria-hidden
                  >
                    {t.icon}
                  </span>
                  <span className={`text-sm font-bold leading-snug ${t.title}`}>{s}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Higher studies & alternate paths</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#5c5349]">
            GRE/ GATE guidance cells, research assistant referrals, and public-sector application studios run parallel to corporate
            recruitment — we track both in alumni outcomes (demo).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/research" className="rounded-md bg-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]">
              Research pathways
            </Link>
            <Link to="/alumni" className="rounded-md border border-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#5c1a2a] hover:bg-[#faf7f2]">
              Alumni mentors
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
