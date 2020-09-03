import React from "react";
import "./ourSponsor.scss";
import miat from "../../images&icons/sponsor/miatSponsor.png";
import mosta from "../../images&icons/sponsor/mostaSponsor.png";
import nomt from "../../images&icons/sponsor/nomtSponsor.png";
import n from "../../images&icons/sponsor/nSponsor.png";
import background from "../../images&icons/backgrounds/sponsorBackground.svg";
import background1 from "../../images&icons/backgrounds/sponsorBackground1.svg";


const OurSponsor = () => {
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
      <img
        alt="sponsorBackground"
        src={background}
        className="sponsorBackground"
      />
      <img
        alt="sponsorBackground1"
        src={background1}
        className="sponsorBackground1"
      />
    </div>
  );
};

export default OurSponsor;
