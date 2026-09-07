import { useState } from 'react'
import { FiMail, FiPhone, FiSend, FiCheck } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal'
import './Contact.css'

const EMAIL = 'talalafzaal45@gmail.com'
const PHONE = '0304-4013423'

function Contact() {
  const [ref, isVisible] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend hooked up yet — this just confirms the form works.
    // Once you build the backend, send `form` to your API here instead.
    console.log('Contact form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="section-tag">Contact</p>
          <h2 className="section-heading">Let's build something together</h2>
          <p className="section-sub">
            Have a project in mind, or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <a href={`mailto:${EMAIL}`} className="contact__info-row">
              <span className="contact__icon">
                <FiMail size={18} />
              </span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">{EMAIL}</p>
              </div>
            </a>
            <a href={`tel:${PHONE.replace(/-/g, '')}`} className="contact__info-row">
              <span className="contact__icon">
                <FiPhone size={18} />
              </span>
              <div>
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-value">{PHONE}</p>
              </div>
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to build?"
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              {sent ? (
                <>
                  <FiCheck size={18} /> Message received
                </>
              ) : (
                <>
                  <FiSend size={18} /> Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
