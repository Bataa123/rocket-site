import React from "react";
import "./timeLine.scss";

export const TimeLine = () => {
  window.onload = () => {
    for (var i = 0; i < 60; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      document.getElementById("dot-container").appendChild(dot);
    }
  };
  return (
    <div className="timeline">
      <div className="timeline-head"> timeline </div>
      <div className="zuraas"></div>
      <div className="diagram">
        <div className="timeLineTexts">
          <div className="timeLineText">
            Project starts
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Calculation of simulation
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Static test #1
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Static test #3
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Launch
            <div className="line"></div>
          </div>
        </div>
        <div className="dot-container" id="dot-container"></div>
        <div className="timeLineTexts">
          <div className="timeLineText">
            <div className="line"></div>
            Formed a team
          </div>
          <div className="timeLineText">
            <div className="line"></div>
            Complete the assembly
          </div>
          <div className="timeLineText">
            <div className="line"></div>
            Static test #2
          </div>
          <div className="timeLineText">
            <div className="line"></div>
            Launch site will be ready
          </div>
        </div>
      </div>
    </div>
  );
};
