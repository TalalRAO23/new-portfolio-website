import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal'
import './About.css'

const GITHUB_URL = 'https://github.com/TalalRAO23?tab=repositories'
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammad-talal-afzaal-75618440b'

function About() {
  const [textRef, textVisible] = useReveal()
  const [cardRef, cardVisible] = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div
          ref={cardRef}
          className={`about__card reveal ${cardVisible ? 'is-visible' : ''}`}
        >
          <div className="about__monogram">TA</div>
          <div className="about__card-line">
            <span>Based in</span>
            <strong>Pakistan</strong>
          </div>
          <div className="about__card-line">
            <span>Focus</span>
            <strong>MERN Stack</strong>
          </div>
          <div className="about__card-line">
            <span>Currently</span>
            <strong>Building & learning</strong>
          </div>
        </div>

        <div ref={textRef} className={`reveal ${textVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">About me</p>
          <h2 className="section-heading">Not just a developer — someone who likes building things people use</h2>

          <p className="about__paragraph">
            I'm Talal, a MERN stack developer, which basically means I spend
            my days somewhere between React components and MongoDB queries.
            I like building websites that don't just work but actually feel
            nice to use — smooth interactions, clean layouts, that kind of
            thing. On the backend side I build the APIs with Node and
            Express and connect everything to MongoDB, so I usually end up
            handling a project front to back.
          </p>
          <p className="about__paragraph">
            Honestly, what I enjoy most is the middle part of building
            something — when it's half broken, half working, and you're
            slowly figuring out why a component isn't re-rendering the way
            it should. I'm still learning a lot of this stuff, and I think
            that's fine. Every project I build teaches me something I didn't
            know going in.
          </p>

          <div className="about__actions">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FiGithub size={18} />
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
