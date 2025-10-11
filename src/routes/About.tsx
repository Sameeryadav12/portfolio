import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Gamepad2, Users, Award, Coffee, Heart, Sparkles, Target, Zap, Star } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

export default function About() {
  const [activeTab, setActiveTab] = useState('story')

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart, color: 'text-red-400' },
    { id: 'skills', label: 'Skills', icon: Code, color: 'text-blue-400' },
    { id: 'passions', label: 'Passions', icon: Gamepad2, color: 'text-purple-400' },
    { id: 'values', label: 'Values', icon: Award, color: 'text-yellow-400' }
  ]

  const timeline = [
    {
      year: '2021',
      title: 'Unity Game Development Journey',
      description: 'Started creating 3D games with Unity, published Balance 3D with 1,000+ downloads',
      icon: Gamepad2,
      color: 'text-purple-400',
      highlight: '1,000+ downloads'
    },
    {
      year: '2021',
      title: 'ATL Space Challenge',
      description: 'Led 3-member team to create interactive solar system app for educational purposes',
      icon: Users,
      color: 'text-blue-400',
      highlight: 'Team Leadership'
    },
    {
      year: '2025',
      title: 'Full-Stack Development',
      description: 'Built Call-a-Technician admin portal, reducing manual workload by 30%+',
      icon: Code,
      color: 'text-green-400',
      highlight: '30%+ efficiency'
    },
    {
      year: '2025',
      title: 'Portfolio Creation',
      description: 'Designed and developed this modern portfolio showcasing technical expertise',
      icon: Award,
      color: 'text-yellow-400',
      highlight: 'Modern Design'
    }
  ]

  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      icon: Code,
      color: 'text-blue-400',
      description: 'Modern web interfaces'
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
      icon: Users,
      color: 'text-green-400',
      description: 'Server-side development'
    },
    { 
      category: 'Game Dev', 
      items: ['Unity 3D', 'C#', 'Blender', '3D Modeling'],
      icon: Gamepad2,
      color: 'text-purple-400',
      description: 'Interactive experiences'
    },
    { 
      category: 'Tools', 
      items: ['Git', 'Docker', 'Jira', 'Testing'],
      icon: Award,
      color: 'text-yellow-400',
      description: 'Development workflow'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Enhanced Hero Section */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="text-center space-y-8">
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
            <Sparkles size={20} style={{ color: 'var(--theme-primary)' }} />
            <span className="font-semibold" style={{ color: 'var(--theme-text)' }}>Personal Journey</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--theme-textSecondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate developer crafting digital experiences that make a difference. 
            <span className="font-semibold" style={{ color: 'var(--theme-primary)' }}>
              Always learning, always building.
            </span>
          </motion.p>
        </div>
      </ScrollAnimation>

      {/* Enhanced Tab Navigation */}
      <ScrollAnimation direction="up" delay={0.4}>
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab, index) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab.id
                    ? 'text-white shadow-lg'
                    : 'hover:bg-opacity-50'
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? 'var(--theme-primary)' : 'var(--theme-surface)',
                  color: activeTab === tab.id ? 'white' : 'var(--theme-textSecondary)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Icon size={20} className={`${activeTab === tab.id ? 'text-white' : tab.color} relative z-10`} />
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundColor: 'var(--theme-primary)' }}
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </ScrollAnimation>

      {/* Enhanced Tab Content */}
      <ScrollAnimation direction="up" delay={0.6}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'story' && (
              <motion.div
                key="story"
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: 'var(--theme-surface)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'var(--theme-primary)' }}
                      >
                        <Heart size={32} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
                          My Journey
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--theme-textSecondary)' }}>
                          A timeline of growth and achievements
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {timeline.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <motion.div
                            key={index}
                            className="group flex gap-6 items-start p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                            style={{ 
                              backgroundColor: 'var(--theme-background)',
                              borderColor: 'var(--theme-border)'
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <motion.div 
                              className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center relative"
                              style={{ backgroundColor: 'var(--theme-primary)' }}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon size={24} className="text-white" />
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-white/30"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <span 
                                  className="px-4 py-2 rounded-full text-sm font-medium"
                                  style={{ 
                                    backgroundColor: 'var(--theme-primary)20',
                                    color: 'var(--theme-primary)'
                                  }}
                                >
                                  {item.year}
                                </span>
                                <h3 className="text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
                                  {item.title}
                                </h3>
                                <motion.span
                                  className={`px-3 py-1 rounded-full text-xs font-semibold ${item.color}`}
                                  style={{ backgroundColor: 'var(--theme-primary)10' }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                                >
                                  {item.highlight}
                                </motion.span>
                              </div>
                              <p style={{ color: 'var(--theme-textSecondary)' }}>
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => {
                    const Icon = skillGroup.icon
                    return (
                      <motion.div
                        key={index}
                        className="group rounded-3xl p-8 relative overflow-hidden"
                        style={{ backgroundColor: 'var(--theme-surface)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-6">
                            <div 
                              className="w-12 h-12 rounded-2xl flex items-center justify-center"
                              style={{ backgroundColor: 'var(--theme-primary)' }}
                            >
                              <Icon size={24} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold" style={{ color: 'var(--theme-text)' }}>
                                {skillGroup.category}
                              </h3>
                              <p className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                                {skillGroup.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {skillGroup.items.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:shadow-lg"
                                style={{ 
                                  backgroundColor: 'var(--theme-background)',
                                  borderColor: 'var(--theme-border)',
                                  color: 'var(--theme-text)'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                                whileHover={{ 
                                  scale: 1.05, 
                                  borderColor: 'var(--theme-primary)',
                                  color: 'var(--theme-primary)'
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'passions' && (
              <motion.div
                key="passions"
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: 'var(--theme-surface)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'var(--theme-primary)' }}
                      >
                        <Gamepad2 size={32} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
                          What Drives Me
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--theme-textSecondary)' }}>
                          The passions that fuel my creativity and drive
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {[
                        {
                          icon: '🎮',
                          title: 'Game Development',
                          description: 'Creating immersive 3D experiences that bring joy to players. From concept to publication, I love every aspect of game development.',
                          color: 'text-purple-400'
                        },
                        {
                          icon: '💻',
                          title: 'Full-Stack Development',
                          description: 'Building scalable web applications that solve real-world problems. I enjoy the challenge of creating efficient, user-friendly solutions.',
                          color: 'text-blue-400'
                        },
                        {
                          icon: '🎨',
                          title: 'Creative Problem Solving',
                          description: 'Finding innovative solutions to complex challenges. I believe the best code comes from understanding the problem deeply.',
                          color: 'text-pink-400'
                        },
                        {
                          icon: '👥',
                          title: 'Team Collaboration',
                          description: 'Working with talented people to create something greater than the sum of its parts. I thrive in collaborative environments.',
                          color: 'text-green-400'
                        }
                      ].map((passion, index) => (
                        <motion.div
                          key={index}
                          className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                          style={{ 
                            backgroundColor: 'var(--theme-background)',
                            borderColor: 'var(--theme-border)'
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{passion.icon}</div>
                            <div>
                              <h3 className={`text-xl font-semibold mb-3 ${passion.color}`}>
                                {passion.title}
                              </h3>
                              <p style={{ color: 'var(--theme-textSecondary)' }}>
                                {passion.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'values' && (
              <motion.div
                key="values"
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{ backgroundColor: 'var(--theme-surface)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'var(--theme-primary)' }}
                      >
                        <Award size={32} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
                          My Values
                        </h2>
                        <p className="text-lg" style={{ color: 'var(--theme-textSecondary)' }}>
                          The principles that guide my work and decisions
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: 'Quality Over Quantity',
                          description: 'I believe in writing clean, maintainable code that stands the test of time.',
                          icon: '⭐',
                          color: 'text-yellow-400'
                        },
                        {
                          title: 'Continuous Learning',
                          description: 'Technology evolves rapidly, and I\'m committed to staying current with the latest trends and best practices.',
                          icon: '📚',
                          color: 'text-blue-400'
                        },
                        {
                          title: 'User-Centric Design',
                          description: 'Every decision I make is guided by how it will impact the end user experience.',
                          icon: '🎯',
                          color: 'text-green-400'
                        },
                        {
                          title: 'Collaboration & Communication',
                          description: 'Great software is built by great teams. I value open communication and collaborative problem-solving.',
                          icon: '🤝',
                          color: 'text-purple-400'
                        }
                      ].map((value, index) => (
                        <motion.div
                          key={index}
                          className="group flex gap-6 items-start p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                          style={{ 
                            backgroundColor: 'var(--theme-background)',
                            borderColor: 'var(--theme-border)'
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-2xl"
                            style={{ backgroundColor: 'var(--theme-primary)20' }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {value.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className={`text-lg font-semibold mb-2 ${value.color}`}>
                              {value.title}
                            </h3>
                            <p style={{ color: 'var(--theme-textSecondary)' }}>
                              {value.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </ScrollAnimation>

      {/* Enhanced Call to Action */}
      <ScrollAnimation direction="up" delay={0.8}>
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
              
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'var(--theme-textSecondary)' }}>
                I'm always excited to work on new projects and collaborate with talented people. 
                Let's discuss how we can create something extraordinary together.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <motion.a
                  href="mailto:rishisameer7@gmail.com?subject=Let's Work Together&body=Hi Sameer,%0D%0A%0D%0AI'd love to discuss potential opportunities with you.%0D%0A%0D%0ABest regards,"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-lg shadow-2xl relative overflow-hidden"
                  style={{ background: 'var(--theme-gradient-primary)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Coffee size={22} />
                  Let's Work Together
                  <Star size={22} className="group-hover:rotate-12 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl border font-semibold text-lg relative overflow-hidden"
                  style={{ 
                    borderColor: 'var(--theme-border)',
                    color: 'var(--theme-textSecondary)',
                    backgroundColor: 'var(--theme-background)'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Target size={22} />
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>
    </div>
  )
}