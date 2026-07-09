import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef(null)
  const glowRef = useRef(null)

  // Canvas floating particles
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, raf

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio
      height = canvas.height = canvas.offsetHeight * devicePixelRatio
    }

    const createParticles = () => {
      const count = Math.min(70, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: (Math.random() * 1.6 + 0.4) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        alpha: Math.random() * 0.5 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(217, 224, 33, ${p.alpha})`
        ctx.fill()
      })
      if (!prefersReduced) raf = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    const handleResize = () => {
      resize()
      createParticles()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Mouse-following glow
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (isTouch) return
    const handleMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-grid-glow" />

      {/* Gradient blobs */}
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-secondary/50 blur-3xl animate-blob" style={{ animationDelay: '6s' }} />

      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl transition-transform duration-75 ease-out"
      />

      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
    </div>
  )
}
