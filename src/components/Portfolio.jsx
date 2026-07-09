import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/content'
import TiltCard from './TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05 } }),
}

export default function Portfolio() {
  const allTags = useMemo(() => {
    const tags = new Set(['All'])
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return Array.from(tags)
  }, [])

  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-heading">Selected Work</h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              data-cursor="hover"
              className={`font-display text-xs sm:text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                filter === tag
                  ? 'bg-accent text-primary border-accent'
                  : 'border-ink/15 text-ink/60 hover:border-accent hover:text-accent'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                custom={i}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                variants={fadeUp}
              >
                <TiltCard className="group gradient-border glass rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-secondary to-primary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-ink/10 uppercase tracking-wider">
                        {project.image}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary transition-transform hover:scale-110"
                        aria-label="Live demo"
                      >
                        <HiOutlineExternalLink size={18} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-primary transition-transform hover:scale-110"
                        aria-label="GitHub repository"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg text-ink mb-2">{project.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-display px-3 py-1 rounded-full bg-primary/60 text-accent border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
