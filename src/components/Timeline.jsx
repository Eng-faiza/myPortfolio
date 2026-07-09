import { motion } from 'framer-motion'
import { timeline } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const typeColors = {
  Education: 'bg-primary/60 text-ink',
  Certification: 'bg-accent/20 text-accent',
  Project: 'bg-secondary/60 text-ink',
  Achievement: 'bg-accent text-primary',
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 sm:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-heading">Experience Timeline</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-ink/10 sm:-translate-x-1/2" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 pl-8 sm:pl-0 sm:w-1/2 ${
                i % 2 === 0 ? 'sm:pr-12 sm:text-right sm:ml-0' : 'sm:pl-12 sm:ml-auto'
              }`}
            >
              <span className="absolute left-0 sm:left-auto sm:right-0 top-1 h-3.5 w-3.5 rounded-full bg-accent shadow-glow"
                style={i % 2 === 0 ? { right: '-7px', left: 'auto' } : { left: '-7px' }}
              />
              <div className="glass gradient-border rounded-2xl p-6">
                <span className={`inline-block text-[11px] font-display px-3 py-1 rounded-full mb-3 ${typeColors[item.type]}`}>
                  {item.type}
                </span>
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="text-sm text-accent mb-2">{item.place} · {item.period}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
