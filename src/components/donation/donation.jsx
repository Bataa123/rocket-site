import React from "react";
import "./donation.scss";
import background from "../../images&icons/backgrounds/donateBackground.svg";

export const Donation = () => {
  return (
    <div id="donation" style={{position: "relative"}}>
      <img className="donationBackground" alt="background" src={background} />
      <div className="headLine">DONATE</div>
      <div className="zuraas"></div>
      <div className="donateLeft">
        <div className="donateTitle">20000M Above the Gobi desert</div>
        <div className="donateText">
          Your donation will go towards the design, manufacturing, and assembly
          of the rocket, as well as other necessities such as logistics and
          launch set up. Each contribution makes an incredible difference in
          supporting the next generation of leaders, scientists, and
          entrepreneurs.
        </div>
        <div style={{ width: "800px" }} className="donateText">
          Дансны дугаар: 457063198 <br />
          Хүлээн авагчийн нэр: Ezenbaatar B. <br />
          Гүйлгээний утга: (Таны нэр, өөрийн Email хаяг )
        </div>
      </div>
    </div>
  );
};
