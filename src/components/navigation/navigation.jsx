import React from 'react'
import './navigation.scss'

export const Navigation = () => {
    return (
        <div className="nav">
            <div className="text padding">
                Gobi Space
            </div>
            <svg className="padding" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="2" rx="1" fill="white"/>
                <rect y="6" width="20" height="2" rx="1" fill="white"/>
                <rect y="12" width="20" height="2" rx="1" fill="white"/>
            </svg>
        </div>
    )
}