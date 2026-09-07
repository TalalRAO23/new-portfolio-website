import { useEffect, useRef } from 'react'
import './Cursor.css'

/**
 * Custom animated cursor: a small dot that tracks the mouse exactly, and a
 * bigger ring that eases toward it (giving that "trailing" feel). Everything
 * here uses refs + direct style updates instead of React state, so moving
 * the mouse doesn't cause re-renders — that's what keeps it lag-free.
 */
function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Skip entirely on touch devices — no point tracking a mouse that isn't there.
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFinePointer) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let frameId

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    const handleOver = (e) => {
      const isInteractive = e.target.closest('a, button, .tilt-card, input, textarea')
      if (ringRef.current) {
        ringRef.current.classList.toggle('cursor-ring--active', Boolean(isInteractive))
      }
    }

    const animateRing = () => {
      // Simple lerp toward the mouse position — cheap and smooth.
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      frameId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })
    frameId = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

export default Cursor
