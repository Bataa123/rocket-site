import React from "react";
import "./timeLine.scss";
import left from "../../images&icons/linkedIcons/leftArrow.svg";
import right from "../../images&icons/linkedIcons/rightArrow.svg";
import rocket1 from "../../images&icons/time/1.jpg";
import rocket2 from "../../images&icons/time/2.jpg";
import rocket3 from "../../images&icons/time/3.jpg";
import rocket4 from "../../images&icons/time/4.jpg";
import rocket5 from "../../images&icons/time/5.jpg";
import rocket6 from "../../images&icons/time/6.jpg";
import rocket7 from "../../images&icons/time/7.jpg";
import rocket8 from "../../images&icons/time/8.jpg";
import rocket9 from "../../images&icons/time/9.jpg";

export const TimeLine = () => {
  return (
    <div className="timeline" id="timeLine" style={{ position: "relative" }}>
      <div className="secondLine"></div>
      <div className="timeline-head"> timeline </div>
      <div className="timeline-first-row">
        <div className="timelineText">
          20+ Students From Across The globe, ranging from High School Students
          to Ph.D. candidates at some of the world’s most prestigious
          universities
        </div>
        <div>
          <p style={{textTransform: "uppercase", fontSize: "1.2vw", margin: "0", textAlign: "right"}}>launch day</p>
          <p style={{color: "#00B65F", fontSize: "1.5vw", marginTop: "0.8vw"}}>2020 / 08 / 21</p>
        </div>
      </div>
      <div className="timelineMain">
        <div className="lineContainer">
          <img src={left} alt="left arrow" style={{marginRight: "20px", width: "2.4vw"}}/>
          <div className="line lineLeft" id="0"/>
          <div className="timeDot" id="1"/>
          <div className="line" id="2"/>
          <div className="timeDot" id="3"/>
          <div className="line" id="4"/>
          <div className="timeDot" id="5"/>
          <div className="line" id="6"/>
          <div className="timeDot" id="7"/>
          <div className="line" id="8"/>
          <div className="timeDot" id="9"/>
          <div className="line" id="10"/>
          <div className="timeDot" id="11"/>
          <div className="line" id="12"/>
          <div className="timeDot" id="13"/>
          <div className="line" id="14"/>
          <div className="timeDot" id="15"/>
          <div className="line lineRight" id="16"/>
          <img src={right} alt="right arrow" style={{marginLeft: "20px", width: "2.4vw"}}/>
        </div>
      </div>
    </div>
  );
};
