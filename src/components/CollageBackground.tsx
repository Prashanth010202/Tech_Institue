import { campusImages } from '../lib/images'

/** Campus-life mosaic — bright, saturated photos for collage layouts */
export const COLLAGE_TILES = [
  campusImages.quad,
  campusImages.students,
  campusImages.researchLab,
  campusImages.culture,
  campusImages.sports,
  campusImages.digitalClass,
] as const

type Props = {
  variant?: 'full-bleed' | 'strip'
  className?: string
}

/**
 * Decorative photo collage under content. `full-bleed` fills a `relative` parent; `strip` is a compact banner row.
 */
export default function CollageBackground({ variant = 'full-bleed', className = '' }: Props) {
  if (variant === 'strip') {
    return (
      <div
        className={[
          'border-y border-amber-200/70 bg-gradient-to-r from-sky-50/90 via-amber-50 to-rose-50/90 shadow-inner',
          className,
        ].join(' ')}
        aria-hidden
      >
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-1.5 px-3 py-2 sm:grid-cols-6 sm:gap-2 md:px-6 md:py-3">
          {COLLAGE_TILES.map((url, i) => (
            <div
              key={i}
              className={[
                'aspect-[5/4] rounded-xl bg-cover bg-center shadow-md ring-2 ring-white [filter:brightness(1.1)_saturate(1.2)] sm:aspect-[4/3]',
                i % 2 === 1 ? 'translate-y-0.5 sm:translate-y-1' : '-rotate-1 sm:rotate-0',
              ].join(' ')}
              style={{ backgroundImage: `url(${url})` }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={['pointer-events-none absolute inset-0', className].join(' ')} aria-hidden>
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-3 md:gap-3 md:p-5 [filter:brightness(1.1)_saturate(1.2)]">
        {COLLAGE_TILES.map((url, i) => (
          <div
            key={i}
            className={[
              'rounded-2xl bg-cover bg-center shadow-xl ring-2 ring-white/80',
              i === 1 ? 'translate-x-1 -rotate-1' : i === 4 ? 'translate-y-1 rotate-1' : '',
            ].join(' ')}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8]/78 via-[#fff7ed]/72 to-[#fffdf8]/84" />
    </div>
  )
}
