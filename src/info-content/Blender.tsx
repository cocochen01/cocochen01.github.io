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
          To become more familiar with the technical side of game art, I picked up some Blender skills and made my own 3D character models. Each of the models here were made from scratch and modeled, textured, rigged, and animated by myself.
          I've learned a lot about making and implementing engine-ready game models from these mini projects.
      </p>
      <br />
      <p><b>FOX</b></p>
      <p>A model I made for my Senior Project game. He has 4 animations for each cardinal direction of movement. Using Unity's blend tree, I created a 8-directional animations from those animations by blending them together for the diagonal directions.</p>
      <div style={{ display: "flex" }}>
          <img style={{ width: "35%" }} src={Fox} />
          <video controls style={{ width: "65%" }}>
              <source src={FoxVideo} type="video/mp4"/>
              Unable to load video.
          </video>
      </div>
      <p></p>
      <p></p>
      <p><b>DRAGON</b></p>
      <p>
          A quick, low-poly model I made of my D&D character as part of my first test-game on Unreal.
          After struggling to make 4 animations for my Fox model, I decided to reduce my work by only making a forward and backward moving animation and simply turn the character programmatically instead.
      </p>
      <div style={{ display: "flex" }}>
          <img style={{ width: "35%" }} src={Dragon} />
          <video controls style={{ width: "65%" }}>
              <source src={DragonVideo} type="video/mp4"/>
              Unable to load video.
          </video>
      </div>
      <p></p>
      <p></p>
      <p><b>DRUID-NECROMANCER</b></p>
      <p>
          I made this in 2022 and it was my first time modeling, painting, and rigging in Blender. She is my concept for a druid-necromancer whose fighting moves involve animal spirits.
          I've always enjoyed making art and this was a really fun exercise of my skills, but it made me realize that it's a bit too ambitious to try and make every part of a game by yourself.
      </p>
      <Slideshow images={screenshots} />
    </div>
  );
};

export default Blender;
