import React, { useState } from "react";
import sRocket from '../../../images&icons/secondRocket.png'

export const Goal = () => {
  const [call, setCall] = useState(false);

  const callPopUp = () => {
    setCall(!call)
  }

  return (
    <>
      {
        call === true ?
          <div style={{ visibility: "visible" }} className="getCenter">
            <div className='secondHeadline'>
            <div className="aboutHeadline onlyPhone" style={{width: 'auto'}}>
                Our Goal
              </div>
              <button style={{}} className="onlyPhone" onClick={callPopUp}>X</button>
            </div>
            <div className="popUp">
              Our goal is to launch our own rocket into outer space at a distance of 100 km <br />
          1. Karman became the first student in the world to reach the border and launch a rocket into outer space <br />
          2. Became the first people launch a rocket into outer space from mongolia
            </div>
          </div>
          :
          <div className="getCenter">
            <div className='secondHeadline'>
              <div className="aboutHeadline">
                Our Goal
            </div>
            </div>
            <div className="popUp">
              Our goal is to launch our own rocket into outer space at a distance of 100 km <br />
          1. Karman became the first student in the world to reach the border and launch a rocket into outer space <br />
          2. Became the first people launch a rocket into outer space from mongolia
          </div>
          </div>
      }

      <div className="everything reverseForPhone" id="scrollGoal">
        <div style={{ backgroundImage: `url(${sRocket})` }} className="aboutImage"></div>
        <div className="allText">
          <div className="headlineWithLine">
            <div className="secondLine"></div>
            <div className="aboutHeadline">our goal</div>  
          </div>
          <div className="text">
          20+ Students From Across The globe, ranging from High School Students to Ph.D. candidates at some of the world’s most prestigious universities
          </div>
          <div onClick={callPopUp} className="readMore">Read more</div>
        </div>
      </div>
    </>
  );
};
