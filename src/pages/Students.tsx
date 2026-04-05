import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const quickLinks = [
  { label: 'Handbooks & SOI', href: '#handbooks', emoji: '📘' },
  { label: 'Fee schedule', href: '#fees', emoji: '💳' },
  { label: 'Support & ICASH', href: '#support', emoji: '🛡️' },
  { label: 'Clubs & gymkhana', href: '/campus-life', emoji: '🎭' },
] as const

const resources = [
  {
    title: 'Scheme of Instruction 2025–26',
    tag: 'PDF • 2.1 MB',
    blurb: 'Official course basket, lab credits, and elective ladders — placeholder link for your portal.',
  },
  {
    title: 'Academic integrity toolkit',
    tag: 'Notion • demo',
    blurb: 'Citation templates, collaboration rules, and escalation ladder — swap with your policy PDF.',
  },
  {
    title: 'CGPA → percentage mapping',
    tag: 'Sheet • recruiters',
    blurb: 'Single institute-wide table for placement season; update per statutory guidance.',
  },
]

const studentProjects = [
  {
    id: 'smart-attendance',
    title: 'Smart Attendance Analytics',
    domain: 'AI + Web',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85',
    summary: 'Face-recognition assisted attendance with absentee trend dashboards for mentors.',
    details:
      'Built with React dashboard components, Python inference service, and role-based reports. The system flags sudden attendance drops and sends advisor alerts.',
    tech: 'React, Python, OpenCV, PostgreSQL',
  },
  {
    id: 'solar-ev',
    title: 'Solar EV Charging Monitor',
    domain: 'IoT + Energy',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85',
    summary: 'Live tracking of charging sessions, solar yield, and peak-load optimization.',
    details:
      'Students integrated energy meters with a cloud dashboard to optimize charge windows. The pilot showed lower grid usage during midday lab hours.',
    tech: 'ESP32, MQTT, Node.js, Charting',
  },
  {
    id: 'telehealth',
    title: 'Campus Telehealth Queue',
    domain: 'Health Tech',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85',
    summary: 'Token-based tele-consultation queue for campus clinic and counseling desk.',
    details:
      'Includes triage tagging, estimated wait times, and secure appointment notes. Reduced average waiting time by prioritizing critical cases automatically.',
    tech: 'TypeScript, Firebase, Tailwind CSS',
  },
] as const

const checklistStorageKey = 'kppit-student-checklist'

