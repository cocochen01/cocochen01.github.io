import React from "react";

import Slideshow from "../components/Slideshow";

// Icons
import link from "../assets/images/icons/external-link.png";
import unreal from "../assets/images/icons/unreal.png";
import cpp from "../assets/images/icons/cpp.png";

// Screenshots
import Screenshot1 from "../assets/images/screenshots/DesertScreenshot1.png";
import Screenshot2 from "../assets/images/screenshots/DesertScreenshot2.png";
import Screenshot3 from "../assets/images/screenshots/DesertScreenshot3.png";

const screenshots = [Screenshot1, Screenshot2, Screenshot3];

const Zumbido: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <div className="title__container">
        <h2 className="title">DESERT ZUMBIDO&nbsp;&nbsp;<span style={{ textShadow: "none", fontSize: "0.7em", color: "#ffffff80" }}>December 1, 2023&nbsp;&nbsp;</span>
          <a href="https://ococ.itch.io/desertzumbido" target="_blank"><img src={link} className="external-link" style={{ width: "3%"}}></img></a>
        </h2>
        <div className="icon__container">
          <div className="icons">
            <img src={unreal} alt="Unreal Engine" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={cpp} alt="C++" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
          </div>
          <div className="icons">
          </div>
        </div>
      </div>
      <p>
          Game made for Game Off 2023, whose theme was SCALE.
          It is a tower defense game in the style of Dungeon Defenders set in a western post-apocalyptic town. You are a gunslinging lizard defending your home from mutant zombie insects.
      </p>
      <p>Although the game is unfinished, it contains some features that I implemented that I am proud of, and it was overall a great learning experience in Unreal Engine.</p>
      <br />
      <p><b>SCREENSHOTS</b></p>
      <Slideshow images={screenshots} />
      <p></p>
      <p></p>
      <p><b>FEATURES: Enemy AI and Navigation</b></p>
      <p>Enemy navigation uses unreal's built in navmesh with some empty vector location objects to guide the enemies along a path toward the center.</p>
      <br />
      <p><b>FEATURES: Tower Placement</b></p>
      <p>
          Keeps track of tower prefabs that can be placed, and keeps track of placed towers.
          Additional feature of previewing a tower before you placed it and ensuring that towers have a zone around them to prevent towers from being placed to close together.
      </p>
      <br />
    </div>
  );
};

export default Zumbido;
