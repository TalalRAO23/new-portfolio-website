import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

const GITHUB_URL = 'https://github.com/TalalRAO23?tab=repositories'
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammad-talal-afzaal-75618440b'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Muhammad Talal Afzaal</p>
          <p className="footer__note">
            Owner &amp; developer of this portfolio — designed and built by me.
          </p>
        </div>

        <div className="footer__socials">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:talalafzaal45@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>

        <p className="footer__copyright">© {year} Talal Afzaal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
