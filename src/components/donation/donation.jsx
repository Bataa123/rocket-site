import React from "react";
import "./donation.scss";

export const Donation = () => {
  return (
    <div id="donation">
      <div className="headLine">DONATE</div>
      <div className="zuraas"></div>
      <div className="donate">
        <div style={{width: '800px', display: 'flex', alignItems: 'center'}} className="donateLeft">
          <div style={{width: '',}} className="donateTitle">20000M Above the Gobi desert</div>
          <div style={{width: '800px',}}  className="donateText">
            Your donation will go towards the design, manufacturing, and
            assembly of the rocket, as well as other necessities such as
            logistics and launch set up. Each contribution makes an incredible
            difference in supporting the next generation of leaders, scientists,
            and entrepreneurs.
          </div>
          <div style={{fontSize: '18px', width: '800px',}} className="donateText">
            Дансны дугаар: 457063198
            Хүлээн авагчийн нэр: Ezenbaatar B.
            Гүйлгээний утга: (Таны нэр, өөрийн Email хаяг )
          </div>
        </div>
        {/* <div className="donateRight"></div> */}
      </div>
    </div>
  );
};
