import React from "react";
import "./ourTeam.scss";
import ezka from "../../images&icons/teachers/ezenbaatar.png";
import { useHistory } from "react-router-dom";

export const OurTeam = () => {
  const history = useHistory();

  const toOurTeam = () => history.push("/ourTeam");

  return (
    <div className="ourTeamEverything" id="ourTeam">
      <div className="secondLine"></div>
      <div className="ourTeamTitle">Our Team</div>
    </div>
  );
};
