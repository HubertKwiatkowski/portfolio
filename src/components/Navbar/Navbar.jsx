import React from "react";

import "./Navbar.css";

const Navbar = ({ onChangeShow }) => {
  const handleClick = () => {
    onChangeShow();
  };

  console.log("onchange", onChangeShow);
  return (
    <div className="navbar-wrapper">
      <div>
        <div className="logo">Hubert Kwiatkowski</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
          <li>
            <button onClick={handleClick}>CV</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
