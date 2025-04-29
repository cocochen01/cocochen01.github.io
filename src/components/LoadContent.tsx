import React from "react";
import AboutMeContent from "../info-content/AboutMeContent";
import Item1Content from "../info-content/Item1Content";
import Item2Content from "../info-content/Item2Content";
import Item3Content from "../info-content/Item3Content";
import Item4Content from "../info-content/Item4Content";
import Item5Content from "../info-content/Item5Content";
import Item6Content from "../info-content/Item6Content";
import Item7Content from "../info-content/Item7Content";
import Item8Content from "../info-content/Item8Content";

type LoadContentProps = {
  contentId: string;
};

const LoadContent: React.FC<LoadContentProps> = ({ contentId }) => {
  console.log(`LoadContent: Requested contentId = ${contentId}`);

  let ContentComponent: React.FC | null = null;

  switch (contentId) {
    case "aboutme":
      ContentComponent = AboutMeContent;
      console.log("LoadContent: Rendering AboutMeContent.");
      break;
    case "item1":
      ContentComponent = Item1Content;
      break;
    case "item2":
      ContentComponent = Item2Content;
      break;
    case "item3":
      ContentComponent = Item3Content;
      break;
    case "item4":
      ContentComponent = Item4Content;
      break;
    case "item5":
      ContentComponent = Item5Content;
      break;
    case "item6":
      ContentComponent = Item6Content;
      break;
    case "item7":
      ContentComponent = Item7Content;
      break;
    case "item8":
      ContentComponent = Item8Content;
      break;
    default:
      console.warn(`LoadContent: No matching content for "${contentId}".`);
      break;
  }

  if (!ContentComponent) {
    return <div><p>Page not found.</p></div>;
  }

  return <ContentComponent />;
};

export default LoadContent;
