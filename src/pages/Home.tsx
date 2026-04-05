import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CollageBackground from '../components/CollageBackground'
import PlacementMarquee from '../components/PlacementMarquee'
import StatHighlightCard from '../components/StatHighlightCard'
import { departments } from '../data/departments'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const stats = [
  { label: 'Academic departments', value: String(departments.length), hint: 'Search-ready directory' },
  { label: 'Faculty (illustrative)', value: '95+', hint: 'Mentors + HoDs' },
  { label: 'Student clubs & guilds', value: '40+', hint: 'Tech, arts, sport' },
]

const news = [
  { date: 'Mar 2026', title: 'Inter-college coding league — finals on campus', href: '/students' },
  { date: 'Feb 2026', title: 'Research showcase: sustainable infrastructure', href: '/research' },
  { date: 'Jan 2026', title: 'Admissions help-desk now in regional cities', href: '/admissions' },
]

const journey = [
  {
    step: '01',
    title: 'Discover',
    copy: 'Browse departments with live search, faculty profiles, and lab stories.',
    to: '/departments',
    image: campusImages.quad,
    accent: 'from-amber-400 via-orange-400 to-rose-400',
    footer: 'from-amber-50 to-orange-50 border-amber-200',
  },
  {
    step: '02',
    title: 'Apply',
    copy: 'Track key dates, eligibility cues, and scholarship lanes in one place.',
    to: '/admissions',
    image: campusImages.campusWalk,
    accent: 'from-sky-400 via-cyan-400 to-teal-400',
    footer: 'from-sky-50 to-cyan-50 border-sky-200',
  },
  {
    step: '03',
    title: 'Build',
    copy: 'Studios, internships, and placements aligned to national skill frameworks.',
    to: '/placements',
    image: campusImages.careerHub,
    accent: 'from-violet-500 via-fuchsia-500 to-pink-400',
    footer: 'from-violet-50 to-fuchsia-50 border-fuchsia-200',
  },
] as const

const badges = [
  { label: 'NAAC Grade A+', detail: 'Latest institutional accreditation status (illustrative).' },
  { label: 'NBA Accredited Programs', detail: 'Core engineering programs aligned to outcome standards.' },
  { label: 'Affiliated Colleges Grade A / B+', detail: 'Partner and affiliated institutes quality benchmark overview.' },
]

const quotes = [
  { text: 'We publish demos, not just marksheets.', who: '— Final-year CSE studio lead' },
  { text: 'Industry sprints in third year changed how I interview.', who: '— MBA operations track' },
  { text: 'The department page had everything my parents asked.', who: '— First-year parent ambassador' },
]

const events = [
  {
    title: 'Inter-hostel Sports League',
    type: 'Sports',
    when: 'Every Saturday · 6:30 AM',
    where: 'Main Ground, Track & Courts',
    about: 'Football, cricket, athletics, and mixed relay rounds with fitness desk support.',
    image: campusImages.sports,
  },
  {
    title: 'Cultural Night: Rhythm & Rang',
    type: 'Cultural',
    when: 'Second Friday · 6:00 PM',
    where: 'Open Air Auditorium',
    about: 'Dance, music, theatre, and club showcases with student-led stage production.',
    image: campusImages.culture,
  },
  {
    title: 'Innovation Demo Day',
    type: 'Technical',
    when: 'Monthly · 4:30 PM',
    where: 'Digital Studio Block',
    about: 'Departments present product demos, prototypes, and cross-branch capstone progress.',
    image: campusImages.digitalClass,
  },
  {
    title: 'Community Impact Drive',
    type: 'Outreach',
    when: 'First Sunday · 8:00 AM',
    where: 'City Partner Schools',
    about: 'Literacy labs, maker workshops, and mentoring sessions coordinated by student chapters.',
    image: campusImages.students,
  },
] as const

type HomeTheme = {
  id: 'light' | 'night'
  label: string
  chip: string
  heroOverlay: string
  heroTopOverlay: string
  heroTitle: string
  heroBody: string
  primaryBtn: string
  secondaryBtn: string
  ghostLink: string
  sectionKicker: string
  sectionTitle: string
  quoteStrip: string
  quoteText: string
}

