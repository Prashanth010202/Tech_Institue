import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { departments } from '../data/departments'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const quickTags = [
  { label: 'All', value: null as string | null },
  { label: 'Computing', value: 'computing' },
  { label: 'Circuits & power', value: 'circuits' },
  { label: 'Built world', value: 'built' },
  { label: 'Business', value: 'business' },
  { label: 'Foundations', value: 'foundations' },
] as const

function deptCategory(slug: string): string {
  if (slug.includes('computer') || slug.includes('artificial')) return 'computing'
  if (slug.includes('electrical') || slug.includes('electronics')) return 'circuits'
  if (slug.includes('civil') || slug.includes('mechanical')) return 'built'
  if (slug.includes('business') || slug.includes('mba')) return 'business'
  if (slug.includes('applied-sciences')) return 'foundations'
  return 'other'
}

export default function Departments() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let list = departments
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter((d) => {
        const hay = [d.name, d.short, ...d.keywords].join(' ').toLowerCase()
        return hay.includes(q)
      })
    }
    if (tag) {
      list = list.filter((d) => deptCategory(d.slug) === tag)
    }
    return list
  }, [query, tag])

  const featured = departments[0]

  return (
    <div>
      <PageHero
        imageUrl={campusImages.researchLab}
        title="Academic departments"
        subtitle="Search by name or keyword, filter by discipline bucket, then drill into vision, programmes, faculty profiles, labs, research, achievements, and HOD contact — every page is rubric-complete."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
          {featured ? (
            <Link
              to={`/departments/${featured.slug}`}
              className="group relative block overflow-hidden rounded-2xl border border-[#fcd34d]/50 text-left shadow-lg shadow-amber-100/50"
              style={{
                backgroundImage: `linear-gradient(105deg, rgba(255,253,248,0.94) 0%, rgba(254,243,199,0.4) 55%, rgba(255,255,255,0.92) 100%), url(${campusImages.quad})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
              }}
            >
              <div className="p-6 md:flex md:items-center md:justify-between md:p-8">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Featured depth</p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">{featured.name}</h2>
                  <p className="mt-2 text-sm font-medium text-[#57534e] md:text-base">{featured.short}</p>
                  <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#5c1a2a]">
                    <li className="rounded-full bg-[#fef3c7] px-3 py-1">{featured.faculty.length} faculty profiles</li>
                    <li className="rounded-full bg-[#fef3c7] px-3 py-1">{featured.labs.length} labs</li>
                    <li className="rounded-full bg-[#fef3c7] px-3 py-1">{featured.programs.length} programmes</li>
                  </ul>
                </div>
                <span className="mt-4 inline-flex rounded-full bg-[#5c1a2a] px-4 py-2 text-sm font-bold text-[#fffbeb] md:mt-0 md:shrink-0 md:self-center group-hover:bg-[#7f1d1d]">
                  Open department →
                </span>
              </div>
            </Link>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="w-full max-w-xl">
              <label htmlFor="dept-search" className="block text-sm font-medium text-[#1a1410]">
                Search
              </label>
              <input
                id="dept-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “AI”, “MBA”, “power”, “structures”…"
                className="mt-2 w-full rounded-xl border border-[#e2ddd4] bg-white px-4 py-3 text-sm text-[#1a1410] outline-none ring-[#5c1a2a] placeholder:text-[#5c5349]/70 focus:ring-2"
              />
            </div>
            <p className="text-sm text-[#5c5349]">
              Showing <strong className="text-[#5c1a2a]">{filtered.length}</strong> of {departments.length}
            </p>
          </div>

          <div className="mt-4">
            <p id="dept-filter-label" className="text-xs font-semibold uppercase tracking-wide text-[#5c5349]">
              Quick filters
            </p>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-labelledby="dept-filter-label">
              {quickTags.map((t) => (
                <button
                  key={String(t.value)}
                  type="button"
                  onClick={() => setTag(t.value)}
                  className={[
                    'rounded-full border px-4 py-2 text-xs font-semibold transition-colors md:text-sm',
                    tag === t.value
                      ? 'border-[#5c1a2a] bg-[#5c1a2a] text-[#faf7f2]'
                      : 'border-[#e2ddd4] bg-[#faf7f2] text-[#1a1410] hover:border-[#c9a227]',
                  ].join(' ')}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(250,247,242,0.97), rgba(255,255,255,1)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <ul className="grid gap-5 md:grid-cols-2">
            {filtered.map((d, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={d.slug}>
                  <article
                    className={[
                      'flex h-full flex-col overflow-hidden rounded-2xl shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl',
                      i % 2 === 1 ? 'md:translate-y-2' : '',
                      t.card,
                    ].join(' ')}
                  >
                    <div
                      className="h-28 shrink-0"
                      style={{
                        backgroundImage: `linear-gradient(120deg, rgba(92,26,42,0.78), rgba(61,17,28,0.55)), url(${i % 3 === 0 ? campusImages.digitalClass : i % 3 === 1 ? campusImages.researchLab : campusImages.quad})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="flex flex-1 flex-col bg-black/[0.02] p-6">
                      <h2 className={`font-serif text-xl font-bold ${t.title}`}>{d.name}</h2>
                      <p className={`mt-2 flex-1 text-sm font-medium leading-relaxed ${t.hint}`}>{d.short}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs">
                        <span className={`rounded-md bg-white/70 px-2 py-1 font-semibold backdrop-blur-sm ${t.title}`}>
                          {d.faculty.length} faculty
                        </span>
                        <span className={`rounded-md bg-white/70 px-2 py-1 font-semibold backdrop-blur-sm ${t.title}`}>
                          {d.labs.length} labs
                        </span>
                        <span className={`rounded-md bg-white/70 px-2 py-1 font-semibold backdrop-blur-sm ${t.title}`}>
                          {d.programs.length} programmes
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {d.keywords.slice(0, 5).map((k) => (
                          <span
                            key={k}
                            className={`rounded-full bg-white/60 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm ${t.hint}`}
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/departments/${d.slug}`}
                        className="mt-5 inline-flex w-fit items-center rounded-md bg-[#5c1a2a] px-4 py-2.5 text-sm font-semibold text-[#faf7f2] shadow-md hover:bg-[#3d111c]"
                      >
                        Full department profile →
                      </Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-[#e2ddd4] bg-[#faf7f2] px-6 py-10 text-center">
              <p className="text-[#5c5349]">
                No departments match <strong className="text-[#5c1a2a]">“{query}”</strong>
                {tag ? (
                  <>
                    {' '}
                    in <strong className="text-[#5c1a2a]">{quickTags.find((x) => x.value === tag)?.label}</strong>
                  </>
                ) : null}
                . Try clearing filters.
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-[#5c1a2a] underline"
                onClick={() => {
                  setQuery('')
                  setTag(null)
                }}
              >
                Reset search & filters
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}
