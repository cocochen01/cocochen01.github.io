import React from "react";

// Icons
import link from "../assets/images/icons/external-link.png";

const Item5Content: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
    <div className="title__container">
      <h2 className="title">TITLE&nbsp;&nbsp;
        <span style={{ textShadow: "none", fontSize: "0.7em", color: "#ffffff80" }}>March 16, 2025&nbsp;&nbsp;</span>
          <a href="https://github.com/cocochen01/StaticUITest-Playwright" target="_blank"><img src={link} className="external-link" style={{ width: "3%"}}></img></a>
        </h2>
        <div className="icon__container">
          <div className="icons">
            {/* <img src={js} alt="Javascript" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={ts} alt="Typescript" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img> */}
          </div>
          <div className="icons">
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Item5Content;