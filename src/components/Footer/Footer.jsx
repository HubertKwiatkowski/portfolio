import React from "react";

import "./Footer.css";
import { GitHub, LinkedIn } from "../../icons";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="connect">
      <h2>Connect</h2>
      <ul className="list-wrapper">
        <li>
          <GitHub />{" "}
          <a
            href="https://github.com/HubertKwiatkowski"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
        </li>
        <li>
          <LinkedIn />{" "}
          <a
            href="https://www.linkedin.com/in/hubert-kwiatkowski-4154287b/"
            target="_blank"
            rel="noreferrer"
          >
            My LinkedIn profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
