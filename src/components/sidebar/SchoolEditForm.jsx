import React, { useState } from 'react';

export default function SchoolEditForm({ changeShowform, educationData, updateEducationData }) {
    const [cancel, setCancel] = useState(true);

    const handleCancelClick = () => {
        setCancel(true);
        changeShowform(false);
    };

    const [schoolData, setSchoolData] = useState({
        schoolName: 'A Good University',
        degree: 'Bachelor', // Set the default value to 'Bachelor'
        startDate: '',
        endDate: '',
        location: 'Somewhere',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSchoolData({
            ...schoolData,
            [name]: value,
        });
    };

    const handleSaveClick = (id) => {
        // Replace the sample values with form input values
        const updatedEducationData = educationData.map((school) =>
            school.id === id
                ? {
                    ...school,
                    schoolName: schoolData.schoolName,
                    schoolDegree: schoolData.degree, // Use the selected degree value
                    date: `${schoolData.startDate} - ${schoolData.endDate}`,
                    location: schoolData.location,
                }
                : school
        );

        // Call the updateEducationData callback to send the updated data to CvContainer
        updateEducationData(updatedEducationData);

        // Close the form
        changeShowform(false);
    };

    return (
        <form className="school-form">
            <div className="school-form-item">
                <label htmlFor="school">
                    <h4>School Name:</h4>
                </label>
                <input
                    type="text"
                    className="school input"
                    id="school"
                    name="schoolName"
                    value={schoolData.schoolName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="school-form-item">
                <label htmlFor="degree">
                    <h4>Degree:</h4>
                </label>
                <select
                    className="degree input"
                    id="degree"
                    name="degree"
                    value={schoolData.degree}
                    onChange={handleInputChange}
                >
                    <option value="Bachelor">Bachelor</option>
                    <option value="Associate">Associate</option>
                </select>
            </div>
            <div className="school-form-item">
                <div className="start-date">
                    <label htmlFor="start-date">
                        <h4>Start Date:</h4>
                    </label>
                    <input
                        type="date"
                        className="start-date-input input"
                        id="start-date-input"
                        name="startDate"
                        value={schoolData.startDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="end-date">
                    <label htmlFor="end-date">
                        <h4>End Date:</h4>
                    </label>
                    <input
                        type="date"
                        className="end-date-input input"
                        id="end-date-input"
                        name="endDate"
                        value={schoolData.endDate}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="school-form-item">
                <label htmlFor="location">
                    <h4>Location:</h4>
                </label>
                <input
                    type="text"
                    className="location input"
                    id="location"
                    name="location"
                    value={schoolData.location}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-btns">
       
                <div className="side-btns">
                    <p className="Cancel-btn" onClick={handleCancelClick}>
                        Cancel
                    </p>
                    <p className="Save-btn" onClick={() => handleSaveClick(educationData[0].id)}>
                        Save
                    </p>
                </div>
            </div>
        </form>
    );
}
