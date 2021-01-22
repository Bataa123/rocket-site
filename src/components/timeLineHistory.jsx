import React from "react";
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
      <div
        style={{
          backgroundImage: `url(${timeLineData && timeLineData.poster})`,
        }}
        className="timeLineStoryImage"
      ></div>
    </div>
  );
};
