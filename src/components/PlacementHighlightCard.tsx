import type { PlacementHighlight } from '../data/placementHighlights'

const CARD_ACCENTS = [
  'ring-2 ring-amber-300/70 shadow-lg shadow-amber-200/35',
  'ring-2 ring-sky-300/70 shadow-lg shadow-sky-200/35',
  'ring-2 ring-violet-300/70 shadow-lg shadow-violet-200/35',
  'ring-2 ring-teal-300/70 shadow-lg shadow-teal-200/35',
  'ring-2 ring-rose-300/70 shadow-lg shadow-rose-200/35',
  'ring-2 ring-indigo-300/70 shadow-lg shadow-indigo-200/35',
] as const

type Props = {
  item: PlacementHighlight
  index: number
  variant?: 'marquee' | 'grid'
}

export default function PlacementHighlightCard({ item, index, variant = 'grid' }: Props) {
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length]!
  const narrow = variant === 'marquee'

  return (
    <article
      className={[
        'flex flex-col overflow-hidden rounded-2xl bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl',
        accent,
        narrow ? 'w-[260px] shrink-0 sm:w-[280px]' : 'h-full',
      ].join(' ')}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#3d111c]">
        <img
          src={item.image}
          alt={`${item.name}, ${item.branch} — placed at ${item.company}`}
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d111c]/90 via-[#3d111c]/15 to-transparent" aria-hidden />
        <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/40 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
          <p className="font-serif text-sm font-bold text-[#5c1a2a]">{item.name}</p>
          <p className="text-[11px] font-semibold text-stone-600">{item.branch}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t-2 border-[#e2ddd4]/80 bg-gradient-to-b from-[#fffdf8] to-[#faf7f2] p-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Placed at</p>
          <p className={`font-semibold leading-snug text-[#1a1410] ${narrow ? 'text-sm' : 'text-base'}`}>{item.company}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#e2ddd4]/80 pt-3">
          <span className="text-[10px] font-bold uppercase tracking-wide text-stone-500">CTC</span>
          <span className="rounded-full bg-gradient-to-r from-[#5c1a2a] via-[#7f1d1d] to-[#b45309] px-3 py-1 text-xs font-bold tabular-nums text-[#fffbeb] shadow-sm">
            {item.ctc}
          </span>
        </div>
      </div>
    </article>
  )
}
