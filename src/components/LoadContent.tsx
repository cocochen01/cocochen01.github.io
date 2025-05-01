import React from "react";
import AboutMe from "../info-content/AboutMe";
import Cathorse from "../info-content/Cathorse";
import Zumbido from "../info-content/Zumbido";
import TimeToCollect from "../info-content/TimeToCollect";
import StarTrails from "../info-content/StarTrails";
import Item5Content from "../info-content/Item5Content";
import Playwright from "../info-content/Playwright";
import AboutPage from "../info-content/AboutPage";
import Blender from "../info-content/Blender";
import University from "../info-content/University";

type LoadContentProps = {
  contentId: string;
};

const contentMap: { [key: string]: React.FC } = {
  aboutme: AboutMe,
  cathorse: Cathorse,
  zumbido: Zumbido,
  timetocollect: TimeToCollect,
  startrails: StarTrails,
  item5: Item5Content,
  playwright: Playwright,
  aboutpage: AboutPage,
  blender: Blender,
  university: University,
};

const LoadContent: React.FC<LoadContentProps> = ({ contentId }) => {
  console.log(`LoadContent: ${contentId}`);

  const ContentComponent = contentMap[contentId];

  if (!ContentComponent) {
    console.warn(`LoadContent: ${contentId}`);
    return <div><p>Page not found.</p></div>;
  }

  return <ContentComponent />;
};

export default LoadContent;
