import React from 'react'
import './ourTeam.scss'
import { OurTeamData } from './ourTeamData'

export const OurTeam = () => {
    return (
        <div className=''>
            <div className='headerText'>Our team</div>
            <div className="teacherCard">
                <div className='images'></div>
                <div className='names'>{OurTeamData.name}</div>
            </div>
        </div>
    )
}