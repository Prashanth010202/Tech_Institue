import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const steps = [
  { n: '01', title: 'Create profile', detail: 'Single sign-on + verified mobile for SMS nudges (demo).' },
  { n: '02', title: 'Documents', detail: 'Marksheets, ID, category certificates, counselling rank PDFs.' },
  { n: '03', title: 'Fee & slot', detail: 'Pay application fee; choose verification slot or upload self-attest where allowed.' },
  { n: '04', title: 'Decision', detail: 'Merit lists + waitlist transparency; aspirants see live status codes.' },
]

const brochures = [
  {
    label: 'UG brochure 2026 (demo)',
    hint: 'Programmes & why KPPIT — text download',
    file: '/brochures/KPPIT-UG-Brochure-2026.txt',
    downloadName: 'KPPIT-UG-Brochure-2026.txt',
  },
  {
    label: 'International applicant guide',
    hint: 'Equivalency & visa basics — text download',
    file: '/brochures/KPPIT-International-Applicants-Guide.txt',
    downloadName: 'KPPIT-International-Applicants-Guide.txt',
  },
  {
    label: 'Scholarship matrix summary',
    hint: 'Merit & means-based overview — text download',
    file: '/brochures/KPPIT-Scholarship-Matrix.txt',
    downloadName: 'KPPIT-Scholarship-Matrix.txt',
  },
] as const

const deadlinesFile = {
  label: 'Key dates — Admissions 2026',
  hint: 'Illustrative timeline — download',
  file: '/brochures/KPPIT-Key-Dates-Admissions-2026.txt',
  downloadName: 'KPPIT-Key-Dates-Admissions-2026.txt',
}

const feesStructure = [
  { programme: 'B.Tech (per year)', tuition: 'INR 1,35,000', hostel: 'INR 72,000', examAndServices: 'INR 12,000' },
  { programme: 'M.Tech (per year)', tuition: 'INR 1,10,000', hostel: 'INR 72,000', examAndServices: 'INR 10,000' },
  { programme: 'MBA (per year)', tuition: 'INR 1,50,000', hostel: 'INR 78,000', examAndServices: 'INR 12,000' },
] as const

/** Three fixed demo answers — always visible for juries & families */
const demoEligibilityExamples = [
  {
    id: 'ex1',
    badge: 'Science · strong',
    title: 'Class 12 Science — 88%',
    inputLine: 'Route: Class 12 Science · Score: 88%',
    answer:
      'Strong profile for merit-tier scholarships in this demo logic. Next step: keep counselling rank PDFs ready and watch the official cut-off circular. You would likely be routed to core B.Tech choices with early mentorship pods.',
    stream: 'science' as const,
    score: '88',
  },
  {
    id: 'ex2',
    badge: 'Diploma · lateral',
    title: 'Diploma — CGPA 7.8',
    inputLine: 'Route: Lateral / diploma · Score: 7.8 (CGPA)',
    answer:
      'Lateral-entry window reads favourable (demo). Confirm subject bridges with the department desk if your diploma stream differs from your target B.Tech branch. Book a slot for document verification early.',
    stream: 'diploma' as const,
    score: '7.8',
  },
  {
    id: 'ex3',
    badge: 'MBA / global',
    title: 'MBA · international enquiry',
    inputLine: 'Route: MBA · International · other',
    answer:
      'For MBA, international, or equivalence reviews, the assistant routes you to admissions@kppit.edu with your transcripts and work profile (demo). Expect a two-business-day first response with document checklist.',
    stream: 'other' as const,
    score: '—',
  },
]

function computeHint(stream: 'science' | 'diploma' | 'other', score: string): string {
  if (stream === 'other') {
    return 'MBA / international / other routes: email admissions@kppit.edu with transcripts — expect a checklist within two business days (demo).'
  }
  const n = Number.parseFloat(score)
  if (!score.trim() || Number.isNaN(n)) return 'Enter an illustrative aggregate (% or CGPA) to see live guidance — or tap a sample card below.'
  if (stream === 'science') {
    if (n >= 75) return 'Strong profile for merit scholarships (illustrative). Check counselling ranks when live.'
    if (n >= 60) return 'Typically eligible for core B.Tech tracks — confirm with official cutoffs.'
    return 'May need bridge programmes — talk to admissions for pathway maps.'
  }
  if (stream === 'diploma') {
    if (n >= 7.5) return 'Diploma lateral entry window looks favourable (demo logic only).'
    return 'Consider preparatory term or departmental interview waiver rules.'
  }
  return ''
}

