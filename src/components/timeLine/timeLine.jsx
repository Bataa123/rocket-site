import React from "react";
import "./timeLine.scss";

export const TimeLine = () => {
  window.onload = () => {
    const width = window.innerWidth;
    const numberOfDot = width / 30;
    for (var i = 0; i < numberOfDot; i++) {
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
            <div>2020.2.22</div>
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Calculation of simulation
            <div>2020.3.25 -- 2020.7.11</div>
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Static test #1
            <div>2020.11.5</div>
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Static test #3
            <div>2020.11.20</div>
            <div className="line"></div>
          </div>
          <div className="timeLineText">
            Launch
            <div>2020.11.30</div>
            <div className="line"></div>
          </div>
        </div>
        <div className="dot-container" id="dot-container"></div>
        <div className="timeLineTexts">
          <div className="timeLineText">
            <div className="line"></div>
            <div>2020.3.22</div>
            Formed a team
          </div>
          <div className="timeLineText">
            <div className="line"></div>
            <div>2020.11.1</div>
            Complete the assembly
          </div>
          <div className="timeLineText">
            <div className="line"></div>
            <div>2020.11.10</div>
            Static test #2
          </div>
          <div className="timeLineText">
            <div className="line"></div>
            <div>2020.11.28</div>
            Launch site will be ready
          </div>
        </div>
      </div>
    </div>
  );
};
