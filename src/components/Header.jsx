import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

function Header() {
  return (
    <header className="header">
      <h1>Hello, I'm Nguyen Kim Long</h1>
      <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
      <div className="header-links">
        <a 
          href="https://github.com/kilongdev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <FaGithub /> GitHub Profile
        </a>
        <a href="#contact" className="btn btn-secondary">
          <FaEnvelope /> Get In Touch
        </a>
      </div>
    </header>
  )
}

export default Header