const HOME_THEMES: HomeTheme[] = [
  {
    id: 'light',
    label: 'Light Theme',
    chip: 'border-[#5c1a2a] bg-[#5c1a2a] text-[#faf7f2]',
    heroOverlay: 'from-[#5c1a2a]/45 via-[#fde68a]/30 to-[#fffbeb]/92',
    heroTopOverlay: 'from-[#fffdf8]/95 via-transparent to-[#5c1a2a]/20',
    heroTitle: 'text-[#3d111c]',
    heroBody: 'text-[#5c1a2a]',
    primaryBtn: 'from-[#c9a227] to-[#f59e0b] text-[#431407] shadow-amber-200/80',
    secondaryBtn: 'border-[#5c1a2a] text-[#5c1a2a]',
    ghostLink: 'text-[#92400e] decoration-[#c9a227] hover:text-[#5c1a2a]',
    sectionKicker: 'text-[#b45309]',
    sectionTitle: 'text-[#5c1a2a]',
    quoteStrip: 'from-[#fffbeb] via-[#fef3c7]/80 to-[#fff7ed]',
    quoteText: 'text-[#431b24]',
  },
  {
    id: 'night',
    label: 'Night Theme',
    chip: 'border-[#0f172a] bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-[#f8fafc]',
    heroOverlay: 'from-slate-950/72 via-indigo-900/45 to-slate-800/72',
    heroTopOverlay: 'from-slate-950/88 via-transparent to-black/45',
    heroTitle: 'text-[#f8fafc]',
    heroBody: 'text-slate-200',
    primaryBtn: 'from-indigo-500 to-violet-600 text-white shadow-indigo-900/50',
    secondaryBtn: 'border-slate-300 text-slate-100',
    ghostLink: 'text-cyan-300 decoration-cyan-400 hover:text-cyan-200',
    sectionKicker: 'text-cyan-300',
    sectionTitle: 'text-slate-100',
    quoteStrip: 'from-slate-900 via-slate-800 to-indigo-950',
    quoteText: 'text-slate-100',
  },
]

type HomeChatMessage = {
  id: string
  role: 'assistant' | 'user'
  text: string
}

function getHomeAssistantReply(rawQuery: string): string {
  const query = rawQuery.trim().toLowerCase()
  if (!query) return 'Please type your question.'

  if (query.includes('fee') || query.includes('fees') || query.includes('tuition')) {
    return 'Fees information is available in Admissions page under Fees Structure.'
  }
  if (query.includes('hostel') || query.includes('canteen') || query.includes('mess')) {
    return 'Hostel and canteen details are in Campus Life section.'
  }
  if (query.includes('syllabus') || query.includes('exam') || query.includes('result') || query.includes('timetable')) {
    return 'Academics page contains branch syllabus, exam dates, result dates, and timetable details.'
  }
  if (query.includes('placement') || query.includes('ctc') || query.includes('recruiter')) {
    return 'Placements page has student offers, CTC highlights, recruiter strip, and skill badges.'
  }
  if (query.includes('faculty') || query.includes('lab') || query.includes('department')) {
    return 'Departments page has detailed faculty profiles with images and lab sections with images and details.'
  }
  if (query.includes('library') || query.includes('book')) {
    return 'Library page shows requirements, department-wise books, and institute library needs.'
  }
  if (query.includes('event') || query.includes('sports') || query.includes('cultural')) {
    return 'Events and Campus Life pages include sports, cultural, technical, and outreach event information.'
  }
  if (query.includes('contact') || query.includes('phone') || query.includes('email')) {
    return 'You can use Contact page for desk details, map, and support form.'
  }

  return 'Try asking about admissions, fees, syllabus, departments, labs, placements, hostel, events, library, or contact.'
}

