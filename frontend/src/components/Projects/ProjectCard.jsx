import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal'

function ProjectCard({ project, delay }) {
  const [ref, isVisible] = useReveal()

  return (
    <a
      ref={ref}
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card tilt-card reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-card__media">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <div className="project-card__mark">
            <FiGithub size={20} />
          </div>
          <FiArrowUpRight className="project-card__arrow" size={20} />
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.tech.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
