import React, { useState } from 'react';
import WorkEditForm from './WorkEditForm';
import trashIcon from '../assets/delete.svg'; // Import your trash icon

export default function Work({ workData, updateWorkData }) {
    const [showForm, setShowForm] = useState(false);

    const handleFormToggle = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    const handleDelete = (id) => {
        // Implement the delete functionality here
        // You should update the 'workData' and 'updateWorkData' accordingly
        const updatedWorkData = workData.filter((work) => work.id !== id);
        updateWorkData(updatedWorkData);
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
                                <button onClick={() => handleDelete(work.id)}>
                                    <img src={trashIcon} alt="Delete" /> {/* Use the trash icon here */}
                                </button>
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
