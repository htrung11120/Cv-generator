import React, { useState } from 'react';
import SchoolEditForm from './SchoolEditForm';
import trashCan from '../assets/delete.svg';

export default function School({ educationData, updateEducationData }) {
    const [showForm, setShowForm] = useState(false);

    const handleDeleteClick = (id) => {
        // Filter out the school with the given id to delete it
        const updatedEducationData = educationData.filter((school) => school.id !== id);
        updateEducationData(updatedEducationData);
    };

    const handleFormToggle = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    return (
        <div>
            {showForm ? (
                <SchoolEditForm
                    changeShowform={handleFormToggle}
                    educationData={educationData}
                    updateEducationData={updateEducationData}
                    cancel={!showForm}
                />
            ) : (
                <>
                    <ul className="school-list">
                        {educationData.map((school) => (
                            <li key={school.id} className="school-item">
                                <h2 className="school-name">{school.schoolName}</h2>
                                <img
                                    src={trashCan}
                                    className="delete-icon"
                                    onClick={() => handleDeleteClick(school.id)} // Call handleDeleteClick when trash can is clicked
                                    alt="Delete School"
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
