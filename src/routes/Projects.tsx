import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import AdvancedProjectCard from '../components/AdvancedProjectCard'
import { Search, Filter, Grid, List, ArrowRight, Star, Zap, Award, Sparkles, Target, Clock, Users } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'
import ParticleBackground from '../components/ParticleBackground'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest')

  // Safe category extraction with fallback
  const categories = ['all', ...new Set(projects.map(p => p.category || 'uncategorized'))]

  const filtered = useMemo(() => {
    let filteredProjects = projects.filter(p => {
      const matchesCategory = filter === 'all' || (p.category || 'uncategorized') === filter
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                            p.summary.toLowerCase().includes(search.toLowerCase()) ||
                            p.stack.some(tech => tech.toLowerCase().includes(search.toLowerCase()))
      return matchesCategory && matchesSearch
    })

    // Sort projects
    filteredProjects.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.timeline || '').getTime() - new Date(a.timeline || '').getTime()
        case 'oldest':
          return new Date(a.timeline || '').getTime() - new Date(b.timeline || '').getTime()
        case 'name':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filteredProjects
  }, [filter, search, sortBy])

  const featuredProject = projects[0] // First project as featured

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10 space-y-20">
      {/* Enhanced Hero Section */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="text-center space-y-8">
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border shadow-lg"
            style={{ 
              backgroundColor: 'var(--theme-surface)',
              borderColor: 'var(--theme-border)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Star size={24} style={{ color: 'var(--theme-primary)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--theme-text)' }}>Portfolio Showcase</span>
            <Sparkles size={20} className="animate-pulse" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--theme-textSecondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive showcase of my work across web development, game development, and innovative projects that demonstrate 
            <span className="font-semibold" style={{ color: 'var(--theme-primary)' }}> technical excellence</span> and 
            <span className="font-semibold" style={{ color: 'var(--theme-primary)' }}> creative problem-solving</span>.
          </motion.p>

          {/* Project Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Target, value: projects.length, label: 'Total Projects', color: 'text-blue-400' },
              { icon: Users, value: '5', label: 'Team Members Led', color: 'text-purple-400' },
              { icon: Award, value: '100%', label: 'Client Satisfaction', color: 'text-yellow-400' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl border"
                  style={{ 
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon size={24} className={`mx-auto mb-2 ${stat.color}`} />
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </ScrollAnimation>

      {/* Featured Project */}
      <ScrollAnimation direction="up" delay={0.4}>
        <motion.div
          className="group relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: 'var(--theme-surface)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img
                src={featuredProject.visuals?.banner || featuredProject.visuals?.thumb || 'https://via.placeholder.com/800x400/1e293b/cbd5e1?text=Featured+Project'}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
                  style={{ 
                    backgroundColor: 'var(--theme-primary)',
                    color: 'white'
                  }}
                >
                  <Award size={16} />
                  Featured Project
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                    {featuredProject.timeline}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-10 flex flex-col justify-center relative">
              <div className="absolute top-4 right-4">
                <Zap size={24} style={{ color: 'var(--theme-primary)' }} />
              </div>
              
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--theme-text)' }}>
                {featuredProject.title}
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--theme-textSecondary)' }}>
                {featuredProject.summary}
              </p>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((tech) => {
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
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'var(--theme-gradient-primary)' }}
                >
                  View Case Study
                  <ArrowRight size={20} />
                </Link>
                {featuredProject.links?.demo && (
                  <a
                    href={featuredProject.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                    style={{ 
                      borderColor: 'var(--theme-border)',
                      color: 'var(--theme-textSecondary)',
                      backgroundColor: 'var(--theme-background)'
                    }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>

      {/* Enhanced Advanced Controls */}
      <ScrollAnimation direction="up" delay={0.6}>
        <motion.div
          className="rounded-3xl p-8 relative overflow-hidden"
          style={{ backgroundColor: 'var(--theme-surface)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-lg">
                <Search size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--theme-textSecondary)' }} />
                <input
                  type="text"
                  placeholder="Search projects by name, tech, or description..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-2xl pl-14 pr-6 py-5 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg"
                  style={{
                    backgroundColor: 'var(--theme-background)',
                    color: 'var(--theme-text)',
                    border: '2px solid var(--theme-border)'
                  }}
                />
                {search && (
                  <motion.button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                    onClick={() => setSearch('')}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">×</span>
                  </motion.button>
                )}
              </div>

              {/* Filters and Controls */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Category Filter */}
                <div className="flex items-center gap-3">
                  <Filter size={20} style={{ color: 'var(--theme-textSecondary)' }} />
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="rounded-2xl px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      backgroundColor: 'var(--theme-background)',
                      color: 'var(--theme-text)',
                      border: '2px solid var(--theme-border)'
                    }}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <div className="flex items-center gap-3">
                  <Clock size={20} style={{ color: 'var(--theme-textSecondary)' }} />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'name')}
                    className="rounded-2xl px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      backgroundColor: 'var(--theme-background)',
                      color: 'var(--theme-text)',
                      border: '2px solid var(--theme-border)'
                    }}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--theme-background)', border: '2px solid var(--theme-border)' }}>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-4 transition-all duration-300 ${
                      viewMode === 'grid' ? 'text-white shadow-lg' : 'hover:bg-opacity-50'
                    }`}
                    style={{
                      backgroundColor: viewMode === 'grid' ? 'var(--theme-primary)' : 'transparent',
                      color: viewMode === 'grid' ? 'white' : 'var(--theme-textSecondary)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-4 transition-all duration-300 ${
                      viewMode === 'list' ? 'text-white shadow-lg' : 'hover:bg-opacity-50'
                    }`}
                    style={{
                      backgroundColor: viewMode === 'list' ? 'var(--theme-primary)' : 'transparent',
                      color: viewMode === 'list' ? 'white' : 'var(--theme-textSecondary)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <motion.div 
              className="mt-6 flex items-center justify-between text-sm"
              style={{ color: 'var(--theme-textSecondary)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>
                Showing {filtered.length} of {projects.length} projects
                {search && ` matching "${search}"`}
                {filter !== 'all' && ` in ${filter}`}
              </span>
              <span>Sorted by {sortBy.replace('_', ' ')}</span>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimation>

      {/* Enhanced Projects Grid/List */}
      <ScrollAnimation direction="up" delay={0.8}>
        <motion.div
          className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch' : 'space-y-8'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {filtered.map((p, idx) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                layout
              >
                <AdvancedProjectCard project={p} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </ScrollAnimation>

      {filtered.length === 0 && (
        <ScrollAnimation direction="up" delay={1.0}>
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="rounded-3xl p-12 relative overflow-hidden"
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
                <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--theme-text)' }}>
                  No projects found
                </h3>
                <p className="text-xl mb-8" style={{ color: 'var(--theme-textSecondary)' }}>
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    onClick={() => setSearch('')}
                    className="px-6 py-3 rounded-2xl border font-medium transition-all duration-300"
                    style={{ 
                      borderColor: 'var(--theme-border)',
                      color: 'var(--theme-textSecondary)',
                      backgroundColor: 'var(--theme-background)'
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear Search
                  </motion.button>
                  <motion.button
                    onClick={() => setFilter('all')}
                    className="px-6 py-3 rounded-2xl border font-medium transition-all duration-300"
                    style={{ 
                      borderColor: 'var(--theme-border)',
                      color: 'var(--theme-textSecondary)',
                      backgroundColor: 'var(--theme-background)'
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show All Projects
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimation>
      )}

      {/* Enhanced Call to Action */}
      <ScrollAnimation direction="up" delay={1.2}>
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{ backgroundColor: 'var(--theme-surface)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-8"
                style={{ 
                  backgroundColor: 'var(--theme-background)',
                  borderColor: 'var(--theme-border)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Zap size={20} style={{ color: 'var(--theme-primary)' }} />
                <span className="font-semibold" style={{ color: 'var(--theme-text)' }}>Ready to Collaborate?</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--theme-textSecondary)' }}>
                Let's collaborate on your next project and create something extraordinary together. 
                I'm passionate about turning ideas into reality and delivering exceptional results.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-xl shadow-2xl relative overflow-hidden"
                  style={{ background: 'var(--theme-gradient-primary)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Target size={24} />
                  Start a Project
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/about"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl border font-semibold text-xl relative overflow-hidden"
                  style={{ 
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-textSecondary)',
                    backgroundColor: 'var(--theme-background)'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Users size={24} />
                  Learn More About Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>
      </div>
    </div>
  )
}