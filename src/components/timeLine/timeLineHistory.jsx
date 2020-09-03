import React from "react";
import { images, data } from "./timeLineData";
import timeBackground2 from "../../images&icons/backgrounds/timeBackground2.svg";

export const TimeLineHistory = ({ id }) => {
  console.log(id);
  return (
    <div className="timeLineStoryContainer" style={{ position: "relative" }}>
      <div className="timeLineTextContainer">
        <div className="timeLineDate">{data[id].date}</div>
        <div className="timeLineTitle">{data[id].title}</div>
        <div className="timeLineText">{data[id].text1}</div>
        <div className="timeLineText">{data[id].text2}</div>
      </div>
      <img
        alt={id}
        src={images["rocket" + id]}
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
