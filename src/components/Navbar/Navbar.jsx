import React from "react";

import "./Navbar.css";
import { BurgerIcon } from "../../icons";

const Navbar = ({ onChangeShow }) => {
  const handleClick = () => {
    onChangeShow();
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="logo">Hubert Kwiatkowski</div>
        <div className="burger-btn-wrapper ">
          <div className="burger-button">
            <BurgerIcon />
          </div>
          <ul className="hide">
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
    </div>
  );
};

export default Navbar;
