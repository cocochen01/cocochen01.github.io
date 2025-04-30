import React from "react";
import link from "../assets/images/icons/external-link.png";
import playwright from "../assets/images/icons/playwright.png";

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
            <img src={playwright} style={{float: "right", width: "18%"}}></img>
            <img src={playwright} style={{float: "right", width: "18%"}}></img>
            <img src={playwright} style={{float: "right", width: "18%"}}></img>
            <img src={playwright} style={{float: "right", width: "18%"}}></img>
          </div>
          <div className="icons">
            <img src={playwright} style={{float: "right", width: "15%"}}></img>
            <img src={playwright} style={{float: "right", width: "15%"}}></img>
          </div>
        </div>
      </div>
      <p>QA testing</p>
    </div>
  );
};

export default Playwright;