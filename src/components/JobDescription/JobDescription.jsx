import React from "react";

import "./JobDescription.css";

const JobDescription = ({ exp }) => {
  return (
    <div>
      <div className="exp">
        <p>Company: {exp.companyName}</p>
        <p>Position: {exp.position}</p>
        <p>
          Place: {exp.city}, {exp.country}
        </p>
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
