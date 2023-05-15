import React from "react";

import './ProjectItem.css'

const ProjectItem = ({name, technology, imgUrl, alt}) => {
  const techList = []

  technology.forEach((tech, index) => {
    techList.push(<div key={index}>{tech}</div>)
  })

  return (
    <div className="main-wrapper">
      <h4>{name}</h4>
      <div className="img-wrapper">
        <img src={process.env.PUBLIC_URL + imgUrl} alt={alt}/>
      </div>
      <div className="buttons">
        <div className="github">GitHub</div>
        <div className="live-server">Live Server</div>
      </div>

      <div className="tech-list">{techList}</div>
    </div>
  )
}

export default ProjectItem