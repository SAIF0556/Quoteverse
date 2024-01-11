// LeftSection.js
import React from 'react'
import './LeftSection.css'
const LeftSection = () => {
  return (
    <div className="left-section">
      <img
        className="user-icon"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        alt="User Icon"
      />
      <div className="user-details">
        <p className="full-name">John Doe</p>
        <p className="username">@john_doe</p>
        <p className="about-user">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="likes">100 likes </p>
      </div>
    </div>
  )
}

export default LeftSection
