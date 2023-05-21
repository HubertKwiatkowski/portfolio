import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="about-img-wrapper">
        <img src="/images/prof-pic.png" alt="prof-pic" />
      </div>
      <div className="text-wrapper">
        <h3>Hi, my name is Hubert</h3>
        <p>
          I’m a self-taught front-end developer with an engineering background.
          <br /> I have 10 years of experience in calculating, designing and
          managing different installation projects. I would like to develop
          further as a coder.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
