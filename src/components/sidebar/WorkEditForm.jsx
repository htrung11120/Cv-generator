import { useState } from "react";
import trashCan from "../assets/delete.svg";

export default function WorkEditForm({ changeShowform, workData, updateWorkData }) {
    const [cancel, setCancel] = useState(true);
    console.log(workData)
    const handleCancelClick = () => {
        setCancel(true);
        changeShowform(false);
    };

    const [data, setData] = useState({
        companyName: 'apple LLC',
        visible: false,
        date: '2021-2020',
        location: 'Ga, lake city',
        position: 'Bachelor',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };


    const handleSaveClick = (id) => {
        // Check if workData is defined and has at least one element
        if (workData && workData.length > 0) {
            // Create a new object with the data you want to add or update
            const newData = {
                id,
                companyName: data.companyName,
                visible: data.visible,
                date: `${data.startDate} - ${data.endDate}`,
                location: data.location,
                position: data.position,
            };

            // Update the parent component's state with the new data
            const updatedWorkData = workData.map((work) =>
                work.id === id ? newData : work
            );

            updateWorkData(updatedWorkData);

            // Reset the form or close it
            // For example, clear the form data and hide the form:
            setData({
                companyName: '',
                visible: false,
                startDate: '',
                endDate: '',
                location: '',
                position: '',
            });
            changeShowform(false);
        }
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
                <div className="start-date">
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
                <div className="end-date">
                    <label htmlFor="end-date">
                        <h4>End Date:</h4>
                    </label>
                    <input
                        type="date"
                        className="end-date-input input"
                        id="end-date-input"
                        // Update this to the appropriate field from data state
                        name="endDate"
                        value={data.endDate}
                        onChange={handleInputChange}
                    />
                </div>
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
            <div className="work-form-item">
                <label htmlFor="description">
                    <h4>Description:</h4>
                </label>
                <textarea
                    type="text"
                    className="description input"
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-btns">
                <div className="delete-btn">
                    <img src={trashCan} className="delete-icon" />
                    <span>Delete</span>
                </div>
                <div className="side-btns">
                    <p className="Cancel-btn" onClick={handleCancelClick}>Cancel</p>
                    <p className="Save-btn" onClick={() => handleSaveClick(workData[0].id)}>Save</p>
                </div>
            </div>
        </form>
    );
}
