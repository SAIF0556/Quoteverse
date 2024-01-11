// MiddleSection.js
import React from 'react'
import Card from '../Card/Card'
import './MiddleSection.css'
const MiddleSection = () => {
  const sampleUser = {
    icon:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
    fullName: 'John Doe',
  }

  const sampleQuote = 'This is a sample quote.'

  const sampleTags = ['tag1', 'tag2', 'tag3']
  return (
    <div className="middle-section">
      <Card user={sampleUser} quote={sampleQuote} tags={sampleTags} />
      <Card user={sampleUser} quote={sampleQuote} tags={sampleTags} />
      <Card user={sampleUser} quote={sampleQuote} tags={sampleTags} />
    </div>
  )
}

export default MiddleSection
