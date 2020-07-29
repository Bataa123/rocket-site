import React from "react";
import "./ourSponsor.scss";
import miat from '../../images&icons/sponsor/miatSponsor.png'
import mosta from '../../images&icons/sponsor/mostaSponsor.png'
import nomt from '../../images&icons/sponsor/nomtSponsor.png'

const OurSponsor = () => {
  return (
    <>
      <div id="sponsor" className="headLine">OUR SPONSOR</div>
      <div className="zuraas"></div>
      <div className="sponsor">
        <img
          alt="number2"
          src={miat}
        ></img>
        <img
          alt="number1"
          src={nomt}
        ></img>
        <img
          alt="number3"
          src={mosta}
        ></img>
      </div>
    </>
  );
};

export default OurSponsor;
