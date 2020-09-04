import React from "react";
import "./ourTeamPage.scss";
import background from "../../images&icons/backgrounds/ourTeamBackground.svg";
import { OurTeamData } from "./data";
import cancel from "../../images&icons/linkedIcons/cancel.svg";

export const OurTeamPage = () => {
  window.scrollTo(0, 0)
  const members = [
    "Marley",
    "Lucie",
    "Jennifer",
    "Safiya",
    "Nichols",
    "Mcmahon",
    "Powers",
    "Holder",
    "Marley",
    "Lucie",
    "Jennifer",
    "Safiya",
    "Nichols",
    "Mcmahon",
    "Powers",
    "Holder",
    "Nichols",
    "Mcmahon",
    "Powers",
    "Holder",
  ];

  const popUp = (number) => {
    const popUpFather = document.createElement("div");
    const popUpChild = document.createElement("div");
    const popUpImage = document.createElement("img");
    const popUpIcon = document.createElement("img");
    const popUpTitle = document.createElement("p");
    const popUpSubject = document.createElement("p");
    const popUpText1 = document.createElement("p");
    const popUpText2 = document.createElement("p");

    popUpFather.className = "popUpFather";

    popUpChild.className = "popUpMember";
    popUpChild.id = "popUpMember";

    popUpImage.src = OurTeamData.images[number];
    popUpImage.alt = number;
    popUpImage.className = "popImage";

    popUpIcon.src = cancel;
    popUpIcon.alt = "cancel";
    popUpIcon.className = "popCancel";
    popUpIcon.style.cursor = "pointer";
    popUpIcon.onclick = () => {
      document.getElementById("ourTeam").removeChild(popUpChild);
    };

    popUpTitle.textContent = OurTeamData.informations[number].name;
    popUpTitle.className = "popName";

    popUpSubject.textContent = OurTeamData.informations[number].duties;
    popUpSubject.className = "popDuty";

    popUpText1.textContent = OurTeamData.informations[number].about;
    popUpText1.className = "popText1";

    popUpText2.textContent = OurTeamData.informations[number].about;
    popUpText2.className = "popText2";

    popUpChild.appendChild(popUpImage);
    popUpChild.appendChild(popUpTitle);
    popUpChild.appendChild(popUpSubject);
    popUpChild.appendChild(popUpText1);
    popUpChild.appendChild(popUpText2);
    popUpChild.appendChild(popUpIcon);

    document.getElementById("ourTeam").appendChild(popUpChild);
    document
      .getElementById("popUpMember")
      .scrollIntoView({ behavior: "smooth" });
  };

  const addMember = () => {
    const collection = members.map((cur, index) => {
      return (
        <div
          onClick={() => popUp(cur)}
          style={{ cursor: "pointer" }}
          key={index}
        >
          <img alt="2" src={OurTeamData.images[cur]} className="memberImg" />
          <div className="memberName">{OurTeamData.informations[cur].name}</div>
          <div className="memberRole">
            {OurTeamData.informations[cur].duties}
          </div>
        </div>
      );
    });
    return collection;
  };
  return (
    <div className="ourTeamPageEverything" id="ourTeam">
      <div className="secondLine"></div>
      <div className="ourTeamPageTitle">Our Team</div>
      <div className="ourTeamPageText">
        20+ Students From Across The globe, ranging from High Schooaml Students
        to Ph.D. candidates at some of the world’s most prestigious universities
      </div>
      <img
        style={{ position: "absolute", zIndex: "1" }}
        alt="backgroundImage"
        src={background}
      />
      <div className="ourTeamPageMemebers">{addMember()}</div>
    </div>
  );
};
