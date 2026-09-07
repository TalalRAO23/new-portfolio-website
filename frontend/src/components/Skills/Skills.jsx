import { skills } from '../../data/skills'
import { useReveal } from '../../hooks/useReveal'
import SkillCard from './SkillCard'
import './Skills.css'

function Skills() {
  const [headRef, headVisible] = useReveal()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">Skills</p>
          <h2 className="section-heading">Tools I reach for most</h2>
          <p className="section-sub">
            The stack I use day to day, plus a couple of languages I picked
            up along the way.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
