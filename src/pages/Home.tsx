import React, { useState } from "react";
import "../index.css";

import pfp from "../assets/images/icons/pfp.png";
import cathorse from "../assets/images/icons/Cathorse.png";
import dz from "../assets/images/icons/DZ.png";
import ratAlive from "../assets/images/icons/Rat_Alive.png";
import starTrails from "../assets/images/icons/star_trails.png";
import playwright from "../assets/images/icons/playwright.png"
import react from "../assets/images/icons/react.png";
import blender from "../assets/images/icons/blender.png";
import ucr from "../assets/images/icons/ucr.png";

import githubIcon from "../assets/images/icons/github.png";
import linkedinIcon from "../assets/images/icons/linkedin.png";
import itchIcon from "../assets/images/icons/itch.png";
import devpostIcon from "../assets/images/icons/devpost.png";

import LoadContent from "../components/LoadContent";
import ModelRender from "../components/ModelRender";

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
                id="cathorse"
                image={cathorse}
                tooltip="CATHORSE RESCUE"
                star={true}
                onClick={() => handleItemClick("cathorse")}
              />
              <ItemButton
                id="zumbido"
                image={dz}
                tooltip="DESERT ZUMBIDO"
                star={false}
                onClick={() => handleItemClick("zumbido")}
              />
              <ItemButton
                id="timetocollect"
                image={ratAlive}
                tooltip="TIME TO COLLECT"
                star={true}
                onClick={() => handleItemClick("timetocollect")}
              />
              <ItemButton
                id="startrails"
                image={starTrails}
                tooltip="STAR TRAILS"
                star={false}
                onClick={() => handleItemClick("startrails")}
              />
              <button className="item" id="item5" hidden />
            </div>

            <div className="container__character">
              <div id="container3D">
                <ModelRender/>
              </div>
            </div>

            <div className="container__items">
              <ItemButton
                id="playwright"
                image={playwright}
                tooltip="QA TESTING"
                star={true}
                onClick={() => handleItemClick("playwright")}
              />
              <ItemButton
                id="aboutpage"
                image={react}
                tooltip="ABOUT THIS WEBSITE"
                star={true}
                onClick={() => handleItemClick("aboutpage")}
              />
              <ItemButton
                id="blender"
                image={blender}
                tooltip="BLENDER PROJECTS"
                star={false}
                onClick={() => handleItemClick("blender")}
              />
              <ItemButton
                id="university"
                image={ucr}
                tooltip="UNIVERSITY"
                star={false}
                onClick={() => handleItemClick("university")}
              />
            </div>
          </div>

          <div className="profile-stats">
            <div className="stats">
              <p>C++ • C# • Javascript • Unity • Unreal Engine</p>
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
  star: boolean;
  onClick: () => void;
};

const ItemButton: React.FC<ItemButtonProps> = ({ id, image, tooltip, star, onClick }) => (
  <button
    className="item"
    id={id}
    style={{ backgroundImage: `url(${image})` }}
    onClick={onClick}
  >
    {star && 
      <div className="star-wrapper">
        <div className="star-glow"></div>
        <div className="star"></div>
      </div>
    }
    <div className="tooltip">{tooltip}</div>
  </button>
);

export default Home;
