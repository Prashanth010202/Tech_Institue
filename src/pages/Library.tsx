import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { getHighlightTheme } from '../lib/highlightThemes'
import { campusImages } from '../lib/images'

const accessRequirements = [
  {
    id: 'id-enrollment',
    title: 'Institute ID and active enrollment',
    detail: 'Students need valid ID and current semester enrollment to issue or renew books.',
    related: [
      'Carry physical/digital institute ID at entry and issue counter.',
      'Enrollment must be active for the current term in the ERP.',
      'Provisional admission cards are accepted only during orientation week.',
    ],
  },
  {
    id: 'account-activation',
    title: 'Library account activation',
    detail: 'One-time activation at orientation with email and mobile verification for alerts.',
    related: [
      'Account is created by library desk after ID verification.',
      'OTP-based mobile verification enables due-date reminders.',
      'Students get a self-service portal login for renewals and hold requests.',
    ],
  },
  {
    id: 'issue-return',
    title: 'Issue and return discipline',
    detail: 'Books can be renewed if no hold exists; overdue fines apply after grace period.',
    related: [
      'UG limit: up to 4 books; PG/Research: up to 6 books (illustrative).',
      'Standard issue period is 14 days, renewable twice if no waiting list.',
      'Overdue penalties pause new issue privileges until cleared.',
    ],
  },
  {
    id: 'etiquette',
    title: 'Reading hall and digital etiquette',
    detail: 'Silent zones, device charging limits, and fair-use policy for e-resource downloads.',
    related: [
      'Silent floor is strictly no-calls/no-group-discussion.',
      'E-resource use follows institute fair-use and licensing policy.',
      'Charging bays are time-slotted during peak exam weeks.',
    ],
  },
] as const

const deptCollections = [
  { dept: 'Computer Science and AI', books: '5,200+', focus: 'Algorithms, AI/ML, cloud, systems design, cybersecurity' },
  { dept: 'Electronics and EEE', books: '3,100+', focus: 'VLSI, embedded systems, power electronics, control systems' },
  { dept: 'Mechanical and Civil', books: '4,000+', focus: 'Thermal, CAD/CAM, materials, structures, geotechnical' },
  { dept: 'Applied Sciences', books: '2,400+', focus: 'Mathematics, physics, chemistry, communication skills' },
  { dept: 'MBA and Management', books: '2,000+', focus: 'Finance, operations, HR, strategy, business analytics' },
  { dept: 'Interdisciplinary and exam prep', books: '1,600+', focus: 'Innovation, entrepreneurship, UPSC/GATE/GRE resources' },
] as const

const instituteLibraryNeeds = [
  'Updated syllabus-mapped books every semester across all departments.',
  'Digital access to journals, IEEE/ACM-like resources, and remote authentication.',
  'Plagiarism-awareness and citation support for projects, theses, and publications.',
  'Extended exam-season hours with separate silent reading and discussion zones.',
  'Department librarian coordinators for faster procurement and book recommendation cycles.',
] as const

export default function Library() {
  const [selectedRequirementId, setSelectedRequirementId] = useState<(typeof accessRequirements)[number]['id']>(
    accessRequirements[0].id,
  )

  const selectedRequirement = useMemo(
    () => accessRequirements.find((item) => item.id === selectedRequirementId) ?? accessRequirements[0],
    [selectedRequirementId],
  )

  return (
    <div>
      <PageHero
        imageUrl={campusImages.heroLibrary}
        title="Library"
        subtitle="Books, journals, digital resources, reading halls, and discipline-wise collections for every department."
      />

      <section className="border-b border-[#e2ddd4] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Library Requirements</p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-[#5c1a2a] md:text-3xl">What students need to use the library</h2>
            </div>
            <Link to="/students" className="text-sm font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4">
              Student handbook route →
            </Link>
          </div>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {accessRequirements.map((item, i) => {
              const t = getHighlightTheme(i)
              const isSelected = selectedRequirementId === item.id
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => setSelectedRequirementId(item.id)}
                    className={[
                      'w-full rounded-2xl p-5 text-left shadow-lg transition-all',
                      t.card,
                      isSelected ? 'ring-2 ring-[#5c1a2a] ring-offset-2 ring-offset-white' : 'hover:-translate-y-0.5 hover:shadow-xl',
                    ].join(' ')}
                    aria-expanded={isSelected}
                  >
                    <h3 className={`font-serif text-xl font-bold ${t.title}`}>{item.title}</h3>
                    <p className={`mt-2 text-sm font-medium leading-relaxed ${t.hint}`}>{item.detail}</p>
                    <span className="mt-3 inline-block text-xs font-bold text-[#b45309]">
                      {isSelected ? 'Selected' : 'Click to view details'}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          <article className="mt-6 rounded-2xl border border-[#e2ddd4] bg-gradient-to-br from-white to-[#faf7f2] p-5 shadow-sm md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">Selected requirement details</p>
            <h3 className="mt-2 font-serif text-xl font-bold text-[#5c1a2a]">{selectedRequirement.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5c5349]">{selectedRequirement.detail}</p>
            <ul className="mt-4 space-y-2">
              {selectedRequirement.related.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-[#5c5349]">
                  <span className="text-[#b45309]" aria-hidden>
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        className="border-b border-[#fcd34d]/30"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(255,253,248,0.96) 0%, rgba(254,243,199,0.35) 55%, rgba(255,255,255,0.96) 100%), url(${campusImages.digitalClass})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">Department-wise books availability</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Illustrative collection by department. Replace counts with your audited library inventory.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {deptCollections.map((item, i) => {
              const t = getHighlightTheme(i)
              return (
                <li key={item.dept} className={`rounded-2xl p-5 shadow-md ${t.card}`}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`font-serif text-lg font-bold ${t.title}`}>{item.dept}</h3>
                    <span className={`rounded-full bg-white/85 px-3 py-1 text-xs font-bold shadow-sm ${t.value}`}>{item.books}</span>
                  </div>
                  <p className={`mt-3 text-sm font-medium leading-relaxed ${t.hint}`}>{item.focus}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="bg-[#faf7f2]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a] md:text-3xl">What the institute library should provide</h2>
          <p className="mt-2 max-w-2xl text-[#5c5349]">
            Core priorities for a modern institute library serving UG, PG, research, and placement preparation.
          </p>
          <ul className="mt-6 space-y-3">
            {instituteLibraryNeeds.map((line) => (
              <li key={line} className="flex gap-3 rounded-xl border border-[#e2ddd4] bg-white p-4 shadow-sm">
                <span className="mt-0.5 text-[#b45309]" aria-hidden>
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-[#5c5349]">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
