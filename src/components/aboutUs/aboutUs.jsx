import React from "react";
import "./aboutUs.scss";
import { Goal, Project, AnotherProject } from "./sub-components";

const AboutUs = () => {
  return (
    <div className="aboutEvery" id="aboutUs">
      <Project />
      <Goal />
      <AnotherProject />
    </div>
  );
};
export default AboutUs;
