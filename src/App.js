import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import './App.scss';
import { Header } from './components/header/header'
import AboutUs from './components/aboutUs/aboutUs'
import OurSponser from './components/ourSponser/ourSponser'
import { RockerLaunche } from './components/movingRocket/move';
import { Footer } from './components/footer/footer';
import { Donation } from './components/donation/donation';
import { Contact } from './components/contactUs/conact';
import { OurTeam } from './components/ourTeam/ourTeam';

function App() {
  return (
    <>
      <Header />
      <RockerLaunche />
      <AboutUs />
      <OurSponser />
      <Donation />
      <Contact />
      <Footer />
      <Router>
        <Switch>
          <Route path="/ourTeam">
            <OurTeam />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
