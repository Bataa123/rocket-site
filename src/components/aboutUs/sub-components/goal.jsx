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
    {
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
      </div>

      <div className="everything" id="scrollGoal">
        <div style={{ backgroundImage: `url(${sRocket})` }} className="aboutImage"></div>
        <div className="allText">
          <div className="secondLine"></div>
          <div className="aboutHeadline">
            Our <br /> Goal
        </div>
          <div className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            sapiente aperiam dolores commodi porro quibusdam fuga debitis eum
            sequi provident similique ullam, aspernatur, mollitia ipsum excepturi
            natus accusamus aliquam. Provident!
        </div>
          <div onClick={callPopUp} className="readMore">Read more</div>
        </div>
      </div>
    </>
  );
};
