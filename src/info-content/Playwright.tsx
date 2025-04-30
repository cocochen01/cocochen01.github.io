import React from "react";

// Icons
import link from "../assets/images/icons/external-link.png";
import ts from "../assets/images/icons/typescript.png";
import js from "../assets/images/icons/javascript.png";
import playwright from "../assets/images/icons/playwright.png";

// Gif
import demo from "../assets/images/screenshots/demo.gif";

const Playwright: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <div className="title__container">
        <h2 className="title">STATIC UI TESTING&nbsp;&nbsp;
          <span style={{ textShadow: "none", fontSize: "0.7em", color: "#ffffff80" }}>March 16, 2025&nbsp;&nbsp;</span>
          <a href="https://github.com/cocochen01/StaticUITest-Playwright" target="_blank"><img src={link} className="external-link" style={{ width: "3%"}}></img></a>
        </h2>
        <div className="icon__container">
          <div className="icons">
            <img src={playwright} alt="Playwright" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={ts} alt="Typescript" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={js} alt="Javascript" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
          </div>
          <div className="icons">
          </div>
        </div>
      </div>
      <p>
        Playwright testing for static UI elements of Hacker News. This project was an exercise in implementing the Page Object Model and adhering to Playwright's best practices.
        It explores the more advanced features of Playwright such as custom fixtures and global setups/teardowns.
      </p>
      <p><b>DEMO</b></p>
      <img src={demo} alt="Loading demo"></img>
      <p></p>
    </div>
  );
};

export default Playwright;