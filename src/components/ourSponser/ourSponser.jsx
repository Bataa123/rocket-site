import React from "react";
import "./ourSponser.scss";
import spacex from "../../images&icons/spacex.png";
import nomt from '../../images&icons/sponser/nomt.png'

const OurSponser = () => {
  return (
    <>
      <div id="sponser" className="headLine">OUR SPONSER</div>
      <div className="zuraas"></div>
      <div className="sponser">
        <img
          alt="number1"
          style={{
            margin: "40px 0px 0px 59px",
            height: "170px",
            width: "240px"
          }}
          src={nomt}
        ></img>
        <img
          alt="number2"
          style={{
            margin: "40px 0px 0px 59px",
            height: "70px",
            width: "240px"
          }}
          src={spacex}
        ></img>
        <img
          alt="number3"
          style={{
            margin: "40px 0px 0px 59px",
            height: "70px",
            width: "240px"
          }}
          src={spacex}
        ></img>
        <img
          alt="number3"
          style={{
            margin: "40px 0px 0px 59px",
            height: "70px",
            width: "240px"
          }}
          src={spacex}
        ></img>
      </div>
    </>
  );
};

export default OurSponser;
