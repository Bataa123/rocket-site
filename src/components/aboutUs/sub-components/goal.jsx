import React from "react";
import sRocket from '../../../images&icons/secondRocket.png'
import { useState } from "react";


export const Goal = () => {

  const [call, setCall] = useState(false);

  const callPopUp = () => {
    setCall(!call)


  }

  return (
    <>
    {/* {
      // call === true ? 
    }
      <div className="getCenter">
        <div className='secondHeadline'>
          <div className="aboutHeadline">
            Our Goal
          </div>
          <button>X</button>
        </div>
        <div className="popUp">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          sapiente aperiam dolores commodi porro quibusdam fuga debitis eum
          sequi provident similique ullam, aspernatur, mollitia ipsum excepturi
          natus accusamus aliquam. Provident! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          sapiente aperiam dolores commodi porro quibusdam fuga debitis eum
          sequi provident similique ullam, aspernatur, mollitia ipsum excepturi
          natus accusamus aliquam. Provident!
        </div>
      </div> */}

      <div className="everything" id="scrollGoal">
        <div style={{ backgroundImage: `url(${sRocket})` }} className="aboutImage"></div>
        <div className="allText">
          <div className="secondLine"></div>
          <div className="aboutHeadline">
            Our <br /> Goal
        </div>
          <div className="text">
          Our goal is to launch our own rocket into outer space at a distance of 100 km <br/>
          1. Karman became the first student in the world to reach the border and launch a rocket into outer space <br/>
          2. Became the first people launch a rocket into outer space from mongolia
        </div>
          <div onClick={callPopUp} className="readMore">Read more</div>
        </div>
      </div>
    </>
  );
};
