import React from "react";
import "./aboutUs.scss";
import { Goal, Team, Project, Time } from "./sub-components";
// import aboutUsData from './aboutUsData.js'
// import '../../images&icons/spaceX.png'

const AboutUs = () => {
    
  return (
    <div id="aboutUs">
      <div className="headLine">ABOUT US</div>
      <div className="zuraas"></div>
      <div className="aboutEvery">
        <div>
          <Project />
        </div>
        <div>
          <Goal />
        </div>
        <div>
          <Time />
        </div>
        <div>
          <Team />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
