// TrendingTopicsCard.js
import React from 'react'

const TrendingTopicsCard = ({ topic, hashtag, numQuotes }) => {
  return (
    <div className="trending-topics-card">
      <p className="topic">{topic}</p>
      <p className="hashtag">{hashtag}</p>
      <p className="num-quotes"> {numQuotes} quotes</p>
    </div>
  )
}

export default TrendingTopicsCard
