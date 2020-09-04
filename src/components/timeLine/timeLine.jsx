import React, { useState, useEffect } from "react";
import "./timeLine.scss";
import left from "../../images&icons/linkedIcons/leftArrow.svg";
import right from "../../images&icons/linkedIcons/rightArrow.svg";
import rocket from "../../images&icons/rocket.svg";
import background1 from "../../images&icons/backgrounds/timeBackground1.svg";
import { TimeLineHistory } from "./timeLineHistory";

export const TimeLine = () => {
  const [wich, setWich] = useState(1);

  useEffect(() => {
    document.getElementById("rocket").style.left =
      7.6 * ((wich - (wich % 2)) / 2 + 1) + "vw";
    for (var i = 0; i < 16; i++) {
      if (i % 2 === 0)
        document.getElementById(i).style.backgroundColor =
          i < wich ? "#00C167" : "black";
      else
        document.getElementById(i).style.backgroundColor =
          i <= wich ? "#00C167" : "#AFAFAF";
    }
  }, [wich]);
  return (
    <div className="timeline" id="timeLine" style={{ position: "relative" }}>
      <img src={background1} alt="background" className="timeBackground1" />
      <div className="secondLine"></div>
      <div className="timeline-head"> timeline </div>
      <div className="timeline-first-row">
        <div className="timelineText">
          20+ Students From Across The globe, ranging from High School Students
          to Ph.D. candidates at some of the world’s most prestigious
          universities
        </div>
        <div>
          <p className="launchDay">
            launch day
          </p>
          <p
            style={{ color: "#00B65F", fontSize: "1.5vw", marginTop: "0.8vw" }}
          >
            2020 / 08 / 21
          </p>
        </div>
      </div>
      <div className="timelineMain">
        <div className="firstRow">
          <div className="rowContent">Project starts</div>
          <div className="rowContent">Complete the assembly</div>
          <div className="rowContent">Static test #2</div>
          <div className="rowContent">Launch site will be ready</div>
        </div>
        <div className="lineContainer" style={{ position: "relative" }}>
          <img
            src={left}
            alt="left arrow"
            style={{ marginRight: "20px", width: "2.4vw", cursor: "pointer" }}
            className="leftArrow"
            onClick={() => setWich(wich === 1 ? 1 : wich - 2)}
          />
          <img src={rocket} alt="rocket" className="timeRocket" id="rocket" />
          <div className="line lineLeft" id="0" />
          <div
            className="timeDot active pointer"
            onClick={() => setWich(1)}
            id="1"
          />
          <div className="line" id="2" />
          <div className="timeDot pointer" onClick={() => setWich(3)} id="3" />
          <div className="line" id="4" />
          <div className="timeDot pointer" onClick={() => setWich(5)} id="5" />
          <div className="line" id="6" />
          <div className="timeDot pointer" onClick={() => setWich(7)} id="7" />
          <div className="line" id="8" />
          <div className="timeDot pointer" onClick={() => setWich(9)} id="9" />
          <div className="line" id="10" />
          <div
            className="timeDot pointer"
            onClick={() => setWich(11)}
            id="11"
          />
          <div className="line" id="12" />
          <div
            className="timeDot pointer"
            onClick={() => setWich(13)}
            id="13"
          />
          <div className="line" id="14" />
          <div
            className="timeDot pointer"
            onClick={() => setWich(15)}
            id="15"
          />
          <div className="line lineRight" id="16" />
          <img
            src={right}
            alt="right arrow"
            style={{ marginLeft: "20px", width: "2.4vw", cursor: "pointer" }}
            onClick={() => setWich(wich === 15 ? 15 : wich + 2)}
          />
        </div>
        <div className="secondRow">
          <div className="rowContent" style={{ marginLeft: "11vw" }}>
            Formed a team
          </div>
          <div className="rowContent" style={{ marginLeft: "6.9vw" }}>
            Static test #1
          </div>
          <div className="rowContent" style={{ marginLeft: "7.7vw" }}>
            Static test #3
          </div>
          <div className="rowContent" style={{ marginLeft: "8.8vw" }}>
            Launch
          </div>
        </div>
      </div>
      <TimeLineHistory id={(wich - (wich % 2)) / 2 + 1}/>
    </div>
  );
};
