import { placementHighlights } from '../data/placementHighlights'
import PlacementHighlightCard from './PlacementHighlightCard'

const DOUBLE = [...placementHighlights, ...placementHighlights]

export default function PlacementMarquee() {
  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fffdf8] to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fffdf8] to-transparent sm:w-24"
        aria-hidden
      />
      <div className="kpp-placement-marquee flex w-max gap-5 px-4">
        {DOUBLE.map((item, i) => (
          <PlacementHighlightCard key={`${item.id}-${i}`} item={item} index={i} variant="marquee" />
        ))}
      </div>
    </div>
  )
}
