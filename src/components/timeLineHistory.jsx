import React from "react";
import timeBackground2 from "../assets/backgrounds/timeBackground2.svg";
import { useFireStoreDoc } from "../hooks/useFirebase";

export const TimeLineHistory = ({ id }) => {
  const timeLineData = useFireStoreDoc(`/timeLine/${id}`).doc;

  return (
    <div className="timeLineStoryContainer" style={{ position: "relative" }}>
      <div className="timeLineTextContainer">
        <div className="timeLineDate">{timeLineData && timeLineData.date}</div>
        <div className="timeLineTitle">
          {timeLineData && timeLineData.title}
        </div>
        {timeLineData &&
          timeLineData.description.map((cur, index) => (
            <div key={index} className="timeLineText">
              {cur}
            </div>
          ))}
      </div>
      <img
        alt={id}
        src={timeLineData && timeLineData.poster}
        className="timeLineStoryImage"
      />
      <img
        src={timeBackground2}
        alt="timeBackground2"
        className="timeBackground2"
      />
    </div>
  );
};
