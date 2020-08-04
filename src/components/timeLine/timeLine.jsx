import React from "react";
import "./timeLine.scss";

export const TimeLine = () => {
  const makeDots = (n) => {
    var i;
    const dot = document.createElement('div');
    dot.className = 'dot';
    console.log(document.getElementById('dot-container'))
    for (i = 0; i < n; i++)
      document.getElementById("root")
        .appendChild(dot);
  };

  return (
    <div className="timeline">
      <div className="timeline-head"> timeline </div>
      <div className="zuraas"></div>
      <div className="diagram">
        <div className="texts-top texts">
          <div className="text1 text">
            Project starts
            <div className="line"></div>
          </div>
          <div className="text3 text">
            Calculation of simulation
            <div className="line"></div>
          </div>
          <div className="text5 text">
            Static test #1
            <div className="line"></div>
          </div>
          <div className="text7 text">
            Static test #3
            <div className="line"></div>
          </div>
          <div className="text9 text">
            Launch
            <div className="line"></div>
          </div>
        </div>
        <div className="dot-container" id="dot-container">
          {/* {makeDots(60)} */}
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className=" texts-bottom texts">
          <div className="text2 text">
            <div className="line"></div>
            Formed a team
          </div>
          <div className="text4 text">
            <div className="line"></div>
            Complete the assembly
          </div>
          <div className="text6 text">
            <div className="line"></div>
            Static test #2
          </div>
          <div className="text8 text">
            <div className="line"></div>
            Launch site will be ready
          </div>
        </div>
      </div>
    </div>
  );
};
