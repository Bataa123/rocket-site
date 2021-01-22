import React from "react";
import { Navigation } from "./navigation";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import video from "../assets/backgrounds/animation.mp4";

export const Header = () => {
  return (
    <div className="opacity">
      <video autoPlay muted loop className="backgroundVideo">
        <source src={video} type="video/mp4" />
      </video>
      <div className="firstLook">
        <Navigation />
        <div className="firstRectangle">
          2000M Above <br /> the Gobi Desert
        </div>
        <KeyboardArrowDownIcon className="headerArrow" />
      </div>
    </div>
  );
};
