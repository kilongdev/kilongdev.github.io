import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and deployed on GitHub Pages. Features clean design and smooth animations.',
      tags: ['React', 'CSS3', 'GitHub Pages'],
      github: 'https://github.com/kilongdev',
      demo: '#'
    },
    {
      title: 'Project Two',
      description: 'Add your own project description here. Showcase your best work and technical achievements.',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/kilongdev',
      demo: '#'
    },
    {
      title: 'Project Three',
      description: 'Another amazing project you\'ve built. Highlight the key features and technologies used.',
      tags: ['JavaScript', 'API', 'CSS'],
      github: 'https://github.com/kilongdev',
      demo: '#'
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
