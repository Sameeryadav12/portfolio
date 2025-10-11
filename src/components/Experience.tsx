import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, Code, Server, Gamepad2 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications and microservices architecture. Collaborating with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Architected and developed 5+ microservices handling 10K+ daily requests',
        'Improved application performance by 40% through code optimization',
        'Mentored 3 junior developers and established coding standards',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['Node.js', 'React', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      icon: Code
    },
    {
      title: 'Backend Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Developed robust backend systems and APIs for a fast-growing startup. Focused on scalability, security, and performance optimization.',
      achievements: [
        'Built RESTful APIs serving 1M+ requests monthly',
        'Designed database schemas improving query performance by 50%',
        'Implemented authentication and authorization systems',
        'Collaborated with frontend team to ensure seamless integration'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'Nginx'],
      icon: Server
    },
    {
      title: 'Unity Game Developer',
      company: 'Indie Game Studio',
      location: 'Remote',
      period: '2021 - 2022',
      type: 'Contract',
      description: 'Created immersive 3D games and interactive experiences using Unity 3D. Worked on physics-based gameplay mechanics and 3D asset integration.',
      achievements: [
        'Developed 3D physics-based puzzle game with 10K+ downloads',
        'Created procedural level generation system',
        'Optimized game performance for mobile devices',
        'Collaborated with 3D artists and sound designers'
      ],
      technologies: ['Unity 3D', 'C#', 'Blender', 'Photoshop', 'Git'],
      icon: Gamepad2
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Started my professional journey building responsive websites and learning modern web development practices.',
      achievements: [
        'Developed 15+ responsive websites for various clients',
        'Learned modern JavaScript frameworks and libraries',
        'Gained experience with version control and team collaboration',
        'Contributed to open-source projects'
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Git'],
      icon: Code
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of Technology',
      year: '2016 - 2020',
      location: 'Mumbai, India',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors and completed several programming projects.'
    }
  ]

  const certifications = [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Award
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2022',
      icon: Award
    },
    {
      name: 'Unity Certified Developer',
      issuer: 'Unity Technologies',
      year: '2021',
      icon: Award
    }
  ]

  return (
    <section id="experience" className="py-20">
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
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              My professional journey and continuous learning in technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Work Experience */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Building className="h-6 w-6 text-blue-400 mr-3" />
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                          <exp.icon className="h-6 w-6 text-blue-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h4>
                          <span className="text-sm text-slate-400 bg-slate-700 px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                          <span className="text-blue-400 font-semibold">{exp.company}</span>
                          <div className="flex items-center text-slate-400 text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center text-slate-400 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4">{exp.description}</p>
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="h-6 w-6 text-purple-400 mr-3" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 mb-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-blue-400 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center text-slate-400 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.year}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      {edu.location}
                    </div>
                    <p className="text-slate-300 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="h-6 w-6 text-green-400 mr-3" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card p-4 group hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <cert.icon className="h-5 w-5 text-green-400" />
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-slate-400 text-sm">{cert.issuer} • {cert.year}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

