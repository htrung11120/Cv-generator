import React, { useState } from 'react';
import educationIcon from '../assets/education.svg';
import upIcon from '../assets/arrow-up.svg';
import downIcon from '../assets/arrow-down.svg';
import School from './school';

export default function Education({ educationData, updateEducationData }) {
    const [isCollapse, setIsCollapse] = useState(false);
    const [arrow, setArrow] = useState(upIcon);

    const changeArrow = () => {
        setIsCollapse((prevState) => !prevState);
        setArrow((prevArrow) => (prevArrow === upIcon ? downIcon : upIcon));
    };

    return (
        <div className="education">
            <div className="education-header">
                <div className="header-content">
                    <img src={educationIcon} alt="" className="icon" />
                    <h1>Education</h1>
                </div>
                <div className="arrow">
                    <img src={arrow} alt="Toggle" onClick={changeArrow} />
                </div>
            </div>
            {isCollapse && <School educationData={educationData} updateEducationData={updateEducationData} />}
        </div>
    );
}
