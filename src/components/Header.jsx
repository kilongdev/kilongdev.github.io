import React from 'react'
import { FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa'

function Header() {
  return (
    <header className="header">
      <h1>Hello, I'm Kim Long</h1>
      <p>Frontend Developer | React & Tailwind CSS | Pixel-Perfect UI Builder</p>
      <div className="header-links">
        <a 
          href="https://github.com/kilongdev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <FaGithub /> GitHub Profile
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <FaFilePdf /> View Resume
        </a>
        <a href="#contact" className="btn btn-secondary">
          <FaEnvelope /> Get In Touch
        </a>
      </div>
    </header>
  )
}

export default Header
