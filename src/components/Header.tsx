import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import logo from '@/assets/logo.svg'; // ← update if your file is e.g. logo.png

export default function Header() {
  const { theme, toggle } = useTheme();

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-mist/20 bg-brand-slate/80 backdrop-blur">
      <div className="mx-auto max-w-[72rem] px-4 h-16 flex items-center justify-between">
        {/* Logo instead of name; tooltip shows the name on hover */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Go to homepage"
          title="Sameer Yadav" // tooltip with the name
        >
          <img
            src={logo}
            alt="Sameer Yadav"
            className="h-8 w-8 rounded-xl shadow-sm ring-1 ring-white/10"
          />
          <span className="sr-only">Sameer Yadav</span>
        </Link>

        <nav className="flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                isActive ? 'text-brand-fog' : 'text-brand-mist hover:text-brand-fog'
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* Theme toggle button */}
          <button
            onClick={toggle}
            className="group relative px-3 py-2 rounded-xl bg-brand-base/40 border border-brand-mist/20 hover:bg-brand-slate"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}

