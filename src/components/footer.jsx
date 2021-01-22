import React from "react";
import instagram from "../assets/linkedIcons/instagram.svg";
import facebook from "../assets/linkedIcons/facebook.svg";
import youtube from "../assets/linkedIcons/youtube.svg";
import background1 from "../assets/backgrounds/footerBackground1.svg";
import background2 from "../assets/backgrounds/footerBackground2.svg";

export const Footer = () => {
  const jumpTo = (path) => window.open(path, "_blank");
  return (
    <div className="footer">
      <div className="footerLinks">
        <img
          style={{cursor: "pointer"}}
          onClick={() => jumpTo("https://www.youtube.com")}
          src={youtube}
          alt="youtube"
        />
        <img
          style={{cursor: "pointer"}}
          onClick={() =>
            jumpTo(
              "https://www.facebook.com/20000m-above-the-Gobi-Desert-111550123772413/"
            )
          }
          src={facebook}
          alt="facebook"
        />
        <img
          style={{cursor: "pointer"}}
          onClick={() => jumpTo("https://www.instagram.com/gobi.space/")}
          src={instagram}
          alt="instagram"
        />
      </div>
      <div className="footerLine"></div>
      <div className="copyright">© Copyright 2020</div>
      <div>
        <img className="footerBc1" alt="background1" src={background1} />
        <img className="footerBc2" alt="background2" src={background2} />
      </div>
    </div>
  );
};
