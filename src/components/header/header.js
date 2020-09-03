import React from 'react';
import './header.scss'
import { Navigation } from '../navigation/navigation'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import headerFrontImage from '../../images&icons/backgrounds/headerFrontImage.svg'

export const Header = () => {

    return (
        <div className="opacity">
            <div className="firstLook">
                <Navigation />
                {/* <div className='firstRectangle'>20000M Above the <br /> Gobi desert</div> */}
                <img src={headerFrontImage} alt="frontImage" className='firstRectangle'/>
                <KeyboardArrowDownIcon className="headerArrow"/>
            </div>
        </div>
    )
}

