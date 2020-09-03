import React from "react";
import "./timeLine.scss";
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
    <div className="timeline" id="timeLine" style={{position: "relative"}}>
      <div className="secondLine"></div>
      <div className="timeline-head"> timeline </div>
      <div className="timelineText">
        20+ Students From Across The globe, ranging from High School Students to
        Ph.D. candidates at some of the world’s most prestigious universities
      </div>
      <div className="timeLineContainer">
        <div className="firstColumn">
          <div>
            <img alt="time1" src={rocket1} className="timeImage" />
          </div>
          <div>
            <img alt="time2" src={rocket2} className="timeImage" />
          </div>
          <div>
            <img alt="time3" src={rocket3} className="timeImage" />
          </div>
          <div>
            <img alt="time4" src={rocket4} className="timeImage" />
          </div>
          <div>
            <img alt="time5" src={rocket5} className="timeImage" />
          </div>
        </div>
        <div className="middleLine"></div>
        <div className="secondColumn">
          <div>
            <img alt="time6" src={rocket6} className="timeImage" />
          </div>
          <div>
            <img alt="time7" src={rocket7} className="timeImage" />
          </div>
          <div>
            <img alt="time8" src={rocket8} className="timeImage" />
          </div>
          <div>
            <img alt="time9" src={rocket9} className="timeImage" />
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};
