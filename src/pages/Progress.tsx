import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const yearlyGrowth = [
  { year: '2021', admissions: 820, staff: 118, buildings: 6 },
  { year: '2022', admissions: 910, staff: 126, buildings: 7 },
  { year: '2023', admissions: 1015, staff: 138, buildings: 8 },
  { year: '2024', admissions: 1140, staff: 149, buildings: 9 },
  { year: '2025', admissions: 1260, staff: 164, buildings: 10 },
  { year: '2026', admissions: 1385, staff: 178, buildings: 11 },
] as const

const topSchools = [
  {
    title: 'School of Computing',
    rank: '#1',
    metric: 'Placement consistency',
    note: 'Highest software placement conversion and internship-to-offer ratio.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'School of Core Engineering',
    rank: '#2',
    metric: 'Lab and project output',
    note: 'Strong capstone output from Mechanical, Civil, and EEE verticals.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'School of Management and Analytics',
    rank: '#3',
    metric: 'Industry connect',
    note: 'MBA and analytics tracks with live case participation growth.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85',
  },
] as const

const yearlyAdmissionMix = [
  { year: '2021', entranceExam: 52, counseling: 30, management: 18 },
  { year: '2022', entranceExam: 54, counseling: 29, management: 17 },
  { year: '2023', entranceExam: 56, counseling: 28, management: 16 },
  { year: '2024', entranceExam: 58, counseling: 27, management: 15 },
  { year: '2025', entranceExam: 60, counseling: 26, management: 14 },
  { year: '2026', entranceExam: 62, counseling: 25, management: 13 },
] as const

const progressStories = [
  {
    title: 'Admission pipeline expansion',
    detail: 'Regional outreach and digital counseling improved year-on-year enrollment visibility.',
    image: campusImages.students,
  },
  {
    title: 'Faculty and staff strengthening',
    detail: 'Faculty development and recruitment increased mentoring capacity and specialization.',
    image: campusImages.researchLab,
  },
  {
    title: 'Campus infrastructure growth',
    detail: 'New academic blocks, labs, and student support spaces enabled larger cohorts.',
    image: campusImages.quad,
  },
] as const

function metricBar(value: number, max: number) {
  return `${Math.max(10, Math.round((value / max) * 100))}%`
}

