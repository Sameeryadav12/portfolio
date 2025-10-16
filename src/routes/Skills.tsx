import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Database, Gamepad2, Palette, Server, Smartphone, Globe, Zap, Award, TrendingUp, Star, Target, Clock, Users, Sparkles, ArrowRight } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'
import ParticleBackground from '../components/ParticleBackground'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      description: 'Modern web interfaces and user experiences',
      skills: [
        { name: 'React', level: 95, years: '3+', description: 'Component-based UI development' },
        { name: 'TypeScript', level: 90, years: '2+', description: 'Type-safe JavaScript development' },
        { name: 'TailwindCSS', level: 95, years: '2+', description: 'Utility-first CSS framework' },
        { name: 'Framer Motion', level: 85, years: '1+', description: 'Animation and motion design' },
        { name: 'HTML/CSS', level: 98, years: '4+', description: 'Core web technologies' },
        { name: 'JavaScript', level: 92, years: '3+', description: 'Dynamic web programming' }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
      description: 'Server-side logic and database management',
      skills: [
        { name: 'Node.js', level: 90, years: '2+', description: 'JavaScript runtime environment' },
        { name: 'Express.js', level: 88, years: '2+', description: 'Web application framework' },
        { name: 'MongoDB', level: 85, years: '2+', description: 'NoSQL database management' },
        { name: 'SQL', level: 80, years: '1+', description: 'Relational database queries' },
        { name: 'REST APIs', level: 92, years: '2+', description: 'API design and development' },
        { name: 'Authentication', level: 85, years: '2+', description: 'User security and access control' }
      ]
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      description: 'Interactive 3D experiences and game mechanics',
      skills: [
        { name: 'Unity 3D', level: 90, years: '3+', description: '3D game engine and development' },
        { name: 'C#', level: 88, years: '3+', description: 'Object-oriented programming' },
        { name: 'Blender', level: 75, years: '2+', description: '3D modeling and animation' },
        { name: '3D Modeling', level: 70, years: '2+', description: 'Asset creation and design' },
        { name: 'Game Design', level: 85, years: '3+', description: 'Game mechanics and user experience' },
        { name: 'Asset Creation', level: 80, years: '2+', description: 'Visual and audio asset development' }
      ]
    },
    {
      icon: Database,
      title: 'Database & Tools',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/20',
      description: 'Data management and development workflow',
      skills: [
        { name: 'MongoDB', level: 85, years: '2+', description: 'Document-based database' },
        { name: 'PostgreSQL', level: 75, years: '1+', description: 'Relational database system' },
        { name: 'Git', level: 90, years: '3+', description: 'Version control and collaboration' },
        { name: 'Docker', level: 70, years: '1+', description: 'Containerization and deployment' },
        { name: 'Testing', level: 80, years: '2+', description: 'Quality assurance and testing' },
        { name: 'CI/CD', level: 75, years: '1+', description: 'Continuous integration and deployment' }
      ]
    }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Efficiency Expert',
      description: 'Reduced manual workload by 30%+ through automation',
      metric: '30%+'
    },
    {
      icon: Award,
      title: 'Published Developer',
      description: 'Successfully published game with 1,000+ downloads',
      metric: '1,000+'
    },
    {
      icon: Zap,
      title: 'Team Leader',
      description: 'Led 5-person development team to project success',
      metric: '5-person'
    },
    {
      icon: Globe,
      title: 'Full-Stack Master',
      description: 'End-to-end development from frontend to database',
      metric: '100%'
    }
  ]

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
            <Code size={24} style={{ color: 'var(--theme-primary)' }} />
            <span className="font-semibold text-lg" style={{ color: 'var(--theme-text)' }}>Technical Skills</span>
            <Sparkles size={20} className="animate-pulse" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Skills & Expertise
          </motion.h1>
          
          <motion.p 
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--theme-textSecondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive overview of my technical capabilities, from frontend development to game creation. 
            <span className="font-semibold" style={{ color: 'var(--theme-primary)' }}>Continuously learning</span> and 
            <span className="font-semibold" style={{ color: 'var(--theme-primary)' }}> adapting to new technologies</span>.
          </motion.p>

          {/* Skills Overview Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Target, value: skillCategories.length, label: 'Skill Categories', color: 'text-blue-400' },
              { icon: Star, value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), label: 'Technologies', color: 'text-green-400' },
              { icon: Award, value: '95%', label: 'Average Proficiency', color: 'text-yellow-400' }
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

      {/* Enhanced Skills Categories */}
      <ScrollAnimation direction="up" delay={0.4}>
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.title
            return (
              <motion.div
                key={category.title}
                className={`group rounded-3xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300 ${
                  isSelected ? 'ring-2 ring-blue-400/50' : ''
                }`}
                style={{ 
                  backgroundColor: 'var(--theme-surface)',
                  border: isSelected ? '2px solid var(--theme-primary)' : '2px solid var(--theme-border)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedCategory(isSelected ? null : category.title)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                      style={{ backgroundColor: 'var(--theme-primary)' }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={32} className="text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-white/30"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
                        {category.title}
                      </h2>
                      <p className="text-lg" style={{ color: 'var(--theme-textSecondary)' }}>
                        {category.description} • {category.skills.length} technologies mastered
                      </p>
                    </div>
                    <motion.div
                      className="ml-auto"
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={24} style={{ color: 'var(--theme-primary)' }} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              className="group/skill p-6 rounded-2xl border relative overflow-hidden"
                              style={{ 
                                backgroundColor: 'var(--theme-background)',
                                borderColor: hoveredSkill === skill.name ? 'var(--theme-primary)' : 'var(--theme-border)'
                              }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                              whileHover={{ scale: 1.02, y: -2 }}
                              onHoverStart={() => setHoveredSkill(skill.name)}
                              onHoverEnd={() => setHoveredSkill(null)}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                              <div className="relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                  <h3 className="text-lg font-semibold" style={{ color: 'var(--theme-text)' }}>
                                    {skill.name}
                                  </h3>
                                  <span className="text-sm font-medium" style={{ color: 'var(--theme-primary)' }}>
                                    {skill.years}
                                  </span>
                                </div>
                                
                                <p className="text-sm mb-4" style={{ color: 'var(--theme-textSecondary)' }}>
                                  {skill.description}
                                </p>
                                
                                <div className="mb-3">
                                  <div 
                                    className="h-2 rounded-full"
                                    style={{ backgroundColor: 'var(--theme-border)' }}
                                  >
                                    <motion.div
                                      className="h-2 rounded-full"
                                      style={{ backgroundColor: 'var(--theme-primary)' }}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.level}%` }}
                                      transition={{ duration: 1, delay: skillIndex * 0.05 + 0.5 }}
                                    />
                                  </div>
                                </div>
                                
                                <div className="flex justify-between items-center text-sm">
                                  <span style={{ color: 'var(--theme-textSecondary)' }}>
                                    {skill.level}% proficiency
                                  </span>
                                  <motion.span
                                    className="px-2 py-1 rounded-full text-xs font-medium"
                                    style={{ 
                                      backgroundColor: 'var(--theme-primary)20',
                                      color: 'var(--theme-primary)'
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    Expert
                                  </motion.span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </ScrollAnimation>

      {/* Achievements */}
      <ScrollAnimation direction="up" delay={0.6}>
        <motion.section
          className="py-20"
          style={{ backgroundColor: 'var(--theme-surface)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Key Achievements
              </h2>
              <p className="text-xl" style={{ color: 'var(--theme-textSecondary)' }}>
                Measurable results that demonstrate my impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={achievement.title}
                    className="text-center p-8 rounded-3xl border-2"
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
                    <div 
                      className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--theme-primary)' }}
                    >
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2" style={{ color: 'var(--theme-primary)' }}>
                      {achievement.metric}
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--theme-text)' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                      {achievement.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Learning Philosophy */}
      <ScrollAnimation direction="up" delay={0.8}>
        <motion.section
          className="py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--theme-text)' }}>
              Continuous Learning
            </h2>
            <p className="text-xl leading-relaxed mb-12" style={{ color: 'var(--theme-textSecondary)' }}>
              Technology evolves rapidly, and so do I. I'm committed to staying current with the latest trends, 
              frameworks, and best practices. Whether it's mastering new JavaScript frameworks, exploring 
              emerging backend technologies, or diving into advanced game development techniques, I approach 
              learning with enthusiasm and dedication.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Always Learning', description: 'Regularly exploring new technologies and frameworks' },
                { title: 'Best Practices', description: 'Following industry standards and coding conventions' },
                { title: 'Problem Solving', description: 'Approaching challenges with analytical thinking' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-2xl border"
                  style={{ 
                    backgroundColor: 'var(--theme-surface)',
                    borderColor: 'var(--theme-border)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--theme-text)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>
      </div>
    </div>
  )
}
