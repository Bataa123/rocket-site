import React from "react";
import "./ourSponser.scss";
import spacex from '../../images&icons/spacex.png'

const OurSponser = () => {
  return (
    <>
      <div className="headLine">OUR SPONSER</div>
      <div className="zuraas"></div>
      <div className="touching">
      <img style={{position: 'absolute', margin: '40px 0px 0px 59px'}} src={spacex}></img>
        <div className="zuraasT"></div>
        <div className="zuraasT"></div>
        <div className="zuraasT"></div>
      </div>
    </>
  );
};

export default OurSponser;
