import React, { useState } from "react";
import "../index.css";

import pfp from "../assets/images/icons/pfp.png";
import cathorse from "../assets/images/icons/Cathorse.png";
import dz from "../assets/images/icons/DZ.png";
import ratAlive from "../assets/images/icons/Rat_Alive.png";
import starTrails from "../assets/images/icons/star_trails.png";
import threejs from "../assets/images/icons/threejs.png";
import blender from "../assets/images/icons/blender.png";
import ucr from "../assets/images/icons/ucr.png";
import githubIcon from "../assets/images/icons/github.png";
import linkedinIcon from "../assets/images/icons/linkedin.png";
import itchIcon from "../assets/images/icons/itch.png";
import devpostIcon from "../assets/images/icons/devpost.png";

import LoadContent from "../components/LoadContent";

const Home: React.FC = () => {
  const [contentId, setContentId] = useState<string>("aboutme");

  const handleItemClick = (id: string) => {
    setContentId(id);
  };

  return (
    <>
      <header></header>
      <main>
        <div className="profile">
          <div className="profile-header">
            <button
              className="header-pic"
              id="item0"
              style={{ backgroundImage: `url(${pfp})` }}
              onClick={() => handleItemClick("aboutme")}
            >
              <div className="tooltip">ABOUT ME</div>
            </button>
            <div className="header-name">
              <h2>Huiwen (Coco) Chen</h2>
              <p>Programmer • Developer</p>
            </div>
          </div>

          <div className="profile-container">
            <div className="container__items">
              <ItemButton
                id="item1"
                image={cathorse}
                tooltip="CATHORSE RESCUE"
                onClick={() => handleItemClick("item1")}
              />
              <ItemButton
                id="item2"
                image={dz}
                tooltip="DESERT ZUMBIDO"
                onClick={() => handleItemClick("item2")}
              />
              <ItemButton
                id="item3"
                image={ratAlive}
                tooltip="TIME TO COLLECT"
                onClick={() => handleItemClick("item3")}
              />
              <ItemButton
                id="item4"
                image={starTrails}
                tooltip="STAR TRAILS"
                onClick={() => handleItemClick("item4")}
              />
              <button className="item" id="item5" hidden />
            </div>

            <div className="container__character">
              <div id="container3D"></div>
            </div>

            <div className="container__items">
              <ItemButton
                id="item6"
                image={threejs}
                tooltip="ABOUT THIS WEBSITE"
                onClick={() => handleItemClick("item6")}
              />
              <ItemButton
                id="item7"
                image={blender}
                tooltip="BLENDER PROJECTS"
                onClick={() => handleItemClick("item7")}
              />
              <ItemButton
                id="item8"
                image={ucr}
                tooltip="UNIVERSITY"
                onClick={() => handleItemClick("item8")}
              />
            </div>
          </div>

          <div className="profile-stats">
            <div className="stats">
              <p>Unreal Engine 5 • Unity • C++ • C# • Javascript</p>
              <p>
                <a href="https://github.com/cocochen01">
                  <img src={githubIcon} className="imgID" alt="GitHub" />
                </a>
                &nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/huiwen-coco-chen-8968b7198/">
                  <img src={linkedinIcon} className="imgID" alt="LinkedIn" />
                </a>
                &nbsp;&nbsp;
                <a href="https://ococ.itch.io">
                  <img src={itchIcon} className="imgID" alt="Itch.io" />
                </a>
                &nbsp;&nbsp;
                <a href="https://devpost.com/hchen332">
                  <img src={devpostIcon} className="imgID" alt="Devpost" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="information">
          <LoadContent contentId={contentId} />
        </div>
      </main>
    </>
  );
};

type ItemButtonProps = {
  id: string;
  image: string;
  tooltip: string;
  onClick: () => void;
};

const ItemButton: React.FC<ItemButtonProps> = ({ id, image, tooltip, onClick }) => (
  <button
    className="item"
    id={id}
    style={{ backgroundImage: `url(${image})` }}
    onClick={onClick}
  >
    <div className="tooltip">{tooltip}</div>
  </button>
);

export default Home;
