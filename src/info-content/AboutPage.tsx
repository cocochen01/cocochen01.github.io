import React from "react";

// Icons
import ts from "../assets/images/icons/typescript.png";
import js from "../assets/images/icons/javascript.png";
import threejs from "../assets/images/icons/threejs.png";
import react from "../assets/images/icons/react.png";
import vite from "../assets/images/icons/vite.png";

const AboutPage: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <div className="title__container">
        <h2 className="title">ABOUT THIS WEBPAGE</h2>
        <div className="icon__container">
          <div className="icons">
            <img src={threejs} alt="ThreeJS" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={react} alt="React" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={vite} alt="Vite" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={ts} alt="Typescript" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={js} alt="Javascript" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
          </div>
          <div className="icons">
          </div>
        </div>
      </div>
      <p>
          This website was built from scratch with Node.js and Vite, and uses Three.js to render a 3D model.<br />
          The website layout is to emulate the appearance of an Action RPG invectory. Three.js is a Javascript 3D library that is often used to make browser games.
          For this website, it renders a 3D model I made and allows the user to rotate it, just like you would in your RPG inventory.<br />
          Much care was taken to ensure everything, model included, scales with the window size, feel free to test it out!<br />
          I used the official documentation for Three.js as my guide for implementing the model, their website is at <a href="https://threejs.org">threejs.org</a>.
      </p>
    </div>
  );
};

export default AboutPage;