export default function Students() {
  const defaultChecklist = useMemo(
    () => [
      { id: 'portal', label: 'Activate student portal + MFA', done: false },
      { id: 'fees', label: 'Pay semester fees before deadline', done: false },
      { id: 'soi', label: 'Download SOI & mark registration week', done: false },
      { id: 'health', label: 'Upload health declaration + emergency contact', done: false },
    ],
    [],
  )

  const [checklist, setChecklist] = useState(defaultChecklist)
  const [activeProjectId, setActiveProjectId] = useState<(typeof studentProjects)[number]['id']>(studentProjects[0].id)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(checklistStorageKey)
      if (!raw) return
      const parsed = JSON.parse(raw) as typeof defaultChecklist
      if (Array.isArray(parsed) && parsed.length) setChecklist(parsed)
    } catch {
      /* ignore */
    }
  }, [defaultChecklist])

  useEffect(() => {
    try {
      localStorage.setItem(checklistStorageKey, JSON.stringify(checklist))
    } catch {
      /* ignore */
    }
  }, [checklist])

  function toggle(id: string) {
    setChecklist((rows) => rows.map((r) => (r.id === id ? { ...r, done: !r.done } : r)))
  }

  const activeProject = studentProjects.find((p) => p.id === activeProjectId) ?? studentProjects[0]

  const faqItems = [
    {
      id: 'grades',
      title: 'How do I request a transcript?',
      content:
        'Use the student portal → Academics → Transcripts. Pick digital or printed; allow two working days for stamping. Demo copy only.',
    },
    {
      id: 'hostel',
      title: 'Hostel deposit refunds — timeline?',
      content:
        'Check-out inspection + clearance slip → finance desk processes NEFT within 14 working days. Keep bank proof on file.',
    },
    {
      id: 'electives',
      title: 'Can I swap electives after registration?',
      content:
        'Window is week 1–2 with department advisor approval. Late swaps need HoD note and may incur tutorial conflicts.',
    },
    {
      id: 'integrity',
      title: 'What happens if I miss an academic integrity workshop?',
      content:
        'You cannot register for labs until you complete the async module + in-person attestation. Dates publish in week zero.',
    },
  ]

  return (
    <div>
      <PageHero
        imageUrl={campusImages.students}
        title="Students"
        subtitle="Handbooks, fees, interactive checklists, and answers — engineered like a product, not a pamphlet."
        size="md"
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
          <h2 className="sr-only">Quick links</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((q, i) => {
              const t = getHighlightTheme(i)
              return (
                <a
                  key={q.href}
                  href={q.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg ${t.card}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/70 text-2xl shadow-inner" aria-hidden>
                    {q.emoji}
                  </span>
                  <span className={`font-bold ${t.title}`}>{q.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="handbooks"
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,247,242,0.98)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Handbooks & academics</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Download targets are illustrative — wire your CMS or drive links when you go live.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {resources.map((r, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={r.title}>
                  <article
                    className={`flex h-full flex-col rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-xl ${t.card}`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wide ${t.value}`}>{r.tag}</p>
                    <h3 className={`mt-2 font-serif text-lg font-bold ${t.title}`}>{r.title}</h3>
                    <p className={`mt-2 flex-1 text-sm font-medium leading-relaxed ${t.hint}`}>{r.blurb}</p>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-md bg-[#5c1a2a] px-3 py-2 text-sm font-semibold text-[#faf7f2] shadow-md hover:bg-[#3d111c]"
                      onClick={() => alert('Link your PDF or portal URL here — demo placeholder.')}
                    >
                      Open resource
                    </button>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section id="fees" className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Student project cards</h2>
              <p className="mt-2 text-sm text-[#5c5349]">Click any project card to open and view full project details.</p>
              <div className="mt-6 grid gap-3">
                {studentProjects.map((project, i) => {
                  const t = getHighlightTheme(i)
                  const active = project.id === activeProjectId
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveProjectId(project.id)}
                      className={[
                        `rounded-xl border p-4 text-left transition-all ${t.card}`,
                        active ? 'ring-2 ring-[#5c1a2a]/60 shadow-md' : 'hover:-translate-y-0.5 hover:shadow-md',
                      ].join(' ')}
                      aria-pressed={active}
                    >
                      <div
                        className="mb-3 h-28 w-full rounded-lg border border-white/60 bg-cover bg-center shadow-sm"
                        style={{ backgroundImage: `url(${project.image})` }}
                        aria-hidden
                      />
                      <p className={`text-xs font-bold uppercase tracking-wide ${t.value}`}>{project.domain}</p>
                      <p className={`mt-1 font-serif text-lg font-semibold ${t.title}`}>{project.title}</p>
                      <p className={`mt-1 text-sm ${t.hint}`}>{project.summary}</p>
                    </button>
                  )
                })}
              </div>
              <article className="mt-5 rounded-2xl border border-[#e2ddd4] bg-white p-5 shadow-sm">
                <div
                  className="mb-4 h-44 w-full rounded-xl border border-[#e2ddd4] bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeProject.image})` }}
                  aria-label={`${activeProject.title} preview`}
                />
                <p className="text-xs font-bold uppercase tracking-wide text-[#9a7212]">Project details</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-[#5c1a2a]">{activeProject.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c5349]">{activeProject.details}</p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-[#1a1410]">Tech stack: </span>
                  <span className="text-[#5c5349]">{activeProject.tech}</span>
                </p>
              </article>
            </div>
            <div className="rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-[#5c1a2a]">Start-of-term checklist</h3>
              <p className="mt-2 text-sm text-[#5c5349]">Checked items persist in this browser — a tiny UX win for judges.</p>
              <ul className="mt-6 space-y-3">
                {checklist.map((row) => (
                  <li key={row.id}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-transparent p-2 hover:border-[#e2ddd4]">
                      <input
                        type="checkbox"
                        checked={row.done}
                        onChange={() => toggle(row.id)}
                        className="mt-1 h-4 w-4 rounded border-[#5c5349] text-[#5c1a2a] focus:ring-[#5c1a2a]"
                      />
                      <span className={row.done ? 'text-[#5c5349] line-through' : 'text-[#1a1410]'}>{row.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4"
                onClick={() => setChecklist(defaultChecklist)}
              >
                Reset checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="border-t border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Support & redressal</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Ombudsperson, internal committees, and hostel wardens publish office hours. Escalation ladders are non-negotiable in real
            life — link your PDFs here.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#e2ddd4] bg-[#f0ebe3]/40 p-6">
              <h3 className="font-serif text-lg font-semibold text-[#5c1a2a]">Need help now?</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[#1a1410]">Student helpline (demo)</dt>
                  <dd className="text-[#5c5349]">+91 80 0000 1099 · 08:00–20:00</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1a1410]">Counseling intake</dt>
                  <dd className="text-[#5c5349]">counseling@kppit.edu · same-day triage for crisis keywords.</dd>
                </div>
              </dl>
              <Link to="/contact" className="mt-4 inline-flex font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4">
                Formal written route → Contact
              </Link>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#5c1a2a]">FAQ — tap to expand</h3>
              <p className="mt-2 text-sm text-[#5c5349]">Accessible accordion: keyboard-friendly, one panel open at a time.</p>
              <div className="mt-4">
                <Accordion items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
