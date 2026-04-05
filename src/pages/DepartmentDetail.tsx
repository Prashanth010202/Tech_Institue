import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getDepartmentBySlug } from '../data/departments'
import { campusImages } from '../lib/images'

const sectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision' },
  { id: 'programs', label: 'Programs' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'labs', label: 'Labs' },
  { id: 'research', label: 'Research' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'hod', label: 'HOD contact' },
] as const

export default function DepartmentDetail() {
  const { slug } = useParams()
  const dept = useMemo(() => (slug ? getDepartmentBySlug(slug) : undefined), [slug])
  const [openFacultyId, setOpenFacultyId] = useState<string | null>(null)

  if (!slug || !dept) {
    return <Navigate to="/departments" replace />
  }

  const glance = [
    { label: 'Programmes', value: String(dept.programs.length) },
    { label: 'Faculty', value: String(dept.faculty.length) },
    { label: 'Labs', value: String(dept.labs.length) },
    { label: 'Research highlights', value: String(dept.research.length) },
  ]

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[#fcd34d]/30 bg-[#fff8f0]">
        <div
          className="absolute inset-0 bg-cover bg-center [filter:brightness(1.12)_saturate(1.08)]"
          style={{ backgroundImage: `url(${campusImages.researchLab})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#5c1a2a]/48 via-[#fff7ed]/55 to-[#fffbeb]/92" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-[#57534e]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/departments" className="font-bold text-[#b45309] hover:underline">
                  Departments
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-[#3d111c]">{dept.name}</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-4xl font-serif text-3xl font-semibold tracking-tight text-[#3d111c] md:text-4xl lg:text-5xl">
            {dept.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-[#5c1a2a] md:text-lg">{dept.short}</p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {glance.map((g) => (
              <li
                key={g.label}
                className="rounded-xl border border-[#fcd34d]/50 bg-white/90 px-4 py-3 shadow-md shadow-amber-100/60 backdrop-blur-sm"
              >
                <p className="font-serif text-2xl font-semibold text-[#b45309]">{g.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#78716c]">{g.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">

      <nav
        aria-label="On this page"
        className="sticky top-[52px] z-40 -mx-4 border-b border-[#e2ddd4] bg-[#faf7f2]/95 px-4 py-3 backdrop-blur-sm md:static md:mx-0 md:my-8 md:rounded-lg md:border md:px-4"
      >
        <ul className="flex flex-wrap gap-2">
          {sectionLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-flex rounded-md border border-[#e2ddd4] bg-white px-3 py-1.5 text-xs font-medium text-[#1a1410] hover:border-[#5c1a2a] hover:text-[#5c1a2a] md:text-sm"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 space-y-16 md:mt-12">
        <section id="about" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">About</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#5c5349]">{dept.about}</p>
        </section>

        <section id="vision" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Vision</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#5c5349]">{dept.vision}</p>
        </section>

        <section id="programs" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Programs &amp; curriculum</h2>
          <ul className="mt-6 space-y-4">
            {dept.programs.map((p) => (
              <li key={p.name} className="rounded-lg border border-[#e2ddd4] bg-white p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-lg font-semibold text-[#1a1410]">{p.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#9a7212]">{p.duration}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#5c5349]">{p.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="curriculum" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Curriculum highlights</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#5c5349]">
            {dept.curriculumHighlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section id="faculty" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Faculty — list &amp; profiles</h2>
          <p className="mt-2 text-sm text-[#5c5349]">Select a name to expand the full profile. Same interaction pattern on all screen sizes.</p>
          <ul className="mt-6 space-y-3">
            {dept.faculty.map((f) => {
              const open = openFacultyId === f.id
              return (
                <li key={f.id} className="rounded-lg border border-[#e2ddd4] bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFacultyId(open ? null : f.id)}
                    className="flex w-full flex-col gap-1 px-4 py-4 text-left md:flex-row md:items-center md:justify-between"
                    aria-expanded={open}
                    aria-controls={`faculty-panel-${f.id}`}
                    id={`faculty-trigger-${f.id}`}
                  >
                    <span className="flex items-center gap-3">
                      <img
                        src={f.image}
                        alt={`${f.name} portrait`}
                        className="h-14 w-14 rounded-full border border-[#e2ddd4] object-cover object-center"
                        loading="lazy"
                      />
                      <span>
                        <span className="block font-serif text-lg font-semibold text-[#1a1410]">{f.name}</span>
                        <span className="text-sm text-[#5c5349]">{f.title}</span>
                      </span>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#9a7212]">{open ? 'Hide' : 'Profile'}</span>
                  </button>
                  {open ? (
                    <div
                      className="border-t border-[#e2ddd4] px-4 py-4 text-sm text-[#5c5349]"
                      id={`faculty-panel-${f.id}`}
                      role="region"
                      aria-labelledby={`faculty-trigger-${f.id}`}
                    >
                      <div className="grid gap-4 md:grid-cols-[140px_1fr] md:items-start">
                        <img
                          src={f.image}
                          alt={`${f.name} faculty profile`}
                          className="h-36 w-full rounded-xl border border-[#e2ddd4] object-cover object-center"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-[#1a1410]">{f.title}</p>
                          <p className="mt-2 leading-relaxed">{f.bio}</p>
                          <p className="mt-3">
                            <span className="font-medium text-[#1a1410]">Areas:</span> {f.areas.join(', ')}
                          </p>
                          <p className="mt-2">
                            <span className="font-medium text-[#1a1410]">Email:</span>{' '}
                            <a className="text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-2" href={`mailto:${f.email}`}>
                              {f.email}
                            </a>
                          </p>
                          <p className="mt-1">
                            <span className="font-medium text-[#1a1410]">Phone:</span> {f.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </section>

        <section id="labs" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Labs</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {dept.labs.map((lab) => (
              <li key={lab.name} className="overflow-hidden rounded-xl border border-[#e2ddd4] bg-white shadow-sm">
                <div
                  className="h-40 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(26,20,16,0.08), rgba(26,20,16,0.42)), url(${lab.image})`,
                  }}
                  aria-label={`${lab.name} image`}
                />
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-[#1a1410]">{lab.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c5349]">{lab.description}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#9a7212]">Focus: {lab.focus}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#5c5349]">
                    {lab.details.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-1 text-[#b7791f]" aria-hidden>
                          ●
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="research" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Research</h2>
          <ul className="mt-6 space-y-4">
            {dept.research.map((r) => (
              <li key={r.title} className="rounded-lg border border-[#e2ddd4] bg-[#f0ebe3]/40 p-5">
                <h3 className="font-serif text-lg font-semibold text-[#1a1410]">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c5349]">{r.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="achievements" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Achievements</h2>
          <ul className="mt-6 divide-y divide-[#e2ddd4] rounded-lg border border-[#e2ddd4] bg-white">
            {dept.achievements.map((a) => (
              <li key={a.title} className="px-4 py-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#9a7212]">{a.year}</span>
                  <h3 className="font-serif text-lg font-semibold text-[#1a1410]">{a.title}</h3>
                </div>
                <p className="mt-2 text-sm text-[#5c5349]">{a.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="hod" className="scroll-mt-36 md:scroll-mt-28">
          <h2 className="font-serif text-2xl font-semibold text-[#5c1a2a]">Contact (HOD)</h2>
          <div className="mt-6 rounded-lg border border-[#e2ddd4] bg-[#5c1a2a] p-6 text-[#faf7f2] md:p-8">
            <p className="font-serif text-xl font-semibold">{dept.hod.name}</p>
            <p className="mt-1 text-sm text-[#f0ebe3]">{dept.hod.title}</p>
            <dl className="mt-6 space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-[#c9a227]">Email</dt>
                <dd>
                  <a className="underline decoration-[#c9a227] underline-offset-2" href={`mailto:${dept.hod.email}`}>
                    {dept.hod.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#c9a227]">Phone</dt>
                <dd>{dept.hod.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#c9a227]">Office</dt>
                <dd>{dept.hod.office}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#c9a227]">Hours</dt>
                <dd>{dept.hod.hours}</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

        <p className="mt-14 text-center text-sm text-[#5c5349]">
          <Link to="/departments" className="font-semibold text-[#5c1a2a] underline decoration-[#c9a227] underline-offset-4">
            ← Back to all departments
          </Link>
        </p>
      </div>
    </div>
  )
}
