import React from "react";
import background from "../assets/backgrounds/ourTeamBackground.svg";
import { useHistory } from "react-router-dom";
import cancel from "../assets/linkedIcons/cancel.svg";
import { useFireStoreCol } from "../hooks/useFirebase";

export const OurTeam = () => {
  const history = useHistory();
  const members = useFireStoreCol("/members").collection;

  const toTeam = () => history.push("/ourTeam");

  const popUp = (cur) => {
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

    popUpImage.src = cur.image;
    popUpImage.alt = cur.name;
    popUpImage.className = "popImage";

    popUpIcon.src = cancel;
    popUpIcon.alt = "cancel";
    popUpIcon.className = "popCancel";
    popUpIcon.style.cursor = "pointer";
    popUpIcon.onclick = () => {
      document.getElementById("ourTeam").removeChild(popUpChild);
    };

    popUpTitle.textContent = cur.name;
    popUpTitle.className = "popName";

    popUpSubject.textContent = cur.role;
    popUpSubject.className = "popDuty";

    popUpText1.textContent = cur.description;
    popUpText1.className = "popText1";

    popUpText2.textContent = cur.description;
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

  const addMember = () =>
    members.map((cur, index) => (
      <div onClick={() => popUp(cur)} style={{ cursor: "pointer" }} key={index}>
        <img alt="2" src={cur.image} className="memberImg" />
        <div className="memberName">{cur.name}</div>
        <div className="memberRole">{cur.role}</div>
      </div>
    ));

  return (
    <div className="ourTeamEverything" id="ourTeam">
      <div className="secondLine"></div>
      <div className="ourTeamTitle">Our Team</div>
      <div className="ourTeamText">
        20+ Students From Across The globe, ranging from High Schooaml Students
        to Ph.D. candidates at some of the world’s most prestigious universities
      </div>
      <img
        style={{
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
        }}
        alt="backgroundImage"
        src={background}
      />
      <div className="ourTeamMemebers">{addMember()}</div>
      <div className="ourTeamButton" onClick={toTeam}>
        All
      </div>
    </div>
  );
};
