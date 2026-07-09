import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/content'
import TiltCard from './TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05 } }),
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-heading">What I Work With</h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor="hover"
              className={`font-display text-sm px-6 py-2.5 rounded-full border transition-all duration-300 ${
                active === cat
                  ? 'bg-accent text-primary border-accent'
                  : 'border-ink/15 text-ink/60 hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[active].map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div key={skill.name} custom={i} variants={fadeUp}>
                <TiltCard className="glass rounded-2xl p-6 gradient-border h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/60 text-accent text-2xl">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-ink">{skill.name}</h3>
                      <p className="text-xs text-ink/50">{skill.level}% proficiency</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-ink/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      className="h-full rounded-full bg-accent-gradient"
                    />
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
