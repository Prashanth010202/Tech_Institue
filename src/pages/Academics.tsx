import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const creditPillars = [
  {
    id: 'design',
    title: 'Design studio spine',
    copy: 'Every programme maps course outcomes to studio deliverables reviewers can see: demos, datasets, or field logs.',
  },
  {
    id: 'flex',
    title: 'Flexible baskets',
    copy: 'Minors, honours, and ABC-credit-friendly electives let students personalize without blowing prerequisites.',
  },
  {
    id: 'verify',
    title: 'Continuous verification',
    copy: 'Rubrics publish to students week one; sample graded work is anonymized in town halls each semester.',
  },
] as const

const offerings = [
  { name: 'Undergraduate (B.Tech)', detail: '4-year professional degrees with first-year foundations + branch studios.', tag: 'UG' },
  { name: 'Postgraduate (M.Tech / MBA)', detail: 'Research threads, industry sprints, and graded seminars.', tag: 'PG' },
  { name: 'Micro-credentials', detail: 'Short industry-backed modules with transcript-visible credits (demo roadmap).', tag: 'CE' },
]

const academicEvents = [
  {
    id: 'mid-sem',
    title: 'Mid-semester assessment window',
    examDate: '15 Sep 2026 - 22 Sep 2026',
    resultDate: '30 Sep 2026',
    timetable: 'Theory exams: 9:30 AM and 2:00 PM slots, published department-wise on ERP.',
  },
  {
    id: 'practical',
    title: 'Practical and viva assessments',
    examDate: '12 Nov 2026 - 20 Nov 2026',
    resultDate: '28 Nov 2026',
    timetable: 'Lab batches in two sessions: 10:00 AM and 1:30 PM with external examiner schedule.',
  },
  {
    id: 'end-sem',
    title: 'End-semester examinations',
    examDate: '02 Dec 2026 - 16 Dec 2026',
    resultDate: '05 Jan 2027',
    timetable: 'Final timetable released 14 days before exams; hall and seat numbers in student portal.',
  },
] as const

const branchSyllabus = [
  {
    id: 'cse',
    branch: 'Computer Science & Engineering',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85',
    overview: 'Strong core in programming, systems, and modern software engineering practice.',
    semesters: [
      'Sem 1-2: Engineering Mathematics, Programming Fundamentals, Digital Logic, Data Structures',
      'Sem 3-4: OOP, DBMS, Operating Systems, Computer Networks, Discrete Mathematics',
      'Sem 5-6: Software Engineering, Cloud Computing, AI/ML basics, Compiler Design',
      'Sem 7-8: Security electives, DevOps project, internship, and capstone',
    ],
  },
  {
    id: 'mech',
    branch: 'Mechanical Engineering',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1400&q=85',
    overview: 'Design, manufacturing, thermal engineering, and product development.',
    semesters: [
      'Sem 1-2: Engineering Mechanics, Workshop Practice, Engineering Graphics',
      'Sem 3-4: Thermodynamics, Strength of Materials, Manufacturing Processes',
      'Sem 5-6: Heat Transfer, CAD/CAM, Fluid Machinery, Mechatronics',
      'Sem 7-8: Design project, industrial internship, and major project',
    ],
  },
  {
    id: 'ece',
    branch: 'Electronics & Communication Engineering',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    overview: 'Communication systems, embedded electronics, and VLSI foundations.',
    semesters: [
      'Sem 1-2: Circuit Theory, Basic Electronics, Signals and Systems',
      'Sem 3-4: Analog Circuits, Digital Electronics, Microprocessors, EM Theory',
      'Sem 5-6: Communication Engineering, VLSI Design, DSP, Embedded Systems',
      'Sem 7-8: Wireless electives, mini projects, industry-linked capstone',
    ],
  },
  {
    id: 'eee',
    branch: 'Electrical & Electronics Engineering',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
    overview: 'Power systems, drives, control engineering, and renewable integration.',
    semesters: [
      'Sem 1-2: Basic Electrical Engineering, Networks, Mathematics',
      'Sem 3-4: Electrical Machines, Power Systems, Control Systems, Measurements',
      'Sem 5-6: Power Electronics, Protection Systems, Embedded Energy Applications',
      'Sem 7-8: Renewable energy electives, plant internship, final project',
    ],
  },
  {
    id: 'civil',
    branch: 'Civil Engineering',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    overview: 'Infrastructure design, surveying, construction planning, and sustainability.',
    semesters: [
      'Sem 1-2: Engineering Drawing, Surveying basics, Building Materials',
      'Sem 3-4: Structural Analysis, Geotechnical Engineering, Fluid Mechanics',
      'Sem 5-6: RCC Design, Transportation, Environmental Engineering',
      'Sem 7-8: Estimation & costing, field internship, and major civil design project',
    ],
  },
  {
    id: 'aids',
    branch: 'Artificial Intelligence & Data Science',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=85',
    overview: 'Data engineering, machine learning, and responsible AI deployment.',
    semesters: [
      'Sem 1-2: Python, Statistics, Calculus, Data Structures',
      'Sem 3-4: Probability, DBMS, Data Mining, ML Foundations',
      'Sem 5-6: Deep Learning, NLP, MLOps, Big Data Platforms',
      'Sem 7-8: Domain electives, AI product internship, capstone deployment',
    ],
  },
] as const

