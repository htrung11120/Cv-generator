import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function WorkEditForm({ changeShowform, workData, updateWorkData }) {
    const [data, setData] = useState({
        companyName: '',
        date: '',
        location: '',
        position: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSaveClick = () => {
        const newData = {
            id: uuid(),
            companyName: data.companyName,
            date: data.date,
            location: data.location,
            position: data.position,
        };

        const updatedWorkData = [...workData, newData];

        updateWorkData(updatedWorkData);


        setData({
            companyName: '',
            date: '',
            location: '',
            position: '',
        });
        changeShowform(false);
    };

    const handleCancelClick = () => {
        // Clear the form data and hide the form
        setData({
            companyName: '',
            date: '',
            location: '',
            position: '',
        });
        changeShowform(false);
    };

    return (
        <form className="work-form">
            <div className="work-form-item">
                <label htmlFor="company">
                    <h4>Company Name:</h4>
                </label>
                <input
                    type="text"
                    className="company input"
                    id="company"
                    name="companyName"
                    value={data.companyName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="work-form-item">
                <label htmlFor="position-title">
                    <h4>Position Title:</h4>
                </label>
                <input
                    type="text"
                    className="position-title input"
                    id="position-title"
                    name="position"
                    value={data.position}
                    onChange={handleInputChange}
                />
            </div>
            <div className="work-form-item">
                <label htmlFor="start-date">
                    <h4>Start Date:</h4>
                </label>
                <input
                    type="date"
                    className="start-date-input input"
                    id="start-date-input"
                    name="date"
                    value={data.date}
                    onChange={handleInputChange}
                />
            </div>
            <div className="work-form-item">
                <label htmlFor="end-date">
                    <h4>End Date:</h4>
                </label>
                <input
                    type="date"
                    className="end-date-input input"
                    id="end-date-input"
                    name="endDate"
                    value={data.endDate}
                    onChange={handleInputChange}
                />
            </div>
            <div className="work-form-item">
                <label htmlFor="location">
                    <h4>Location:</h4>
                </label>
                <input
                    type="text"
                    className="location input"
                    id="location"
                    name="location"
                    value={data.location}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-btns">
                <div className="side-btns">
                    <p className="Cancel-btn" onClick={handleCancelClick}>Cancel</p>
                    <p className="Save-btn" onClick={handleSaveClick}>Save</p>
                </div>
            </div>
        </form>
    );
}
