import React from "react";

import "./Cv.css";

const Cv = () => {
  return (
    <div className="cv-wrapper">
      <div className="about-img-wrapper">
        <img src="/images/prof-pic.png" alt="prof-pic" />
      </div>
      <div className="education">
        2001-2007
        MSc degree in Environmental Engineering at Technical University of
        Bialystok, Poland
      </div>
      <div className="skills">
        Computer skills:
        Python - basic
        HTML/CSS
        JavaScript
        React
        Git/Github
        Linux - basic
        PostgreSQL - basic

        Language:
        English - fluent
        Polish - native

        Other:
        Driver licence B

        Soft skills:
        willingness to learn and self-development
        ability to work under time pressure
        ability to work in a group and independently
      </div>

      <div className="hobby">
        kendo, taekwondo, wargaming
      </div>

      <div className="work-experience-wrapper">

      </div>
    </div>
  );
};

export default Cv;