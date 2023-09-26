import SideBar from "./sidebar/Sidebar"
import ResumePage from "./resume/ResumePage"
export default function CvContainer() {

    return (
        <div className="cv-container">
            <SideBar />
            <ResumePage />
        </div>
    )
};