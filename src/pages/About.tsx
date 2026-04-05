import { Link } from 'react-router-dom'
import CollageBackground from '../components/CollageBackground'
import PageHero from '../components/PageHero'
import StatHighlightCard from '../components/StatHighlightCard'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const pillars = [
  {
    title: 'Rigour with care',
    copy: 'Assessment that rewards clarity, integrity, and teamwork — not last-minute cramming alone.',
    icon: '◆',
  },
  {
    title: 'Labs that ship',
    copy: 'Studios mirror industry tooling so students leave with receipts: repos, reports, and demos.',
    icon: '◇',
  },
  {
    title: 'Governance you can read',
    copy: 'Committees publish summaries families can follow; grievance routes are explicit and fast.',
    icon: '◈',
  },
]

const milestones = [
  { year: '2008', title: 'Foundation', detail: 'KPPIT chartered with Civil, Mechanical, and core sciences.' },
  { year: '2014', title: 'Digital campus', detail: 'Common LMS, online fee receipts, and department portals go live.' },
  { year: '2019', title: 'Innovation wing', detail: 'Shared fabrication bay + industry sprints for pre-final years.' },
  { year: '2024', title: 'Student charter', detail: 'Co-designed wellbeing plan: counseling slots, night shuttles, mentor map.' },
]

const leaders = [
  {
    id: 'chairman',
    name: 'Mr. R. K. Pradhan',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80',
    note: 'Leads long-term institutional strategy, governance, and expansion across academic clusters.',
  },
  {
    id: 'ceo',
    name: 'Ms. N. A. Rao',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1000&q=80',
    note: 'Drives innovation operations, digital transformation, and enterprise partnerships.',
  },
  {
    id: 'director',
    name: 'Prof. S. Venkat',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1000&q=80',
    note: 'Sets academic priorities with faculty senate & student council.',
  },
  {
    id: 'dean-acad',
    name: 'Dr. L. Mehra',
    role: 'Dean — Academics',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
    note: 'Programme outcomes, IQAC rhythm, and industry board cadence.',
  },
  {
    id: 'dean-student',
    name: 'Dr. K. Isaac',
    role: 'Dean — Student Affairs',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1000&q=80',
    note: 'Hostels, placements interface, and student support escalation.',
  },
  {
    id: 'registrar',
    name: 'Dr. P. Menon',
    role: 'Registrar',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80',
    note: 'Oversees policy execution, compliance workflows, and student records governance.',
  },
]

const movingLeaders = [...leaders, ...leaders] as const

export default function About() {
  return (
    <div>
      <PageHero
        imageUrl={campusImages.heroLibrary}
        title="About KPPIT"
        subtitle="A teaching-intensive institute where laboratories, accountable governance, and student dignity share the same blueprint — on every screen size."
      />

      <CollageBackground variant="strip" />

      <div className="relative border-b border-amber-100/60">
        <CollageBackground variant="full-bleed" />
        <div className="relative z-10">
          <section className="border-b border-amber-100/40 bg-white/50 backdrop-blur-sm">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3 md:px-6 md:py-16">
              {pillars.map((p, i) => {
                const t = getHighlightTheme(i)
                return (
                  <article
                    key={p.title}
                    className={`group rounded-2xl p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                  >
                    <span className={`text-2xl ${t.value}`} aria-hidden>
                      {p.icon}
                    </span>
                    <h2 className={`mt-3 font-serif text-xl font-bold ${t.title}`}>{p.title}</h2>
                    <p className={`mt-2 text-sm font-medium leading-relaxed ${t.hint}`}>{p.copy}</p>
                  </article>
                )
              })}
            </div>
          </section>

          <div className="mx-auto max-w-6xl space-y-16 bg-white/40 px-4 py-14 backdrop-blur-[2px] md:px-6 md:py-20">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Institute profile</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#5c5349]">
            KPP Institute of Technology offers UG engineering, select PG programmes, and an MBA anchored in ethical leadership. We
            invest in studios that feel like real workplaces: version control, design reviews, and public demos every semester.
          </p>
        </section>

        <section>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Milestones</h2>
            <p className="max-w-xl text-sm text-[#5c5349]">Scroll sideways on your phone — one continuous story, no “lite” mobile version.</p>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
            {milestones.map((m, i) => (
              <div key={m.year} className="min-w-[240px] shrink-0 md:min-w-0">
                <StatHighlightCard value={m.year} label={m.title} hint={m.detail} index={i} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Leadership spotlight</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">Leadership cards now auto-move; hover to pause and inspect details.</p>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#e2ddd4]/80 bg-white/55 p-3 shadow-sm backdrop-blur-sm">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white/95 to-transparent md:w-20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white/95 to-transparent md:w-20"
              aria-hidden
            />
            <ul className="kpp-leaders-marquee flex w-max gap-4">
              {movingLeaders.map((l, idx) => (
                <li key={`${l.id}-${idx}`} className="w-[280px] shrink-0">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2ddd4] bg-white shadow-sm">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={l.image} alt={`${l.name}, ${l.role}`} className="h-full w-full object-cover object-center" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/60 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif text-lg font-semibold text-[#5c1a2a]">{l.name}</h3>
                      <p className="text-sm font-medium text-[#9a7212]">{l.role}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5c5349]">{l.note}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-[#e2ddd4] bg-[#5c1a2a] p-8 text-[#faf7f2] md:p-10">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Quality & accreditation</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#f0ebe3] md:text-base">
            Demo narrative: programme outcomes map to graduate attributes; external boards visit twice a year; audit memos are
            summarized for students and parents. Replace with your statutory disclosures and PDF links.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/academics"
              className="inline-flex rounded-md bg-[#c9a227] px-4 py-2.5 text-sm font-semibold text-[#1a1410] hover:bg-[#b8860b]"
            >
              Explore academics
            </Link>
            <Link
              to="/students"
              className="inline-flex rounded-md border border-[#faf7f2]/40 px-4 py-2.5 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]"
            >
              Student handbook hub
            </Link>
          </div>
        </section>
          </div>
        </div>
      </div>
    </div>
  )
}
