import React from "react";
import { GitHub, LinkedIn } from "../../icons";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="about-img-wrapper">
        <img src="/images/prof-pic.png" alt="prof-pic" />
      </div>
      <div className="text-wrapper">
        <h2>Hi, my name is Hubert</h2>
        <p>
          I’m a self-taught front-end developer with an engineering background.
          <br /> I have 10 years of experience in calculating, designing and
          managing different installation projects. I would like to develop
          further as a coder.
        </p>
        <ul className="media-wrapper">
          <a
            href="https://github.com/HubertKwiatkowski"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>

          <a
            href="https://www.linkedin.com/in/hubert-kwiatkowski-4154287b/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
