import { motion } from 'framer-motion'
import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineColorSwatch,
  HiOutlineDeviceMobile,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
} from 'react-icons/hi'
import { SiFlutter } from 'react-icons/si'
import { services } from '../data/content'
import TiltCard from './TiltCard'

const icons = [
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineColorSwatch,
  HiOutlineDeviceMobile,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
  SiFlutter,
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } }),
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-eyebrow">Services</p>
          <h2 className="section-heading">How I Can Help</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <TiltCard className="group glass rounded-2xl p-7 gradient-border h-full relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-primary text-2xl mb-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                    <Icon />
                  </div>
                  <h3 className="relative font-display text-lg text-ink mb-2">{service.title}</h3>
                  <p className="relative text-sm text-ink/60 leading-relaxed">{service.description}</p>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
