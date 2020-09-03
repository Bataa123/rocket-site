import React from "react";
import "./universities.scss";
import berkeley from "../../images&icons/universities/berkeleyUniversity.png";
import columbia from "../../images&icons/universities/columbiaUniversity.png";
import cornell from "../../images&icons/universities/cornellUniversity.png";
import duke from "../../images&icons/universities/dukeUniversity.png";
import harvard from "../../images&icons/universities/harvardUniversity.png";
import mit from "../../images&icons/universities/mitUniversity.png";
import muis from "../../images&icons/universities/muisUniversity.png";
import penn from "../../images&icons/universities/pennUniversity.png";
import rutgers from "../../images&icons/universities/rutgersUniversity.png";
import tokyo from "../../images&icons/universities/tokyoUniversity.png";
import villnova from "../../images&icons/universities/villnovaUniversity.png";
<<<<<<< Updated upstream
import shutis from "../../images&icons/universities/shutis.png"
=======
// import shutis from "../../images&icons/universities/shutis.png";
>>>>>>> Stashed changes

const Universities = () => {
  return (
    <>
      <div id="unis" className="headLine">
        UNIVERSITIES
      </div>
      <div className="zuraas"></div>
      <div className="univers">
        <img alt="number5" src={harvard} className="universityLogo"/>
        <img alt="number4" src={duke} className="universityLogo"/>
        <img alt="number11" src={villnova} className="universityLogo"/>
        <img alt="number7" src={muis} className="universityLogo"/>
        <img alt="number9" src={rutgers} className="universityLogo"/>
        <img alt="number1" src={berkeley} className="universityLogo"/>
        <img alt="number8" src={penn} className="universityLogo"/>
        {/* <img alt="number12" src={shutis} className="universityLogo"/> */}
        <img alt="number10" src={tokyo} className="universityLogo"/>
<<<<<<< Updated upstream
        <img alt="number11" src={villnova} className="universityLogo"/>
        <img alt="number12" src={shutis} className="universityLogo shutis"/>
=======
        <img alt="number6" src={mit} className="universityLogo"/>
        <img alt="number3" src={cornell} className="universityLogo"/>
        <img alt="number2" src={columbia} className="universityLogo"/>
>>>>>>> Stashed changes
      </div>
    </>
  );
};

export default Universities;