export default function Home() {
  const [quoteIdx, setQuoteIdx] = useState(0)
  const [appTheme, setAppTheme] = useState<HomeTheme['id']>(() =>
    typeof document !== 'undefined' && document.body.classList.contains('theme-night') ? 'night' : 'light',
  )
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState<HomeChatMessage[]>([
    {
      id: 'home-ai-welcome',
      role: 'assistant',
      text: 'Hi, ask any simple question about this KPPIT application.',
    },
  ])

  useEffect(() => {
    const t = window.setInterval(() => {
      setQuoteIdx((i) => (i + 1) % quotes.length)
    }, 5500)
    return () => window.clearInterval(t)
  }, [])

  useEffect(() => {
    const syncTheme = (event: Event) => {
      const custom = event as CustomEvent<'light' | 'night'>
      if (custom.detail === 'light' || custom.detail === 'night') {
        setAppTheme(custom.detail)
      }
    }
    window.addEventListener('kpp-theme-change', syncTheme as EventListener)
    return () => window.removeEventListener('kpp-theme-change', syncTheme as EventListener)
  }, [])

  const q = quotes[quoteIdx]
  const theme = HOME_THEMES.find((x) => x.id === appTheme) ?? HOME_THEMES[0]

  function sendChatMessage() {
    const text = chatInput.trim()
    if (!text) return
    const userMessage: HomeChatMessage = { id: `u-${Date.now()}`, role: 'user', text }
    const assistantMessage: HomeChatMessage = {
      id: `a-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      role: 'assistant',
      text: getHomeAssistantReply(text),
    }
    setChatMessages((prev) => [...prev, userMessage, assistantMessage])
    setChatInput('')
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[#fcd34d]/30 bg-[#fff8f0]">
        <div
          className="absolute inset-0 bg-cover bg-center [filter:brightness(1.12)_saturate(1.1)]"
          style={{
            backgroundImage: `url(${campusImages.homeGraduation})`,
          }}
          aria-hidden
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.heroOverlay}`} aria-hidden />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroTopOverlay}`} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${theme.sectionKicker}`}>KPP Institute of Technology</p>
          <h1 className={`mt-4 max-w-4xl font-serif text-3xl font-semibold leading-[1.15] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] md:text-5xl md:leading-[1.12] ${theme.heroTitle}`}>
            Engineer your future — with a campus built for portfolios, not just papers.
          </h1>
          <p className={`mt-6 max-w-2xl text-base font-medium leading-relaxed md:text-lg ${theme.heroBody}`}>
            One bright, modern experience on phone and desktop: searchable departments, research energy, admissions clarity, and
            careers storytelling — tuned for students, parents, and society.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/admissions"
              className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r px-6 py-3 text-sm font-bold shadow-lg hover:brightness-105 ${theme.primaryBtn}`}
            >
              Start admissions journey
            </Link>
            <Link
              to="/departments"
              className={`inline-flex items-center justify-center rounded-full border-2 bg-white/90 px-6 py-3 text-sm font-bold shadow-md hover:bg-[#fffdf8] ${theme.secondaryBtn}`}
            >
              Explore departments
            </Link>
            <a
              href="#virtual-tour"
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold underline decoration-2 underline-offset-4 ${theme.ghostLink}`}
            >
              Virtual glimpse ↓
            </a>
          </div>
        </div>
      </section>

      <CollageBackground variant="strip" />

      <div className="relative border-b border-amber-100/80">
        <CollageBackground variant="full-bleed" />
        <div className="relative z-10">
      <section className="border-b border-amber-100/50 bg-white/40 backdrop-blur-[2px]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((s, i) => (
              <StatHighlightCard key={s.label} value={s.value} label={s.label} hint={s.hint} index={i} />
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Recognition themes">
            {badges.map((b, i) => {
              const th = getHighlightTheme(i)
              return (
                <li
                  key={b.label}
                  className={`rounded-full px-4 py-2 text-xs font-bold shadow-md backdrop-blur-sm md:text-sm ${th.card}`}
                >
                  <span className={th.title}>{b.label}</span>
                  <span className={`ml-2 font-semibold ${th.hint}`}>· {b.detail}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-[#5c1a2a]/10 bg-gradient-to-b from-[#fffdf8] via-[#fef3c7]/25 to-[#fffdf8] py-10 md:py-14"
        aria-labelledby="placement-marquee-heading"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.sectionKicker}`}>Placements</p>
              <h2 id="placement-marquee-heading" className={`mt-1 font-serif text-2xl font-bold md:text-3xl ${theme.sectionTitle}`}>
                Recent offers — in motion
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-medium text-[#57534e] md:text-base">
                Illustrative profiles, companies, and CTC bands — same bold maroon and cream language as our header.{' '}
                <Link to="/placements" className={`font-semibold underline underline-offset-4 ${theme.sectionTitle}`}>
                  Full placement story →
                </Link>
              </p>
            </div>
          </div>
        </div>
        <PlacementMarquee />
      </section>

      <section id="virtual-tour" className="scroll-mt-28 border-b border-amber-100/50 bg-white/55 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className={`font-serif text-2xl font-semibold md:text-3xl ${theme.sectionTitle}`}>Explore in three beats</h2>
              <p className="mt-2 max-w-2xl text-[#5c5349]">Each card is image-backed — same aesthetics when you stack on mobile.</p>
            </div>
            <Link to="/campus-life" className={`text-sm font-semibold underline underline-offset-4 ${theme.sectionTitle}`}>
              Full campus life →
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {journey.map((j) => (
              <li key={j.step}>
                <Link
                  to={j.to}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-white shadow-xl shadow-stone-300/40 ring-2 ring-stone-200/50 transition-all hover:shadow-2xl"
                >
                  <div
                    className="relative aspect-[16/11] overflow-hidden"
                    style={{ backgroundImage: `url(${j.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${j.accent}`} aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/65 via-transparent to-transparent opacity-90 transition-opacity group-hover:from-[#431b24]/75" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-mono text-xs font-bold text-[#5c1a2a] shadow-md">
                      {j.step}
                    </span>
                  </div>
                  <div className={`flex flex-1 flex-col border-t-2 bg-gradient-to-b p-5 ${j.footer}`}>
                    <h3 className="font-serif text-xl font-bold text-[#5c1a2a]">{j.title}</h3>
                    <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-stone-700">{j.copy}</p>
                    <span className="mt-4 text-sm font-bold text-[#b45309]">Continue →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-[#fcd34d]/30"
        style={{
          backgroundImage: `linear-gradient(130deg, rgba(255,253,248,0.96), rgba(254,243,199,0.26), rgba(255,255,255,0.95)), url(${campusImages.quad})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.sectionKicker}`}>Events Feature</p>
              <h2 className={`mt-1 font-serif text-2xl font-bold md:text-3xl ${theme.sectionTitle}`}>Sports, cultural, and more</h2>
              <p className="mt-2 max-w-2xl text-sm font-medium text-[#5c5349] md:text-base">
                Live calendar style cards with timing, venue, and activity highlights — same colorful design language as the rest of
                the site.
              </p>
            </div>
            <Link to="/campus-life" className={`text-sm font-semibold underline underline-offset-4 ${theme.sectionTitle}`}>
              View all campus events →
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={e.title}>
                  <article
                    className={`group flex h-full flex-col overflow-hidden rounded-2xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl ${t.card}`}
                  >
                    <div
                      className="relative h-36 border-b border-white/60 bg-cover bg-center"
                      style={{ backgroundImage: `url(${e.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 via-transparent to-transparent" />
                      <span className={`absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold ${t.value}`}>
                        {e.type}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className={`font-serif text-lg font-bold leading-tight ${t.title}`}>{e.title}</h3>
                      <p className={`mt-3 text-xs font-semibold uppercase tracking-wide ${t.value}`}>{e.when}</p>
                      <p className={`mt-1 text-sm font-medium ${t.hint}`}>{e.where}</p>
                      <p className={`mt-3 flex-1 text-sm leading-relaxed ${t.hint}`}>{e.about}</p>
                      <Link to="/campus-life" className="mt-4 text-sm font-bold text-[#b45309]">
                        Explore event →
                      </Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className={`border-y border-[#fcd34d]/40 bg-gradient-to-r py-12 md:py-16 ${theme.quoteStrip} ${theme.quoteText}`}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="max-w-xl">
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.sectionKicker}`}>Voices</p>
            <blockquote className="mt-3 font-serif text-xl font-semibold leading-snug md:text-2xl">“{q.text}”</blockquote>
            <p className="mt-3 text-sm font-medium text-[#57534e]">{q.who}</p>
          </div>
          <div className="flex gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 w-10 rounded-full transition-colors ${i === quoteIdx ? 'bg-[#5c1a2a]' : 'bg-[#d6d3d1] hover:bg-[#a8a29e]'}`}
                onClick={() => setQuoteIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#fcd34d]/30"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,253,248,0.97) 0%, rgba(254,243,199,0.35) 50%, rgba(255,255,255,0.96) 100%), url(${campusImages.researchLab})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Research & innovation pulse</h2>
              <p className="mt-2 max-w-2xl text-[#5c5349]">
                Thematic clusters connect labs, PG theses, and industry co-development — browse publications-ready summaries on the
                Research page.
              </p>
            </div>
            <Link
              to="/research"
              className="inline-flex shrink-0 rounded-full bg-gradient-to-r from-[#5c1a2a] to-[#b45309] px-6 py-3 text-sm font-bold text-[#fffbeb] shadow-md hover:brightness-110"
            >
              Open research hub
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-amber-100/40 bg-white/50 px-4 py-12 backdrop-blur-sm md:px-6 md:py-16">
        <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Highlights & announcements</h2>
        <p className="mt-2 max-w-2xl text-[#5c5349]">Fresh signals — each row routes to the right deep page.</p>
        <ul className="mt-8 divide-y divide-stone-200/80 overflow-hidden rounded-2xl border-2 border-amber-200/60 bg-gradient-to-b from-white to-amber-50/40 shadow-lg">
          {news.map((n, i) => (
            <li key={n.title}>
              <Link
                to={n.href}
                className={`flex flex-col gap-1 px-5 py-4 transition-colors md:flex-row md:items-center md:gap-8 ${
                  i % 3 === 0
                    ? 'hover:bg-amber-50/80'
                    : i % 3 === 1
                      ? 'hover:bg-sky-50/80'
                      : 'hover:bg-violet-50/80'
                }`}
              >
                <span className="shrink-0 text-xs font-bold uppercase tracking-wide text-orange-700">{n.date}</span>
                <span className="font-semibold text-stone-900">{n.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/academics" className="rounded-lg border border-[#e2ddd4] bg-[#faf7f2] px-4 py-2 text-sm font-semibold text-[#5c1a2a] hover:border-[#5c1a2a]">
            Academics
          </Link>
          <Link to="/placements" className="rounded-lg border border-[#e2ddd4] bg-[#faf7f2] px-4 py-2 text-sm font-semibold text-[#5c1a2a] hover:border-[#5c1a2a]">
            Placements
          </Link>
          <Link to="/contact" className="rounded-lg border border-[#e2ddd4] bg-[#faf7f2] px-4 py-2 text-sm font-semibold text-[#5c1a2a] hover:border-[#5c1a2a]">
            Book a visit
          </Link>
          <Link to="/students" className="rounded-lg border border-[#e2ddd4] bg-white px-4 py-2 text-sm font-semibold text-[#5c5349] hover:border-[#c9a227]">
            Student hub
          </Link>
        </div>
      </section>
        </div>
      </div>
      {chatOpen ? (
        <section className="fixed bottom-24 right-5 z-50 w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-[#e2ddd4] bg-white shadow-2xl md:bottom-28 md:right-8">
          <header className="flex items-center justify-between border-b border-[#e2ddd4] bg-[#5c1a2a] px-4 py-3 text-[#fffbeb]">
            <p className="font-semibold">KPPIT AI Chat</p>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold hover:bg-white/20"
            >
              Close
            </button>
          </header>
          <div className="max-h-72 space-y-2 overflow-y-auto bg-[#fffdf8] p-3">
            {chatMessages.map((m) => (
              <article key={m.id} className={m.role === 'user' ? 'ml-auto max-w-[85%]' : 'mr-auto max-w-[85%]'}>
                <p
                  className={[
                    'rounded-xl px-3 py-2 text-sm leading-relaxed',
                    m.role === 'user' ? 'bg-[#5c1a2a] text-[#faf7f2]' : 'border border-[#e2ddd4] bg-white text-[#1a1410]',
                  ].join(' ')}
                >
                  {m.text}
                </p>
              </article>
            ))}
          </div>
          <div className="border-t border-[#e2ddd4] p-3">
            <div className="flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask here..."
                className="w-full rounded-lg border border-[#e2ddd4] px-3 py-2 text-sm outline-none ring-[#5c1a2a] focus:ring-2"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    sendChatMessage()
                  }
                }}
              />
              <button
                type="button"
                onClick={sendChatMessage}
                className="rounded-lg bg-[#5c1a2a] px-3 py-2 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c]"
              >
                Send
              </button>
            </div>
          </div>
        </section>
      ) : null}
      <button
        type="button"
        onClick={() => setChatOpen((v) => !v)}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[#fcd34d]/70 bg-[#5c1a2a] px-4 py-3 text-sm font-bold text-[#fffbeb] shadow-xl shadow-[#5c1a2a]/40 transition-transform hover:-translate-y-0.5 hover:bg-[#3d111c] md:bottom-8 md:right-8"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-base" aria-hidden>
          🤖
        </span>
        <span>AI Chat</span>
      </button>
    </div>
  )
}
