import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const lifeTabs = [
  {
    id: 'live',
    label: 'Live',
    headline: 'Rooms that feel like halls, not lockers.',
    copy: 'Resident advisors host weekly “quiet goals” check-ins. Laundry, Wi‑Fi, and clinic slots are booked from the same student app.',
    image: campusImages.quad,
  },
  {
    id: 'fuel',
    label: 'Fuel',
    headline: 'Mess menus with allergens spelled out.',
    copy: 'Vegetarian mains by default with optional protein add-ons. Nutrition desk publishes weekly micronutrient highlights (demo).',
    image: campusImages.mess,
  },
  {
    id: 'move',
    label: 'Move',
    headline: 'Clubs that sweat together.',
    copy: 'Inter-hostel cricket, 5k sunrise squad, and a bouldering wall pilot. Trainers log attendance for insurance compliance.',
    image: campusImages.sports,
  },
  {
    id: 'express',
    label: 'Express',
    headline: 'Festivals with safety as a feature.',
    copy: 'Light design students collaborate with EEE for power budgets; medical tent and counselor walk-in run in parallel.',
    image: campusImages.culture,
  },
] as const

const dayParts = [
  {
    time: '07:30',
    title: 'Morning fitness and coffee',
    venue: 'Athletics track · Courtyard kiosk',
    track: 'Wellbeing',
    detail: 'Sunrise run club, yoga lawn, and healthy breakfast counters open before classes.',
  },
  {
    time: '10:00',
    title: 'Academic labs and project studios',
    venue: 'Department blocks · Innovation labs',
    track: 'Academics',
    detail: 'Department lab sessions, mini-demos, and mentor check-ins for ongoing capstone teams.',
  },
  {
    time: '16:30',
    title: 'Sports and club hour',
    venue: 'Main ground · Courts · Student center',
    track: 'Sports & Clubs',
    detail: 'Inter-hostel practice, robotics and coding clubs, theatre rehearsals, and dance teams.',
  },
  {
    time: '19:30',
    title: 'Cultural and event window',
    venue: 'Open air auditorium',
    track: 'Cultural',
    detail: 'Music nights, cultural showcases, debate forums, and guest performances on event days.',
  },
  {
    time: '21:00',
    title: 'Safe night loop and study support',
    venue: 'Hostel corridors · Reading halls',
    track: 'Safety',
    detail: 'Night shuttle, lit pathways, counseling support hotline, and extended quiet-study spaces.',
  },
]

const residentialHighlights = [
  {
    id: 'hostel',
    title: 'Hostel life and facilities',
    image: campusImages.hostel,
    points: [
      'Separate blocks with 24x7 security desk, biometric access, and wardens on each floor.',
      'Wi-Fi enabled study lounges, reading corners, laundry zones, and backup power in all blocks.',
      'Weekly mentor check-ins, medical support referral desk, and late-entry safety protocol.',
    ],
  },
  {
    id: 'canteen',
    title: 'Canteen and dining services',
    image: campusImages.canteen,
    points: [
      'Multi-cuisine counters with vegetarian-first menus and clearly marked allergen information.',
      'Extended canteen hours during exam weeks with healthy snack combos and hydration stations.',
      'Digital token ordering, cashless payments, and hygiene audits displayed at entry points.',
    ],
  },
] as const

