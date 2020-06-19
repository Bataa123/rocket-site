import React from 'react'
import './aboutUs.scss'
// import '../../images&icons/spaceX.png'

const AboutUs = () => {
    return (
        <>
            <div className="headLine">ABOUT US</div>
            <div className="zuraas"></div>
            <div className="touching">
                <div className="usCircle"></div>
                <div className='zuraasT'></div>
                <div className="usCircle"> </div>
                <div className='zuraasT'></div>
                <div className="usCircle"> </div>
                <div className='zuraasT'></div>
                <div className="usCircle"> </div>
            </div>
            <div className='touchingText'>
                <div className="flexGrow">Project</div>
                <div className="flexGrow">Goal</div>
                <div className="flexGrow">Timeline</div>
                <div className="flexGrow">Team</div>
            </div>
            <div className="aboutEvery">
                <div className="arrow left"></div>
                <div className="everything">
                    <div className="allText">
                        <div className="aboutHeadline">our <br /> project</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptas, perferendis ipsam aspernatur facere mollitia quibusdam doloremque officiis, repellendus praesentium inventore nisi illum veritatis dolorem beatae nam maiores ducimus aut!</div>
                        <div className="readMore">Read more</div>
                    </div>
                    <div className="aboutImage"></div>
                </div>
                <div className="arrow right"></div>
            </div>

        </>
    )
}

export default AboutUs;