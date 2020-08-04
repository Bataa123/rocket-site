import React from "react";
import "./footer.scss";
import instagram from '../../images&icons/linkedIcons/instagram.png'
import facebook from '../../images&icons/linkedIcons/facebook.png'
// import twitter from '../../images&icons/linkedIcons/twitter.png'
// import youtube from '../../images&icons/linkedIcons/youtube.png'

export const Footer = () => {
  return (
    <>
      <div className="footerLine"></div>
      <div className="footer">
        <div className="copyright">© Copyright 2020</div>
        <div>
          <img onClick={() => window.open("https://www.facebook.com/20000m-above-the-Gobi-Desert-111550123772413/", '_blank')}
            src={facebook} alt="facebook" />
          <img onClick={() => window.open("https://www.instagram.com/gobi.space/", '_blank')}
            src={instagram} alt="instagram" />
          {/* <img src={twitter} alt="facebook" /> */}
          {/* <img src={youtube} alt="facebook" /> */}
        </div>
      </div>
    </>
  );
};