export default function CampusLife() {
  const [tab, setTab] = useState<(typeof lifeTabs)[number]['id']>('live')

  const active = lifeTabs.find((t) => t.id === tab) ?? lifeTabs[0]

  return (
    <div>
      <PageHero
        imageUrl={campusImages.students}
        title="Campus Life"
        subtitle="Hostels, dining, health, sports, and culture — one rich layout that simply reflows between desktop and phone."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Bento glimpses</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">Photography-forward tiles — same cards everywhere, columns stack on narrow screens.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4 md:grid-rows-2">
            <Link
              to="/students"
              className="group relative flex min-h-[200px] overflow-hidden rounded-2xl border border-[#e2ddd4] md:col-span-2 md:row-span-2"
              style={{
                backgroundImage: `url(${campusImages.quad})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/85 via-[#1a1410]/25 to-transparent transition-opacity group-hover:from-[#1a1410]/90" />
              <div className="relative mt-auto p-6 text-[#faf7f2]">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a227]">Heart of campus</p>
                <p className="mt-2 font-serif text-2xl font-semibold">The Quad · after-class democracy</p>
              </div>
            </Link>
            <div
              className="relative min-h-[160px] overflow-hidden rounded-2xl border border-[#e2ddd4]"
              style={{
                backgroundImage: `url(${campusImages.mess})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#3d111c]/55" />
              <p className="relative flex h-full items-end p-4 font-serif text-lg font-semibold text-[#faf7f2]">Mess & nutrition desk</p>
            </div>
            <div
              className="relative min-h-[160px] overflow-hidden rounded-2xl border border-[#e2ddd4]"
              style={{
                backgroundImage: `url(${campusImages.sports})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#5c1a2a]/50" />
              <p className="relative flex h-full items-end p-4 font-serif text-lg font-semibold text-[#faf7f2]">Fitness & leagues</p>
            </div>
            <div
              className="relative min-h-[160px] overflow-hidden rounded-2xl border border-[#e2ddd4] md:col-span-2"
              style={{
                backgroundImage: `url(${campusImages.culture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/80 to-transparent" />
              <p className="relative flex h-full items-center p-6 font-serif text-xl font-semibold text-[#faf7f2]">
                Arts guild · lights, sound, and inclusive staging
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[#e2ddd4]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(250,247,242,0.97), rgba(240,235,227,0.95)), url(${campusImages.heroLibrary})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Life at KPPIT — choose a lens</h2>
          <p className="mt-2 text-[#5c5349]">Tap the chips; content swaps instantly with no separate “mobile site.”</p>
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Campus life areas">
            {lifeTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                className={[
                  'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                  tab === t.id
                    ? 'border-[#5c1a2a] bg-[#5c1a2a] text-[#faf7f2]'
                    : 'border-[#e2ddd4] bg-white text-[#1a1410] hover:border-[#c9a227]',
                ].join(' ')}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
            <div
              className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#e2ddd4] shadow-md"
              style={{
                backgroundImage: `url(${active.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="tabpanel"
            />
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#5c1a2a]">{active.headline}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#5c5349]">{active.copy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">A day stitched together</h2>
          <p className="mt-2 max-w-3xl text-[#5c5349]">
            Upgraded flow with richer information: each stop now shows track, venue, and what actually happens in that slot.
          </p>
          <ol className="relative mt-10 border-l-2 border-[#c9a227]/60 pl-8 md:pl-10">
            {dayParts.map((d, i) => (
              <li key={d.time} className={i === dayParts.length - 1 ? '' : 'mb-10'}>
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-[#c9a227] bg-[#faf7f2]" aria-hidden />
                <article className={`rounded-2xl p-5 shadow-md ${getHighlightTheme(i).card}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-sm font-semibold text-[#9a7212]">{d.time}</p>
                    <span className="rounded-full bg-white/85 px-2.5 py-1 text-xs font-bold text-[#5c1a2a] shadow-sm">{d.track}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-[#1a1410]">{d.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#5c1a2a]">{d.venue}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5c5349]">{d.detail}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Hostel and canteen at a glance</h2>
          <p className="mt-2 max-w-3xl text-[#5c5349]">
            Daily residential support and food services with student safety, convenience, and wellbeing built into operations.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {residentialHighlights.map((item, i) => (
              <article key={item.id} className={`overflow-hidden rounded-2xl border shadow-sm ${getHighlightTheme(i + 2).card}`}>
                <div
                  className="h-48 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(26,20,16,0.08), rgba(26,20,16,0.45)), url(${item.image})`,
                  }}
                  aria-label={item.title}
                />
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-[#1a1410]">{item.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#5c5349]">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 text-[#9a7212]" aria-hidden>
                          ●
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
          <div className="rounded-2xl border border-[#e2ddd4] bg-gradient-to-br from-[#f0ebe3] to-white p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#5c1a2a] md:text-2xl">Health, safety, belonging</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#5c5349] md:text-base">
                Health center hours, counseling referrals, and emergency numbers live in the student handbook hub. ICASH-style routes
                and anti-discrimination office contacts are one tap away.
              </p>
            </div>
            <Link
              to="/students"
              className="mt-6 inline-flex shrink-0 rounded-md bg-[#5c1a2a] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#3d111c] md:mt-0"
            >
              Open student support →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
