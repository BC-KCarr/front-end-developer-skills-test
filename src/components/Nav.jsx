import React from 'react'
import logo from "../images/logo.png"

function Nav() {
  return (
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
            <span href='/pages/about.html'>01. HISTORY</span>
            <hr/>
          </li>
          <li className="nav-item">
            <span href='/pages/contact.html'>02. TEAM</span>
            <hr/>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Nav
