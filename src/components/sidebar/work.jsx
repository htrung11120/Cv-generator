import React, { useState } from 'react';
import visibilityIcon from '../assets/visibility.svg';
import invisibilityIcon from '../assets/invisibility.svg';
import WorkEditForm from './WorkEditForm';

export default function Work({ workData, updateWorkData }) {

    const [showForm, setShowForm] = useState(false);

    const toggleVisibility = (id) => {
        const updatedWorkData = workData.map((work) =>
            work.id === id ? { ...work, visible: !work.visible } : work
        );
        updateWorkData(updatedWorkData);
    };

    const handleFormToggle = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    return (
        <div>
            {showForm ? (
                <WorkEditForm changeShowform={handleFormToggle} workData={workData} updateWorkData={updateWorkData} cancel={!showForm} />
            ) : (
                <>
                    <ul className="work-list">
                        {workData.map((work) => (
                            <li key={work.id} className="work-item">
                                <h2 className="work-name">{work.companyName}</h2>
                                <img
                                    src={work.visible ? visibilityIcon : invisibilityIcon}
                                    onClick={() => toggleVisibility(work.id)}
                                    alt="Toggle Visibility"
                                />
                            </li>
                        ))}
                    </ul>
                    {!showForm && (
                        <button className="add-work" onClick={handleFormToggle}>
                            + Work Experience
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
