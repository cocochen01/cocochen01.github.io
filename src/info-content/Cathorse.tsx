import React from "react";

import Slideshow from "../components/Slideshow";

// Icons
import link from "../assets/images/icons/external-link.png";
import unity from "../assets/images/icons/unity.png";
import csharp from "../assets/images/icons/csharp.png";

// Screenshots
import Screenshot1 from "../assets/images/screenshots/CathorseScreenshot1.png";
import Screenshot2 from "../assets/images/screenshots/CathorseScreenshot2.png";
import Screenshot3 from "../assets/images/screenshots/CathorseScreenshot3.png";

const screenshots = [Screenshot1, Screenshot2, Screenshot3];

const Cathorse: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <div className="title__container">
        <h2 className="title">CATHORSE RESCUE&nbsp;&nbsp;<span style={{ textShadow: "none", fontSize: "0.7em", color: "#ffffff80" }}>May 20, 2024&nbsp;&nbsp;</span>
            <a href="https://ococ.itch.io/cathorse-rescue" target="_blank"><img src={link} className="external-link" style={{ width: "3%"}}></img></a>
        </h2>
        <div className="icon__container">
          <div className="icons">
            <img src={unity} alt="Unity" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
            <img src={csharp} alt="C#" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
          </div>
          <div className="icons">
          </div>
        </div>
      </div>
      <p>A beat-em-up inspired by Castle Crashers' aerial combos, Cathorse Rescue is a game about rescuing your cat-seahorse friend. The game was made during Pixel Jam 2024.</p>
      <p><a href="https://ococ.itch.io/cathorse-rescue" target="_blank">Cathorse Rescue</a> is WebGL game and hosted on itch.io, give it a try!</p>
      <br />
      <p><b>SCREENSHOTS</b></p>
      <Slideshow images={screenshots} />
      <p></p>
      <p></p>
      <p><b>FEATURES: Movement and Aerial Combat</b></p>
      <p>
          The character is controlled with a Character Controller component and the physics is manually implemented in C#.
          This gave me more control of player-enemy interactions and prevents issue like unintended rotations and clipping that might occur using Unity's physics system.
          Attacking an enemy adds a forward and upward vector to the player character as well as knocking back enemies.
      </p>
      <br />
      <p><b>FEATURES: Enemy AI</b></p>
      <p>
          Enemies have a simple AI that approaches the player in a linear path.
          Some other AI behaviors like circling the player exists but are not in use due to the time constraints for the game jam.
          The script is designed so that an enemy can make use of multiple behaviors like following, circling, and keeping away simultaneously or even change behaviors depending on conditions.
      </p>
    </div>
  );
};

export default Cathorse;
