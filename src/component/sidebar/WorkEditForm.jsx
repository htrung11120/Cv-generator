import { useState } from "react"
import trashCan from "../assets/delete.svg"

export default function WorkEditForm({ changeShowform }) {
    const [cancel, setCancel] = useState(true);

    const handleCancelClick = () => {
        setCancel(true);
        changeShowform(false);
    };
    return (
        <form className="work-form">
            <div className="work-form-item">
                <label htmlFor="company">
                    <h4>Company Name:</h4>
                </label>
                <input type="text" className="company" id="company" />
            </div>
            <div className="work-form-item">
                <label htmlFor="position-title">
                    <h4>Position Title:</h4>
                </label>
                <input type="text" className="position-title" id="position-title" />
            </div>
            <div className="work-form-item">
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

            <div className="work-form-item">
                <label htmlFor="location">
                    <h4>Location:</h4>
                </label>
                <input type="text" className="location" id="location" />
            </div>
            <div className="work-form-item">
                <label htmlFor="description">
                    <h4>Description:</h4>
                </label>
                <input type="text" className="description" id="description" />
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
