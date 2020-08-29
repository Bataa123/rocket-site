import React from "react";
import "./aboutUs.scss";
import { Goal, Project } from "./sub-components";

const AboutUs = () => {
  return (
    <div className="aboutEvery" id="aboutUs">
      <Project />
      <Goal />
    </div>
  );
};
export default AboutUs;
