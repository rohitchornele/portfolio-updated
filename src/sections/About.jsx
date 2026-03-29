import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const TRAITS = [
  { icon: Code2, title: 'Clean Code', desc: 'I write maintainable, well-documented code following best practices.' },
  { icon: Palette, title: 'UI/UX Focus', desc: 'Pixel-perfect implementation with strong attention to design details.' },
  { icon: Zap, title: 'Performance', desc: 'Obsessed with speed — lazy loading, code splitting, optimization.' },
  { icon: Users, title: 'Team Player', desc: 'Experienced in agile teams, code reviews, and collaborative work.' },
]

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">01 — About</span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 dark:text-white mt-2">
            Who am I?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar + decoration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Avatar card */}
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-accent/20 via-sky-400/10 to-purple-500/20 border border-accent/20 flex items-center justify-center relative overflow-hidden">
                {/* Pattern inside */}
                <div className="absolute inset-0 grid-bg opacity-30" />
                <span className="relative font-display font-black text-9xl text-accent/20 select-none">RC</span>
                {/* Overlay initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-black text-7xl text-gray-900/80 dark:text-white/80">RC</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <span className="font-mono text-sm font-semibold text-accent">React.js ⚛️</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <span className="font-mono text-sm font-semibold text-green-500">2 Yrs Exp 🚀</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm <span className="font-semibold text-gray-900 dark:text-white">Rohit Chornele</span>, a passionate Frontend & React Developer with{' '}
              <span className="text-accent font-medium">2 years of professional experience</span> crafting modern web applications.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              My journey started with curiosity about how websites work and evolved into a deep love for building intuitive, performant, and beautiful UIs. I specialize in React ecosystem — from hooks and context to Redux and server-side rendering with Next.js.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Beyond code, I care about the <span className="text-gray-900 dark:text-white font-medium">entire user experience</span> — accessibility, performance, and design consistency. I'm actively seeking my next role where I can contribute meaningfully and grow with a great team.
            </p>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-4">
              {TRAITS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="p-4 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/50 hover:border-accent/30 transition-colors group"
                >
                  <Icon size={20} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-display font-semibold text-sm text-gray-900 dark:text-white mb-1">{title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About