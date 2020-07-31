import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
    <>
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
        </Switch>
        <Router>
          <Switch>
            <Route path="/ourTeam">
              <OurTeam />
            </Route>
          </Switch>
        </Router>
      </Router>
    </>
  );
}

export default App;
