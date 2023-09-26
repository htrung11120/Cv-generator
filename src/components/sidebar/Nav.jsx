import trashCan from "../assets/delete.svg"

export default function NavBar() {

    return (
        <div className="nav">
            <div className="clear-btn">
                <img src={trashCan} alt="trash icon" className="trash-icon"/>
                <span className="clear-text">Clear Your Resume</span>
            </div>
            <div className="sample-cv">
                <span>Load Example </span>
            </div>
        </div>
    )
};