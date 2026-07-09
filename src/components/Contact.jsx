import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiOutlinePaperAirplane, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { profile, socials } from '../data/content'
import MagneticButton from './MagneticButton'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 4000)
      },
      () => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    )
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
            ref={formRef}
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
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl bg-primary/30 border border-ink/10 px-4 py-3 text-ink placeholder:text-ink/30 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-ink/50 mb-1.5 block">Email</label>
                <input
                  required
                  name="user_email"
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

            <MagneticButton type="submit" className="btn-primary w-full sm:w-auto justify-center" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <HiOutlinePaperAirplane size={16} className="rotate-90" />
            </MagneticButton>

            {status === 'success' && (
              <p className="text-sm text-accent">Message sent — I&apos;ll get back to you soon!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please add your EmailJS credentials in Contact.jsx, or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
