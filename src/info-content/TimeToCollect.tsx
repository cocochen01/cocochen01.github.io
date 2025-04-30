import React from "react";

import Slideshow from "../components/Slideshow";

// Icons
import link from "../assets/images/icons/external-link.png";
import unreal from "../assets/images/icons/unreal.png";
import cpp from "../assets/images/icons/cpp.png";

// Screenshots
import Screenshot1 from "../assets/images/screenshots/RatScreenshot1.png";
import Screenshot2 from "../assets/images/screenshots/RatScreenshot2.png";
import Screenshot3 from "../assets/images/screenshots/RatScreenshot3.png";
import Screenshot4 from "../assets/images/screenshots/RatScreenshot4.png";

// Videos
import Video1 from "../assets/videos/ToC_ProcGen.mp4";
import Video2 from "../assets/videos/ToC_Wordle.mp4";

const screenshots = [Screenshot1, Screenshot2, Screenshot3, Screenshot4];

const TimeToCollect: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
    <div className="title__container">
      <h2 className="title">TIME TO COLLECT&nbsp;&nbsp;<span style={{ textShadow: "none", fontSize: "0.7em", color: "#ffffff80" }}>September 14, 2023&nbsp;&nbsp;</span>
          <a href="https://ococ.itch.io/time-to-collect" target="_blank"><img src={link} className="external-link" style={{ width: "3%"}}></img></a>
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
          Time to Collect is a game made in UE 5.3 by a team I put together consisting of some programmer and artist friends of mine. TTC was made for the 2023 Epic Mega Jam and the theme was ANTIQUE.
          We completed the game but unfortunately didn't manage to submit on time. Still, it was a fantastic first experience with Unreal Engine and I learned a great deal.
      </p>
      <p>You play as a rat who collects objects scattered around the room while avoiding a deadly roomba and other security, take a look!</p>
      <br />
      <p><b>DEMO</b></p>
      <iframe src="https://www.youtube.com/embed/uGmfmViE7pE?si=Va1TVgHsTV_BVNZp" title="Time to Collect" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <p></p>
      <p></p>
      <p><b>SCREENSHOTS</b></p>
      <Slideshow images={screenshots} />
      <p></p>
      <p></p>
      <p><b>VERSION CONTROL</b></p>
      <p>Our game is built on Unreal Engine 5 but we opted to use Unity's Plastic SCM as our source control. Setting up Plastic was a bit of challenge in the beginning, but it's built in branch interface and ease of use for our artist was worth it.</p>
      <p>
          After the jam deadline, we decided to transfer the game onto a GitHub repository instead.
          Using Git as our version control will allow us to more easily collaborate with our artists as well as providing us with the other functionalities of GitHub such as the Project board feature.
      </p>
      <br />
      <p><b>FEATURES: Procedural Room Generation</b></p>
      <p>The random procedural room generation was my centerpiece feature. Most of my time was spent getting the room generation just right so that each run of the game would have it's own unique room layout.</p>
      <p>
          I used a grid based system and applied some principles of grid traversal in order to place walls and furniture.
          Many checks and interations took place so that the furniture pieces were placed, ensuring they did not overlap, block access to each other, or clip through the walls.
          For example, each furniture piece will always have the back facing the wall, and never block the door or the tiles next to the bed.
      </p>
      <p>Furniture is always oriented correctly, even when I implemented random room shapes that have at most 12 corners.</p>
      <br />
      <video controls>
          <source src={Video1} type="video/mp4"/>
          Unable to load video.
      </video>
      <p></p>
      <p></p>
      <p><b>FEATURES: Movement</b></p>
      <p>One of my goals for this game was to work in C++ whenever possible. Unreal's blueprint system is powerful, but I am most comfortable writing C++ which feels more readable and concise to me.</p>
      <p>
          The movement of the Rat is code I adapted from an earlier exercise project. It additionally implements a charge-jump which allows the Rat to gain greater jump height the longer you hold Spacebar.
          I worked with our artists to integrate character movement with animations, since I had prior experience with this in another project.
      </p>
      <br />
      <p><b>FEATURES: Wordle</b></p>
      <p>Inside TTC is my implementation of <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>. It contains the entire list of possible 5-letter solutions used in NYT's Wordle, as well as their list of possible guesses.</p>
      <p>This was intended to be one of many puzzles in the game that would open up a container holding more loot, but we ran out of time. Instead, it's simply a minigame within the game.</p>
      <p>
          The Wordle logic was fully implemeted in C++. In order to visually represent the game, I used a custom WidgetUI class and WidgetTrees to programmatically create a grid and change the contents of the grid.
          This was extremely challenging and time consuming because documentation of the C++ implementation was sparse.
          I could have created each grid individually in Blueprints, then referenced the text boxes in the script instead, but I decided to use the C++ way to learn how to create grids of any size in future projects.
      </p>
      <br />
      <video controls>
          <source src={Video2} type="video/mp4"/>
          Unable to load video.
      </video>
    </div>
  );
};

export default TimeToCollect;
