import React from "react";
import experienceData from "../../data/experienceData";
import { JobDescription } from "../index";

import "./Cv.css";

const computerSkills = [
  "AutoCAD",
  "Revit",
  "BIM",
  "HVAC, piping desing",
  "Point Cloud",
  "Python",
  "PostgreSQL",
  "Linux",
  "JavaScript and React",
  "HTML/CSS",
  "Git/GitHub",
  "Django",
];

const language = ["English - fluent", "Polish - native"];

const softSkills = [
  "team leading",
  "self-development and learning new technologies",
  "work under time pressure",
  "work in a group and independently",
  "self-organization of work",
];

const otherSkills = ["Driver licence B"];

const hobby = [
  "kendo",
  "taekwondo",
  "board/miniatures games",
  "biking",
  "coding",
  "web development",
];

const education = [
  {
    date: "2023.02-07",
    description:
      "Nerdbord.io - mentoring platform that simulates real work experience as a web developer using JavaScript and ReactJS",
  },
  {
    date: "since 2020.06",
    description: "Python, Django, PostgreSQL learning by myself",
  },
  {
    date: "2001-2007",
    description:
      "M.Sc degree in Environmental Engineering at Technical University of Bialystok, Poland",
  },
];

const Cv = () => {
  return (
    <div className="cv-wrapper">
      <div className="column-left">
        <div className="about-img-wrapper">
          <img src="/images/prof-pic.png" alt="prof-pic" />
        </div>
        <div className="about-me">
          <h2>Hubert Kwiatkowski</h2>
          <p>Location: Gouda, Netherlands</p>
          <p>Mobile: + 31 (0) 687 292 423</p>
          <p>Email: kwiatkowski.h@hotmail.com</p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/hubert-kwiatkowski-4154287b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn link
            </a>
          </p>
        </div>

        <div className="skills-wrapper">
          <div className="computer-skills">
            <h4>Computer skills:</h4>
            <div>
              {computerSkills.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>

          </div>
          <div className="soft-skills">
            <h4>Soft skills:</h4>
            {softSkills.map((skill) => {
              return <p>{skill}</p>;
            })}
          </div>
          <div className="other-skills-wrapper">
            <div className="language">
              <h4>Language:</h4>
              {language.map((lan) => {
                return <p>{lan}</p>;
              })}
            </div>

            <div className="other">
              <h4>Other:</h4>
              {otherSkills.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>
          </div>
        </div>


        <div className="hobby-wrapper">
          <h4>Hobby</h4>
          <div className="hobby">
            {hobby.map((hob) => {
              return <p>{hob}</p>;
            })}
          </div>
        </div>
      </div>

      <div className="column-right">
        <h4>Work Experience</h4>
        <div className="experience-wrapper">
          {experienceData.map((exp) => {
            return <JobDescription exp={exp} />;
          })}
        </div>
        <div className="education-wrapper">
          <h4>Education</h4>
          {education.map((edu) => {
            return (
              <div className="edu">
                <p>{edu.date}</p>
                <p>{edu.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cv;
