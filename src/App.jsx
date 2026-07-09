import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useTheme from './hooks/useTheme'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Timeline />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </motion.div>
    </>
  )
}
