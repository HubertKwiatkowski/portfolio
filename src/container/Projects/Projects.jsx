import React from "react";
import { ProjectItem } from "../../components";
import projectData from "../../data/projectData.js";

import "./Projects.css";

const Projects = () => {
  const sectionList = [];

  projectData.forEach((project, index) => {
    const { name, technology, description, liveUrl, gitHubUrl, imgUrl, alt } =
      project;
    sectionList.push(
      <ProjectItem
        key={index}
        name={name}
        description={description}
        liveUrl={liveUrl}
        gitHubUrl={gitHubUrl}
        imgUrl={imgUrl}
        alt={alt}
        technology={technology}
      />
    );
  });

  return (
    <div className="projects-wrapper" id="projects">
      <h2>Projects</h2>
      {sectionList}
    </div>
  );
};

export default Projects;
