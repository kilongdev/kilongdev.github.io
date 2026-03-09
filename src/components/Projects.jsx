import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects() {
  const projects = [
    {
      title: 'SSB-Tracking',
      description: 'A student bus management web app for pickup and drop-off tracking with a clean UI and practical real-world workflows.',
      tags: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/kilongdev/SSB-Tracking',
      demo: null
    },
    {
      title: 'BaSan_TMDT',
      description: 'An e-commerce dashboard featuring analytics-focused screens, data management flows, and reusable UI components.',
      tags: ['Next.js', 'Redux', 'Chart.js'],
      github: 'https://github.com/HoL0ngg/b-s-n-TM-T',
      demo: null
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with React, focused on clean structure, responsive layout, and smooth interactions.',
      tags: ['React', 'Vite', 'Responsive Design'],
      github: 'https://github.com/kilongdev',
      demo: 'https://kilongdev.github.io/'
    },
  ]

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> Code
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
