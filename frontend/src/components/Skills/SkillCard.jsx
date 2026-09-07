import { useTilt } from '../../hooks/useTilt'
import { useReveal } from '../../hooks/useReveal'

function SkillCard({ skill, delay }) {
  const { ref: tiltRef, handleMouseMove, handleMouseLeave } = useTilt(14)
  const [revealRef, isVisible] = useReveal()
  const Icon = skill.icon

  // Two refs point at the same node: one for the scroll-reveal class,
  // one for the tilt effect. Combining them keeps both hooks simple.
  const setRefs = (node) => {
    tiltRef.current = node
    revealRef.current = node
  }

  return (
    <div
      ref={setRefs}
      className={`skill-card tilt-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-card__icon" style={{ color: skill.color }}>
        <Icon size={30} />
      </div>
      <p className="skill-card__name">{skill.name}</p>
    </div>
  )
}

export default SkillCard
