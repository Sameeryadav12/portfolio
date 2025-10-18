import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code, Server, Gamepad2 } from 'lucide-react'
import { projects as projectData } from '../data/projects'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  // Use the real project data from projects.ts
  const projects = projectData.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.summary,
    image: project.visuals?.thumb || '/images/default-project.jpg',
    category: project.categories?.[0]?.toLowerCase() || 'web',
    technologies: project.stack,
    liveUrl: project.links?.demo || '',
    githubUrl: project.links?.repo || '',
    featured: index < 3 // First 3 projects are featured
  }))

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'web', name: 'Web', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'full-stack', name: 'Full Stack', icon: ExternalLink },
    { id: 'game', name: 'Game', icon: Gamepad2 },
    { id: 'unity', name: 'Unity', icon: Gamepad2 },
    { id: 'education', name: 'Education', icon: Play }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A showcase of my recent work across web development, backend systems, and game development
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-500 text-white'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group hover:bg-white/10 transition-all duration-300 flex flex-col h-full min-h-[600px]"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  {project.image && project.image !== '/images/default-project.jpg' ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          {project.category === 'game' || project.category === 'unity' ? (
                            <Gamepad2 className="h-8 w-8 text-blue-400" />
                          ) : project.category === 'backend' ? (
                            <Server className="h-8 w-8 text-blue-400" />
                          ) : (
                            <Code className="h-8 w-8 text-blue-400" />
                          )}
                        </div>
                        <span className="text-slate-400 text-sm">{project.category.toUpperCase()}</span>
                      </div>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed min-h-[3rem]">
                    {project.description}
                  </p>

                  {/* Technologies - Icon Display */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => {
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

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Sameeryadav12"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