export default function Progress() {
  const graphSectionRef = useRef<HTMLElement | null>(null)
  const [barsVisible, setBarsVisible] = useState(false)
  const [selectedMixYear, setSelectedMixYear] = useState<(typeof yearlyAdmissionMix)[number]['year']>('2026')
  const maxAdmissions = Math.max(...yearlyGrowth.map((r) => r.admissions))
  const maxStaff = Math.max(...yearlyGrowth.map((r) => r.staff))
  const maxBuildings = Math.max(...yearlyGrowth.map((r) => r.buildings))
  const selectedMix = yearlyAdmissionMix.find((row) => row.year === selectedMixYear) ?? yearlyAdmissionMix[yearlyAdmissionMix.length - 1]
  const totalAdmissionsGrowth =
    Math.round(((yearlyGrowth[yearlyGrowth.length - 1].admissions - yearlyGrowth[0].admissions) / yearlyGrowth[0].admissions) * 100)
  const totalStaffGrowth = Math.round(((yearlyGrowth[yearlyGrowth.length - 1].staff - yearlyGrowth[0].staff) / yearlyGrowth[0].staff) * 100)
  const infraGrowth = yearlyGrowth[yearlyGrowth.length - 1].buildings - yearlyGrowth[0].buildings

  useEffect(() => {
    const node = graphSectionRef.current
    if (!node) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      setBarsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <PageHero
        imageUrl={campusImages.homeGraduation}
        title="Progress and Growth Analytics"
        subtitle="Creative year-wise insights for admissions, staff, infrastructure, and top-performing schools in KPPIT."
      />

      <section
        ref={graphSectionRef}
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,253,248,0.96), rgba(254,243,199,0.3), rgba(255,255,255,0.95)), url(${campusImages.digitalClass})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Year-wise growth</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">College progress graph overview</h2>
          <p className="mt-2 max-w-3xl text-[#5c5349]">
            Comparative visual bars show admissions, staff growth, and infrastructure improvement trends across academic years.
          </p>

          <div className="mt-8 space-y-4">
            {yearlyGrowth.map((row, i) => {
              const t = getHighlightTheme(i)
              return (
                <article key={row.year} className={`rounded-2xl p-4 shadow-sm ${t.card}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className={`font-serif text-xl font-semibold ${t.title}`}>{row.year}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wide ${t.value}`}>Annual report snapshot</p>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#9a7212]">Student admissions</p>
                      <div className="mt-1 h-2 rounded-full bg-white/70">
                        <div
                          className="h-2 rounded-full bg-[#5c1a2a] transition-[width] duration-1000 ease-out"
                          style={{ width: barsVisible ? metricBar(row.admissions, maxAdmissions) : '0%' }}
                        />
                      </div>
                      <p className="mt-1 text-sm font-semibold text-[#1a1410]">{row.admissions}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#9a7212]">Faculty and staff</p>
                      <div className="mt-1 h-2 rounded-full bg-white/70">
                        <div
                          className="h-2 rounded-full bg-[#2563eb] transition-[width] duration-1000 ease-out"
                          style={{ width: barsVisible ? metricBar(row.staff, maxStaff) : '0%' }}
                        />
                      </div>
                      <p className="mt-1 text-sm font-semibold text-[#1a1410]">{row.staff}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#9a7212]">Buildings upgraded</p>
                      <div className="mt-1 h-2 rounded-full bg-white/70">
                        <div
                          className="h-2 rounded-full bg-[#059669] transition-[width] duration-1000 ease-out"
                          style={{ width: barsVisible ? metricBar(row.buildings, maxBuildings) : '0%' }}
                        />
                      </div>
                      <p className="mt-1 text-sm font-semibold text-[#1a1410]">{row.buildings}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Year-wise pie chart analysis</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">
            Admission channel split by year
          </h2>
          <p className="mt-2 max-w-3xl text-[#5c5349]">
            Interactive pie view of how admissions are distributed across entrance exam, counseling, and management quota for each year.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {yearlyAdmissionMix.map((row) => (
              <button
                key={row.year}
                type="button"
                onClick={() => setSelectedMixYear(row.year)}
                className={[
                  'rounded-full border px-4 py-2 text-xs font-semibold transition-colors md:text-sm',
                  selectedMixYear === row.year
                    ? 'border-[#5c1a2a] bg-[#5c1a2a] text-[#faf7f2]'
                    : 'border-[#e2ddd4] bg-[#faf7f2] text-[#1a1410] hover:border-[#c9a227]',
                ].join(' ')}
              >
                {row.year}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr] md:items-center">
            <div className="mx-auto w-full max-w-[280px]">
              <div
                key={selectedMixYear}
                className="mx-auto aspect-square w-full rounded-full border-8 border-white shadow-lg transition-all duration-700"
                style={{
                  background: `conic-gradient(
                    #5c1a2a 0% ${selectedMix.entranceExam}%,
                    #2563eb ${selectedMix.entranceExam}% ${selectedMix.entranceExam + selectedMix.counseling}%,
                    #059669 ${selectedMix.entranceExam + selectedMix.counseling}% 100%
                  )`,
                  transform: barsVisible ? 'scale(1)' : 'scale(0.88)',
                  opacity: barsVisible ? 1 : 0.7,
                }}
                aria-label={`Admission pie chart for ${selectedMix.year}`}
              />
              <p className="mt-3 text-center text-sm font-semibold text-[#5c1a2a]">{selectedMix.year} admission composition</p>
            </div>

            <div className="grid gap-3">
              <article className="rounded-xl border border-[#eadfd3] bg-[#fff7ed] p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#9a7212]">Entrance exam</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-[#5c1a2a]">{selectedMix.entranceExam}%</p>
                <p className="mt-1 text-sm text-[#5c5349]">Merit-focused intake through national/state entrance performance.</p>
              </article>
              <article className="rounded-xl border border-[#dbeafe] bg-[#eff6ff] p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#1d4ed8]">Counseling</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-[#1e40af]">{selectedMix.counseling}%</p>
                <p className="mt-1 text-sm text-[#475569]">Seat allocation via centralized counseling and institute rounds.</p>
              </article>
              <article className="rounded-xl border border-[#d1fae5] bg-[#ecfdf5] p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#047857]">Management</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-[#065f46]">{selectedMix.management}%</p>
                <p className="mt-1 text-sm text-[#4b5563]">Direct admission window with document verification and policy checks.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(130deg, rgba(255,253,248,0.95), rgba(240,235,227,0.9)), url(${campusImages.researchLab})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Extra analytics features</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Growth intelligence snapshot</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-[#e2ddd4] bg-white/95 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-[#9a7212]">Admissions growth</p>
              <p className="mt-2 font-serif text-3xl font-semibold text-[#5c1a2a]">+{totalAdmissionsGrowth}%</p>
              <p className="mt-2 text-sm text-[#5c5349]">Growth observed from 2021 to 2026 intake cycles.</p>
            </article>
            <article className="rounded-2xl border border-[#e2ddd4] bg-white/95 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-[#1d4ed8]">Faculty and staff growth</p>
              <p className="mt-2 font-serif text-3xl font-semibold text-[#1e40af]">+{totalStaffGrowth}%</p>
              <p className="mt-2 text-sm text-[#5c5349]">Institution strengthened mentoring and delivery capacity year-wise.</p>
            </article>
            <article className="rounded-2xl border border-[#e2ddd4] bg-white/95 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-[#047857]">Infrastructure expansion</p>
              <p className="mt-2 font-serif text-3xl font-semibold text-[#065f46]">+{infraGrowth} blocks</p>
              <p className="mt-2 text-sm text-[#5c5349]">New academic and lab spaces added in the latest growth cycle.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Top schools in institute</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Top-performing schools at KPPIT</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {topSchools.map((item, i) => (
              <article key={item.title} className={`overflow-hidden rounded-2xl border shadow-sm ${getHighlightTheme(i).card}`}>
                <div
                  className="h-40 w-full bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(26,20,16,0.08), rgba(26,20,16,0.46)), url(${item.image})` }}
                  aria-label={item.title}
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#9a7212]">{item.rank} performer</p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-[#1a1410]">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#5c1a2a]">{item.metric}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c5349]">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(140deg, rgba(250,247,242,0.96), rgba(240,235,227,0.94)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Progress stories with visuals</h2>
          <p className="mt-2 max-w-3xl text-[#5c5349]">
            Visual storytelling for institute growth: enrollment, staff capability, and campus development milestones.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {progressStories.map((story) => (
              <article key={story.title} className="overflow-hidden rounded-2xl border border-[#e2ddd4] bg-white shadow-sm">
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(26,20,16,0.12), rgba(26,20,16,0.42)), url(${story.image})` }}
                />
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-[#5c1a2a]">{story.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c5349]">{story.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
