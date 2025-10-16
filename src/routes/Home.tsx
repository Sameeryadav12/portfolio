import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, Github, Linkedin, Star, Zap, Award, TrendingUp, Users, Code, Gamepad2, Sparkles, Rocket, Target, Heart, ExternalLink } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import TypingAnimation from '../components/TypingAnimation'
import ScrollAnimation from '../components/ScrollAnimation'
import { projects } from '../data/projects'
import { testimonials } from '../data/testimonials'
import { toIconItems } from '../lib/techIcons'
import TechLogos from '../components/TechLogos'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section - Ultra Modern */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          {/* Status Badge with Enhanced Animation */}
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border backdrop-blur-sm shadow-lg"
            style={{ 
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              borderColor: 'var(--theme-success)',
              color: 'var(--theme-success)'
            }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg" />
            <span className="font-semibold text-lg">Available for Software Engineering roles</span>
            <Sparkles size={20} className="animate-pulse" />
          </motion.div>

          {/* Main Heading with Enhanced Gradient and Animation */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                backgroundSize: '200% 200%'
              }}
            >
              Sameer Yadav
            </motion.span>
          </motion.h1>

          {/* Dynamic Role Display with Enhanced Styling */}
          <motion.div
            className="text-2xl md:text-4xl font-semibold relative"
            style={{ color: 'var(--theme-textSecondary)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <TypingAnimation 
                texts={[
                  'Backend-leaning Full-Stack Developer & Unity 3D Maker',
                  'React, TypeScript, Node.js Expert',
                  'Unity Game Developer & 3D Artist',
                  'Team Leader & Problem Solver'
                ]}
                speed={80}
                deleteSpeed={40}
                pauseTime={3000}
              />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Rocket size={24} className="text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Summary with Enhanced Styling */}
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--theme-textSecondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Crafting digital experiences that make a difference. 
            <motion.span 
              className="font-semibold relative"
              style={{ color: 'var(--theme-primary)' }}
              whileHover={{ scale: 1.05 }}
            >
              Available immediately
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                style={{ backgroundColor: 'var(--theme-primary)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
            </motion.span> for full-stack development roles.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="mailto:ysameer0303@gmail.com?subject=Let's Work Together&body=Hi Sameer,%0D%0A%0D%0AI'd love to discuss potential opportunities with you.%0D%0A%0D%0ABest regards,"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-lg shadow-2xl relative overflow-hidden"
              style={{ background: 'var(--theme-gradient-primary)' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Mail size={22} />
              Schedule Interview
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="/resume"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl border font-semibold text-lg relative overflow-hidden"
              style={{ 
                borderColor: 'var(--theme-border)',
                color: 'var(--theme-textSecondary)',
                backgroundColor: 'var(--theme-surface)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Download size={22} />
              Download Resume
              <Target size={22} className="group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { icon: Github, href: 'https://github.com/Sameeryadav12', label: 'GitHub', color: 'hover:text-gray-400' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sameer-yadav-5502a4203/', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:ysameer0303@gmail.com', label: 'Email', color: 'hover:text-red-400' }
            ].map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`group p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${color}`}
                style={{ 
                  borderColor: 'var(--theme-border)',
                  backgroundColor: 'var(--theme-surface)',
                  color: 'var(--theme-textSecondary)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  borderColor: 'var(--theme-primary)',
                  color: 'var(--theme-primary)',
                  backgroundColor: 'var(--theme-background)'
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon size={26} className="relative z-10" />
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ backgroundColor: 'var(--theme-primary)' }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Impact Metrics Section */}
      <ScrollAnimation direction="up" delay={0.2}>
        <motion.section
          className="py-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, var(--theme-primary) 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, var(--theme-primary) 2px, transparent 2px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-6"
                style={{ 
                  backgroundColor: 'var(--theme-surface)',
                  borderColor: 'var(--theme-border)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Heart size={20} style={{ color: 'var(--theme-primary)' }} />
                <span className="font-semibold" style={{ color: 'var(--theme-text)' }}>Proven Results</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Proven Impact
              </h2>
              <p className="text-xl" style={{ color: 'var(--theme-textSecondary)' }}>
                Real results that speak for themselves
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, value: '30%+', label: 'Workload Reduction', color: 'text-green-400', description: 'Efficiency gains' },
                { icon: Users, value: '1,000+', label: 'Game Downloads', color: 'text-blue-400', description: 'Published games' },
                { icon: Code, value: '5', label: 'Team Members Led', color: 'text-purple-400', description: 'Leadership experience' },
                { icon: Gamepad2, value: '3', label: 'Published Projects', color: 'text-cyan-400', description: 'Live applications' }
              ].map(({ icon: Icon, value, label, color, description }, index) => (
                <motion.div
                  key={label}
                  className="group text-center p-8 rounded-3xl border-2 relative overflow-hidden"
                  style={{ 
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    borderColor: 'var(--theme-primary)',
                    boxShadow: 'var(--theme-glow)'
                  }}
                >
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center relative ${color}`} 
                    style={{ backgroundColor: 'var(--theme-primary)' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={32} className="text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className={`text-4xl font-bold mb-2 ${color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring", bounce: 0.4 }}
                  >
                    {value}
                  </motion.div>
                  <div className="text-lg font-semibold mb-1" style={{ color: 'var(--theme-text)' }}>{label}</div>
                  <div className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>{description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Why Hire Me Section - Ultra Modern */}
      <ScrollAnimation direction="up" delay={0.4}>
        <motion.section
          className="py-20"
          style={{ backgroundColor: 'var(--theme-surface)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-6"
                style={{ 
                  backgroundColor: 'var(--theme-background)',
                  borderColor: 'var(--theme-border)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Award size={24} style={{ color: 'var(--theme-primary)' }} />
                <span className="font-semibold" style={{ color: 'var(--theme-text)' }}>Why Hire Me?</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Three Compelling Reasons
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--theme-textSecondary)' }}>
                Here's why I'm the perfect addition to your team
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Proven Impact',
                  description: 'Reduced manual workload by 30%+ and delivered 1,000+ downloads on published game. Real results, not just code.',
                  highlight: '30%+ efficiency gain'
                },
                {
                  icon: '⚡',
                  title: 'Full-Stack Mastery',
                  description: 'Led entire backend, frontend, and database development for 5-person team. From React to MongoDB, I own the full stack.',
                  highlight: '5-person team leadership'
                },
                {
                  icon: '🎯',
                  title: 'Ready to Ship',
                  description: 'Available immediately. No learning curve on modern tech stack. Can contribute from day one with React, TypeScript, Node.js.',
                  highlight: 'Day-one productivity'
                }
              ].map(({ icon, title, description, highlight }, index) => (
                <motion.div 
                  key={title}
                  className="group text-center p-10 rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl"
                  style={{ 
                    backgroundColor: 'var(--theme-background)',
                    borderColor: 'var(--theme-border)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    borderColor: 'var(--theme-primary)',
                    boxShadow: 'var(--theme-glow)'
                  }}
                >
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center group-hover:animate-pulse" style={{ backgroundColor: 'var(--theme-primary)' }}>
                    <span className="text-3xl">{icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--theme-text)' }}>{title}</h3>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--theme-textSecondary)' }}>
                    {description}
                  </p>
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ 
                      backgroundColor: 'var(--theme-primary)',
                      color: 'white'
                    }}
                  >
                    {highlight}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Featured Projects */}
      <ScrollAnimation direction="up" delay={0.6}>
        <motion.section
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl" style={{ color: 'var(--theme-textSecondary)' }}>
                A showcase of my best work
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Link key={project.slug} to={`/projects/${project.slug}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-3xl shadow-2xl border-2 cursor-pointer block"
                    style={{ 
                      backgroundColor: 'var(--theme-surface)',
                      borderColor: 'var(--theme-border)'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03, 
                      y: -10,
                      borderColor: 'var(--theme-primary)',
                      boxShadow: 'var(--theme-glow)'
                    }}
                  >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, var(--theme-primary) 2px, transparent 2px),
                                       radial-gradient(circle at 75% 75%, var(--theme-primary) 2px, transparent 2px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <div className="relative h-64 overflow-hidden">
                    {/* Loading placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
                    
                    <img
                      src={project.visuals?.thumb || 'https://via.placeholder.com/400x300/1e293b/cbd5e1?text=Project+Image'}
                      alt={project.title}
                      className="relative w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '1';
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x300/1e293b/cbd5e1?text=Project+Image';
                      }}
                      style={{ opacity: 0 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <motion.span 
                        className="px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg"
                        style={{ 
                          backgroundColor: 'var(--theme-primary)',
                          color: 'white'
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.categories?.[0] || 'Project'}
                      </motion.span>
                    </div>
                    
                    {/* View Button */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg"
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight size={16} className="text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Stats Overlay */}
                    {project.stats && project.stats.length > 0 && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          {project.stats.slice(0, 2).map((stat, statIndex) => (
                            <motion.div
                              key={statIndex}
                              className="px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: statIndex * 0.1 }}
                            >
                              <span className="text-white font-semibold">{stat.value}</span>
                              <span className="text-white/80 ml-1">{stat.label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--theme-text)' }}>
                        {project.title}
                      </h3>
                      <motion.div
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'var(--theme-primary)20',
                          color: 'var(--theme-primary)'
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.timeline}
                      </motion.div>
                    </div>
                    
                    <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--theme-textSecondary)' }}>
                      {project.summary}
                    </p>
                    
                    <div className="mb-4">
                      <TechLogos items={toIconItems(project.stack.slice(0, 4))} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                          style={{ 
                            backgroundColor: 'var(--theme-primary)',
                            color: 'white'
                          }}
                        >
                          View Project
                          <ArrowRight size={16} />
                        </Link>
                      </motion.div>
                      
                      {project.links?.demo && (
                        <motion.a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg border transition-all duration-300 hover:shadow-lg"
                          style={{ 
                            borderColor: 'var(--theme-border)',
                            color: 'var(--theme-textSecondary)'
                          }}
                          whileHover={{ scale: 1.1, color: 'var(--theme-primary)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg"
                style={{ 
                  backgroundColor: 'var(--theme-surface)',
                  color: 'var(--theme-textSecondary)',
                  border: '2px solid var(--theme-border)'
                }}
              >
                View All Projects
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Testimonials */}
      <ScrollAnimation direction="up" delay={0.8}>
        <motion.section
          className="py-20"
          style={{ backgroundColor: 'var(--theme-surface)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                What People Say
              </h2>
              <p className="text-xl" style={{ color: 'var(--theme-textSecondary)' }}>
                Testimonials from colleagues and clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="p-8 rounded-3xl border-2"
                  style={{ 
                    backgroundColor: 'var(--theme-background)',
                    borderColor: 'var(--theme-border)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6" style={{ color: 'var(--theme-textSecondary)' }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--theme-text)' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Call to Action */}
      <ScrollAnimation direction="up" delay={1.0}>
        <motion.section
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-12" style={{ color: 'var(--theme-textSecondary)' }}>
              Let's discuss your next project and create something amazing together.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-xl shadow-2xl"
                style={{ background: 'var(--theme-gradient-primary)' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
                Get In Touch
                <ArrowRight size={24} />
              </motion.a>
              
              <motion.a
                href="/about"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border font-semibold text-xl"
                style={{ 
                  borderColor: 'var(--theme-border)',
                  color: 'var(--theme-textSecondary)',
                  backgroundColor: 'var(--theme-surface)'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Me
              </motion.a>
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>
    </div>
  )
}