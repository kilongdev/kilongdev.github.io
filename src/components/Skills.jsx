import React from 'react'
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express', icon: <SiExpress color="#000000" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
