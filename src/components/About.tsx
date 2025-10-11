import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Gamepad2, Database, Cpu, Globe } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: 'Frontend', value: 'React, TypeScript, Next.js' },
    { icon: Server, label: 'Backend', value: 'Node.js, Express, Python' },
    { icon: Database, label: 'Database', value: 'MongoDB, PostgreSQL, Redis' },
    { icon: Gamepad2, label: 'Game Dev', value: 'Unity 3D, C#, Blender' },
    { icon: Cpu, label: 'DevOps', value: 'Docker, AWS, CI/CD' },
    { icon: Globe, label: 'Tools', value: 'Git, VSCode, Figma' },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm a <span className="text-blue-400 font-semibold">backend-leaning full-stack developer</span> with 
                  a passion for building robust, scalable applications. With expertise in modern web technologies 
                  and Unity 3D game development, I bring a unique perspective to every project.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  My journey in tech started with a fascination for how things work under the hood. This led me to 
                  specialize in backend development, where I excel at designing APIs, managing databases, and 
                  implementing complex business logic.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring the world of 3D game development, experimenting 
                  with new technologies, or contributing to open-source projects. I believe in continuous learning 
                  and staying up-to-date with the latest industry trends.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="glass-card px-4 py-2">
                    <span className="text-sm text-slate-400">Available for work</span>
                  </div>
                  <div className="glass-card px-4 py-2">
                    <span className="text-sm text-slate-400">Remote friendly</span>
                  </div>
                  <div className="glass-card px-4 py-2">
                    <span className="text-sm text-slate-400">Open to collaboration</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                  <h3 className="font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-sm text-slate-400">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

