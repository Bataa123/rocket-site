import React from "react";
import "./timeLine.scss";
import timeline from "../../images&icons/timeline.png";

export const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="timeline-head"> TIMELINE </div>
      <div className="zuraas"></div>
      {/* <img className="timeline-image" alt="timeline" src={timeline} /> */}
      <div className="diagram">
        <div className="texts-top texts">
          <div className="text1">2020.2.22 ehlel</div>
          <div className="text3">2020.3.25 tootsolol simulation hiisen</div>
          <div className="text5">2020.11.5 static test#1</div>
          <div className="text7">2020.11.20 static test#3</div>
          <div className="text9">2020.11.30 huurnu</div>
        </div>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="texts-bottom texts">
          <div className="text2">2020.3.22 bagaa burduulj duussn</div>
          <div className="text4">2020.11.1 ugsarch duusna</div>
          <div className="text6">2020.11.10 static test#2</div>
          <div className="text8">2020.11.28 huurguh talbai belen bolno </div>
        </div>
      </div>
    </div>
  );
};
