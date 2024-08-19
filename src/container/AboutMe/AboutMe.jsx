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
        <h2>Hi, I'm Hubert</h2>
        <p>
          <br /> I’m a mechanical engineer with 10 years of experience in
          designing and calculating of HVAC, plumbing and piping installations
          and systems. I worked on the design of various facilities, such as a
          15-story office building for Skanska Poland or a football stadium in
          Bialystok. I would like to develop further as a 3D modeler and BIM
          specialist with Python programming support.
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
