import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <div className="about-img-wrapper">
        <img src="/images/prof-pic.png" alt="prof-pic" />
      </div>
      <div className="text-wrapper">
        <h3>Hi, my name is Hubert</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias,
          aperiam assumenda, commodi cupiditate dignissimos error expedita
          explicabo hic minima porro quibusdam recusandae repellat, ullam
          voluptas? A ab ad aliquam amet animi, commodi deserunt dolorum
          expedita fugit impedit ipsa iste laboriosam nihil nisi, porro possimus
          provident quo suscipit temporibus, voluptates!
        </p>
      </div>
      <hr/>
    </div>
  );
};

export default AboutMe;
