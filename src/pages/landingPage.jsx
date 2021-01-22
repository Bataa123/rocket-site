import React from "react";
import {
  AboutUs,
  Header,
  Footer,
  Donation,
  Contact,
  OurTeam,
  TimeLine,
  OurSponsor,
  Universities,
} from "../components";

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <OurTeam />
      <TimeLine />
      <OurSponsor />
      <Universities />
      <Donation />
      <Contact />
      <Footer />
    </div>
  );
};
