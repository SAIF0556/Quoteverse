// HomePage.js
import React from 'react'
import LeftSection from '../LeftSection/LeftSection'
import MiddleSection from '../MiddleSection/MiddleSections'
import RightSection from '../RightSection/RightSection'
import './Home.css'
const HomePage = () => {
  return (
    <div className="home-page">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  )
}

export default HomePage
