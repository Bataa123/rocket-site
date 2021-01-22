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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
