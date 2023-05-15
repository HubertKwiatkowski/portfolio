import React from "react";

import './ProjectItem.css'

const ProjectItem = ({name, technology, description, liveUrl, gitHubUrl, imgUrl, alt}) => {
  const techList = []

  technology.forEach((tech, index) => {
    techList.push(<div key={index}>{tech}</div>)
  })

  return (
    <div className="item-wrapper">
      <div className="item">
        <div className="img-wrapper">
          <img src={process.env.PUBLIC_URL + imgUrl} alt={alt}/>
        </div>
        <div className="txt-wrapper">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="buttons-wrapper">
            <div className="btn github"><a href={`${gitHubUrl}`}>GitHub</a></div>
            <div className="btn live-server"><a href={`${liveUrl}`}>Live Server</a></div>
          </div>
          <div className="tech-list">{techList}</div>
        </div>
      </div>
      <hr/>

    </div>

  )
}

export default ProjectItem