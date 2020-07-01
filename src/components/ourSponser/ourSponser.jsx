import React from "react";
import "./ourSponser.scss";
import spacex from "../../images&icons/spacex.png";

const OurSponser = () => {
  return (
    <>
      <div className="headLine">OUR SPONSER</div>
      <div className="zuraas"></div>
      <div className="touching">
        <img
          style={{
            margin: "40px 0px 0px 59px",
            height: "32px",
            width: "240px"
          }}
          src={spacex}
        ></img>
        <img
          style={{
            margin: "40px 0px 0px 59px",
            height: "32px",
            width: "240px"
          }}
          src={spacex}
        ></img>
        <img
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
