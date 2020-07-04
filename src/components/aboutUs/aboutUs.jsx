import React, { useEffect, useState } from 'react'
import './aboutUs.scss'
// import aboutUsData from './aboutUsData.js'
// import '../../images&icons/spaceX.png'

const AboutUs = () => {
    const [oldSlide, setOldSlide] = useState('project')
    const [slideColor, setSlideColor] = useState('project')


    useEffect(() => {
        document.getElementById(oldSlide).style.color = '#737386'
        document.getElementById(slideColor).style.color = 'white'
        document.getElementById(oldSlide).firstChild.style.background = '#737386'
        document.getElementById(slideColor).firstChild.style.background = 'white'

        setOldSlide(slideColor)
    }, [slideColor, oldSlide])

    const scrollAboutUs = (nani) => {
        const element = document.getElementById(nani);
        element.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }

    return (
        <>
            <div className="headLine">ABOUT US</div>
            <div className="zuraas"></div>
            <div className="touching ">
                <div className="buttonA"
                    onClick={() => {scrollAboutUs('scrollProject'); setSlideColor('project')}} id="project">
                    <div className="usCircle" id='projectCircle'></div>
                    <div>Project</div>
                </div>
                <div className='zuraasT'></div>
                <div className='buttonA' onClick={() => {scrollAboutUs('scrollGoal'); setSlideColor('goal')}} id="goal">
                    <div className="usCircle"></div>
                    <div className="flexGrow">Goal</div>
                </div>
                <div className='zuraasT'></div>
                <div className='buttonA' onClick={() => {scrollAboutUs('scrollTimeline'); setSlideColor('timeline')}} id="timeline">
                    <div className="usCircle"></div>
                    <div className="flexGrow">Timeline</div>
                </div>
                <div className='zuraasT'></div>
                <div className='buttonA' onClick={() => {scrollAboutUs('scrollTeam'); setSlideColor('team')}} id="team">
                    <div className="usCircle"></div>
                    <div className="flexGrow">Team</div>
                </div>
            </div>
            <div className="aboutEvery">
                <div id='leftArrow' className="arrow left"></div>
                <div className="slide">
                    <div className="everything" id="scrollProject">
                        <div className="allText">
                            <div className="aboutHeadline">our <br /> project</div>
                            <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sapiente aperiam dolores commodi porro quibusdam fuga debitis eum sequi provident similique ullam, aspernatur, mollitia ipsum excepturi natus accusamus aliquam. Provident!
                        </div>
                            <div className="readMore">Read more</div>
                        </div>
                        <div className="aboutImage"></div>
                    </div>
                    <div className="everything" id="scrollGoal">
                        <div className="allText">
                            <div className="aboutHeadline">Goal <br /> project</div>
                            <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sapiente aperiam dolores commodi porro quibusdam fuga debitis eum sequi provident similique ullam, aspernatur, mollitia ipsum excepturi natus accusamus aliquam. Provident!
                        </div>
                            <div className="readMore">Read more</div>
                        </div>
                        <div className="aboutImage"></div>
                    </div>
                    <div className="everything" id="scrollTimeline">
                        <div className="allText">
                            <div className="aboutHeadline">time <br /> project</div>
                            <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sapiente aperiam dolores commodi porro quibusdam fuga debitis eum sequi provident similique ullam, aspernatur, mollitia ipsum excepturi natus accusamus aliquam. Provident!
                        </div>
                            <div className="readMore">Read more</div>
                        </div>
                        <div className="aboutImage"></div>
                    </div>
                    <div className="everything" id="scrollTeam">
                        <div className="allText">
                            <div className="aboutHeadline">team <br /> project</div>
                            <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sapiente aperiam dolores commodi porro quibusdam fuga debitis eum sequi provident similique ullam, aspernatur, mollitia ipsum excepturi natus accusamus aliquam. Provident!
                        </div>
                            <div className="readMore">Read more</div>
                        </div>
                        <div className="aboutImage"></div>
                        <div style={{width: '60px'}}></div>
                    </div>
                </div>
                <div id='rightArrow' className="arrow right"></div>
            </div>
        </>
    )
}

export default AboutUs;