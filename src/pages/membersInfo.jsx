import React from "react";
import cancel from "../assets/linkedIcons/cancel.svg";
import { useFireStoreCol } from "../hooks/useFirebase";

export const MembersInfo = () => {
  const members = useFireStoreCol("/members").collection;
  window.scrollTo(0, 0);

  const popUp = (cur) => {
    const popUpFather = document.createElement("div");
    const popUpChild = document.createElement("div");
    const popUpImage = document.createElement("div");
    const popUpIcon = document.createElement("img");
    const popUpTitle = document.createElement("p");
    const popUpSubject = document.createElement("p");
    const popUpText1 = document.createElement("p");

    popUpFather.className = "popUpFather";

    popUpChild.className = "popUpMember";
    popUpChild.id = "popUpMember";

    popUpImage.className = "popImage";
    popUpImage.style.backgroundImage = `url(${cur.image})`;

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

    popUpChild.appendChild(popUpImage);
    popUpChild.appendChild(popUpTitle);
    popUpChild.appendChild(popUpSubject);
    popUpChild.appendChild(popUpText1);
    popUpChild.appendChild(popUpIcon);

    document.getElementById("ourTeam").appendChild(popUpChild);
    document
      .getElementById("popUpMember")
      .scrollIntoView({ behavior: "smooth" });
  };

  const addMember = () =>
    members.map((cur, index) => (
      <div onClick={() => popUp(cur)} style={{ cursor: "pointer" }} key={index}>
        <div
          style={{ backgroundImage: `url(${cur.image})` }}
          className="memberImg"
        ></div>
        <div className="memberName">{cur.name}</div>
        <div className="memberRole">{cur.role}</div>
      </div>
    ));

  return (
    <div className="ourTeamEverything" id="ourTeam">
      <div className="secondLine"></div>
      <div className="ourTeamTitle">Our Team</div>
      <div className="ourTeamText">
        Дэлхийн өнцөг булан бүрээс элссэн ахлах ангийн сурагчдаас эхлээд
        магистер, докторант оюутнууд хүртэлх нийтдээ 30+ гишүүдтэй
      </div>
      <div className="ourTeamMemebers">{addMember()}</div>
    </div>
  );
};
