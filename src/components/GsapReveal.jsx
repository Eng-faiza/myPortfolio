import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wraps children with a GSAP ScrollTrigger-powered parallax + fade reveal.
 * Used for signature moments (section eyebrows/headings) alongside the
 * Framer Motion `whileInView` animations used elsewhere in the app.
 */
export default function GsapReveal({ children, y = 40, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 0.6,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
