import { projects } from '../../data/projects'
import { useReveal } from '../../hooks/useReveal'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  const [headRef, headVisible] = useReveal()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headRef} className={`reveal ${headVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">Projects</p>
          <h2 className="section-heading">Some things I've built</h2>
          <p className="section-sub">
            A few projects from my GitHub. Click any card to open the repo.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
