// src/components/Layout.tsx
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeSelector from './ThemeSelector'

export default function Layout({ children }: { children: React.ReactNode }) {

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/about', label: 'About' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--theme-gradient-background)' }}>
      <motion.header 
        className="sticky top-0 z-50 border-b backdrop-blur-lg"
        style={{ 
          borderColor: 'var(--theme-border)',
          backgroundColor: 'rgba(30, 41, 59, 0.8)'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-[72rem] px-4 h-16 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="font-bold text-lg tracking-tight"
              style={{ color: 'var(--theme-text)' }}
            >
              Sameer Yadav
            </Link>
          </motion.div>

          <nav className="flex items-center gap-6">
            {nav.map((n, index) => (
              <motion.div
                key={n.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'text-white' 
                        : 'hover:text-white'
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--theme-text)' : 'var(--theme-textSecondary)',
                    backgroundColor: isActive ? 'var(--theme-primary)' : 'transparent'
                  })}
                  end={n.to === '/'}
                >
                  {n.label}
                </NavLink>
              </motion.div>
            ))}
            <ThemeSelector />
          </nav>
        </div>
      </motion.header>

      <main 
        className="mx-auto max-w-[72rem] px-4 py-10"
        style={{ color: 'var(--theme-text)' }}
      >
        {/* Enhanced highlight line */}
        <motion.div 
          className="h-px w-full mb-8"
          style={{ 
            background: 'linear-gradient(90deg, transparent, var(--theme-primary), transparent)',
            opacity: 0.6
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        {children}
      </main>

      <motion.footer 
        className="border-t mt-10"
        style={{ borderColor: 'var(--theme-border)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="mx-auto max-w-[72rem] px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ color: 'var(--theme-textSecondary)' }}>
            © {new Date().getFullYear()} Sameer Yadav
          </p>
          <div className="flex gap-4">
            {[
              { href: 'https://github.com/Sameeryadav12', label: 'GitHub', target: '_blank', rel: 'noreferrer' },
              { href: 'https://www.linkedin.com/in/sameer-yadav1/', label: 'LinkedIn', target: '_blank', rel: 'noreferrer' },
              { href: 'mailto:rishisameer7@gmail.com?subject=Portfolio Contact&body=Hi Sameer,%0D%0A%0D%0AI found your portfolio and would like to connect.%0D%0A%0D%0ABest regards,', label: 'Email', target: '_self', rel: '' }
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="hover:opacity-80 transition-all duration-200"
                style={{ color: 'var(--theme-textSecondary)' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
