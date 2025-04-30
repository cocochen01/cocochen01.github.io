import React from "react";

import Slideshow from "../components/Slideshow";

// Icons
import blender from "../assets/images/icons/blender.png";

// Screenshots
import Fox from "../assets/images/screenshots/fox.png";
import Dragon from "../assets/images/screenshots/dragon.png";
import Screenshot1 from "../assets/images/screenshots/druid1.png";
import Screenshot2 from "../assets/images/screenshots/druid2.png";
import Screenshot3 from "../assets/images/screenshots/druid3.png";

// Videos
import FoxVideo from "../assets/videos/fox_demo.mp4";
import DragonVideo from "../assets/videos/dragon_demo.mp4"

const screenshots = [Screenshot1, Screenshot2, Screenshot3];

const Blender: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
      <div className="title__container">
        <h2 className="title">BLENDER PROJECTS</h2>
        <div className="icon__container">
          <div className="icons">
            <img src={blender} alt="Blender" style={{float: "right", width: "18%", transform: "translate(-50%, -50%)", margin: "2%"}}></img>
          </div>
          <div className="icons">
          </div>
        </div>
      </div>
      <p>
          Some Blender models I have made for various games and other projects. I am self-taught in modeling, rigging, and animating. 
          Making my own game models and implementing them in engine gave me an understanding of the technical artist's process, and this has helped me greatly when working with artists in game jams.
      </p>
      <br />
      <p><b>FOX</b></p>
      <div style={{ display: "flex" }}>
          <img style={{ width: "35%" }} src={Fox} />
          <video controls style={{ width: "65%" }}>
              <source src={FoxVideo} type="video/mp4"/>
              Loading video.
          </video>
      </div>
      <p></p>
      <p></p>
      <p><b>D&D CHARACTER</b></p>
      <div style={{ display: "flex" }}>
          <img style={{ width: "35%" }} src={Dragon} />
          <video controls style={{ width: "65%" }}>
              <source src={DragonVideo} type="video/mp4"/>
              Loading video.
          </video>
      </div>
      <p></p>
      <p></p>
      <p><b>DRUID-NECROMANCER CONCEPT</b></p>
      <Slideshow images={screenshots} />
    </div>
  );
};

export default Blender;
