import React from "react";
import "./ourTeam.scss";
import javkhaa from '../../images&icons/teachers/javkhaa.png';
import ezka from '../../images&icons/teachers/ezenbaatar.png'

export const OurTeam = () => {
  return (
    <div className="everything" id="scrollGoal">
      <div className="allText">
        <div className="secondLine"></div>
        <div className="aboutHeadline">
          Our <br /> Team
        </div>
        <div className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          sapiente aperiam dolores commodi porro quibusdam fuga debitis eum
          sequi provident similique ullam, aspernatur, mollitia ipsum excepturi
          natus accusamus aliquam. Provident!
        </div>
        <div className="readMore">Read more</div>
      </div>
      {/* <div class="slideshow-container">
        <div class="mySlides fade">
          <img src={javkhaa}/>
        </div>

        <div class="mySlides fade">
          <img src={ezka}/>
        </div>

        <a class="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a class="next" onclick="plusSlides(1)">
          &#10095;
        </a>
      </div> */}
    </div>
  );
};
