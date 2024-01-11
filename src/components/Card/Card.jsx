import React from 'react'
import './Card.css'
const Card = ({ user, quote, tags }) => {
  return (
    <div className="card">
      <div className="user-icon">
        <img src={user.icon} alt="User Icon" className="user-icon-img" />
      </div>
      <div className="content">
        <p className="user-full-name">{user.fullName}</p>

        <p className="quote">{quote}</p>

        <div className="icon-section">
          <span className="icon heart-icon">❤️</span>
          <span className="icon message-icon">💬</span>
          <span className="icon share-icon">🔗</span>
        </div>

        <div className="tags-section">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
