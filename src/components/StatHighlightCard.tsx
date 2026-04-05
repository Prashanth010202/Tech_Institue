import { getHighlightTheme } from '../lib/highlightThemes'

type Props = {
  value: string
  label: string
  hint: string
  index: number
}

/** Large stat + title + hint — colorful gradient panel, left-aligned, rounded, shadowed */
export default function StatHighlightCard({ value, label, hint, index }: Props) {
  const t = getHighlightTheme(index)
  return (
    <div
      className={`rounded-2xl border-2 p-6 text-left backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl ${t.card}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-lg shadow-inner shadow-white/80" aria-hidden>
          {t.icon}
        </span>
      </div>
      <p className={`font-serif text-4xl font-bold tracking-tight md:text-5xl ${t.value}`}>{value}</p>
      <p className={`mt-3 text-base font-bold ${t.title}`}>{label}</p>
      <p className={`mt-1 text-sm font-medium leading-snug ${t.hint}`}>{hint}</p>
    </div>
  )
}
