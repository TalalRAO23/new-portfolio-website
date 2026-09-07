import { useEffect, useRef, useState } from 'react'

/**
 * Adds an "is-visible" class (see .reveal in index.css) once the element
 * scrolls into view. Keeps animations off the main thread's back — no
 * scroll-position math running on every frame, just a single observer.
 */
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, isVisible]
}
