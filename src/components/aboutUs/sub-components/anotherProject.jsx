import React, { useState, useEffect } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import projectImage from "../../../images&icons/launchRocket.jpg";
import TextImage from "../../../images&icons/backgrounds/TextImage.svg";

export const AnotherProject = () => {
  const [call, setCall] = useState(false);

  const callPopUp = () => {
    setCall(!call);
  };

  useEffect(() => {
    const project = document.getElementById("getCenter");
    project.style.width = call === true ? "100vw" : "0px";
    project.style.height = call === true ? "90vh" : "0px";
    document.getElementById("ourProjectTitle").style.fontSize =
      call === true ? "2vw" : "0px";
    document.getElementById("ourProjectText").style.fontSize =
      call === true ? "1.3vw" : "0px";
  }, [call]);

  return (
    <div className="ourProjectContainer">
      <div
        style={{ visibility: call === true ? "visible" : "hidden" }}
        className="getCenter"
        id="getCenter"
      >
        <div className="secondHeadline">
          <div
            id="ourProjectTitle"
            className="aboutHeadline onlyPhone"
            style={{ width: "auto" }}
          >
            Our Project
          </div>
          <CancelIcon
            style={{
              color: "white",
              margin: "auto 10px",
              fontSize: call === true ? "2.1875rem" : "0px",
            }}
            className="onlyPhone"
            onClick={callPopUp}
          />
        </div>
        <div id="ourProjectText" className="popUp">
          We are focused on launching a rocket to break the student altitude
          record of 330,000 feet, reaching the Kármán line, which is considered
          the border between Earth’s atmosphere and outer space. Designing,
          building and launching a rocket of this magnitude faces a serious
          financial obstacle. We are raising money in the hopes that our dream
          of reaching outer space can be achieved.
        </div>
      </div>

      <img src={TextImage} alt="TextImage" className="TextImageLeft" />
      <div className="everything" id="ourProject">
        <div className="allText projectText">
          <div className="headlineWithLine">
            <div className="secondLine"></div>
            <div className="aboutHeadline">our project</div>
          </div>
          <div className="text">
            We are focused on launching a rocket to break the student altitude
            record of 330,000 feet, reaching the Kármán line, which is
            considered the border between Earth’s atmosphere and outer space.
            Designing, building and launching a rocket of this magnitude faces a
            serious financial obstacle.
          </div>
          <div onClick={callPopUp} className="readMore">
            Read more
          </div>
        </div>
        <img src={projectImage} alt="project" className="aboutImage" />
      </div>
    </div>
  );
};
