import React from "react";
import "./donation.scss";

export const Donation = () => {
  return (
    <div id="donation">
      <div className="headLine">DONATE</div>
      <div className="zuraas"></div>
      <div className="donate">
        <div className="donateLeft">
          <div className="donateTitle">2000M Above the Gobi desert</div>
          <div className="donateText">
            Your donation will go towards the design, manufacturing, and
            assembly of the rocket, as well as other necessities such as
            logistics and launch set up. Each contribution makes an incredible
            difference in supporting the next generation of leaders, scientists,
            and entrepreneurs.
          </div>
        </div>
        <div className="donateRight">
        </div>
      </div>
    </div>
  );
};
