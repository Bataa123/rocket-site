import React from 'react';
import './App.scss';
import AboutUs from './components/aboutUs/aboutUs'
// import logo from './images&icons/puujin.png'

function App() {
  return (
    <>
      <div className="opacity">
        <div className="firstLook">
          {/* <img style={{position: 'absolute', margin: '40px 0px 0px 59px'}} src={logo}></img> */}
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
    </>
  );
}

export default App;
