// RightSection.js
import React from 'react'
import TrendingTopicsCard from './TrendingTopicsCard/TrendingTopicsCard' // Assuming you have a TrendingTopicsCard component
import './RightSection.css'
const RightSection = () => {
  return (
    <div className="right-section ">
      <h3>
        Trending Topics<span className="setting-icon">⚙️</span>
      </h3>

      <a href="/">Show all quotes</a>
      <TrendingTopicsCard topic="Technology" hashtag="#Tech" numQuotes={50} />
      <TrendingTopicsCard topic="Technology" hashtag="#Tech" numQuotes={50} />
      {/* Add more TrendingTopicsCard components as needed */}
    </div>
  )
}

export default RightSection
