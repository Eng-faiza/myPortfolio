import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (isTouch) return

    document.documentElement.classList.add('custom-cursor-active')
    setVisible(true)

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
      const target = e.target
      setIsHovering(!!target.closest('a, button, [data-cursor="hover"], input, textarea'))
    }

    let raf
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(animateRing)
    }
    raf = requestAnimationFrame(animateRing)

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,opacity] duration-200 ${
          isHovering ? 'h-14 w-14 border-accent bg-accent/10' : 'h-9 w-9 border-ink/40'
        }`}
      />
    </>
  )
}
