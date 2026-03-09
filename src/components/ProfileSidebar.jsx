import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

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
        <p><FaEnvelope /> longnguyen210405@gmail.com</p>
      </div>

      <div className="profile-actions">
        <a href="https://github.com/kilongdev" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.facebook.com/kiLongdev" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </a>
      </div>
    </div>
  )
}

export default ProfileSidebar
