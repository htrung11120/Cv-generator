import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import visibilityIcon from '../assets/visibility.svg';
import invisibilityIcon from '../assets/invisibility.svg';
import SchoolEditForm from './SchoolEditForm';

export default function School() {
    const [schoolList, setSchoolList] = useState([
        { id: uuid(), schoolName: 'London', visible: false },
        { id: uuid(), schoolName: 'Georgia', visible: false },
    ]);

    const [showForm, setShowForm] = useState(false);

    const toggleVisibility = (id) => {
        setSchoolList((prevSchoolList) =>
            prevSchoolList.map((school) =>
                school.id === id ? { ...school, visible: !school.visible } : school
            )
        );
    };

    const handleFormToggle = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    return (
        <div>
            {showForm ? (
                <SchoolEditForm changeShowform={handleFormToggle} cancel={!showForm} />
            ) : (
                <>
                    <ul className="school-list">
                        {schoolList.map((school) => (
                            <li key={school.id} className="school-item">
                                <h2 className="school-name">{school.schoolName}</h2>
                                <img
                                    src={school.visible ? visibilityIcon : invisibilityIcon}
                                    onClick={() => toggleVisibility(school.id)}
                                    alt="Toggle Visibility"
                                />
                            </li>
                        ))}
                    </ul>
                    {!showForm && (
                        <button className="add-school" onClick={handleFormToggle}>
                            + Education
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
