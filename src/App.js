import React from 'react';
import './App.scss';
import AboutUs from './components/aboutUs/aboutUs'
import OurSponser from './components/ourSponser/ourSponser'
import { RockerLaunche } from './components/movingRocket/move';
import { Footer } from './components/footer/footer';
import { Donation } from './components/donation/donation';
import { Contact } from './components/contactUs/conact';

function App() {
  return (
    <div className="mainPage">
      <div className="opacity">
        <div className="firstLook">
          <div style={{ textAlign: "center" }}>
            <div className="linkButtons" onClick={() =>
              document.getElementById('aboutUs').scrollIntoView({ behavior: "smooth" })
            }>About Us</div>
            <div className="linkButtons" onClick={() =>
              document.getElementById('sponser').scrollIntoView({ behavior: "smooth" })
            }>Sponser</div>
            <div className="linkButtons" onClick={() =>
              document.getElementById('donation').scrollIntoView({ behavior: "smooth" })
            }>Donate</div>
            <div className="linkButtons" onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: "smooth" })
            }>Contact Us</div>
          </div>
          <div className='firstRectangle'>20000M Above the <br /> Gobi desert</div>
          <div className="arrowCenter"> <div className="arrow down"></div></div>
        </div>
      </div>
      <RockerLaunche />
      <AboutUs />
      <OurSponser />
      <Donation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
