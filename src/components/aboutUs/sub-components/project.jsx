import React, { useState } from "react";

export const Project = () => {
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
              <div className="aboutHeadline">
                Our Project
            </div>
              <button style={{}} onClick={callPopUp}>X</button>
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
          :
          <div className="getCenter">
            <div className='secondHeadline'>
              <div className="aboutHeadline">
                Our Project
          </div>
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
      }
      <div className="everything" id="scrollProject">
        <div className="allText">
          <div className="secondLine"></div>
          <div className="aboutHeadline">
            our <br /> project
        </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae deleniti minus beatae maxime ab quaerat nam hic eum quam consequuntur laborum error pariatur, soluta doloribus dicta animi tenetur possimus!
        </div>
          <div onClick={callPopUp} className="readMore">Read more</div>
        </div>
        <div className="aboutImage"></div>
      </div>
    </>
  );
};
