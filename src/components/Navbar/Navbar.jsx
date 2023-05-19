import React from "react";
import Popup from "reactjs-popup";
import { Cv } from "../index";

import "./Navbar.css";

const Navbar = () => {
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
            <Popup trigger={<button> CV </button>} modal nested>
              {(close) => (
                <div className="modal">
                  <div className="btn-wrapper">
                    <button className="btn close-modal" onClick={() => close()}>
                      PDF
                    </button>
                    <button className="btn close-modal" onClick={() => close()}>
                      Close
                    </button>
                  </div>
                  <Cv />
                </div>
              )}
            </Popup>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
