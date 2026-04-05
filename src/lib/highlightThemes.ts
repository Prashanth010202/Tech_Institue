/** Rotating colorful highlight styles — stat cards, metrics, small panels */

export type HighlightTheme = {
  icon: string
  card: string
  value: string
  title: string
  hint: string
}

export const HIGHLIGHT_THEMES: HighlightTheme[] = [
  {
    icon: '📚',
    card: 'border-amber-300/70 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 shadow-lg shadow-amber-200/35 ring-2 ring-amber-200/40',
    value: 'text-[#9a3412]',
    title: 'text-stone-900',
    hint: 'text-amber-900/75',
  },
  {
    icon: '👩‍🏫',
    card: 'border-sky-300/70 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50 shadow-lg shadow-sky-200/35 ring-2 ring-sky-200/40',
    value: 'text-sky-900',
    title: 'text-stone-900',
    hint: 'text-sky-900/75',
  },
  {
    icon: '🎭',
    card: 'border-violet-300/70 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 shadow-lg shadow-violet-200/35 ring-2 ring-violet-200/40',
    value: 'text-violet-900',
    title: 'text-stone-900',
    hint: 'text-violet-900/75',
  },
  {
    icon: '🔬',
    card: 'border-teal-300/70 bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50 shadow-lg shadow-teal-200/35 ring-2 ring-teal-200/40',
    value: 'text-teal-900',
    title: 'text-stone-900',
    hint: 'text-teal-900/75',
  },
  {
    icon: '💼',
    card: 'border-rose-300/70 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 shadow-lg shadow-rose-200/35 ring-2 ring-rose-200/40',
    value: 'text-rose-900',
    title: 'text-stone-900',
    hint: 'text-rose-900/75',
  },
  {
    icon: '🌟',
    card: 'border-indigo-300/70 bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50 shadow-lg shadow-indigo-200/35 ring-2 ring-indigo-200/40',
    value: 'text-indigo-900',
    title: 'text-stone-900',
    hint: 'text-indigo-900/75',
  },
]

export function getHighlightTheme(index: number) {
  return HIGHLIGHT_THEMES[index % HIGHLIGHT_THEMES.length]!
}
