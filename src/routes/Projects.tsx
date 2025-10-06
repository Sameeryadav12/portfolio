// src/pages/Projects.tsx
import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { toIconItems } from '../lib/techIcons'
import TechLogos from '../components/TechLogos'

const ALL = 'All'

export default function Projects() {
  const [active, setActive] = useState<string>(ALL)
  const [q, setQ] = useState('')

  // Build category list from data
  const categories = useMemo(() => {
    const set = new Set<string>()
    projects.forEach(p => (p.categories ?? []).forEach(c => set.add(c)))
    return [ALL, ...Array.from(set)]
  }, [])

  // Filter + search
  const filtered = projects.filter(p => {
    const matchesCat = active === ALL || (p.categories ?? []).includes(active)
    const hay = (p.title + ' ' + p.summary + ' ' + p.stack.join(' ')).toLowerCase()
    const matchesQ = hay.includes(q.toLowerCase())
    return matchesCat && matchesQ
  })

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {/* Header */}
      <motion.header
        className="space-y-2 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-brand-fog">Projects</h1>
        <p className="text-brand-mist max-w-2xl mx-auto">
          Filter by category or search by keywords (tech, title, description).
        </p>
      </motion.header>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={clsx(
              'rounded-full border px-4 py-1 text-sm transition-colors',
              active === cat
                ? 'border-brand-mist/40 bg-brand-teal text-white shadow-md'
                : 'border-brand-mist/20 bg-brand-base/50 text-brand-fog hover:bg-brand-base/70'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-brand-mist" size={18} />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search: React, Unity, API, SQL…"
            className="w-full rounded-2xl border border-brand-mist/20 bg-brand-base/60 pl-9 pr-3 py-2 
                       text-brand-fog placeholder:text-brand-mist 
                       focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => {
          const accent = p.visuals?.accent ?? '#124E66'
          return (
            <motion.article
              key={p.slug}
              className="group relative overflow-hidden rounded-3xl border border-brand-mist/20 
                         bg-brand-slate/40 backdrop-blur shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
            >
              {/* Thumbnail */}
              <div className="relative h-44 w-full overflow-hidden">
                {p.visuals?.thumb ? (
                  <img
                    src={p.visuals.thumb}
                    alt={`${p.title} thumbnail`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-brand-slate to-brand-base" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-base/90" />
              </div>

              {/* Body */}
              <div className="relative -mt-10 px-5 pb-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-brand-fog">{p.title}</h3>
                  <span
                    className="shrink-0 rounded-full px-3 py-1 text-xs border border-brand-mist/20"
                    style={{ backgroundColor: '#2E3944', color: '#D3D9D4' }}
                    title={p.timeline}
                  >
                    {p.timeline}
                  </span>
                </div>

                <p className="mt-2 text-sm text-brand-mist line-clamp-2">{p.summary}</p>

                {/* Tech logos */}
                <div className="mt-3">
                  <TechLogos items={toIconItems(p.stack)} />
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    to={`/projects/${p.slug}`}
                    className="rounded-2xl px-4 py-2 text-sm font-medium text-white transition-colors"
                    style={{ backgroundColor: accent }}
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <div className="text-center text-brand-mist">No projects match your search/filters.</div>
      )}
    </motion.div>
  )
}
