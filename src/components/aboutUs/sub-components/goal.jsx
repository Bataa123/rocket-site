import React from "react";
import sRocket from '../../../images&icons/secondRocket.png'


export const Goal = () => {
  return (
    <div className="everything" id="scrollGoal">
      <div style={{backgroundImage: `url(${sRocket})`}} className="aboutImage"></div>
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
        <div className="readMore">Read more</div>
      </div>
    </div>
  );
};
