import React, { useState } from "react";
import classNames from "classnames";

import "./Navbar.css";
import { BurgerIcon } from "../../icons";

const Navbar = ({ onChangeShow }) => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleHide = () => {
    setIsToggled(!isToggled);
  };

  const handleClick = () => {
    onChangeShow();
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="logo">
          <a href="#">Hubert Kwiatkowski</a>
        </div>
        <div className="burger-btn-wrapper ">
          <div className="burger-button" onClick={toggleHide}>
            <BurgerIcon />
          </div>
          <ul
            className={classNames({ listWrapper: true }, { hide: isToggled })}
          >
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