export default function Admissions() {
  const [stream, setStream] = useState<'science' | 'diploma' | 'other'>('science')
  const [score, setScore] = useState('')

  const eligibilityHint = useMemo(() => computeHint(stream, score), [score, stream])

  function applyDemo(ex: (typeof demoEligibilityExamples)[number]) {
    setStream(ex.stream)
    setScore(ex.score === '—' ? '' : ex.score)
  }

  const faqItems = [
    {
      id: 'late',
      title: 'Can I edit documents after submitting?',
      content: 'Yes, until the verification lock window closes. After locking, email the desk with ticket ID (demo workflow).',
    },
    {
      id: 'hostel',
      title: 'Is hostel allotment tied to admissions order?',
      content: 'Partially — rolling allotment with gender-inclusive blocks and medical priority flags. Published in hostel policy PDF.',
    },
    {
      id: 'fee',
      title: 'Refund policy for rejected applications?',
      content: 'Processing fee is non-refundable; tuition deposits follow institute refund grid with statutory timelines.',
    },
  ]

  return (
    <div>
      <PageHero
        imageUrl={campusImages.campusWalk}
        title="Admissions"
        subtitle="Bright, clear steps — try the eligibility assistant with three built-in examples, download brochures and key dates, and read FAQs without hunting."
      />

      <section className="border-b border-[#fcd34d]/40 bg-gradient-to-b from-[#fffdf8] to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Your pathway — four locks</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={s.n}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl p-5 backdrop-blur-sm transition-transform hover:-translate-y-0.5 ${t.card}`}
                  >
                    {i < steps.length - 1 ? (
                      <span
                        className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-stone-400/50 md:block"
                        aria-hidden
                      />
                    ) : null}
                    <span className={`font-mono text-xs font-bold ${t.value}`}>{s.n}</span>
                    <h3 className={`mt-2 font-serif text-lg font-bold ${t.title}`}>{s.title}</h3>
                    <p className={`mt-2 flex-1 text-sm font-medium ${t.hint}`}>{s.detail}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section
        className="border-b border-[#fcd34d]/30"
        style={{
          backgroundImage: `linear-gradient(165deg, rgba(255,253,248,0.97) 0%, rgba(254,243,199,0.35) 45%, rgba(255,255,255,0.98) 100%), url(${campusImages.students})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Eligibility assistant</h2>
              <p className="mt-2 text-sm font-medium text-[#5c5349]">
                Not a legal predictor — built to feel modern for students and parents. <strong>Three sample answers</strong> are always
                visible below; use <strong>Try in form</strong> to copy values.
              </p>

              <ul className="mt-6 grid gap-4">
                {demoEligibilityExamples.map((ex) => (
                  <li
                    key={ex.id}
                    className="rounded-2xl border border-[#fcd34d]/60 bg-white/95 p-5 shadow-md shadow-amber-100/80 backdrop-blur-sm"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-[#b45309]">
                          {ex.badge}
                        </span>
                        <h3 className="mt-2 font-serif text-lg font-semibold text-[#5c1a2a]">{ex.title}</h3>
                        <p className="mt-1 text-xs font-medium text-[#78716c]">{ex.inputLine}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => applyDemo(ex)}
                        className="shrink-0 rounded-full border-2 border-[#5c1a2a] bg-[#fffdf8] px-4 py-2 text-xs font-bold text-[#5c1a2a] hover:bg-[#5c1a2a] hover:text-white"
                      >
                        Try in form →
                      </button>
                    </div>
                    <p className="mt-4 rounded-xl bg-gradient-to-r from-[#fffbeb] to-white p-4 text-sm leading-relaxed text-[#44403c]">
                      <strong className="text-[#5c1a2a]">Answer:</strong> {ex.answer}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4 rounded-2xl border-2 border-dashed border-[#c9a227]/60 bg-white/90 p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#5c1a2a]">Your numbers</p>
                <div>
                  <label htmlFor="adm-stream" className="block text-sm font-medium text-[#1a1410]">
                    Entry route
                  </label>
                  <select
                    id="adm-stream"
                    value={stream}
                    onChange={(e) => setStream(e.target.value as typeof stream)}
                    className="mt-2 w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2.5 text-sm outline-none ring-2 ring-transparent focus:ring-[#c9a227]"
                  >
                    <option value="science">Class 12 Science / equivalent</option>
                    <option value="diploma">Lateral / diploma</option>
                    <option value="other">MBA · International · other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="adm-score" className="block text-sm font-medium text-[#1a1410]">
                    Aggregate score (% or CGPA number)
                  </label>
                  <input
                    id="adm-score"
                    inputMode="decimal"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    placeholder="e.g. 82.5 or 8.2"
                    className="mt-2 w-full rounded-xl border border-[#e7e5e4] bg-white px-3 py-2.5 text-sm outline-none ring-2 ring-transparent focus:ring-[#c9a227]"
                  />
                </div>
                <p className="rounded-xl bg-gradient-to-br from-[#fef3c7]/80 to-[#fffbeb] p-4 text-sm font-medium leading-relaxed text-[#44403c]">
                  <span className="text-[#b45309]">Live hint:</span> {eligibilityHint}
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Brochures & downloads</h2>
              <p className="mt-2 text-sm text-[#5c5349]">
                Real files from <code className="rounded bg-[#fef3c7]/80 px-1 text-xs">public/brochures/</code> — opens or saves as{' '}
                <strong>.txt</strong> (easy to swap for PDF later).
              </p>
              <ul className="mt-6 space-y-3">
                {brochures.map((b) => (
                  <li key={b.file}>
                    <a
                      href={b.file}
                      download={b.downloadName}
                      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[#fcd34d]/50 bg-white px-5 py-4 shadow-sm transition-all hover:border-[#c9a227] hover:shadow-md hover:shadow-amber-100/60"
                    >
                      <span>
                        <span className="font-semibold text-[#5c1a2a]">{b.label}</span>
                        <span className="mt-1 block text-xs text-[#78716c]">{b.hint}</span>
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fef3c7] text-lg text-[#b45309]" aria-hidden>
                        ⤓
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={deadlinesFile.file}
                download={deadlinesFile.downloadName}
                className="mt-6 flex w-full items-center justify-between gap-3 rounded-2xl border-2 border-[#5c1a2a] bg-gradient-to-r from-[#5c1a2a] to-[#7f1d1d] px-5 py-5 text-white shadow-lg shadow-[#5c1a2a]/25 transition hover:brightness-110"
              >
                <span>
                  <span className="block font-serif text-lg font-semibold">{deadlinesFile.label}</span>
                  <span className="mt-1 block text-sm text-[#fde68a]">{deadlinesFile.hint}</span>
                </span>
                <span className="text-2xl text-[#fde68a]" aria-hidden>
                  ⤓
                </span>
              </a>

              <div className="mt-8 rounded-2xl border border-[#fcd34d]/50 bg-white/90 p-6 shadow-inner shadow-amber-50">
                <p className="text-sm font-semibold text-[#5c1a2a]">Dates preview (also inside the file)</p>
                <ul className="mt-4 space-y-2 text-sm text-[#57534e]">
                  <li className="flex gap-2">
                    <span className="font-bold text-[#b45309]">12 Apr</span> UG applications open
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#b45309]">30 May</span> Round 1 document lock
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#b45309]">08 Jul</span> Orientation week begins
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#fcd34d]/40 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Fees structure (illustrative)</h2>
          <p className="mt-2 max-w-3xl text-sm text-[#57534e]">
            Use this as a clear preview for applicants. Final fee notifications are published by the institute finance office each cycle.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#fcd34d]/50">
            <div className="grid grid-cols-4 bg-[#5c1a2a] px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#fffbeb] md:text-sm">
              <span>Programme</span>
              <span>Tuition</span>
              <span>Hostel + Mess</span>
              <span>Exam & services</span>
            </div>
            <div className="divide-y divide-[#f5e7c0] bg-[#fffdf8]">
              {feesStructure.map((row) => (
                <div key={row.programme} className="grid grid-cols-4 gap-2 px-4 py-4 text-sm text-[#44403c]">
                  <p className="font-semibold text-[#5c1a2a]">{row.programme}</p>
                  <p>{row.tuition}</p>
                  <p>{row.hostel}</p>
                  <p>{row.examAndServices}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-xs text-[#78716c]">
            Note: Scholarship, installment plans, and refunds follow separate policy circulars and may vary by category.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#fffdf8]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Scholarships & aid</h2>
              <p className="mt-3 text-[#57534e]">
                Use the scholarship matrix download above for demo tiers. International SWIFT/FIRC notes are illustrative — replace with
                your finance office wording.
              </p>
              <Link
                to="/students"
                className="mt-6 inline-flex rounded-full bg-[#fef3c7] px-4 py-2 text-sm font-bold text-[#92400e] hover:bg-[#fde68a]"
              >
                Student fee policies →
              </Link>
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#5c1a2a]">Admissions FAQ</h2>
              <div className="mt-4">
                <Accordion items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#fcd34d]/40 bg-gradient-to-br from-[#5c1a2a] via-[#7f1d1d] to-[#b45309] py-12 text-center text-[#fffbeb] md:py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#fde68a]">Still deciding?</p>
        <h2 className="mx-auto mt-2 max-w-2xl font-serif text-2xl font-semibold md:text-3xl">Book a campus tour or video call</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-[#fde68a] px-6 py-3 text-sm font-bold text-[#78350f] shadow-lg hover:bg-white"
          >
            Contact admissions
          </Link>
          <Link
            to="/departments"
            className="inline-flex rounded-full border-2 border-[#fde68a]/80 px-6 py-3 text-sm font-bold text-[#fffbeb] hover:bg-white/10"
          >
            Meet the departments
          </Link>
        </div>
      </section>
    </div>
  )
}
