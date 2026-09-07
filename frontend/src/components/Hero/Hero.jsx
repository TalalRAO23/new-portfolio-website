import { FaReact, FaNodeJs, FaJs, FaHtml5 } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const ORBIT_ICONS = [
  { Icon: FaReact, className: 'orbit-item orbit-item--1' },
  { Icon: FaNodeJs, className: 'orbit-item orbit-item--2' },
  { Icon: SiExpress, className: 'orbit-item orbit-item--3' },
  { Icon: SiMongodb, className: 'orbit-item orbit-item--4' },
  { Icon: FaJs, className: 'orbit-item orbit-item--5' },
  { Icon: FaHtml5, className: 'orbit-item orbit-item--6' },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__intro-line">Hi, I'm</p>
          <h1 className="hero__name">Muhammad Talal Afzaal</h1>
          <h2 className="hero__title">MERN Stack Developer</h2>
          <p className="hero__tagline">
            I build web apps with React, Node, Express and MongoDB — from the
            interface you click on to the API underneath it.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="orbit-scene">
            <div className="orbit-ring orbit-ring--outer" />
            <div className="orbit-ring orbit-ring--inner" />
            <div className="orbit-core">
              <span>&lt;/&gt;</span>
            </div>
            {ORBIT_ICONS.map(({ Icon, className }, i) => (
              <div className={className} key={i}>
                <Icon size={22} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <FiArrowDown size={18} />
      </a>
    </section>
  )
}

export default Hero
