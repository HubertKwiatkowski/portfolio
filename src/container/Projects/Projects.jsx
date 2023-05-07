import React from "react";
import { ProjectItem } from "../../components";
import projectData from "../../data/projectData.js"

import './Projects.css'

const Projects = () => {
  const sectionList = []

  projectData.forEach((project, index) => {
    sectionList.push(
      <ProjectItem
        name={project.name}
      />
    )
  })

  return (
    <div>
      <h3>
        Projects
      </h3>
      {sectionList}
    </div>
  )}

export default Projects