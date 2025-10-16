import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Gamepad2, Users, Award, Coffee, Heart, Sparkles, Target, Zap, Star, GraduationCap, BookOpen, Trophy, Calendar } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'
import ParticleBackground from '../components/ParticleBackground'

export default function About() {
  const [activeTab, setActiveTab] = useState('story')

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart, color: 'text-red-400' },
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'text-green-400' },
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

  const educationData = [
    {
      degree: 'Bachelor of Information Technology',
      field: 'CT5 - Information Technology',
      university: 'Federation University Australia',
      duration: '2024 - 2025',
      status: 'Pursuing',
      cgpa: 'Distinction Average',
      subjects: [
        // 2025 Subjects (Current Year)
        { name: 'Connected Systems (ITECH 1504)', score: 'HD', credits: 15, grade: '9.0', year: '2025' },
        { name: 'IT Project Management Techniques (ITECH 2250)', score: 'D', credits: 15, grade: '7.0', year: '2025' },
        { name: 'Network Architecture and Design (ITECH 2301)', score: 'D', credits: 15, grade: '7.0', year: '2025' },
        { name: 'Emerging Information Systems (ITECH 2304)', score: 'HD', credits: 15, grade: '9.0', year: '2025' },
        { name: 'Professional Identity (COOPC 1024)', score: '**', credits: 15, grade: 'In Progress', year: '2025' },
        { name: 'Cloud and Mobile Security (ITECH 3100)', score: '**', credits: 15, grade: 'In Progress', year: '2025' },
        { name: 'IT Strategy and Governance (ITECH 3103)', score: '**', credits: 15, grade: 'In Progress', year: '2025' },
        { name: 'Project 1 (ITECH 3208)', score: '**', credits: 15, grade: 'In Progress', year: '2025' },
        
        // 2024 Subjects (Completed)
        { name: 'Understanding the Digital Revolution (ITECH 1100)', score: 'D', credits: 15, grade: '7.0', year: '2024' },
        { name: 'IT Problem Solving (ITECH 1101)', score: 'D', credits: 15, grade: '7.0', year: '2024' },
        { name: 'Networking and Security (ITECH 1102)', score: 'C', credits: 15, grade: '6.0', year: '2024' },
        { name: 'Big Data and Analytics (ITECH 1103)', score: 'HD', credits: 15, grade: '9.0', year: '2024' },
        { name: 'Systems Modelling (ITECH 2002)', score: 'C', credits: 15, grade: '6.0', year: '2024' },
        { name: 'Mobile Networks and Wireless Communications (ITECH 2300)', score: 'D', credits: 15, grade: '7.0', year: '2024' },
        { name: 'Analysing the Modern Business (ITECH 2305)', score: 'HD', credits: 15, grade: '9.0', year: '2024' },
        { name: 'User Experience (ITECH 3001)', score: 'C', credits: 15, grade: '6.0', year: '2024' },
        
        // 2023 Subjects (Transferred Credits)
        { name: 'Foundations of Programming (ITECH 1400)', score: 'TC', credits: 15, grade: 'Transferred', year: '2023' },
        { name: 'Web Design (ITECH 2003)', score: 'TC', credits: 15, grade: 'Transferred', year: '2023' },
        { name: 'Data Modelling (ITECH 2004)', score: 'TC', credits: 15, grade: 'Transferred', year: '2023' },
        { name: 'Level 1 Unspecified Credit (UNSPC 1015)', score: 'TC', credits: 15, grade: 'Transferred', year: '2023' }
      ],
      achievements: [
        'High Distinction (HD) in Big Data and Analytics',
        'High Distinction (HD) in Analysing the Modern Business',
        'High Distinction (HD) in Emerging Information Systems',
        'High Distinction (HD) in Connected Systems',
        'Multiple Distinction (D) grades across core IT subjects',
        'Strong performance in programming and systems analysis',
        'Active in IT project management and user experience'
      ],
      color: 'from-blue-500 to-cyan-600'
    }
  ]

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10 space-y-16">
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

            {activeTab === 'education' && (
              <motion.div
                key="education"
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {educationData.map((edu, eduIndex) => (
                  <motion.div
                    key={eduIndex}
                    className="rounded-3xl p-8 relative overflow-hidden"
                    style={{ 
                      backgroundColor: 'var(--theme-surface)',
                      border: '1px solid var(--theme-border)',
                      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: eduIndex * 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                          style={{ 
                            background: `linear-gradient(135deg, ${edu.color})`,
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                          }}
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <GraduationCap size={32} className="text-white" />
                          <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-white/30"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--theme-text)' }}>
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-medium" style={{ color: 'var(--theme-primary)' }}>
                            {edu.field}
                          </p>
                          <p className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                            {edu.university}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <motion.div 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-2"
                          style={{ 
                            backgroundColor: 'var(--theme-primary)',
                            color: 'white'
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Trophy size={16} />
                          CGPA: {edu.cgpa}
                        </motion.div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                          <Calendar size={16} />
                          {edu.duration} • {edu.status}
                        </div>
                      </div>
                    </div>

                    {/* Subjects Grid */}
                    <div className="mb-8">
                      <motion.div 
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                          Academic Excellence
                        </h4>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                      </motion.div>
                      
                      {/* Year 2025 - Current */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                          <div className="relative bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 rounded-2xl">
                            <h5 className="text-xl font-bold text-white flex items-center gap-3">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Calendar size={20} />
                              </motion.div>
                              2025 - Current Year
                              <motion.span 
                                className="ml-auto px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                In Progress
                              </motion.span>
                            </h5>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {edu.subjects.filter(subject => subject.year === '2025').map((subject, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="group relative overflow-hidden rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl"
                            style={{ 
                              backgroundColor: 'var(--theme-surface)',
                              borderColor: 'var(--theme-border)',
                              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: subIndex * 0.1,
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -8,
                              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                              borderColor: 'var(--theme-primary)'
                            }}
                          >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Floating particles effect */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <motion.div
                                className="w-2 h-2 bg-emerald-400 rounded-full"
                                animate={{ 
                                  y: [0, -10, 0],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: subIndex * 0.2
                                }}
                              />
                            </div>
                            <div className="relative p-6 z-10">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <h5 className="font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors duration-300" style={{ color: 'var(--theme-text)' }}>
                                    {subject.name}
                                  </h5>
                                  <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                                    <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600 font-medium">
                                      {subject.credits} Credits
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  <motion.span 
                                    className={`px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                                    subject.score === 'HD' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' :
                                    subject.score === 'D' ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white' :
                                    subject.score === 'C' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' :
                                    subject.score === 'TC' ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white' :
                                    subject.score === '**' ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white' :
                                    'bg-gradient-to-r from-indigo-400 to-purple-500 text-white'
                                    }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    {subject.score}
                                  </motion.span>
                                  <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>
                                    {subject.grade}
                                  </span>
                                </div>
                              </div>
                              
                              {/* Enhanced Progress Bar */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                                  <span>Progress</span>
                                  <span className="font-semibold">
                                    {subject.grade === 'In Progress' ? 'In Progress' : 
                                     subject.grade === 'Transferred' ? 'Transferred' : 
                                     subject.grade === 'TBD' ? 'Pending' : `${subject.grade}/10`}
                                  </span>
                                </div>
                                <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden">
                                  <motion.div 
                                    className="h-full rounded-full relative"
                                    style={{ 
                                      background: subject.grade === 'In Progress' 
                                        ? 'linear-gradient(90deg, #a855f7, #ec4899)' :
                                        subject.grade === 'Transferred' 
                                        ? 'linear-gradient(90deg, #6b7280, #9ca3af)' :
                                        subject.grade === 'TBD' 
                                        ? 'linear-gradient(90deg, #e5e7eb, #d1d5db)' 
                                        : `linear-gradient(90deg, ${edu.color})`
                                    }}
                                    initial={{ width: 0 }}
                                    animate={{ 
                                      width: subject.grade === 'In Progress' 
                                        ? '75%' :
                                        subject.grade === 'Transferred' 
                                        ? '100%' :
                                        subject.grade === 'TBD' 
                                        ? '0%' 
                                        : `${(parseFloat(subject.grade) / 10) * 100}%`
                                    }}
                                    transition={{ duration: 1.5, delay: subIndex * 0.1 + 0.8 }}
                                  >
                                    {/* Shimmer effect */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                      animate={{ x: ['-100%', '100%'] }}
                                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    />
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        </div>
                      </motion.div>
                      
                      {/* Year 2024 - Completed */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                          <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl">
                            <h5 className="text-xl font-bold text-white flex items-center gap-3">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              >
                                <Calendar size={20} />
                              </motion.div>
                              2024 - Completed
                              <motion.span 
                                className="ml-auto px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                              >
                                ✓ Done
                              </motion.span>
                            </h5>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {edu.subjects.filter(subject => subject.year === '2024').map((subject, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="group p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                            style={{ 
                              backgroundColor: 'var(--theme-background)',
                              borderColor: 'var(--theme-border)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium" style={{ color: 'var(--theme-text)' }}>
                                {subject.name}
                              </h5>
                              <div className="flex items-center gap-2">
                                <span 
                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    subject.score === 'HD' ? 'bg-green-100 text-green-800' :
                                    subject.score === 'D' ? 'bg-blue-100 text-blue-800' :
                                    subject.score === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                    subject.score === 'TC' ? 'bg-gray-100 text-gray-800' :
                                    'bg-purple-100 text-purple-800'
                                  }`}
                                >
                                  {subject.score}
                                </span>
                                <span className="text-sm font-bold" style={{ color: 'var(--theme-primary)' }}>
                                  {subject.grade}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                              <span>{subject.credits} Credits</span>
                              <div className="w-20 h-2 rounded-full bg-gray-200 overflow-hidden">
                                <motion.div 
                                  className="h-full rounded-full"
                                  style={{ 
                                    background: `linear-gradient(90deg, ${edu.color})`,
                                    width: `${subject.grade === 'TBD' ? 0 : (parseFloat(subject.grade) / 10) * 100}%`
                                  }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${subject.grade === 'TBD' ? 0 : (parseFloat(subject.grade) / 10) * 100}%` }}
                                  transition={{ duration: 1, delay: subIndex * 0.1 + 0.5 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        </div>
                      </motion.div>
                      
                      {/* Year 2023 - Foundation */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl"></div>
                          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl">
                            <h5 className="text-xl font-bold text-white flex items-center gap-3">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              >
                                <Calendar size={20} />
                              </motion.div>
                              2023 - Transferred Credits
                              <motion.span 
                                className="ml-auto px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                              >
                                🔄 Transferred
                              </motion.span>
                            </h5>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {edu.subjects.filter(subject => subject.year === '2023').map((subject, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="group p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                            style={{ 
                              backgroundColor: 'var(--theme-background)',
                              borderColor: 'var(--theme-border)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium" style={{ color: 'var(--theme-text)' }}>
                                {subject.name}
                              </h5>
                              <div className="flex items-center gap-2">
                                <span 
                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    subject.score === 'HD' ? 'bg-green-100 text-green-800' :
                                    subject.score === 'D' ? 'bg-blue-100 text-blue-800' :
                                    subject.score === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                    subject.score === 'TC' ? 'bg-gray-100 text-gray-800' :
                                    'bg-purple-100 text-purple-800'
                                  }`}
                                >
                                  {subject.score}
                                </span>
                                <span className="text-sm font-bold" style={{ color: 'var(--theme-primary)' }}>
                                  {subject.grade}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                              <span>{subject.credits} Credits</span>
                              <div className="w-20 h-2 rounded-full bg-gray-200 overflow-hidden">
                                <motion.div 
                                  className="h-full rounded-full"
                                  style={{ 
                                    background: `linear-gradient(90deg, ${edu.color})`,
                                    width: `${subject.grade === 'TBD' ? 0 : (parseFloat(subject.grade) / 10) * 100}%`
                                  }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${subject.grade === 'TBD' ? 0 : (parseFloat(subject.grade) / 10) * 100}%` }}
                                  transition={{ duration: 1, delay: subIndex * 0.1 + 0.5 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        </div>
                      </motion.div>
                      
                      {/* Year 2023 - Transferred Credits */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl"></div>
                          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl">
                            <h5 className="text-xl font-bold text-white flex items-center gap-3">
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              >
                                <Calendar size={20} />
                              </motion.div>
                              2023 - Transferred Credits
                              <motion.span 
                                className="ml-auto px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                              >
                                🔄 Transferred
                              </motion.span>
                            </h5>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {edu.subjects.filter(subject => subject.year === '2023').map((subject, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="group p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                            style={{ 
                              backgroundColor: 'var(--theme-background)',
                              borderColor: 'var(--theme-border)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium" style={{ color: 'var(--theme-text)' }}>
                                {subject.name}
                              </h5>
                              <div className="flex items-center gap-2">
                                <span 
                                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    subject.score === 'HD' ? 'bg-green-100 text-green-800' :
                                    subject.score === 'D' ? 'bg-blue-100 text-blue-800' :
                                    subject.score === 'C' ? 'bg-yellow-100 text-yellow-800' :
                                    subject.score === 'TC' ? 'bg-gray-100 text-gray-800' :
                                    'bg-purple-100 text-purple-800'
                                  }`}
                                >
                                  {subject.score}
                                </span>
                                <span className="text-sm font-bold" style={{ color: 'var(--theme-primary)' }}>
                                  {subject.grade}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                              <span>{subject.credits} Credits</span>
                              <div className="w-20 h-2 rounded-full bg-gray-200 overflow-hidden">
                                <motion.div 
                                  className="h-full rounded-full"
                                  style={{ 
                                    background: `linear-gradient(90deg, ${edu.color})`,
                                    width: `${subject.grade === 'TBD' ? 0 : (parseFloat(subject.grade) / 10) * 100}%`
                                  }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${subject.grade === 'TBD' ? 0 : (parseFloat(subject.grade) / 10) * 100}%` }}
                                  transition={{ duration: 1, delay: subIndex * 0.1 + 0.5 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <div className="text-center mb-8">
                        <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                          Achievements & Recognition
                        </h4>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="group relative overflow-hidden rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl"
                            style={{ 
                              backgroundColor: 'var(--theme-surface)',
                              borderColor: 'var(--theme-border)',
                              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                            }}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: achIndex * 0.1,
                              type: "spring",
                              stiffness: 100
                            }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -8,
                              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                              borderColor: 'var(--theme-primary)'
                            }}
                          >
                            {/* Animated background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Floating particles effect */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <motion.div
                                className="w-2 h-2 bg-yellow-400 rounded-full"
                                animate={{ 
                                  y: [0, -10, 0],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: achIndex * 0.2
                                }}
                              />
                            </div>
                            
                            <div className="relative p-6 z-10">
                              <div className="flex items-center gap-4">
                                <motion.div 
                                  className="w-12 h-12 rounded-2xl flex items-center justify-center relative"
                                  style={{ 
                                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                                    boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)'
                                  }}
                                  whileHover={{ rotate: 360, scale: 1.1 }}
                                  transition={{ duration: 0.6 }}
                                >
                                  <Star size={24} className="text-white" />
                                  <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-white/30"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                  />
                                </motion.div>
                                <div className="flex-1">
                                  <span className="text-lg font-semibold group-hover:text-yellow-600 transition-colors duration-300" style={{ color: 'var(--theme-text)' }}>
                                    {achievement}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-yellow-500 to-red-500" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
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
    </div>
  )
}