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
            <img src={csharp} alt="C Sharp" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
          </div>
          <div className="icons">
          </div>
        </div>
      </div>
      <p>Cathorse Rescue is a game about rescuing your cat-seahorse friend. The game was made for Pixel Jam 2024 with a 3-person team with myself as the primary programmer.</p>
      <p><a href="https://ococ.itch.io/cathorse-rescue" target="_blank">Cathorse Rescue</a> is WebGL game and hosted on itch.io, give it a try!</p>
      <br />
      <p><b>SCREENSHOTS</b></p>
      <Slideshow images={screenshots} />
      <p></p>
      <p></p>
      <p><b>VERSION CONTROL</b></p>
      <p>Cathorse was made in Unity so we opted to use Unity's built in VCS. Although Git is my preferred VCS, Unity's VCS worked very well for us this time with the use of good branch management.</p>
      <br />
      <p><b>FEATURES: Movement and Aerial Combat</b></p>
      <p>My main inspiration for the game's combat was Castle Crashers. I wanted to emulate the way the player traverses the screen in mid-air as they smacked the enemies.</p>
      <p>
          The character is controlled with a Character Controller component and the physics is manually implemented in C#.
          This gave me more control of player-enemy interactions and prevents issue like unintended rotations and clipping that might occur using Unity's physics system.
          Attacking an enemy adds a forward and upward vector to the player character as well as knocking back enemies.
      </p>
      <br />
      <p><b>FEATURES: Enemy AI</b></p>
      <p>
          In the current implementation of the game, enemies have a simple AI that only adds to a movement vector the direction of the player in range.
          Some other AI behaviors like circling the player exists but are not in use due to the time constraints for the game jam.
          The script is designed so that an enemy can make use of multiple behaviors like following, circling, and keeping away simultaneously or even change behaviors depending on conditions.
      </p>
    </div>
  );
};

export default Cathorse;
