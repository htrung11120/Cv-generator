// PersonalInfor.js
import React, { useState } from "react";

export default function PersonalInfor({ user, updateUser }) {
    const [userData, setUserData] = useState(user);

    const updateInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(userData);
    };

    return (
        <form onChange={handleSubmit} className="applicant-form-infor">
            <h2 className="form-infor-header">Personal Details</h2>
            <div className="form-item">
                <label htmlFor="applicant-name">Full Name</label>
                <input type="text" className="applicant-name input" id="applicant-name" name="name" value={userData.name} onChange={updateInput} />
            </div>
            <div className="form-item">
                <label htmlFor="email">Email</label>
                <input type="text" className="email input" id="email" name="email" value={userData.email} onChange={updateInput} />
            </div>
            <div className="form-item">
                <label htmlFor="phone">Phone Numbers</label>
                <input type="number" className="phone-number input" id="phone" name="phone" value={userData.phone} onChange={updateInput} />
            </div>
            <div className="form-item">
                <label htmlFor="address">Address</label>
                <input type="text" className="address input" id="address" name="address" value={userData.address} onChange={updateInput} />
            </div>
        </form>
    );
}
