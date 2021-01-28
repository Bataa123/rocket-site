import React, { useState, useEffect } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import projectImage from "../assets/launchRocket.jpg";
import img1 from "../assets/backgrounds/img1.png";
import img2 from "../assets/backgrounds/img2.png";
import back2 from "../assets/backgrounds/back2.png";
import back3 from "../assets/backgrounds/back4.png";

export const AboutUsCard = ({
  title,
  description,
  isLeft,
  item,
  text1 = "",
  text2 = "",
  text3 = "",
  id,
}) => {
  const [call, setCall] = useState(false);

  const callPopUp = () => {
    setCall(!call);
  };

  const getBackground = () => {
    switch (item) {
      case "1":
        return "";
      case "2":
        return back3;
      case "3":
        return back2;
    }
  };
  const getImage = () => {
    switch (item) {
      case "1":
        return projectImage;
      case "2":
        return img1;
      case "3":
        return img2;
    }
  };

  useEffect(() => {
    const project = document.getElementById(`anotherCenter${item}`);
    project.style.width = call === true ? "100vw" : "0px";
    project.style.height = call === true ? "50vw" : "0px";
    document.getElementById(`anotherProjectTitle${item}`).style.fontSize =
      call === true ? "2vw" : "0px";
    document.getElementById(`anotherProjectText1${item}`).style.fontSize =
      call === true ? "1.2vw" : "0px";
    document.getElementById(`anotherProjectText2${item}`).style.fontSize =
      call === true ? "1.2vw" : "0px";
    document.getElementById(`anotherProjectText3${item}`).style.fontSize =
      call === true ? "1.2vw" : "0px";
  }, [call]);

  return (
    <div className="ourProjectContainer">
      <div
        style={{ visibility: call === true ? "visible" : "hidden" }}
        className="getCenter"
        id={`anotherCenter${item}`}
      >
        <div className="secondHeadline">
          <div
            id={`anotherProjectTitle${item}`}
            className="aboutHeadline onlyPhone"
            style={{ width: "auto" }}
          >
            {title}
          </div>
          <CancelIcon
            style={{
              color: "white",
              margin: "auto 10px",
              fontSize: call === true ? "2.1875rem" : "0px",
              cursor: "pointer",
            }}
            className="onlyPhone"
            onClick={callPopUp}
          />
        </div>
        <div id={`anotherProjectText1${item}`} className="popUp">
          {text1}
        </div>
        <div className="aboutUsLine"></div>
        <div id={`anotherProjectText2${item}`} className="popUp">
          {text2}
        </div>
        <div className="aboutUsLine"></div>
        <div id={`anotherProjectText3${item}`} className="popUp">
          {text3}
        </div>
      </div>

      {/* <img
        src={getBackground()}
        alt="TextImage"
        className={`
          ${isLeft ? "TextImage TextImageRight" : "TextImage TextImageLeft"} 
          ${item === "1" ? "aboutUsBackground1" : ""}`}
      /> */}
      <div
        style={{ backgroundImage: `url(${getBackground()})` }}
        className={`
          ${isLeft ? "TextImage TextImageRight" : "TextImage TextImageLeft"} 
          ${item === "1" ? "aboutUsBackground1" : ""}`}
      ></div>
      <div
        className={`everything ${item === "2" ? "reverseForPhone" : ""}`}
        id={id}
      >
        {isLeft ? (
          <div
            style={{ backgroundImage: `url(${getImage()})` }}
            className="aboutImage"
          ></div>
        ) : (
          <></>
        )}
        <div className={`allText ${isLeft ? "aboutText" : "projectText"}`}>
          <div className="headlineWithLine">
            <div className="secondLine"></div>
            <div className="aboutHeadline">{title}</div>
          </div>
          <div className="text">{description}</div>
          <div onClick={callPopUp} className="readMore">
            Read more
          </div>
        </div>
        {isLeft ? (
          <></>
        ) : (
          <img src={getImage()} alt="project" className="aboutImage" />
        )}
      </div>
    </div>
  );
};
