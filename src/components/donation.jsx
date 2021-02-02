import React from "react";
import gif from "../assets/backgrounds/donate.gif";
import moneyAccount from "../assets/money_account.jpg";
import golomt from "../assets/linkedIcons/golomt.png";

export const Donation = () => {
  const width = window.outerWidth;
  return (
    <div
      id="donation"
      style={{
        position: "relative",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="headLine">DONATE</div>
      <div className="zuraas"></div>
      <img src={gif} alt="donate" className="donationGif" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: width < 500 ? "column" : "row",
        }}
      >
        <div className="donateLeft">
          <div className="donateTitle">20000M Above the Gobi desert</div>
          <div className="donateText">
            Your donation will go towards the design, manufacturing, and
            assembly of the rocket, as well as other necessities such as
            logistics and launch set up. Each contribution makes an incredible
            difference in supporting the next generation of leaders, scientists,
            and entrepreneurs.
          </div>
          <div className="donateText">
            Гүйлгээний утга: (Таны нэр, өөрийн Email хаяг )
          </div>
        </div>
        <div
          style={{
            zIndex: 5,
            marginBottom: width < 500 ? "0" : "10vw",
            display: "flex",
            flexDirection: width < 500 ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundImage: `url(${golomt})`,
              backgroundSize: "60px 60px",
              marginBottom: "20px",
            }}
          ></div>
          <div
            style={{
              width: "250px",
              height: "250px",
              backgroundImage: `url(${moneyAccount})`,
              backgroundSize: "250px 250px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
