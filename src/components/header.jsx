import React from "react";
import { Navigation } from "./navigation";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export const Header = () => {
  return (
    <div className="opacity">
      <div className="firstLook">
        <Navigation />
        {/* <div className='firstRectangle'>20000M Above the <br /> Gobi desert</div> */}
        <KeyboardArrowDownIcon className="headerArrow" />
      </div>
    </div>
  );
};
