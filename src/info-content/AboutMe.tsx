import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <h2>ABOUT ME</h2>
      <p><b>Greetings!</b></p>
      <p><b>My name is Coco</b> and I'm a developer on a quest to learn new technologies, build creative applications, and tackle challenging programming problems.</p>
      <p>
        I'm currently working on refining my Javascript skills for various projects in React, Three.js, and Playwright. 
        I've grown significantly as a developer through game projects, gaining experience in leading teams, organizing workflows, and maintaining clean, modular code.
      </p>
      <p></p>
      <p></p>
      <p>When I'm not programming, I'm playing games! Here are some of my favorites:</p>
      <div style={{ textAlign:"center"}}>
      <span style={{ textShadow: "none", fontSize: "1em", color: "#ffffff80" }}>Elden Ring • The Witcher 3 • Balatro • Slay the Spire</span>
      </div>
    </div>
  );
};

export default AboutMe;
