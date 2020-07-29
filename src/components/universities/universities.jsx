import React from "react";
import "./universities.scss";
import berkeley from '../../images&icons/universities/berkeleyUniversity.png'
import columbia from '../../images&icons/universities/columbiaUniversity.png'
import cornell from '../../images&icons/universities/cornellUniversity.png'
import duke from '../../images&icons/universities/dukeUniversity.png'
import harvard from '../../images&icons/universities/harvardUniversity.png'
import mit from '../../images&icons/universities/mitUniversity.png'
import muis from '../../images&icons/universities/muisUniversity.png'
import penn from '../../images&icons/universities/pennUniversity.png'
import rutgers from '../../images&icons/universities/rutgersUniversity.png'
import tokyo from '../../images&icons/universities/tokyoUniversity.png'
import villnova from '../../images&icons/universities/villnovaUniversity.png'

const Universities = () => {
  return (
    <>
      <div id="unis" className="headLine">Universities</div>
      <div className="zuraas"></div>
      <div className="univers">
        <img
          alt="number1"
          src={berkeley}
        ></img>
        <img
          alt="number2"
          src={columbia}
        ></img>
        <img
          alt="number3"
          src={cornell}
        ></img>
        <img
          alt="number4"
          src={duke}
        ></img>
        <img
          alt="number5"
          src={harvard}
        ></img>
        <img
          alt="number6"
          src={mit}
        ></img> 
        <br/>
        <img
          alt="number7"
          src={muis}
        ></img>
        <img
          alt="number8"
          src={penn}
        ></img>
        <img
          alt="number9"
          src={rutgers}
        ></img>
        <img
          alt="number10"
          src={tokyo}
        ></img>
        <img
          alt="number11"
          src={villnova}
        ></img>
      </div>
    </>
  );
};

export default Universities;
