import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <div className="min-h-screen bg-brand-base text-brand-fog">
      <header className="sticky top-0 z-50 border-b border-brand-mist/20 bg-brand-slate/80 backdrop-blur">
        <div className="mx-auto max-w-[72rem] px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-tight text-brand-fog">Sameer Yadav</Link>
          <nav className="flex items-center gap-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-brand-fog'
                    : 'text-brand-mist hover:text-brand-fog'
                }
              >
                {n.label}
              </NavLink>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              className="px-3 py-2 rounded-xl bg-brand-base/40 border border-brand-mist/20 hover:bg-brand-slate"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[72rem] px-4 py-10 text-white">
  {/* thin highlight line */}
  <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-mist/30 to-transparent mb-8" />
  {children}
</main>


      <footer className="border-t border-brand-mist/20 mt-10">
        <div className="mx-auto max-w-[72rem] px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-mist">
          <p>© {new Date().getFullYear()} Sameer Yadav</p>
          <div className="flex gap-4">
            <a href="" className="hover:text-brand-fog" target="_blank" rel="noreferrer">GitHub</a>
            <a href="" className="hover:text-brand-fog" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="" className="hover:text-brand-fog" target="_blank" rel="noreferrer">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
