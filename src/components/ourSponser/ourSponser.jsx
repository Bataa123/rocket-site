import React from "react";
import "./ourSponser.scss";
import spacex from "../../images&icons/spaceX.png";

const OurSponser = () => {
  return (
    <>
      <div className="headLine">OUR SPONSER</div>
      <div className="zuraas"></div>
      <div className="sponser">
        <img
          alt="number1"
          style={{
            margin: "40px 0px 0px 59px",
            height: "32px",
            width: "240px"
          }}
          src={spacex}
        ></img>
        <img
          alt="number2"
          style={{
            margin: "40px 0px 0px 59px",
            height: "32px",
            width: "240px"
          }}
          src={spacex}
        ></img>
        <img
          alt="number3"
          style={{
            margin: "40px 0px 0px 59px",
            height: "32px",
            width: "240px"
          }}
          src={spacex}
        ></img>
        <img
          alt="number3"
          style={{
            margin: "40px 0px 0px 59px",
            height: "32px",
            width: "240px"
          }}
          src={spacex}
        ></img>
      </div>
    </>
  );
};

export default OurSponser;
