type Props = {
  title: string
  subtitle?: string
  imageUrl: string
  /** Vertical padding scale */
  size?: 'md' | 'lg'
}

/**
 * Bright, modern hero: vivid photo + warm light wash (not a heavy grey/mood filter).
 */
export default function PageHero({ title, subtitle, imageUrl, size = 'lg' }: Props) {
  const pad = size === 'lg' ? 'py-16 md:py-24' : 'py-12 md:py-20'
  return (
    <div className="relative overflow-hidden border-b border-[#fcd34d]/30 bg-[#fff8f0]">
      <div
        className="absolute inset-0 bg-cover bg-center [filter:brightness(1.14)_saturate(1.12)]"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />
      {/* Warm, airy overlay — keeps photography bright while text stays readable */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#5c1a2a]/50 via-[#fde68a]/35 to-[#fffbeb]/88"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#fffdf8]/95 via-transparent to-[#5c1a2a]/25" aria-hidden />
      <div className={`relative mx-auto max-w-6xl px-4 ${pad} md:px-6`}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#92400e] drop-shadow-sm">KPP Institute of Technology</p>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight text-[#3d111c] drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] md:text-5xl md:leading-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-[#431b24] md:text-lg md:text-[#5c1a2a]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  )
}
