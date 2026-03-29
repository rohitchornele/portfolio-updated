import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { EXPERIENCE } from '../data/data'

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">04 — Experience</span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 dark:text-white mt-2">
            Work History
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="md:pl-16 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-gray-950 hidden md:block shadow-lg shadow-accent/40" />

              <div className="bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700/50 rounded-3xl p-8 hover:border-accent/30 transition-colors">
                {/* Role header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Briefcase size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">{exp.role}</h3>
                        <p className="text-accent font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} />
                        {exp.period} · {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-green-400/10 text-green-500 border border-green-400/20">
                    {exp.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {exp.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.07 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{h}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech used */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mr-3">Tech used:</span>
                  <div className="inline-flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-lg font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* "Open to opportunities" card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:pl-16 relative mt-6"
          >
            <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-dashed border-accent/40 hidden md:flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
            </div>

            <div className="border-2 border-dashed border-accent/20 rounded-3xl p-6 bg-accent/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-display font-semibold text-gray-900 dark:text-white">Currently open to new opportunities</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 ml-5">
                Actively seeking a React Developer role. Let's build something great together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience