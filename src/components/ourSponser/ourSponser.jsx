import React from "react";
import "./ourSponser.scss";
import miat from '../../images&icons/sponser/miatSponser.png'
import mosta from '../../images&icons/sponser/mostaSponser.png'
import nomt from '../../images&icons/sponser/nomtSponser.png'

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
          src={miat}
        ></img>
        <img
          alt="number3"
          style={{
            margin: "40px 0px 0px 59px",
            height: "70px",
            width: "240px"
          }}
          src={mosta}
        ></img>
      </div>
    </>
  );
};

export default OurSponser;
