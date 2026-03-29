import { motion } from 'framer-motion'
import { Heart, ArrowUp} from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-black text-sm text-gray-950">R</span>
              </div>
              <span className="font-display font-bold text-gray-900 dark:text-white">Rohit Chornele</span>
            </div>
            {/* <p className="text-xs text-gray-400 flex items-center gap-1">
              Built with <Heart size={11} className="text-red-400 fill-red-400" /> using React & Tailwind CSS
            </p> */}
            {/* <p className="text-xs text-gray-400">© {new Date().getFullYear()} Rohit Chornele. All rights reserved.</p> */}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/rohitchornele', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/rohitchornele', label: 'LinkedIn' },
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
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-accent/20 hover:text-accent border border-gray-200 dark:border-gray-700 hover:border-accent/30 transition-all duration-200"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-accent transition-colors uppercase tracking-widest"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer