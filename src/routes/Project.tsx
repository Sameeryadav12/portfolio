import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft, Github, ExternalLink, Youtube, Store, Star, Zap, Award, Clock, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimation from '../components/ScrollAnimation'
import ParticleBackground from '../components/ParticleBackground'

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105"
      style={{ 
        backgroundColor: 'var(--theme-surface)', 
        border: '1px solid var(--theme-border)',
        color: 'var(--theme-text)'
      }}
    >
      {children}
    </span>
  )
}

export default function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="text-center py-20">
          <div 
            className="rounded-3xl p-12 relative overflow-hidden mx-auto max-w-2xl"
            style={{ backgroundColor: 'var(--theme-surface)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
            <div className="relative z-10">
              <motion.div 
                className="text-8xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔍
              </motion.div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
                Project Not Found
              </h1>
              <p className="text-xl mb-8" style={{ color: 'var(--theme-textSecondary)' }}>
                The project you're looking for doesn't exist or has been moved.
              </p>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--theme-gradient-primary)' }}
              >
                <ArrowLeft size={20} /> 
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    )
  }

  const { title, role, timeline, stack, summary, highlights, links, sections, visuals, stats } = project
  const accent = visuals?.accent ?? '#124E66'

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <ParticleBackground />
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--theme-primary) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, var(--theme-primary) 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative space-y-12 z-10">
      {/* Top back link */}
      <ScrollAnimation direction="up" delay={0.2}>
        <motion.div 
          className="mb-6" 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--theme-surface)',
              color: 'var(--theme-textSecondary)',
              border: '1px solid var(--theme-border)'
            }}
          >
            <ArrowLeft size={18} /> 
            <span>Back to Projects</span>
          </Link>
        </motion.div>
      </ScrollAnimation>

      {/* HERO with banner */}
      <ScrollAnimation direction="up" delay={0.4}>
        <motion.section
          className="relative overflow-hidden rounded-3xl shadow-2xl border"
          style={{ 
            backgroundColor: 'var(--theme-surface)',
            borderColor: 'var(--theme-border)'
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative h-80 w-full overflow-hidden">
            {visuals?.banner ? (
              <img 
                src={visuals.banner} 
                alt={`${title} banner`} 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                loading="eager" 
              />
            ) : (
              <div 
                className="h-full w-full bg-gradient-to-br"
                style={{ 
                  background: `linear-gradient(135deg, ${accent}20, ${accent}40, ${accent}20)`
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Project Badge */}
            <div className="absolute top-6 left-6">
              <span 
                className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm shadow-lg"
                style={{ 
                  backgroundColor: 'var(--theme-primary)',
                  color: 'white'
                }}
              >
                <Award size={16} />
                Case Study
              </span>
            </div>
            
            {/* Timeline Badge */}
            <div className="absolute top-6 right-6">
              <span 
                className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                {timeline}
              </span>
            </div>
          </div>

          <div className="relative -mt-16 px-8 pb-8">
            <div 
              className="rounded-3xl p-8 backdrop-blur-sm shadow-2xl border"
              style={{ 
                backgroundColor: 'var(--theme-surface)',
                borderColor: 'var(--theme-border)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-5xl font-bold mb-2" style={{ color: 'var(--theme-text)' }}>
                    {title}
                  </h1>
                  <p className="text-xl" style={{ color: 'var(--theme-textSecondary)' }}>
                    {role} • {timeline}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={24} style={{ color: 'var(--theme-primary)' }} />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => {
                    // Simple icon mapping
                    let iconSrc = null;
                    const techLower = tech.toLowerCase();
                    
                    if (techLower.includes('react')) iconSrc = '/images/tech-icons/icons-png/react.png';
                    else if (techLower.includes('typescript')) iconSrc = '/images/tech-icons/icons-png/typescript.png';
                    else if (techLower.includes('node')) iconSrc = '/images/tech-icons/icons-png/nodejs.png';
                    else if (techLower.includes('express')) iconSrc = '/images/tech-icons/icons-png/expressjs.png';
                    else if (techLower.includes('mongodb')) iconSrc = '/images/tech-icons/icons-png/mongodb.png';
                    else if (techLower.includes('tailwind')) iconSrc = '/images/tech-icons/icons-png/tailwindcss.png';
                    else if (techLower.includes('jwt')) iconSrc = '/images/tech-icons/icons-png/jwt.png';
                    else if (techLower.includes('fullcalendar')) iconSrc = '/images/tech-icons/icons-png/fullcalendar.png';
                    else if (techLower.includes('react query')) iconSrc = '/images/tech-icons/icons-png/react-query.png';
                    else if (techLower.includes('unity')) iconSrc = '/images/tech-icons/icons-png/unity.png';
                    else if (techLower.includes('c#')) iconSrc = '/images/tech-icons/icons-png/csharp.png';
                    else if (techLower.includes('blender')) iconSrc = '/images/tech-icons/icons-png/blender.png';
                    else if (techLower.includes('photoshop')) iconSrc = '/images/tech-icons/icons-png/photoshop.png';
                    else if (techLower.includes('figma')) iconSrc = '/images/tech-icons/icons-png/figma.png';
                    else if (techLower.includes('design')) iconSrc = '/images/tech-icons/icons-png/design.png';
                    else if (techLower.includes('vite')) iconSrc = '/images/tech-icons/icons-png/vite.png';
                    else if (techLower.includes('docker')) iconSrc = '/images/tech-icons/icons-png/docker.png';
                    else if (techLower.includes('postgresql')) iconSrc = '/images/tech-icons/icons-png/postgresql.png';
                    else if (techLower.includes('redis')) iconSrc = '/images/tech-icons/icons-png/redis.png';
                    else if (techLower.includes('socket')) iconSrc = '/images/tech-icons/icons-png/socketio.png';
                    else if (techLower.includes('expo')) iconSrc = '/images/tech-icons/icons-png/expo.png';
                    else if (techLower.includes('prisma')) iconSrc = '/images/tech-icons/icons-png/prisma.png';
                    else if (techLower.includes('stripe')) iconSrc = '/images/tech-icons/icons-png/stripe.png';
                    else if (techLower.includes('notification')) iconSrc = '/images/tech-icons/icons-png/notification.png';
                    else if (techLower.includes('security') || techLower.includes('bcrypt')) iconSrc = '/images/tech-icons/icons-png/security.png';
                    else if (techLower.includes('framer')) iconSrc = '/images/tech-icons/icons-png/framer.png';
                    
                    return (
                      <div key={tech} className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                        {iconSrc && (
                          <img 
                            src={iconSrc} 
                            alt={tech}
                            className="w-4 h-4"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <span className="font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {summary && (
                <p className="text-lg leading-relaxed mb-8 max-w-4xl" style={{ color: 'var(--theme-textSecondary)' }}>
                  {summary}
                </p>
              )}

              {(links?.repo || links?.demo || links?.youtube || links?.store) && (
                <div className="flex flex-wrap gap-4">
                  {links.repo && (
                    <motion.a 
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-semibold transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: accent }}
                      href={links.repo} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18}/> 
                      GitHub
                    </motion.a>
                  )}
                  {links.demo && (
                    <motion.a 
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--theme-surface)',
                        border: '1px solid var(--theme-border)',
                        color: 'var(--theme-text)'
                      }}
                      href={links.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18}/> 
                      Live Demo
                    </motion.a>
                  )}
                  {links.youtube && (
                    <motion.a 
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--theme-surface)',
                        border: '1px solid var(--theme-border)',
                        color: 'var(--theme-text)'
                      }}
                      href={links.youtube} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Youtube size={18}/> 
                      YouTube
                    </motion.a>
                  )}
                  {links.store && (
                    <motion.a 
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--theme-surface)',
                        border: '1px solid var(--theme-border)',
                        color: 'var(--theme-text)'
                      }}
                      href={links.store} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Store size={18}/> 
                      Store
                    </motion.a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Stats row */}
      {stats?.length ? (
        <ScrollAnimation direction="up" delay={0.6}>
          <motion.section 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.45 }}
          >
            {stats.map((s, index) => (
              <motion.div 
                key={s.label} 
                className="rounded-3xl p-6 text-center shadow-lg"
                style={{ 
                  backgroundColor: 'var(--theme-surface)',
                  border: '1px solid var(--theme-border)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl font-bold mb-2" style={{ color: accent }}>{s.value}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--theme-textSecondary)' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.section>
        </ScrollAnimation>
      ) : null}

      {/* Highlights + Meta */}
      <ScrollAnimation direction="up" delay={0.8}>
        <motion.section 
          className="grid gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.45 }}
        >
          <div 
            className="lg:col-span-2 rounded-3xl p-8 shadow-lg"
            style={{ 
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-border)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap size={24} style={{ color: 'var(--theme-primary)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--theme-text)' }}>Key Highlights</h2>
            </div>
            <ul className="space-y-6">
              {highlights.map((h, i) => (
                <motion.li 
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: 'var(--theme-background)',
                    border: '1px solid var(--theme-border)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div 
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0 shadow-lg"
                    style={{ 
                      backgroundColor: accent,
                      boxShadow: `0 0 10px ${accent}40`
                    }}
                  />
                  <span 
                    className="text-base leading-relaxed group-hover:text-white transition-colors duration-300"
                    style={{ color: 'var(--theme-textSecondary)' }}
                  >
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div 
              className="rounded-3xl p-6 shadow-lg border"
              style={{ 
                backgroundColor: 'var(--theme-surface)',
                borderColor: 'var(--theme-border)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target size={20} style={{ color: 'var(--theme-primary)' }} />
                <h3 className="text-lg font-semibold" style={{ color: 'var(--theme-text)' }}>Project Details</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium" style={{ color: 'var(--theme-textSecondary)' }}>Role:</span>
                  <div className="text-base font-semibold mt-1" style={{ color: 'var(--theme-text)' }}>{project.role}</div>
                </div>
                <div>
                  <span className="text-sm font-medium" style={{ color: 'var(--theme-textSecondary)' }}>Timeline:</span>
                  <div className="text-base font-semibold mt-1" style={{ color: 'var(--theme-text)' }}>{project.timeline}</div>
                </div>
                <div>
                  <span className="text-sm font-medium mb-3 block" style={{ color: 'var(--theme-textSecondary)' }}>Tech Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((s) => <Pill key={s + '-aside'}>{s}</Pill>)}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </motion.section>
      </ScrollAnimation>

      {/* Gallery */}
      {visuals?.gallery?.length ? (
        <ScrollAnimation direction="up" delay={1.0}>
          <motion.section 
            className="space-y-6"
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.45 }}
          >
            <div className="flex items-center gap-3">
              <Users size={24} style={{ color: 'var(--theme-primary)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--theme-text)' }}>Project Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {visuals.gallery.map((src, i) => (
                <div key={i} className="relative">
                  <img
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                    style={{ 
                      backgroundColor: '#f0f0f0',
                      border: '1px solid #ccc'
                    }}
                    onLoad={() => {
                      console.log(`✅ Image ${i + 1} loaded: ${src}`);
                    }}
                    onError={(e) => {
                      console.log(`❌ Image ${i + 1} failed: ${src}`);
                      // Hide the broken image
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </ScrollAnimation>
      ) : (
        <ScrollAnimation direction="up" delay={1.0}>
          <motion.section 
            className="space-y-6"
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.45 }}
          >
            <div className="text-center py-12">
              <div className="text-lg text-gray-500 mb-4">
                Debug: No gallery images found for this project
              </div>
              <div className="text-sm text-gray-400">
                visuals: {JSON.stringify(visuals, null, 2)}
              </div>
            </div>
          </motion.section>
        </ScrollAnimation>
      )}

      {/* Bottom back link */}
      <ScrollAnimation direction="up" delay={1.2}>
        <motion.div 
          className="pt-6 text-center"
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.45 }}
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            style={{ background: 'var(--theme-gradient-primary)' }}
          >
            <ArrowLeft size={20} /> 
            Back to Projects
          </Link>
        </motion.div>
      </ScrollAnimation>
      </div>
    </div>
  )
}
