import React from 'react'
import { FaEnvelope, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaUniversity, FaFilePdf } from 'react-icons/fa'

function ProfileSidebar() {
  return (
    <div className="profile-card">
      <img
        className="profile-avatar"
        src="https://avatars.githubusercontent.com/kilongdev"
        alt="Kim Long avatar"
      />
      <h2 className="profile-name">Nguyen Kim Long</h2>
      <p className="profile-username">@kilongdev</p>

      <div className="profile-meta">
        <p><FaMapMarkerAlt /> Vietnam</p>
        <p><FaUniversity /> Saigon University - Student</p>
        <p>Enrollment Year: 2005</p>
        <p><FaEnvelope /> longnguyen210405@gmail.com</p>
      </div>

      <div className="profile-actions">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaFilePdf /> View Resume (PDF)
        </a>
        <a href="https://www.linkedin.com/in/kilongdev" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.facebook.com/kiLongdev" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </a>
      </div>
    </div>
  )
}

export default ProfileSidebar
