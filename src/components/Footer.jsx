import { navLinks, socials, profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-ink/10 py-14">
      <div className="section-container grid sm:grid-cols-3 gap-10 items-start">
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-ink">
            Faiza<span className="text-accent">.</span>
          </a>
          <p className="mt-3 text-sm text-ink/50 max-w-xs">
            Full Stack Developer & UI/UX Designer building modern, scalable, and beautiful digital experiences.
          </p>
        </div>

        <div className="sm:justify-self-center">
          <h4 className="font-display text-sm text-ink mb-4 tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.slice(0, 5).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-sm text-ink/50 hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:justify-self-end">
          <h4 className="font-display text-sm text-ink mb-4 tracking-wide uppercase">Connect</h4>
          <div className="flex gap-3 flex-wrap">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/60 hover:text-accent hover:border-accent transition-colors"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="section-container mt-10 pt-6 border-t border-ink/5 text-center">
        <p className="text-xs text-ink/40">
          © {year} {profile.name}. All rights reserved. Crafted with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
