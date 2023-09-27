import React, { useState } from 'react';
import workIcon from '../assets/work.svg';
import upIcon from '../assets/arrow-up.svg';
import downIcon from '../assets/arrow-down.svg';
import Work from './work';
export default function Experience({ workData, updateWorkData }) {
    const [isCollapse, setIsCollapse] = useState(false);
    const [arrow, setArrow] = useState(upIcon);
    const changeArrow = () => {
        setIsCollapse((prevState) => !prevState);
        setArrow((prevArrow) => (prevArrow === upIcon ? downIcon : upIcon));
    };

    return (
        <div className="experience">
            <div className="experience-header">
                <div className="header-content">
                    <img src={workIcon} alt="" className='icon' />
                    <h1>Experience</h1>
                </div>
                <div className="arrow">
                    <img src={arrow} alt="Toggle" onClick={changeArrow} />
                </div>
            </div>
            {isCollapse && <Work workData={workData} updateWorkData={updateWorkData} />}
        </div>
    )
}
