import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Project } from '../data/projects'
import { ArrowRight, Github, Globe, Star, Zap, Award } from 'lucide-react'

interface AdvancedProjectCardProps {
  project: Project
  index: number
}

const AdvancedProjectCard: React.FC<AdvancedProjectCardProps> = ({ project, index }) => {
  const accent = project.visuals?.accent ?? 'var(--theme-primary)'
  const thumbnail = project.visuals?.thumb || 'https://via.placeholder.com/400x300/1e293b/cbd5e1?text=Project+Image'
  

  return (
    <Link to={`/projects/${project.slug}`}>
      <motion.article
        className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer h-full flex flex-col"
        style={{ 
          backgroundColor: 'var(--theme-surface)',
          boxShadow: 'var(--theme-shadow)'
        }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.03, 
          y: -10,
          boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.4)',
          transition: { duration: 0.3 }
        }}
      >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      {/* Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-800">
        <img
          src={thumbnail}
          alt={`${project.title} thumbnail`}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          loading="eager"
          onError={(e) => {
            console.error(`Failed to load image: ${thumbnail}`)
          }}
          onLoad={() => {
            // Image loaded successfully
          }}
        />
        
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {index === 0 && (
          <div className="absolute top-4 left-4">
            <span 
              className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
              style={{ 
                backgroundColor: 'var(--theme-primary)',
                color: 'white'
              }}
            >
              <Star size={12} />
              Featured
            </span>
          </div>
        )}
        
        {/* Timeline Badge */}
        <div className="absolute top-4 right-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {project.timeline}
          </span>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 text-white font-semibold shadow-lg backdrop-blur-sm"
            style={{ 
              backgroundColor: accent,
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Zap size={18} />
            View Case Study
            <ArrowRight size={18} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-6 z-20 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300" style={{ color: 'var(--theme-text)' }}>
            {project.title}
          </h3>
          <div className="flex items-center gap-1">
            <Award size={16} style={{ color: 'var(--theme-primary)' }} />
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-6 line-clamp-3 flex-grow" style={{ color: 'var(--theme-textSecondary)' }}>
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => {
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

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.links?.repo && (
            <motion.a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderColor: 'var(--theme-border)', 
                backgroundColor: 'var(--theme-background)',
                color: 'var(--theme-textSecondary)'
              }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: accent, 
                color: accent,
                backgroundColor: 'var(--theme-surface)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} /> 
              GitHub
            </motion.a>
          )}
          {project.links?.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg"
              style={{ 
                borderColor: 'var(--theme-border)', 
                backgroundColor: 'var(--theme-background)',
                color: 'var(--theme-textSecondary)'
              }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: accent, 
                color: accent,
                backgroundColor: 'var(--theme-surface)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} /> 
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: `linear-gradient(90deg, ${accent}, transparent)`
        }}
      />
      </motion.article>
    </Link>
  )
}

export default AdvancedProjectCard