import React from "react";

// Icons
import unity from "../assets/images/icons/unity.png";
import csharp from "../assets/images/icons/csharp.png";

const StarTrails: React.FC = () => {
  return (
    <div className="information__body" id="info-body">
    <div className="title__container">
      <h2 className="title">STAR TRAILS&nbsp;&nbsp;<span style={{ textShadow: "none", fontSize: "0.7em", color: "#ffffff80" }}>April 10, 2023&nbsp;&nbsp;</span>
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
      <p>Star Trails is a game built in Unity as my Senior Design project.</p>
      <p>This was my first real experience developing with a game engine and collaborating using a properly set up version control system.</p>
      <p>My Senior Design group was one of the best teams I've been a part of and we're proud of the work we did over the course of the semester, have a look at our demo!</p>
      <br />
      <p><b>DEMO</b></p>
      <iframe src="https://www.youtube.com/embed/HI9nlsHx0W8?si=AzaVh_SiLf1hVONI" title="Star Trails" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <p></p>
      <p></p>
      <p><b>VERSION CONTROL</b></p>
      <p>We used Plastic SCM which is already integrated with Unity, making the setup extremely easy.</p>
      <br />
      <p><b>FEATURES: 8-Directional Movement</b></p>
      <p>
          The player model, rig, and animations were made by myself in Blender.
          I created a set of 4 animations for the 4 directions, and used Unities blend tree system to blend the animations together.
          A lot of work went into getting the animations to look right with the controls.
          The sometric perspective of the game meant that the character's movement needed to be rotated to properly reflect the player's intended movement onto the isometric map.
      </p>
      <br />
      <p><b>FEATURES: Aiming and Weapon Pickup</b></p>
      <p>
          To aim, a line is traced from the character to the position of the mouse cursor which is then used to rotate the character (with a bit of LERP).
          Additionally, the animation used accounts for both the direction the character is moving and the direction the character is facing.
      </p>
      <p>
          To get weapons to attach onto the model, I stored a reference to one of the arm bones in the rig and parented the weapon model onto it.
          I also stored a reference to a bone I added to the weapons so that bullets could spawn at the right location. This was to ensure bullets fired from the right spot when you swapped different sized weapons.
      </p>
      <br />
      <p><b>FEATURES: Procedural Generation</b></p>
      <p>
          Our idea was for the game to be an endlessly replayable roguelike. For this concept, I researched methods of procedural generation that I could add to the game.
          I was able to implement a few types of room generation algorithms, but unfortunately we didn't have time to incorporate the proc gen into the final build. The generation script can be seen in the demo video.
      </p>
      <br />
    </div>
  );
};

export default StarTrails;
