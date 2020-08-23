import React, { useState, useEffect } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import sRocket from '../../../images&icons/secondRocket.png'

export const Goal = () => {
  const [call, setCall] = useState(false);

  const width = window.outerWidth
  console.log(width)

  const callPopUp = () => {
    setCall(!call)
  }
  useEffect(() => {
    const project = document.getElementById('getGoal');
    project.style.width = call === true ? "100vw" : "0px";
    project.style.height = call === true ? "100vh" : "0px";
    document.getElementById('ourGoalTitle').style.fontSize = call === true ? "40px" : "0px";
    document.getElementById('ourGoalText').style.fontSize = call === true ? "20px" : "0px";
  }, [call])

  return (
    <div className="ourProjectContainer">
      <div style={{ visibility: call === true ? 'visible' : 'hidden' }} className="getCenter" id="getGoal">
        <div className='secondHeadline'>
          <div id="ourGoalTitle" className="aboutHeadline onlyPhone" style={{ width: 'auto' }}>
            Our Goal
              </div>
          <CancelIcon style={{ color: 'white', margin: 'auto 10px', fontSize: call === true ? '2.1875rem' : '0px' }} className="onlyPhone" onClick={callPopUp} />
        </div>
        <div id="ourGoalText" className="popUp">
          We are focused on launching a rocket to break the student altitude record of 330,000 feet, reaching the Kármán line, which is considered the border between Earth’s atmosphere and outer space. Designing, building and launching a rocket of this magnitude faces a serious financial obstacle. We are raising money in the hopes that our dream of reaching outer space can be achieved.
          </div>
      </div>

      <div className="everything reverseForPhone" id="ourGoal">
        <div style={{ backgroundImage: `url(${sRocket})` }} className="aboutImage"></div>
        <div className="allText">
          <div className="headlineWithLine">
            <div className="secondLine"></div>
            <div className="aboutHeadline">our goal</div>
          </div>
          <div className="text">
            We are focused on launching a rocket to break the student altitude record of 330,000 feet, reaching the Kármán line, which is considered the border between Earth’s atmosphere and outer space. Designing, building and launching a rocket of this magnitude faces a serious financial obstacle.
          </div>
          <div onClick={callPopUp} className="readMore">Read more</div>
        </div>
      </div>
    </div>
  );
};
