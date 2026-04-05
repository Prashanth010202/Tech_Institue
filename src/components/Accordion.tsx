import { useId, useState, type ReactNode } from 'react'

export type AccordionItem = {
  id: string
  title: string
  content: ReactNode
}

type Props = {
  items: AccordionItem[]
}

export default function Accordion({ items }: Props) {
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <ul className="divide-y divide-[#e2ddd4] rounded-xl border border-[#e2ddd4] bg-white shadow-sm">
      {items.map((item) => {
        const open = openId === item.id
        const panelId = `${baseId}-${item.id}-panel`
        const headId = `${baseId}-${item.id}-head`
        return (
          <li key={item.id}>
            <h3>
              <button
                type="button"
                id={headId}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[#1a1410] transition-colors hover:bg-[#faf7f2] md:px-5"
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span className="font-serif text-lg font-semibold text-[#5c1a2a]">{item.title}</span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e2ddd4] bg-[#f0ebe3] text-sm font-bold text-[#5c1a2a]"
                  aria-hidden
                >
                  {open ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headId}
              hidden={!open}
              className={open ? 'border-t border-[#e2ddd4] bg-[#faf7f2]/80 px-4 py-4 text-sm leading-relaxed text-[#5c5349] md:px-5' : ''}
            >
              {open ? item.content : null}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
