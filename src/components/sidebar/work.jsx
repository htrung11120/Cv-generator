import React, { useState } from 'react';
import WorkEditForm from './WorkEditForm';
import trashIcon from '../assets/delete.svg'; 

export default function Work({ workData, updateWorkData }) {
    const [showForm, setShowForm] = useState(false);

    const handleFormToggle = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    const handleDelete = (id) => {

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
                                <h3 className="work-name">{work.companyName}</h3>
                                <button onClick={() => handleDelete(work.id)} className='btn'>
                                    <img src={trashIcon} alt="Delete" /> 
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
