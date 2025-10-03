import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, Github, ExternalLink, Youtube, Store } from 'lucide-react'
import { motion } from 'framer-motion'

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-base/60 border border-brand-mist/20 px-3 py-1 text-sm text-brand-fog">
      {children}
    </span>
  )
}

export default function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-fog">Project not found</h1>
        <Link to="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-brand-teal hover:opacity-90 text-white">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    )
  }

  const { title, role, timeline, stack, summary, highlights, links, sections, visuals, stats } = project
  const accent = visuals?.accent ?? '#124E66'

  return (
    <motion.article className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      {/* Top back link */}
      <motion.div className="mb-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Link to="/projects" className="inline-flex items-center gap-2 text-brand-mist hover:text-brand-fog">
          <ArrowLeft size={18} /> <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* HERO with banner */}
      <motion.section
        className="relative overflow-hidden rounded-3xl border border-brand-mist/20"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="relative h-60 w-full">
          {visuals?.banner ? (
            <img src={visuals.banner} alt={`${title} banner`} className="h-full w-full object-cover" loading="eager" />
          ) : (
            <div className="h-full w-full bg-gradient-to-tr from-brand-slate via-brand-base to-brand-slate" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent" />
        </div>

        <div className="relative -mt-24 px-6 pb-6">
          <div className="rounded-3xl border border-brand-mist/20 bg-brand-slate/90 backdrop-blur p-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-fog">{title}</h1>
            <p className="mt-1 text-brand-mist">{role} • {timeline}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>

            {summary && <p className="mt-4 max-w-3xl text-brand-fog/90">{summary}</p>}

            {(links?.repo || links?.demo || links?.youtube || links?.store) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {links.repo && (
                  <a className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white hover:opacity-90"
                     style={{ backgroundColor: accent }}
                     href={links.repo} target="_blank" rel="noreferrer">
                    <Github size={18}/> GitHub
                  </a>
                )}
                {links.demo && (
                  <a className="inline-flex items-center gap-2 rounded-2xl bg-brand-base/60 border border-brand-mist/20 px-4 py-2 hover:bg-brand-base/80"
                     href={links.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={18}/> Live Demo
                  </a>
                )}
                {links.youtube && (
                  <a className="inline-flex items-center gap-2 rounded-2xl bg-brand-base/60 border border-brand-mist/20 px-4 py-2 hover:bg-brand-base/80"
                     href={links.youtube} target="_blank" rel="noreferrer">
                    <Youtube size={18}/> YouTube
                  </a>
                )}
                {links.store && (
                  <a className="inline-flex items-center gap-2 rounded-2xl bg-brand-base/60 border border-brand-mist/20 px-4 py-2 hover:bg-brand-base/80"
                     href={links.store} target="_blank" rel="noreferrer">
                    <Store size={18}/> Store
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Stats row */}
      {stats?.length ? (
        <motion.section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-brand-mist/20 bg-brand-slate/40 p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: accent }}>{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-brand-mist mt-1">{s.label}</div>
            </div>
          ))}
        </motion.section>
      ) : null}

      {/* Highlights + Meta */}
      <motion.section className="grid gap-6 lg:grid-cols-3"
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="lg:col-span-2 rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-brand-fog mb-3">Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-brand-fog/90">
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6 backdrop-blur">
            <h3 className="font-semibold mb-3 text-brand-fog">Project Details</h3>
            <div className="space-y-2 text-brand-fog/90">
              <div><span className="text-brand-mist">Role:</span> {project.role}</div>
              <div><span className="text-brand-mist">Timeline:</span> {project.timeline}</div>
              <div className="pt-2">
                <span className="text-brand-mist">Stack:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {stack.map((s) => <Pill key={s + '-aside'}>{s}</Pill>)}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </motion.section>

      {/* Gallery */}
      {visuals?.gallery?.length ? (
        <motion.section className="space-y-3"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <h2 className="text-xl font-semibold text-brand-fog">Screenshots</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visuals.gallery.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-brand-mist/20">
                <img
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.section>
      ) : null}

      {/* Bottom back link */}
      <motion.div className="pt-2"
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <Link to="/projects" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white hover:opacity-90" style={{ backgroundColor: accent }}>
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </motion.div>
    </motion.article>
  )
}
