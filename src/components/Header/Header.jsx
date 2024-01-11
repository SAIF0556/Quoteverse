// Header.js
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { FaHome, FaHeart } from 'react-icons/fa'
import './Header.css' // You can create a CSS file for styling

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="left">
          <Link to="/">Quoteverse</Link>
        </div>
        <div className="center">
          <Link to="/">
            <FaHome />
          </Link>
          <Link to="/">
            <FaHeart />
          </Link>
        </div>
        <div className="right">
          <div className="horizontal-lines"></div>
          <div className="horizontal-lines"></div>
        </div>
      </div>
    </Router>
  )
}

export default Header
