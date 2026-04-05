import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function PageShell({ title, subtitle, children }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <header className="mb-10 border-b border-[#e2ddd4] pb-8">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#5c1a2a] md:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#5c5349]">{subtitle}</p> : null}
      </header>
      <div className="space-y-8 text-[#1a1410]">{children}</div>
    </div>
  )
}
