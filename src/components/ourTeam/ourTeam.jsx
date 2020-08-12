import React from "react";
import "./ourTeam.scss";
import javkhaa from "../../images&icons/teachers/javkhaa.png";
import ezka from "../../images&icons/teachers/ezenbaatar.png";
import { useHistory } from "react-router-dom";

export const OurTeam = () => {
  const history = useHistory();
  var slideIndex = 1;
  // Next/previous controls
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  // Thumbnail image controls
  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");

    slideIndex = n > slides.length ? 1 : slideIndex;
    slideIndex = n < 1 ? slides.length : slideIndex;

    for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
    // for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active", "");

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const toOurTeam = () => history.push("/ourTeam");

  return (
    <div
      className="everything ourTeamEverything"
      id="scrollGoal"
      onLoad={() => showSlides(slideIndex)}
    >
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
        <div className="readMore" onClick={toOurTeam}>Read more</div>
      </div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img className="aboutUsImage" alt="ezka" src={ezka} />
        </div>

        <div className="mySlides fade">
          <img className="aboutUsImage" alt="javkhaa" src={javkhaa} />
        </div>

        <div className="mySlides fade">
          <img className="aboutUsImage" alt="ezka" src={ezka} />
        </div>

        <div className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </div>
        <div className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </div>
        <div style={{ textAlign: "center" }}>
          <span className="dots" onClick={() => currentSlide(1)}></span>
          <span className="dots" onClick={() => currentSlide(2)}></span>
          <span className="dots" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </div>
  );
};
