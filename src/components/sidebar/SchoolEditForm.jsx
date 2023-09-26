import { useState } from "react"
import trashCan from "../assets/delete.svg"

export default function SchoolEditForm({ changeShowform }) {
    const [cancel, setCancel] = useState(true);

    const handleCancelClick = () => {
        setCancel(true);
        changeShowform(false);
    };
    return (
        <form className="school-form">
            <div className="school-form-item">
                <label htmlFor="school">
                    <h4>School Name:</h4>
                </label>
                <input type="text" className="school" id="school" />
            </div>
            <div className="school-form-item">
                <label htmlFor="school">
                    <h4>Degree:</h4>
                </label>
                <input type="text" className="degree" id="degree" />
            </div>
            <div className="school-form-item">
                <div className="start-date">
                    <label htmlFor="start-date">
                        <h4>Start Date:</h4>
                    </label>
                    <input type="text" className="start-date-input" id="start-date-input" />
                </div>
                <div className="end-date">
                    <label htmlFor="end-date">
                        <h4>End Date:</h4>
                    </label>
                    <input type="text" className="end-date-input" id="end-date-input" />
                </div>
            </div>

            <div className="school-form-item">
                <label htmlFor="location">
                    <h4>Location:</h4>
                </label>
                <input type="text" className="location" id="location" />
            </div>
            <div className="form-btns">
                <div className="delete-btn">
                    <img src={trashCan} className="delete-icon" />
                    <span>Delete</span>
                </div>
                <div className="side-btns">
                    <p className="Cancel-btn" onClick={handleCancelClick}>Cancel</p>
                    <p className="Save-btn">Save</p>
                </div>
            </div>
        </form >
    )
};
