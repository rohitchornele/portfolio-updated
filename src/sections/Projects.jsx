import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/data'
import { FaGithub } from 'react-icons/fa'

const CATEGORIES = ['All', 'Frontend', 'Fullstack', 'CMS']

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      layout
      className="group relative flex flex-col bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700/50 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10"
    >
      {/* Card top accent */}
      <div
        className="h-1.5 w-full opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{project.category}</span>
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mt-1 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.tagline}</p>
          </div>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 hover:bg-accent/20 hover:text-accent border border-gray-200 dark:border-gray-700 hover:border-accent/40 transition-all duration-200 flex-shrink-0"
          >
            <ArrowUpRight size={18} />
          </motion.a>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-lg font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors font-medium"
          >
            <FaGithub size={15} />
            Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors font-medium"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">03 — Projects</span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 dark:text-white mt-2">
            Things I've Built
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl">
            A selection of projects that showcase my problem-solving and technical range.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium font-mono transition-all duration-200 border ${
                filter === cat
                  ? 'bg-accent text-gray-950 border-accent shadow-lg shadow-accent/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-accent/40 hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">Want to see more?</p>
          <motion.a
            href="https://github.com/rohitchornele"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-outline"
          >
            <FaGithub size={18} />
            View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects