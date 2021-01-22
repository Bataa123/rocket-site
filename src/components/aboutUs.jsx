import React from "react";
import { AboutUsCard } from "./aboutUsCard";

export const AboutUs = () => {
  return (
    <div className="aboutEvery" id="aboutUs">
      <AboutUsCard
        isLeft={false}
        item="1"
        title="our project"
        description="We are focused on launching a rocket to break the student altitude record of 330,000 feet, reaching the Kármán line, which is considered the border between Earth’s atmosphere and outer space."
      />
      <AboutUsCard
        isLeft={true}
        item="2"
        title="our goal"
        description="20+ Students From Across The globe, ranging from High School Students to Ph.D. candidates at some of the world’s most prestigious universities"
      />
      <AboutUsCard
        isLeft={false}
        item="3"
        title="our project"
        description="We are focused on launching a rocket to break the student altitude record of 330,000 feet, reaching the Kármán line, which is considered the border between Earth’s atmosphere and outer space."
      />
    </div>
  );
};
