import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { navLinks, profile } from '../data/content'
import MagneticButton from './MagneticButton'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-3 right-3 z-40 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <nav
        className={`section-container flex items-center justify-between rounded-2xl transition-all duration-500  ${
          scrolled ? 'glass-strong px-6 py-3 shadow-card' : 'px-2 py-2'
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('#home')
          }}
          className="font-display text-xl font-bold text-ink"
          data-cursor="hover"
        >
          {/* <img src={profile.whiteLogo} alt={profile.name} className='w-20 h-' /> */}
          Faiza<span className="text-accent">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                data-cursor="hover"
                className={`font-display text-sm tracking-wide transition-colors ${
                  active === link.href ? 'text-accent' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            data-cursor="hover"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/80 transition-colors hover:text-accent hover:border-accent dark:text-white dark:border-white/25 dark:hover:text-accent"
          >
            {theme === 'dark' ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
          <MagneticButton
            onClick={() => handleLinkClick('#contact')}
            className="btn-primary !px-6 !py-2.5 text-sm"
          >
            Hire Me
          </MagneticButton>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-cursor="hover"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden section-container mt-3"
          >
            <div className="glass-strong rounded-2xl p-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className={`font-display text-lg ${
                    active === link.href ? 'text-accent' : 'text-ink/80'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleTheme()
                  setOpen(false)
                }}
                className="flex items-center gap-2 font-display text-ink/70 dark:text-white"
              >
                {theme === 'dark' ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
