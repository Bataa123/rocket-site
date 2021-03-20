import React from "react";
import berkeley from "../assets/universities/berkeleyUniversity.png";
import columbia from "../assets/universities/columbiaUniversity.png";
import cornell from "../assets/universities/cornellUniversity.png";
import duke from "../assets/universities/dukeUniversity.png";
import harvard from "../assets/universities/harvardUniversity.png";
import mit from "../assets/universities/mitUniversity.png";
import muis from "../assets/universities/muisUniversity.png";
import penn from "../assets/universities/pennUniversity.png";
import tokyo from "../assets/universities/tokyoUniversity.png";
import villnova from "../assets/universities/villnovaUniversity.png";
import shutis from "../assets/universities/shutis.png";
import toronto from "../assets/universities/toronto.png";

export const Universities = () => {
  return (
    <>
      <div id="unis" className="headLine">
        Бидний төлөөлж буй сургуулиуд
      </div>
      <div className="zuraas"></div>
      <div className="universities">
        <img alt="number5" src={harvard} className="harvard" />
        <img alt="number4" src={duke} className="duke" />
        <img alt="number11" src={villnova} className="universityLogo" />
        <img alt="number7" src={muis} className="universityLogo" />
        <img
          alt="number9"
          src={toronto}
          className="universityLogo"
          style={{ width: "10vw" }}
        />
        <img alt="number1" src={berkeley} className="berkeley" />
        <img alt="number8" src={penn} className="universityLogo" />
        <img alt="number10" src={tokyo} className="universityLogo" />
        <img alt="number6" src={mit} className="mit" />
        <img alt="number3" src={cornell} className="universityLogo" />
        <img alt="number2" src={columbia} className="universityLogo" />
        <img alt="number12" src={shutis} className="shutis" />
      </div>
    </>
  );
};
