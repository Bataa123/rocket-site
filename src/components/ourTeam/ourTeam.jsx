import React from "react";
import "./ourTeam.scss";
import background from "../../images&icons/ourTeamBackground.svg";
// import { useHistory } from "react-router-dom";
import member1 from "../../images&icons/members/jennifer.jpg";
import member2 from "../../images&icons/members/jennifer1.jpg";
import member3 from "../../images&icons/members/lucie.jpg";
import member4 from "../../images&icons/members/lucie1.jpg";
import member5 from "../../images&icons/members/marley.jpg";
import member6 from "../../images&icons/members/marley1.jpg";
import member7 from "../../images&icons/members/safiya.jpg";
import member8 from "../../images&icons/members/safiya1.jpg";

export const OurTeam = () => {
  return (
    <div className="ourTeamEverything" id="ourTeam">
      <div className="secondLine"></div>
      <div className="ourTeamTitle">Our Team</div>
      <div className="ourTeamText">
        20+ Students From Across The globe, ranging from High School Students to
        Ph.D. candidates at some of the world’s most prestigious universities
      </div>
      <img
        style={{ position: "absolute", zIndex: "1" }}
        alt="backgroundImage"
        src={background}
      />
      <div className="ourTeamMemebers">
        <div>
          <img alt="1" src={member3} className="memberImg" />
          <div className="memberName">Lucie Mcmahon</div>
          <div className="memberRole">ceo</div>
        </div>
        <div>
          <img alt="2" src={member5} className="memberImg" />
          <div className="memberName">Marley Nichols</div>
          <div className="memberRole">creator</div>
        </div>
        <div>
          <img alt="3" src={member1} className="memberImg" />
          <div className="memberName">Jennifer Powers</div>
          <div className="memberRole">designer</div>
        </div>
        <div>
          <img alt="4" src={member7} className="memberImg" />
          <div className="memberName">Safiya Holder</div>
          <div className="memberRole">it engineer</div>
        </div>
        <div>
          <img alt="5" src={member4} className="memberImg" />
          <div className="memberName">Lucie Mcmahon</div>
          <div className="memberRole">ceo</div>
        </div>
        <div>
          <img alt="6" src={member6} className="memberImg" />
          <div className="memberName">Marley Nichols</div>
          <div className="memberRole">creator</div>
        </div>
        <div>
          <img alt="7" src={member2} className="memberImg" />
          <div className="memberName">Jennifer Powers</div>
          <div className="memberRole">designer</div>
        </div>
        <div>
          <img alt="8" src={member8} className="memberImg" />
          <div className="memberName">Safiya Holder</div>
          <div className="memberRole">it engineer</div>
        </div>
      </div>
      <div className="ourTeamButton"> All </div>
    </div>
  );
};
