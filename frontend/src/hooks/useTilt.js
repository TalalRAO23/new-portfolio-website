import { useRef } from 'react'

/**
 * Gives an element a subtle 3D tilt that follows the mouse.
 * We set the transform directly on the DOM node (via ref) instead of
 * storing it in React state, so moving the mouse never triggers a
 * re-render. That's what keeps this smooth even with several cards
 * on screen at once.
 */
export function useTilt(strength = 10) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    node.style.transform = `perspective(700px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-6px)`
  }

  const handleMouseLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return { ref, handleMouseMove, handleMouseLeave }
}
