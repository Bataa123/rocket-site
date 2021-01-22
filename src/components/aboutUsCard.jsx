import React, { useState, useEffect } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import projectImage from "../assets/launchRocket.jpg";
import TextImage from "../assets/backgrounds/TextImage.svg";
import back1 from "../assets/backgrounds/back1.png";
import back2 from "../assets/backgrounds/back2.png";
import back3 from "../assets/backgrounds/back4.png";

export const AboutUsCard = ({ title, description, isLeft, item }) => {
  const [call, setCall] = useState(false);

  const callPopUp = () => {
    setCall(!call);
  };

  const getBackground = () => {
    switch (item) {
      case "1":
        return back1;
      case "2":
        return back3;
      case "3":
        return back2;
    }
  };

  useEffect(() => {
    const project = document.getElementById("anotherCenter");
    project.style.width = call === true ? "100vw" : "0px";
    project.style.height = call === true ? "90vh" : "0px";
    document.getElementById("anotherProjectTitle").style.fontSize =
      call === true ? "2vw" : "0px";
    document.getElementById("anotherProjectText").style.fontSize =
      call === true ? "1.3vw" : "0px";
  }, [call]);

  return (
    <div className="ourProjectContainer">
      <div
        style={{ visibility: call === true ? "visible" : "hidden" }}
        className="getCenter"
        id="anotherCenter"
      >
        <div className="secondHeadline">
          <div
            id="anotherProjectTitle"
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
        <div id="anotherProjectText" className="popUp">
          We are focused on launching a rocket to break the student altitude
          record of 330,000 feet, reaching the Kármán line, which is considered
          the border between Earth’s atmosphere and outer space. Designing,
          building and launching a rocket of this magnitude faces a serious
          financial obstacle. We are raising money in the hopes that our dream
          of reaching outer space can be achieved.
        </div>
      </div>

      <img
        src={getBackground()}
        alt="TextImage"
        className={
          isLeft ? "TextImage TextImageRight" : "TextImage TextImageLeft"
        }
      />
      <div className="everything" id="ourProject">
        {isLeft ? (
          <img src={projectImage} alt="project" className="aboutImage" />
        ) : (
          <></>
        )}
        <div className={`allText ${isLeft ? "aboutText" : "projectText"}`}>
          <div className="headlineWithLine">
            <div className="secondLine"></div>
            <div className="aboutHeadline">{title}</div>
          </div>
          <div className="text">{description}</div>
          {/* <div onClick={callPopUp} className="readMore">
            Read more
          </div> */}
        </div>
        {isLeft ? (
          <></>
        ) : (
          <img src={projectImage} alt="project" className="aboutImage" />
        )}
      </div>
    </div>
  );
};
