import React, { useState } from "react";

export const Project = () => {
  const [call, setCall] = useState(false);
  
  const width = window.outerWidth
  console.log(width)

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
                Our Project
            </div>
              <button style={{}} className="onlyPhone" onClick={callPopUp}>X</button>
            </div>
            <div className="popUp">
              We are focused on launching a rocket to break the student altitude record of 330,000 feet, reaching the Kármán line, which is considered the border between Earth’s atmosphere and outer space. Designing, building and launching a rocket of this magnitude faces a serious financial obstacle. We are raising money in the hopes that our dream of reaching outer space can be achieved.
          </div>
          </div>
          :
          <div className="getCenter">
            <div className='secondHeadline'>
              <div className="aboutHeadline">
                Our Project
          </div>
            </div>
            <div className="popUp">
              We are focused on launching a rocket to break the student altitude record of 330,000 feet, reaching the Kármán line, which is considered the border between Earth’s atmosphere and outer space. Designing, building and launching a rocket of this magnitude faces a serious financial obstacle. We are raising money in the hopes that our dream of reaching outer space can be achieved.
        </div>
          </div>
      }
      <div className="everything" id="scrollProject" >
        <div className="allText">
          <div className="headlineWithLine">
            <div className="secondLine"></div>
            <div className="aboutHeadline">
              our project
            </div>
          </div>
          <div className="text">
            We are focused on launching a rocket to break the student altitude record of 330,000 feet, reaching the Kármán line, which is considered the border between Earth’s atmosphere and outer space. Designing, building and launching a rocket of this magnitude faces a serious financial obstacle.
          </div>
          <div onClick={callPopUp} className="readMore">Read more</div>
        </div>
        <div className="aboutImage"></div>
      </div>
    </>
  );
};
