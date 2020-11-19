import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

function Home() {
  return (
    <div className="home">
      <header>
      <nav className="nav">
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <span href="/index.html" className="page-title">
          <img src={logo} alt="logo" />
        </span>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to='/history'>01. HISTORY</Link>
          </li>
          <li className="nav-item">
            <Link to='/team'>02. TEAM</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Home
