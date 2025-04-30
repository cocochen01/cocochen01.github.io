import React from "react";

// Icons
import link from "../assets/images/icons/external-link.png";
import ts from "../assets/images/icons/typescript.png";
import js from "../assets/images/icons/javascript.png";
import threejs from "../assets/images/icons/threejs.png";
import react from "../assets/images/icons/react.png";
import vite from "../assets/images/icons/vite.png";

const AboutPage: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <div className="title__container">
        <h2 className="title">ABOUT THIS WEBSITE&nbsp;&nbsp;
          <a href="https://github.com/cocochen01/cocochen01.github.io" target="_blank"><img src={link} className="external-link" style={{ width: "3%"}}></img></a>
        </h2>
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
          This website was first built from scratch with React + Vite in 2022, it has since been refactored and improved for code legibility.<br /><br />
          Three.js and React-Three-Fiber are used to render the 3D model, Drei is a helper library I used for OrbitControls which lets the user rotate the model.
          A custom react hook scales the font sizes for different viewport sizes. You can observe that when the window is resized, all text on the page scales along.<br />
      </p>
    </div>
  );
};

export default AboutPage;