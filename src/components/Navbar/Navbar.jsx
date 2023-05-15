import React from "react";

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div>
        <div className="logo">Hubert Kwiatkowski</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar