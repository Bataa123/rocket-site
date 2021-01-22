import React from "react";

export const TopBar = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="topBarContainer">
      <div className="topBarLinks" onClick={() => scrollTo("ourProject")}>project</div>
      <div className="topBarLinks" onClick={() => scrollTo("ourGoal")}>goal</div>
      <div className="topBarLinks" onClick={() => scrollTo("ourTeam")}>team</div>
      <div className="topBarLinks" onClick={() => scrollTo("timeLine")}>timeline</div>
      <div className="topBarLinks" onClick={() => scrollTo("sponsor")}>sponsor</div>
      <div className="topBarLinks" onClick={() => scrollTo("unis")}>Universities</div>
      <div className="topBarLinks" onClick={() => scrollTo("donation")}>donate</div>
      <div className="topBarLinks" onClick={() => scrollTo("contact")}>contact us</div>
    </div>
  );
};
