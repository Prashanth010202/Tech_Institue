import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const featuredEvents = [
  {
    title: 'Inter-Hostel Sports League',
    type: 'Sports',
    when: 'Saturday, 6:30 AM - 9:30 AM',
    where: 'Main Ground and Indoor Arena',
    about: 'Football, cricket, athletics, and mixed relay fixtures with physiotherapy support desk.',
    image: campusImages.sports,
  },
  {
    title: 'Rhythm and Rang Cultural Night',
    type: 'Cultural',
    when: 'Second Friday, 6:00 PM onwards',
    where: 'Open Air Auditorium',
    about: 'Dance, music, theatre, and spoken-word showcases led by arts, media, and dramatics guilds.',
    image: campusImages.culture,
  },
  {
    title: 'Innovation Demo Evening',
    type: 'Technical',
    when: 'Last Thursday, 4:30 PM - 7:00 PM',
    where: 'Digital Studio Block',
    about: 'Capstone teams and startup clubs demo prototypes to faculty, alumni, and industry mentors.',
    image: campusImages.digitalClass,
  },
  {
    title: 'Community Outreach Drive',
    type: 'Social impact',
    when: 'First Sunday, 8:00 AM - 1:00 PM',
    where: 'Partner schools and civic centers',
    about: 'Volunteer teaching, STEM activity booths, and mentorship circles coordinated by student chapters.',
    image: campusImages.students,
  },
] as const

const quickInfo = [
  { label: 'Annual events', value: '45+', hint: 'Sports, cultural, technical, social impact' },
  { label: 'Student clubs participating', value: '40+', hint: 'Cross-department collaboration' },
  { label: 'Average monthly footfall', value: '3.5k+', hint: 'Students, parents, alumni, guests' },
]

export default function Events() {
  return (
    <div>
      <PageHero
        imageUrl={campusImages.culture}
        title="Events"
        subtitle="Sports, cultural, technical, and community events that keep campus life vibrant all year."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <ul className="grid gap-4 md:grid-cols-3">
            {quickInfo.map((item, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={item.label} className={`rounded-2xl p-6 shadow-lg ${t.card}`}>
                  <p className={`font-serif text-4xl font-bold ${t.value}`}>{item.value}</p>
                  <p className={`mt-2 text-base font-bold ${t.title}`}>{item.label}</p>
                  <p className={`mt-1 text-sm font-medium ${t.hint}`}>{item.hint}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Featured campus events</h2>
              <p className="mt-2 max-w-2xl text-[#5c5349]">
                Event cards include format, timing, venue, and what students can expect.
              </p>
            </div>
            <Link to="/campus-life" className="text-sm font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4">
              Campus life overview →
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredEvents.map((event, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={event.title}>
                  <article className={`flex h-full flex-col overflow-hidden rounded-2xl shadow-lg ${t.card}`}>
                    <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 to-transparent" />
                      <span className={`absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold ${t.value}`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className={`font-serif text-lg font-bold leading-tight ${t.title}`}>{event.title}</h3>
                      <p className={`mt-3 text-xs font-semibold uppercase tracking-wide ${t.value}`}>{event.when}</p>
                      <p className={`mt-1 text-sm font-medium ${t.hint}`}>{event.where}</p>
                      <p className={`mt-3 flex-1 text-sm leading-relaxed ${t.hint}`}>{event.about}</p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}
