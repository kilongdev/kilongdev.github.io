import React from 'react'
import { FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '2rem' }}>
          I'm always open to discussing new projects, creative ideas, or 
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        <div className="contact-links">
          <a 
            href="https://github.com/kilongdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:longnguyen210405@gmail.com" 
            className="contact-link"
          >
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
          </a>
          <a 
            href="https://www.facebook.com/kiLongdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaFacebook className="contact-icon" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
