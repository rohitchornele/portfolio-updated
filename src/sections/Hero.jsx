import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown,  Link, Sparkle } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const ROLES = ['React Developer', 'Frontend Engineer', 'UI Craftsman', 'Web Developer']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout
    const target = ROLES[roleIndex]

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-mono mb-8">
            <Sparkle size={12} className="animate-pulse" />
            <span>Available for hire</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-[0.95] mb-4">
            <div className='mb-2'>Hi, I'm</div>
            <span className="gradient-text text-glow text-5xl md:text-7xl lg:text-8xl">Rohit</span>{' '}
            <span className="text-gray-900 dark:text-white text-5xl md:text-7xl lg:text-8xl">Chornele</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="w-12 h-0.5 bg-accent" />
            <div className="font-mono text-xl md:text-2xl text-accent">
              {displayed}
              <span className="animate-blink">|</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10 font-body">
            I craft fast, accessible, and visually striking web experiences.{' '}
            <span className="text-gray-900 dark:text-white font-medium">2 years of turning designs into pixel-perfect React apps</span> — ready to build something exceptional with your team.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base group"
            >
              Hire Me
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </motion.button>
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-base"
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex items-center gap-4">
            <span className="text-xs text-gray-400 dark:text-gray-600 font-mono uppercase tracking-widest">Find me on</span>
            {[
              { icon: FaGithub, href: 'https://github.com/rohitchornele', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/rohit-chornele', label: 'LinkedIn' },
              { icon: FaXTwitter, href: 'https://twitter.com/rohitchornele', label: 'Twitter' },
              { icon: FaInstagram, href: 'https://www.instagram.com/rohitchornele/', label: 'Instagram' },
              { icon: FaYoutube, href: 'https://www.youtube.com/@rohitchornele4355', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-accent/20 hover:text-accent border border-gray-200 dark:border-gray-700/50 hover:border-accent/30 transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-colors"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden lg:flex absolute right-24 top-1/2 -translate-y-1/2 flex-col gap-4"
        >
          {[
            { value: '2+', label: 'Years Exp.' },
            { value: '10+', label: 'Projects' },
            { value: '5+', label: 'Tech Stack' },
          ].map(({ value, label }) => (
            <div key={label} className="text-right">
              <div className="font-display font-black text-4xl text-gray-900 dark:text-white">{value}</div>
              <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero