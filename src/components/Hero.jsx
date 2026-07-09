import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineArrowDown, HiOutlineDownload, HiOutlineMailOpen, HiOutlineFolderOpen } from 'react-icons/hi'
import { profile } from '../data/content'
import MagneticButton from './MagneticButton'
import GsapReveal from './GsapReveal'

function useTypingEffect(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingEffect(profile.roles)

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20 overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-[8%] h-16 w-16 rounded-2xl border border-accent/30 rotate-12 animate-float" />
        <div className="absolute top-1/2 right-[10%] h-24 w-24 rounded-full border border-ink/10 animate-float-slow" />
        <div className="absolute bottom-24 left-[20%] h-10 w-10 rotate-45 bg-accent/10 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 right-[25%] h-6 w-6 rounded-full bg-accent/40 animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 h-10 font-display text-2xl sm:text-3xl text-accent"
          >
            {typed}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-ink/70 text-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton
              className="btn-primary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <HiOutlineFolderOpen size={18} /> View Projects
            </MagneticButton>
            <MagneticButton as="a" href={profile.resumeUrl} download className="btn-outline">
              <HiOutlineDownload size={18} /> Download CV
            </MagneticButton>
            <MagneticButton
              className="btn-outline"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <HiOutlineMailOpen size={18} /> Hire Me
            </MagneticButton>
          </motion.div>
        </div>

        <GsapReveal y={60} className="relative mx-auto w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
          <div className="absolute -inset-4 rounded-[2rem] bg-accent-gradient opacity-20 blur-2xl animate-pulse" />
          <div className="gradient-border glass relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-primary">
              <span className="font-display text-7xl font-bold text-ink/20">FM</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 flex items-center justify-between">
              <span className="font-display text-sm text-ink">Available for work</span>
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
            </div>
          </div>
          </motion.div>
        </GsapReveal>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        data-cursor="hover"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-display">Scroll</span>
        <HiOutlineArrowDown size={18} />
      </motion.a>
    </section>
  )
}
