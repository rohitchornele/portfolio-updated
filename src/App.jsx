import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import Blog from './sections/Blog'

function App() {
  const { isDark, toggle } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={loading} />
      {!loading && (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar isDark={isDark} toggleTheme={toggle} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Blog/>
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
