import React from "react";
import "./footer.scss";
import instagram from '../../images&icons/linkedIcons/instagram.png'
// import facebook from '../../images&icons/linkedIcons/facebook.png'
// import twitter from '../../images&icons/linkedIcons/twitter.png'
// import youtube from '../../images&icons/linkedIcons/youtube.png'

export const Footer = () => {
  return (
    <>
      <div className="footerLine"></div>
      <div className="footer">
        <div className="copyright">© Copyright 2020</div>
        <div>
          {/* <img src={facebook} alt="facebook" /> */}
          <img onClick={() => window.open("https://www.instagram.com/20000m_above_the_gobi_desert", '_blank')}
            src={instagram} alt="instagram" />
          {/* <img src={twitter} alt="facebook" /> */}
          {/* <img src={youtube} alt="facebook" /> */}
        </div>
      </div>
    </>
  );
};
