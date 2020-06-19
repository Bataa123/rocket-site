import React from 'react';
import './App.scss';
import AboutUs from './components/aboutUs/aboutUs'
import OurSponser from './components/ourSponser/ourSponser'

function App() {
  return (
    <>
      <div className="opacity">
        <div className="firstLook">
          <div style={{ textAlign: "center" }}>
            <div className="linkButtons">Home</div>
            <div className="linkButtons">About Us</div>
            <div className="linkButtons">Sponser</div>
            <div className="linkButtons">University</div>
            <div className="linkButtons">Donate</div>
            <div className="linkButtons">Contact Us</div>
          </div>
          <div className='firstRectangle'>20000M Above the <br /> Gobi desert</div>
          <div className="arrowCenter"> <div className="arrow down"></div></div>
        </div>
      </div>

      <AboutUs/>
      <OurSponser/>
    </>
  );
}

export default App;
