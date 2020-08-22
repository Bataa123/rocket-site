import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Drawer from '@material-ui/core/Drawer';
import { Header } from './components/header/header'
import AboutUs from './components/aboutUs/aboutUs'
import OurSponsor from './components/ourSponsor/ourSponsor'
import Universities from './components/universities/universities'
import { RockerLaunche } from './components/movingRocket/move';
import { Footer } from './components/footer/footer';
import { Donation } from './components/donation/donation';
import { Contact } from './components/contactUs/conact';
import { OurTeam } from './components/ourTeam/ourTeam';
import { TimeLine } from './components/timeLine/timeLine';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <RockerLaunche />
            <AboutUs />
            <OurTeam />
            <TimeLine />
            <OurSponsor />
            <Universities />
            <Donation />
            <Contact />
            <Footer />
          </Route>
          <Route path="/ourTeam">
            {/* <OurTeam /> */}
            <div 
              style={{fontSize: '50px', color: 'white', height: '100vh', margin: "auto", display: 'block', fontFamily: "Montserrat"}}
              >We are working on it
            </div>
          </Route>
        </Switch>
        {/* <Router>
          <Switch>
            <Route path="/ourTeam">
              <OurTeam />
            </Route>
          </Switch>
        </Router> */}
      </Router>
    </div>
  );
}

export default App;
