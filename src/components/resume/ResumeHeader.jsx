import emailIcon from "../assets/email-icon.svg"
import phoneIcon from "../assets/phone.svg"
import locationMarkIcon from "../assets/location-mark.svg"


export default function ResumeHeader({ user }) {

    return (
        <header className="resume-header">
            <h1 className="applicant-name">{user.name}</h1>
            <div className="applicant-contact-infor">
                <div className="email">
                    <img src={emailIcon} alt="" className="email icon" />
                    <h3 className="applicant-email">{user.email}</h3>
                </div>
                <div className="phone">
                    <img src={phoneIcon} alt="" className="phone icon" />
                    <h3 className="applicant-phone">{user.phone}</h3>
                </div>
                <div className="location">
                    <img src={locationMarkIcon} alt="" className="location icon" />
                    <h3 className="applicant-location">{user.address}</h3>
                </div>
            </div>
        </header>
    )
};