import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'Node.js', level: 88, color: '#339933' },
  { name: 'MongoDB', level: 85, color: '#47A248' },
  { name: 'Unity C#', level: 82, color: '#239120' },
  { name: 'Express.js', level: 80, color: '#000000' },
  { name: 'SQL', level: 75, color: '#336791' },
  { name: 'Docker', level: 70, color: '#2496ED' }
]

export default function SkillsRadar() {
  return (
    <motion.section
      className="mt-8 rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-brand-fog mb-2">Technical Skills</h2>
        <p className="text-brand-mist">Proficiency levels across my tech stack</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="text-center p-4 rounded-2xl bg-brand-base/30 border border-brand-mist/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl mb-2">{skill.name}</div>
            <div className="w-full bg-brand-mist/20 rounded-full h-2 mb-2">
              <motion.div
                className="h-2 rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </div>
            <div className="text-sm text-brand-mist">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
