import React from "react";
import cancel from "../assets/linkedIcons/cancel.svg";
import { useFireStoreCol } from "../hooks/useFirebase";

export const MembersInfo = () => {
  const members = useFireStoreCol("/members").collection;
  window.scrollTo(0, 0);

  const popUp = (cur) => {
    const popUpChild = document.createElement("div");
    const popUpImage = document.createElement("div");
    const popUpIcon = document.createElement("img");
    const popUpTitle = document.createElement("p");
    const popUpSubject = document.createElement("p");
    const popUpText1 = document.createElement("p");
    const popUpText2 = document.createElement("p");
    const popUpText3 = document.createElement("p");
    const popUpLabel1 = document.createElement("p");
    const popUpLabel2 = document.createElement("p");
    const popUpLabel3 = document.createElement("p");

    popUpChild.className = "popUpMember";
    popUpChild.id = "popUpMember";

    popUpImage.className = "popImage";
    popUpImage.style.backgroundImage = `url("${cur.image}")`;

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

    popUpText1.textContent = cur.description[0].answer;
    popUpText1.className = "popText popText1";

    popUpText2.textContent = cur.description[1].answer;
    popUpText2.className = "popText popText2";

    popUpText3.textContent = cur.description[2].answer;
    popUpText3.className = "popText popText3";

    popUpLabel1.textContent = cur.description[0].question;
    popUpLabel1.className = "popLabel popLabel1";

    popUpLabel2.textContent = cur.description[1].question;
    popUpLabel2.className = "popLabel popLabel2";

    popUpLabel3.textContent = cur.description[2].question;
    popUpLabel3.className = "popLabel popLabel3";
    console.log(cur.description[0].question);
    popUpChild.appendChild(popUpImage);
    popUpChild.appendChild(popUpTitle);
    popUpChild.appendChild(popUpSubject);
    popUpChild.appendChild(popUpLabel1);
    popUpChild.appendChild(popUpText1);
    popUpChild.appendChild(popUpLabel2);
    popUpChild.appendChild(popUpText2);
    popUpChild.appendChild(popUpLabel3);
    popUpChild.appendChild(popUpText3);
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
          style={{ backgroundImage: `url("${cur.image}")` }}
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