export default function Academics() {
  const [activePillar, setActivePillar] = useState<(typeof creditPillars)[number]['id']>('design')
  const [activeBranch, setActiveBranch] = useState<(typeof branchSyllabus)[number]['id']>('cse')

  const pillar = creditPillars.find((p) => p.id === activePillar)!
  const syllabusPanel = branchSyllabus.find((item) => item.id === activeBranch) ?? branchSyllabus[0]

  return (
    <div>
      <PageHero
        imageUrl={campusImages.digitalClass}
        title="Academics"
        subtitle="Credit architecture, digital learning spine, and outcome verification — how KPPIT delivers programmes in a modern accreditation context."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <ul className="grid gap-4 md:grid-cols-3">
            {offerings.map((o, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={o.name}>
                  <article
                    className={`flex h-full flex-col rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                  >
                    <span
                      className={`w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-bold shadow-inner ${t.value}`}
                    >
                      {o.tag}
                    </span>
                    <h2 className={`mt-4 font-serif text-lg font-bold ${t.title}`}>{o.name}</h2>
                    <p className={`mt-2 flex-1 text-sm font-medium leading-relaxed ${t.hint}`}>{o.detail}</p>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(105deg, rgba(250,247,242,0.97) 55%, rgba(255,255,255,0.92)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Academic operating system</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Tap a pillar — same component chrome on mobile; copy panel reflows beneath buttons.
          </p>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-wrap gap-2 lg:w-64 lg:flex-col" role="tablist" aria-label="Academic pillars">
              {creditPillars.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activePillar === p.id}
                  className={[
                    'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors',
                    activePillar === p.id
                      ? 'border-[#5c1a2a] bg-[#5c1a2a] text-[#faf7f2]'
                      : 'border-[#e2ddd4] bg-white text-[#1a1410] hover:border-[#c9a227]',
                  ].join(' ')}
                  onClick={() => setActivePillar(p.id)}
                >
                  {p.title}
                </button>
              ))}
            </div>
            <div
              className="flex-1 rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-sm md:p-8"
              role="tabpanel"
            >
              <h3 className="font-serif text-xl font-semibold text-[#5c1a2a]">{pillar.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#5c5349]">{pillar.copy}</p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-[#5c5349]">
                <li>LMS attendance + asset versioning tied to course codes (demo).</li>
                <li>Faculty development credits for new pedagogy pilots each year.</li>
                <li>Student senate reviews assessment workload twice a term.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#fcd34d]/40 bg-gradient-to-br from-[#5c1a2a] via-[#7f1d1d] to-[#c2410c] py-12 text-[#fffbeb] md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">Digital learning & NEP signals</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#ffedd5] md:text-base">
              Blended tutorials, proctored assessments, and open educational resource packs are maintained centrally. Academic Bank of
              Credits alignment and multidisciplinary diplomas appear in committee minutes (placeholder until your board publishes).
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 rounded-xl border border-[#fde68a]/40 bg-white/15 px-4 py-3 backdrop-blur-sm">
              <span className="text-[#fde68a]" aria-hidden>
                ◈
              </span>
              <span>OTP-secured grade appeals + downloadable audit trail.</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-[#fde68a]/40 bg-white/15 px-4 py-3 backdrop-blur-sm">
              <span className="text-[#fde68a]" aria-hidden>
                ◈
              </span>
              <span>Accessibility checklist on every new video module.</span>
            </li>
            <li className="flex gap-3 rounded-xl border border-[#fde68a]/40 bg-white/15 px-4 py-3 backdrop-blur-sm">
              <span className="text-[#fde68a]" aria-hidden>
                ◈
              </span>
              <span>Industry co-badge on capstones stored in verified portfolios.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Academic events and assessment calendar</h2>
          <p className="mt-2 max-w-3xl text-[#5c5349]">
            Semester-level list for exam date, result date, and assessment timetable so students can plan early.
          </p>
          <div className="mt-8 grid gap-5">
            {academicEvents.map((event, i) => {
              const t = getHighlightTheme(i + 1)
              return (
                <article key={event.id} className={`rounded-2xl p-5 shadow-sm ${t.card}`}>
                  <h3 className={`font-serif text-xl font-semibold ${t.title}`}>{event.title}</h3>
                  <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
                    <p>
                      <span className={`block text-xs font-bold uppercase tracking-wide ${t.value}`}>Exam date</span>
                      <span className="mt-1 block text-[#1a1410]">{event.examDate}</span>
                    </p>
                    <p>
                      <span className={`block text-xs font-bold uppercase tracking-wide ${t.value}`}>Result date</span>
                      <span className="mt-1 block text-[#1a1410]">{event.resultDate}</span>
                    </p>
                    <p>
                      <span className={`block text-xs font-bold uppercase tracking-wide ${t.value}`}>Timetable</span>
                      <span className="mt-1 block text-[#5c5349]">{event.timetable}</span>
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2ddd4] bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Branch syllabus explorer</h2>
          <p className="mt-2 max-w-3xl text-[#5c5349]">
            Click a branch to display the related syllabus flow and department image for quick review.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {branchSyllabus.map((item, i) => {
                const t = getHighlightTheme(i)
                const isActive = item.id === activeBranch
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveBranch(item.id)}
                    aria-pressed={isActive}
                    className={[
                      `rounded-xl border p-4 text-left transition-all ${t.card}`,
                      isActive ? 'ring-2 ring-[#5c1a2a]/60 shadow-md' : 'hover:-translate-y-0.5 hover:shadow-md',
                    ].join(' ')}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wide ${t.value}`}>Syllabus</p>
                    <p className={`mt-1 font-serif text-lg font-semibold ${t.title}`}>{item.branch}</p>
                    <p className={`mt-1 text-sm ${t.hint}`}>{item.overview}</p>
                  </button>
                )
              })}
            </div>
            <article className="overflow-hidden rounded-2xl border border-[#e2ddd4] bg-white shadow-sm">
              <div
                className="h-52 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(26,20,16,0.08), rgba(26,20,16,0.48)), url(${syllabusPanel.image})`,
                }}
                aria-label={`${syllabusPanel.branch} department`}
              />
              <div className="p-5">
                <div className="inline-flex rounded-full bg-[#fef3c7] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#9a7212]">
                  Selected branch syllabus
                </div>
                <h3 className="mt-3 bg-gradient-to-r from-[#5c1a2a] via-[#7f1d1d] to-[#b45309] bg-clip-text font-serif text-2xl font-bold text-transparent">
                  {syllabusPanel.branch}
                </h3>
                <p className="mt-2 rounded-xl bg-gradient-to-r from-[#fff7ed] to-[#faf5ff] p-3 text-sm font-medium text-[#7c2d12]">
                  {syllabusPanel.overview}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-[#5c5349]">
                  {syllabusPanel.semesters.map((line) => (
                    <li key={line} className="flex gap-2 rounded-lg border border-[#f1e8d2] bg-[#fffcf5] p-2.5">
                      <span className="mt-1 text-[#b7791f]" aria-hidden>
                        ●
                      </span>
                      <span className="font-medium text-[#1d4ed8]">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e2ddd4] bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Department-level depth</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#5c5349]">
            Each unit publishes vision, programmes, faculty, labs, research, achievements, and HOD contact — searchable from one
            index.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/departments"
              className="inline-flex rounded-md bg-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]"
            >
              Browse departments
            </Link>
            <button
              type="button"
              className="inline-flex rounded-md border border-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#5c1a2a] hover:bg-white"
              onClick={() => alert('Wire PDF: Academic calendar 2025–26')}
            >
              Download calendar (demo)
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
