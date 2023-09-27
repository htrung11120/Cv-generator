import React from 'react';

export default function Work({ workData, updateWorkData }) {
    return (
        <div className="resume-work">
            <h2 className="resume-work-header">Professional Experience</h2>
            <ul className="work-infor-list">
                {workData.map((work) => (
                    <li className="work-list-item" key={work.id}>
                        <div className="date-location">
                            <p className="date">{work.date}</p>
                            <p className="work-location">{work.location}</p>
                        </div>
                        <div className="name-position">
                            <h3 className="work-company-name">{work.companyName}</h3>
                            <p className="position">{work.position}</p>
                            <p className="description-text">{work.description}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}
