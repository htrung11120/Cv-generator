import NavBar from "./Nav"
import PersonalInfor from "./PersonaInfor"
import Education from "./Education"
import Experience from "./experience"
export default function SideBar() {

    return (
        <div className="side-bar">
            <NavBar />
            <PersonalInfor />
            <Education />
            <Experience />
        </div>
    )
};