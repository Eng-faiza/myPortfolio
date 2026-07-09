import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { HiOutlineDownload, HiOutlineCheckCircle } from 'react-icons/hi'
import { aboutContent, stats, profile } from '../data/content'
import MagneticButton from './MagneticButton'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v) + suffix
    })
  }, [spring, suffix])

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-gradient">
      0{suffix}
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-heading">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-6"
          >
            <p className="text-ink/75 text-lg leading-relaxed">{aboutContent.summary}</p>

            <ul className="space-y-3">
              {aboutContent.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-ink/70">
                  <HiOutlineCheckCircle className="mt-1 shrink-0 text-accent" size={20} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <h3 className="font-display text-lg text-ink mb-2">Education</h3>
              {aboutContent.education.map((e) => (
                <div key={e.school} className="text-ink/70">
                  <span className="text-ink font-medium">{e.school}</span> — {e.period}
                  <p className="text-sm text-ink/50">{e.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <h3 className="font-display text-lg text-ink mb-2">Goals</h3>
              <p className="text-ink/70">{aboutContent.goals}</p>
            </div>

            <MagneticButton as="a" href={profile.resumeUrl} download className="btn-primary mt-4">
              <HiOutlineDownload size={18} /> Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-8 text-center gradient-border">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm text-ink/60">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
