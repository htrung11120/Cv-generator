import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import visibilityIcon from '../assets/visibility.svg';
import invisibilityIcon from '../assets/invisibility.svg';
import WorkEditForm from './WorkEditForm';

export default function Work() {
    const [workList, setWorkList] = useState([
        { id: uuid(), companyName: 'LLc', visible: false },
        { id: uuid(), companyName: 'apple LLC', visible: false },
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleVisibility = (id) => {
        setWorkList((prevWorkList) =>
            prevWorkList.map((work) =>
                work.id === id ? { ...work, visible: !work.visible } : work
            )
        );
    };

    const handleFormToggle = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    return (
        <div>
            {showForm ? (
                <WorkEditForm changeShowform={handleFormToggle} cancel={!showForm} />
            ) : (
                <>
                    <ul className="work-list">
                        {workList.map((work) => (
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
                        <button className="add-work"  onClick={handleFormToggle}>
                            + Work Experience
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
