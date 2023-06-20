import React from "react";

import "./JobDescription.css";

const JobDescription = ({ exp }) => {
  return (
    <div className="exp-wrapper">
      <div className="info">
        <p>{exp.companyName}</p>
        <p>{exp.position}</p>
        <p>
          {exp.city}, {exp.country}
        </p>
      </div>
      <div className="desc">
        <p>
          {exp.startDate} - {exp.finishDate}
        </p>
        <ul>
          {exp.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
