import { motion } from 'framer-motion'
import { HiOutlinePaperAirplane, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { profile, socials } from '../data/content'
import MagneticButton from './MagneticButton'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-heading">Let&apos;s Build Something</h2>
          <p className="mt-4 text-ink/60">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="glass gradient-border rounded-3xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/60 text-accent">
                  <HiOutlineMail size={20} />
                </span>
                <div>
                  <p className="text-xs text-ink/50">Email</p>
                  <p className="text-ink font-display">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/60 text-accent">
                  <HiOutlineLocationMarker size={20} />
                </span>
                <div>
                  <p className="text-xs text-ink/50">Location</p>
                  <p className="text-ink font-display">{profile.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/60 text-accent">
                  <HiOutlinePhone size={20} />
                </span>
                <div>
                  <p className="text-xs text-ink/50">Availability</p>
                  <p className="text-ink font-display">Open for freelance & full-time</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-10 flex-wrap">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    data-cursor="hover"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/70 hover:text-accent hover:border-accent transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="glass gradient-border rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-ink/50 mb-1.5 block">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl bg-primary/30 border border-ink/10 px-4 py-3 text-ink placeholder:text-ink/30 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-ink/50 mb-1.5 block">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-primary/30 border border-ink/10 px-4 py-3 text-ink placeholder:text-ink/30 outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-ink/50 mb-1.5 block">Subject</label>
              <input
                required
                name="subject"
                type="text"
                placeholder="Project inquiry"
                className="w-full rounded-xl bg-primary/30 border border-ink/10 px-4 py-3 text-ink placeholder:text-ink/30 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-ink/50 mb-1.5 block">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-primary/30 border border-ink/10 px-4 py-3 text-ink placeholder:text-ink/30 outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <MagneticButton type="submit" className="btn-primary w-full sm:w-auto justify-center">
              Send Message
              <HiOutlinePaperAirplane size={16} className="rotate-90" />
            </MagneticButton>

          </motion.form>
        </div>
      </div>
    </section>
  )
}
