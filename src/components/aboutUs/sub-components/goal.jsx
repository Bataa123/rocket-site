import React, { useState, useEffect } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import sRocket from "../../../images&icons/launchRocket.jpg";
import TextImage from "../../../images&icons/TextImage.svg";

export const Goal = () => {
  const [call, setCall] = useState(false);

  const callPopUp = () => {
    setCall(!call);
  };
  useEffect(() => {
    const project = document.getElementById("getGoal");
    project.style.width = call === true ? "100vw" : "0px";
    project.style.height = call === true ? "100vh" : "0px";
    document.getElementById("ourGoalTitle").style.fontSize =
      call === true ? "40px" : "0px";
    document.getElementById("ourGoalText").style.fontSize =
      call === true ? "20px" : "0px";
  }, [call]);

  return (
    <div className="ourProjectContainer">
      <div
        style={{ visibility: call === true ? "visible" : "hidden" }}
        className="getCenter"
        id="getGoal"
      >
        <div className="secondHeadline">
          <div
            id="ourGoalTitle"
            className="aboutHeadline onlyPhone"
            style={{ width: "auto" }}
          >
            Our Goal
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
        <div id="ourGoalText" className="popUp">
          20+ Students From Across The globe, ranging from High School Students
          to Ph.D. candidates at some of the world’s most prestigious
          universities
        </div>
      </div>

      <img src={TextImage} alt="TextImage" className="TextImageRight" />
      <div className="everything reverseForPhone" id="ourGoal">
        <img src={sRocket} alt="rocket" className="aboutImage" />
        <div className="allText aboutText">
          <div className="headlineWithLine">
            <div className="secondLine"></div>
            <div className="aboutHeadline">our goal</div>
          </div>
          <div className="text">
            20+ Students From Across The globe, ranging from High School
            Students to Ph.D. candidates at some of the world’s most prestigious
            universities
          </div>
          <div onClick={callPopUp} className="readMore">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};
