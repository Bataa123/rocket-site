import React from "react";
import miat from "../assets/sponsor/miatSponsor.png";
import mosta from "../assets/sponsor/mostaSponsor.png";
import nomt from "../assets/sponsor/nomtSponsor.png";
import n from "../assets/sponsor/nSponsor.png";


export const OurSponsor = () => {
  return (
    <div className="ourSponsor" style={{ position: "relative" }}>
      <div id="sponsor" className="headLine">
        SPONSORS
      </div>
      <div className="zuraas"></div>
      <div className="sponsor">
        <img alt="number3" src={mosta}></img>
        <img alt="number2" src={miat}></img>
        <img alt="number3" src={n}></img>
        <img alt="number1" src={nomt}></img>
      </div>
    </div>
  );
};
