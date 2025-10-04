import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
// at the top of Home.tsx
import { projects } from '../data/projects'
import { ParallaxBanner } from "react-scroll-parallax"   // add at top
import CountUp from 'react-countup'
import { testimonials } from '../data/testimonials'
import GithubRecent from '../components/GithubRecent'
import SkillGraph from '../components/SkillGraph'
import PinnedRepos from '../components/PinnedRepos'



export default function Home() {
  const featured = projects.find((p) => p.slug === 'call-a-technician')
  const accent = featured?.visuals?.accent ?? '#124E66'

  return (
    <>
    <section className="relative overflow-hidden rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-0">
      {/* Soft gradient / glow background */}
      <div className="absolute inset-0">
  <ParallaxBanner
    layers={[
      { speed: -10, children: <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl" /> },
      { speed: -6,  children: <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-mist/20 blur-3xl" /> },
      { speed: -2,  children: <div className="absolute inset-0 bg-gradient-to-tr from-brand-base/60 via-transparent to-brand-base/30" /> }
    ]}
    className="absolute inset-0"
  />
</div>


      <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* Top tag */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-brand-mist/25 bg-brand-base/50 px-3 py-1 text-xs text-brand-fog"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          Open to Software Engineering roles
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-fog"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Sameer Yadav
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-brand-mist">
            Backend-leaning Full-Stack Developer & Unity 3D Maker
          </span>
        </motion.h1>

        {/* Value bullets */}
        <motion.ul
          className="mt-6 space-y-2 text-brand-fog/90"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <li className="leading-relaxed">• Built an admin portal that reduced manual workload by <strong className="text-brand-fog">30%+</strong>.</li>
          <li className="leading-relaxed">• Published a Unity game with <strong className="text-brand-fog">1,000+ downloads</strong>.</li>
          <li className="leading-relaxed">• Comfortable across <strong className="text-brand-fog">React, TypeScript, Node/Express, MongoDB/SQL</strong>.</li>
        </motion.ul>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white"
            style={{ backgroundColor: '#124E66' }} // brand.teal
          >
            View Projects <ArrowRight size={18} />
          </Link>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 rounded-2xl border border-brand-mist/30 bg-brand-base/50 px-5 py-3 text-brand-fog hover:bg-brand-base/70"
          >
            View Resume
          </Link>

          {/* quick links (leave href blank to fill later) */}
          <div className="ml-1 flex items-center gap-3 text-brand-mist">
            <a href="" target="_blank" rel="noreferrer" className="hover:text-brand-fog" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="hover:text-brand-fog" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="" className="hover:text-brand-fog" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Skills snapshot */}
        <motion.div
          className="mt-10 grid gap-3 sm:grid-cols-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          {[
            {
              title: 'Web & APIs',
              items: 'React, TypeScript, Node.js, Express, REST, SQL/MongoDB'
            },
            {
              title: 'Game & 3D',
              items: 'Unity (C#), Blender, animations, gameplay systems'
            },
            {
              title: 'Ops & Quality',
              items: 'Git/GitHub, Docker, Jira, testing, performance'
            }
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-brand-mist/20 bg-brand-base/50 p-4"
            >
              <div className="text-sm uppercase tracking-wide text-brand-mist">{b.title}</div>
              <div className="mt-1 text-brand-fog">{b.items}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    {/* Achievements */}
<motion.section
  className="mt-8 grid grid-cols-3 gap-3"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  {[
    { label: 'Downloads', value: 1000, suffix: '+', accent: '#124E66' },
    { label: 'Manual Work Reduced', value: 30, suffix: '%+', accent: '#748D92' },
    { label: 'Projects', value: 4, suffix: '', accent: '#D3D9D4' }
  ].map((s) => (
    <div key={s.label} className="rounded-2xl border border-brand-mist/20 bg-brand-base/50 p-5 text-center">
      <div className="text-3xl font-extrabold" style={{ color: s.accent }}>
        <CountUp end={s.value} duration={2.2} separator="," /><span>{s.suffix}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-brand-mist">{s.label}</div>
    </div>
  ))}
</motion.section>

    {/* Featured Project */}
{featured && (
  <motion.section
    className="mt-8 overflow-hidden rounded-3xl border border-brand-mist/20 bg-brand-slate/40"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
  >
    <div className="grid md:grid-cols-2 gap-0">
      {/* Image */}
      <div className="relative h-60 md:h-full">
        

{featured.visuals?.banner ? (
  <ParallaxBanner
    layers={[{ image: featured.visuals.banner, speed: -20 }]}
    className="absolute inset-0 h-full w-full"
  />
) : (
  <div className="absolute inset-0 bg-gradient-to-tr from-brand-slate via-brand-base to-brand-slate" />
)}


        <div className="absolute inset-0 bg-gradient-to-t from-brand-base/40 via-transparent to-transparent" />
      </div>

      {/* Text */}
      <div className="p-6 md:p-8 lg:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-mist/25 bg-brand-base/50 px-3 py-1 text-xs text-brand-fog">
          Featured Project
        </div>

        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-fog">
          {featured.title}
        </h2>
        <p className="mt-2 text-brand-mist max-w-prose">
          {featured.summary}
        </p>

        {/* Stack pills (first 5) */}
        <div className="mt-3 flex flex-wrap gap-2">
          {featured.stack.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-full bg-brand-base/60 border border-brand-mist/20 px-3 py-1 text-xs text-brand-fog"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${featured.slug}`}
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white"
            style={{ backgroundColor: accent }}
          >
            Read case study
          </Link>

          {/* Optional quick link buttons if you add them later */}
          {featured.links?.repo && (
            <a
              href={featured.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-mist/30 bg-brand-base/50 px-5 py-3 text-brand-fog hover:bg-brand-base/70"
            >
              GitHub
            </a>
          )}
          {featured.links?.demo && (
            <a
              href={featured.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-mist/30 bg-brand-base/50 px-5 py-3 text-brand-fog hover:bg-brand-base/70"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.section>
)}
{/* Testimonials */}
<motion.section
  className="mt-8 rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
>
  <h2 className="text-xl font-semibold text-brand-fog mb-3 text-center">What people say</h2>
  <div className="grid sm:grid-cols-3 gap-4">
    {testimonials.map((t) => (
      <div key={t.name} className="rounded-2xl border border-brand-mist/20 bg-brand-base/40 p-4">
        <p className="text-brand-fog/90">“{t.quote}”</p>
        <div className="mt-3 text-sm text-brand-mist">{t.name} • {t.role}</div>
      </div>
    ))}
  </div>
  <PinnedRepos />
</motion.section>
<GithubRecent />
<SkillGraph />
</>
  )
}
