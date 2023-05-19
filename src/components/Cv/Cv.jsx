import React from "react";
import experienceData from "../../data/experienceData";
import { JobDescription } from "../index";

import "./Cv.css";

const computerSkills = [
  "Python - basic",
  "HTML/CSS",
  "JavaScript",
  "React",
  "Git/GitHub",
  "Linux - basic",
  "PostgreSGL - basic",
];

const language = ["English - fluent", "Polish - native"];

const softSkills = [
  "willingness to learn and self-development",
  "ability to work under time pressure",
  "ability to work in a group and independently",
];

const otherSkills = ["Driver licence B"];

const hobby = ["kendo", "taekwondo", "wargaming"];

const education = [
  { date: "since February 2023", description: "Mentor program at Nerdbord.io" },
  {
    date: "2020-2023",
    description:
      "Python, Django, PostgreSQL, HTML, CSS, JavaScript self-learning",
  },
  {
    date: "2001-2007",
    description:
      "MSc degree in Environmental Engineering at Technical University of Bialystok, Poland",
  },
];

const Cv = () => {
  console.log("cv", experienceData[0].companyName);
  return (
    <div className="cv-wrapper">
      <div className="hero">
        <div className="cv-img-wrapper">
          <img src="/images/prof-pic.png" alt="prof-pic" />
        </div>
        <div className="about-me">
          <h4>Hubert Kwiatkowski</h4>
          <p>Location: Gouda, Netherlands</p>
          <p>Date of birth 1982-08-02</p>
          <p>Mobile: + 31 (0) 687 292 423</p>
          <p>Email: kwiatkowski.h@hotmail.com</p>
          <h4>About Me:</h4>
          <p>
            I’m a self-taught front-end developer with an engineering
            background. I have 10 years of experience in calculating, designing
            and managing different installation projects. I would like to
            develop further as a coder.
          </p>
        </div>
      </div>
      <div className="main">
        <div className="experience-wrapper">
          {experienceData.map((exp) => {
            return <JobDescription exp={exp} />;
          })}
        </div>
        <div className="education-wrapper">
          {education.map((edu) => {
            return (
              <div className="edu">
                <p>{edu.date}</p>
                <p>{edu.description}</p>
              </div>
            );
          })}
        </div>

        <div className="skills">
          <div className="computer-skills">
            <h4>Computer skills:</h4>
            {computerSkills.map((skill) => {
              return <p>{skill}</p>;
            })}
          </div>
          <div className="language">
            <h4>Language:</h4>
            {language.map((lan) => {
              return <p>{lan}</p>;
            })}
          </div>
          <div className="soft-skills">
            <h4>Soft skills:</h4>
            {softSkills.map((skill) => {
              return <p>{skill}</p>;
            })}
          </div>
          <div className="other">
            <h4>Other:</h4>
            {otherSkills.map((skill) => {
              return <p>{skill}</p>;
            })}
          </div>
        </div>

        <div className="hobby">
          <h4>Hobby:</h4>
          {hobby.map((hob) => {
            return <p>{hob}</p>;
          })}
        </div>

        <div className="work-experience-wrapper"></div>
      </div>
    </div>
  );
};

export default Cv;
