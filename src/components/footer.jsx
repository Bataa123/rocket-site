import React from "react";
import instagram from "../assets/linkedIcons/instagram.svg";
import facebook from "../assets/linkedIcons/facebook.svg";
import youtube from "../assets/linkedIcons/youtube.svg";
import gif from "../assets/backgrounds/footer.gif";

export const Footer = () => {
  const jumpTo = (path) => window.open(path, "_blank");
  return (
    <div className="footer">
      <div className="footerLinks">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => jumpTo("https://www.youtube.com")}
          src={youtube}
          alt="youtube"
        />
        <img
          style={{ cursor: "pointer" }}
          onClick={() =>
            jumpTo(
              "https://www.facebook.com/20000m-above-the-Gobi-Desert-111550123772413/"
            )
          }
          src={facebook}
          alt="facebook"
        />
        <img
          style={{ cursor: "pointer" }}
          onClick={() => jumpTo("https://www.instagram.com/gobi.space/")}
          src={instagram}
          alt="instagram"
        />
      </div>
      <img className="footer-image" src={gif} />
      <div className="footerLine"></div>
      <div className="copyright">© Copyright 2020</div>
    </div>
  );
};
