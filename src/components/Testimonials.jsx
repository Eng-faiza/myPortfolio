import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { testimonials } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const go = (dir) => {
    setDirection(dir)
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-heading">Client Words</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.name}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass gradient-border rounded-3xl p-10 text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-gradient text-primary font-display text-xl font-bold">
                  {current.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-4 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} className={i < current.rating ? 'opacity-100' : 'opacity-20'} />
                ))}
              </div>
              <p className="text-ink/75 text-lg leading-relaxed italic">&ldquo;{current.quote}&rdquo;</p>
              <p className="mt-6 font-display text-ink">{current.name}</p>
              <p className="text-sm text-ink/50">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => go(-1)}
            data-cursor="hover"
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-4 sm:-left-14 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full glass text-ink hover:text-accent transition-colors"
          >
            <HiChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            data-cursor="hover"
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-4 sm:-right-14 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full glass text-ink hover:text-accent transition-colors"
          >
            <HiChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-accent' : 'w-2 bg-ink/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
