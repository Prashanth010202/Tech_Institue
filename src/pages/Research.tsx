import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import StatHighlightCard from '../components/StatHighlightCard'
import { campusImages } from '../lib/images'

const metrics = [
  { value: '120+', label: 'Indexed publications / yr (demo)', hint: 'Scopus-style rollups (illustrative)' },
  { value: '18', label: 'Active sponsored projects', hint: 'Grants + industry co-funded' },
  { value: '₹14Cr', label: 'Illustrative research funding pipeline', hint: 'Multi-year committed envelope' },
]

const clusters = [
  {
    id: 'infra',
    title: 'Resilient infrastructure',
    lead: 'Civil · Mechanical · Environmental guild',
    summary: 'Low-carbon binders, structural health sensing, and thermal systems for tropical campuses.',
    bullets: ['Field trials with MSME partners', 'Open datasets for student theses', 'Policy briefs for city agencies'],
  },
  {
    id: 'trust',
    title: 'Trustworthy computation',
    lead: 'CSE · AI & Data Science',
    summary: 'Systems that balance accuracy, fairness documentation, and deployability for civic use cases.',
    bullets: ['Reproducibility manifests per paper', 'Red-team reviews before pilot', 'Graduate seminar open notes'],
  },
  {
    id: 'energy',
    title: 'Energy & embedded networks',
    lead: 'EEE · ECE',
    summary: 'Grid-edge devices, power electronics, and spectrum-aware communication stacks.',
    bullets: ['Shared HIL benches', 'Industry tape-outs on MPW runs (illustrative)', 'Safety certification modules'],
  },
] as const

const partners = ['DST · SERB routes', 'State clean energy missions', 'Semiconductor ecosystem fund', 'City R&D cells', 'Global visiting chair']

export default function Research() {
  const [openCluster, setOpenCluster] = useState<(typeof clusters)[number]['id']>('infra')

  const c = clusters.find((x) => x.id === openCluster)!

  return (
    <div>
      <PageHero
        imageUrl={campusImages.researchLab}
        title="Research"
        subtitle="Publications, sponsored projects, shared facilities, and ethics — how KPPIT narrates R&D in an evidence-first era."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
          <ul className="grid gap-4 md:grid-cols-3">
            {metrics.map((m, i) => (
              <li key={m.label}>
                <StatHighlightCard value={m.value} label={m.label} hint={m.hint} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(250,247,242,0.95), rgba(255,255,255,1)), url(${campusImages.digitalClass})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Thematic clusters</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Pick a cluster — see how departments overlap. Deep lab pages live under each department route.
          </p>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-wrap gap-2 lg:w-72 lg:flex-col">
              {clusters.map((cl) => (
                <button
                  key={cl.id}
                  type="button"
                  onClick={() => setOpenCluster(cl.id)}
                  className={[
                    'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors',
                    openCluster === cl.id
                      ? 'border-[#5c1a2a] bg-[#5c1a2a] text-[#faf7f2]'
                      : 'border-[#e2ddd4] bg-white text-[#1a1410] hover:border-[#c9a227]',
                  ].join(' ')}
                >
                  {cl.title}
                </button>
              ))}
            </div>
            <article className="flex-1 rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#9a7212]">{c.lead}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#5c1a2a]">{c.title}</h3>
              <p className="mt-4 text-[#5c5349]">{c.summary}</p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-[#5c5349]">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link
                to="/departments"
                className="mt-8 inline-flex text-sm font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4"
              >
                See departmental labs →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#fcd34d]/40 bg-gradient-to-br from-[#5c1a2a] via-[#7f1d1d] to-[#b45309] py-12 text-[#fffbeb] md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Facilities & integrity spine</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#fde68a]/40 bg-white/15 p-6 backdrop-blur-sm">
              <h3 className="font-serif text-lg font-semibold text-[#fde68a]">Shared instrumentation</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#fff7ed]">
                Central microscopy, characterization, and compute clusters are booked via one desk with training tiers. PhD students
                earn badges before independent access.
              </p>
            </div>
            <div className="rounded-2xl border border-[#fde68a]/40 bg-white/15 p-6 backdrop-blur-sm">
              <h3 className="font-serif text-lg font-semibold text-[#fde68a]">Ethics & COI</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#fff7ed]">
                Conflict-of-interest forms precede every industry grant. Authorship disputes route through an ombud + senior ethics
                committee with student observers (demo policy text).
              </p>
            </div>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Partner categories">
            {partners.map((p) => (
              <li key={p} className="rounded-full bg-[#fffbeb]/20 px-4 py-2 text-xs font-semibold text-[#fffbeb] ring-1 ring-[#fde68a]/30 md:text-sm">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#e2ddd4] bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Visibility & knowledge transfer</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#5c5349]">
            Preprint policy, institutional repository hooks, and industry liaison hours — mirror your real comms shop here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]"
              onClick={() => alert('Link: Institute publications portal or Scopus profile')}
            >
              Publications portal (demo)
            </button>
            <Link to="/contact" className="rounded-md border border-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#5c1a2a] hover:bg-white">
              Talk to research liaison
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
