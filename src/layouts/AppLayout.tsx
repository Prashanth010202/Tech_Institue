import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/placements', label: 'Placements' },
  { to: '/research', label: 'Research' },
  { to: '/progress', label: 'Progress' },
  { to: '/events', label: 'Events' },
  { to: '/library', label: 'Library' },
  { to: '/campus-life', label: 'Campus Life' },
  { to: '/students', label: 'Students' },
  { to: '/alumni', label: 'Alumni' },
  { to: '/contact', label: 'Contact' },
] as const

const logoUrl = `${import.meta.env.BASE_URL}logo-kpp.png`

function navClass(isActive: boolean) {
  return [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'kpp-nav-link--active bg-[#5c1a2a] text-[#faf7f2]'
      : 'text-[#1a1410] hover:bg-[#e2ddd4]/80',
  ].join(' ')
}

export default function AppLayout() {
  const [open, setOpen] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem('kpp-theme-mode') === 'dark' ? 'dark' : 'light'
  })
  const location = useLocation()
  const themeMenuRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    document.body.classList.toggle('theme-night', themeMode === 'dark')
    window.localStorage.setItem('kpp-theme-mode', themeMode)
    window.dispatchEvent(new CustomEvent('kpp-theme-change', { detail: themeMode === 'dark' ? 'night' : 'light' }))
  }, [themeMode])

  useEffect(() => {
    const onClickAway = (event: MouseEvent) => {
      if (!themeMenuRef.current) return
      if (!themeMenuRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false)
      }
    }
    window.addEventListener('mousedown', onClickAway)
    return () => window.removeEventListener('mousedown', onClickAway)
  }, [])

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#5c1a2a] focus:px-4 focus:py-2 focus:text-[#faf7f2]"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-[#e2ddd4] bg-[#faf7f2]/95 backdrop-blur-sm">
        <div className="flex w-full items-center justify-between gap-3 px-3 py-3 md:px-5 lg:px-6">
          <Link to="/" className="flex items-center gap-3 text-left min-w-0" onClick={() => setOpen(false)}>
            <img src={logoUrl} alt="KPP Institute of Technology logo" width={44} height={44} className="h-11 w-auto shrink-0 object-contain" />
            <span className="min-w-0 font-serif text-lg font-semibold leading-tight text-[#5c1a2a] md:text-xl">
              <span className="block truncate">KPP Institute of Technology</span>
              <span className="block font-sans text-xs font-medium uppercase tracking-wider text-[#5c5349]">KPPIT</span>
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-[#e2ddd4] bg-[#faf7f2] px-3 py-2 text-sm font-medium text-[#1a1410] lg:hidden"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav
            id="site-nav"
            className={[
              'lg:flex lg:flex-1 lg:justify-end',
              open ? 'absolute left-0 right-0 top-full border-b border-[#e2ddd4] bg-[#faf7f2] px-4 pb-4 pt-2 shadow-sm lg:static lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none' : 'hidden lg:flex',
            ].join(' ')}
            aria-label="Primary"
          >
            <ul className="flex max-h-[70svh] flex-col gap-1 overflow-y-auto lg:max-h-none lg:flex-row lg:flex-nowrap lg:items-center lg:justify-end lg:gap-0.5 lg:overflow-visible">
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) => [navClass(isActive), 'lg:px-2 lg:py-1.5 lg:text-[13px] lg:whitespace-nowrap'].join(' ')}
                    onClick={() => setOpen(false)}
                    key={`${location.pathname}-${to}`}
                  >
                    <span className="relative z-[1]">{label}</span>
                  </NavLink>
                </li>
              ))}
              <li className="relative" ref={themeMenuRef}>
                <button
                  type="button"
                  onClick={() => setThemeMenuOpen((v) => !v)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e2ddd4] bg-white/90 text-base text-[#1a1410] shadow-sm hover:bg-white"
                  aria-haspopup="menu"
                  aria-expanded={themeMenuOpen}
                  aria-label="Theme settings"
                >
                  <span aria-hidden>🎨</span>
                </button>
                {themeMenuOpen ? (
                  <div className="absolute right-0 z-30 mt-2 w-40 overflow-hidden rounded-xl border border-[#e2ddd4] bg-white shadow-lg">
                    <button
                      type="button"
                      className={[
                        'block w-full px-3 py-2 text-left text-sm font-semibold',
                        themeMode === 'light' ? 'bg-[#5c1a2a] text-[#faf7f2]' : 'text-[#1a1410] hover:bg-[#faf7f2]',
                      ].join(' ')}
                      onClick={() => {
                        setThemeMode('light')
                        setThemeMenuOpen(false)
                      }}
                    >
                      Light Theme
                    </button>
                    <button
                      type="button"
                      className={[
                        'block w-full px-3 py-2 text-left text-sm font-semibold',
                        themeMode === 'dark' ? 'bg-[#0f172a] text-[#f8fafc]' : 'text-[#1a1410] hover:bg-[#faf7f2]',
                      ].join(' ')}
                      onClick={() => {
                        setThemeMode('dark')
                        setThemeMenuOpen(false)
                      }}
                    >
                      Dark Theme
                    </button>
                  </div>
                ) : null}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-auto border-t border-[#e2ddd4] bg-[#f0ebe3]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="KPP Institute of Technology logo" width={40} height={40} className="h-10 w-auto object-contain" />
              <p className="font-serif text-lg font-semibold text-[#5c1a2a]">KPP Institute of Technology</p>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5c5349]">
              A concept demonstration website for the hackathon brief: unified navigation, rich department module, and institute-wide
              information for prospective students and partners.
            </p>
          </div>
          <div className="text-sm text-[#5c5349]">
            <p className="font-medium text-[#1a1410]">Campus</p>
            <p className="mt-2">KPPIT Main Campus, Bengaluru Urban — example address for demo.</p>
            <p className="mt-2">
              <span className="font-medium text-[#1a1410]">Phone:</span> +91 80 0000 1000
            </p>
            <p className="mt-1">
              <span className="font-medium text-[#1a1410]">Email:</span> admissions@kppit.edu
            </p>
          </div>
        </div>
        <div className="border-t border-[#e2ddd4] py-4 text-center text-xs text-[#5c5349]">
          © {new Date().getFullYear()} KPP Institute of Technology (KPPIT). Demo content.
        </div>
      </footer>
    </div>
  )
}
