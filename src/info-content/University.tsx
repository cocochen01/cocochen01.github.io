import React from "react";

const University: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <h2>UNIVERSITY OF CALIFORNIA, RIVERSIDE&nbsp;&nbsp;<span style={{ textShadow: "none", fontSize: "0.7em", color: "#ffffff80" }}>2019 - 2023</span></h2>
      <p><b>B.S. in Computer Science</b></p>
      <p>
        While attending UCR, participated in various Hackathons and programming competitions.
      </p>
      <p></p>
      <p></p>
      <p><b>NOTABLE COURSES</b></p>
      <p>
        Principles of Web Development<br />
        Computer Graphics<br />
        Computer Security<br />
        Database Management Systems<br />
        Information Retrieval<br />
        Design of Operating Systems
      </p>
    </div>
  );
};

export default University;
