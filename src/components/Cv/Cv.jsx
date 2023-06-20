import React from "react";
import experienceData from "../../data/experienceData";
import { JobDescription } from "../index";

import "./Cv.css";

const computerSkills = [
  "React",
  "JavaScript",
  "HTML/CSS",
  "Git/GitHub",
  "Python",
  "Django",
  "PostgreSQL",
  "Linux",
];

const language = ["English - fluent", "Polish - native"];

const softSkills = [
  "self-development and learning new technologies",
  "work under time pressure",
  "work in a group and independently",
  "self-organization of work",
];

const otherSkills = ["Driver licence B"];

const hobby = ["kendo", "taekwondo", "board/miniatures games", "biking"];

const education = [
  {
    date: "since 2020.06",
    description:
      "Python, Django, PostgreSQL, HTML, CSS, JavaScript, React learning by myself",
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
        <div className="about-me">
          <h2>Hubert Kwiatkowski</h2>
          <p>Location: Gouda, Netherlands</p>
          <p>Mobile: + 31 (0) 687 292 423</p>
          <p>Email: kwiatkowski.h@hotmail.com</p>
        </div>

        <div className="skills-wrapper">
          <div className="computer-skills">
            <h4>Computer skills:</h4>
            {computerSkills.map((skill) => {
              return <p>{skill}</p>;
            })}
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
        <div className="experience-wrapper">
          {experienceData.map((exp) => {
            return <JobDescription exp={exp} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cv;
