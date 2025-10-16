import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code, Server, Gamepad2 } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce API Platform',
      description: 'A comprehensive e-commerce backend API built with Node.js, Express, and MongoDB. Features include user authentication, product management, order processing, and payment integration.',
      image: '/images/ecommerce-api.jpg',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API', 'Docker'],
      liveUrl: 'https://ecommerce-api-demo.vercel.app',
      githubUrl: 'https://github.com/Sameeryadav12/ecommerce-api',
      featured: true
    },
    {
      id: 2,
      title: 'React Portfolio Dashboard',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a contact form with email integration.',
      image: '/images/portfolio-dashboard.jpg',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://sameer-portfolio.vercel.app',
      githubUrl: 'https://github.com/Sameeryadav12/portfolio',
      featured: true
    },
    {
      id: 3,
      title: '3D Balance Game',
      description: 'An immersive 3D physics-based puzzle game developed in Unity. Players must balance objects on platforms while navigating through challenging levels with realistic physics.',
      image: '/images/balance-3d-thumbnail.png',
      category: 'gamedev',
      technologies: ['Unity 3D', 'C#', 'Blender', 'Unity Physics', 'Cinemachine'],
      liveUrl: 'https://sameer-games.itch.io/balance-3d',
      githubUrl: 'https://github.com/Sameeryadav12/balance-3d-game',
      featured: true
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'A full-stack real-time chat application with Socket.io, featuring private messaging, group chats, file sharing, and online status indicators.',
      image: '/images/chat-app.jpg',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Multer'],
      liveUrl: 'https://chat-app-demo.vercel.app',
      githubUrl: 'https://github.com/Sameeryadav12/chat-app',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management API',
      description: 'A robust task management API with advanced features like project organization, team collaboration, deadline tracking, and comprehensive reporting.',
      image: '/images/task-api.jpg',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'JWT'],
      liveUrl: 'https://task-api-demo.vercel.app',
      githubUrl: 'https://github.com/Sameeryadav12/task-management-api',
      featured: false
    },
    {
      id: 6,
      title: 'Call-Tech Mobile App',
      description: 'A mobile application for managing business calls and customer interactions, built with React Native and integrated with a Node.js backend.',
      image: '/images/call-tech.jpg',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Expo', 'Push Notifications'],
      liveUrl: 'https://call-tech-app.vercel.app',
      githubUrl: 'https://github.com/Sameeryadav12/call-tech-app',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'fullstack', name: 'Full Stack', icon: ExternalLink },
    { id: 'gamedev', name: 'Game Dev', icon: Gamepad2 },
    { id: 'mobile', name: 'Mobile', icon: Play }
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
                className="glass-card overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        {project.category === 'gamedev' ? (
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
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
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

