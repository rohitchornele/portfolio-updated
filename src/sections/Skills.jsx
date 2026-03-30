import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../data/data'

const CATEGORY_COLORS = {
  Frontend: 'from-accent to-sky-400',
  Backend: 'from-green-400 to-emerald-500',
  Tools: 'from-purple-400 to-violet-500',
}

const CATEGORY_BG = {
  Frontend: 'bg-accent/10 text-accent border-accent/20',
  Backend: 'bg-green-400/10 text-green-500 border-green-400/20',
  Tools: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
}

const SkillBar = ({ name, level, color, delay }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors">{name}</span>
        <span className="text-xs font-mono text-gray-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-200 dark:bg-gray-700/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">02 — Skills</span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 dark:text-white mt-2">
            My Skills
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
            Technologies I work with regularly, organized by domain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700/50 hover:border-accent/30 transition-colors"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${CATEGORY_BG[category]}`}>
                  {category}
                </span>
                <div className={`flex-1 h-px bg-gradient-to-r ${CATEGORY_COLORS[category]} opacity-30`} />
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-4">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={CATEGORY_COLORS[category]}
                    delay={catIdx * 0.1 + i * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {['Firebase', 'Socket.io', 'Axios', 'React Query', 'Zod', 'Jest', 'Netlify', 'Vercel', 'Docker (basics)', 'Linux CLI'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-accent/40 hover:text-accent transition-colors cursor-default font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills