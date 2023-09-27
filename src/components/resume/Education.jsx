export default function Education({ educationData }) {
    return (
        <div className="resume-education">
            <h2 className="resume-education-header">Education</h2>
            <ul className="school-infor-list">
                {educationData.map((school) => (
                    <li key={school.id} className="school-list-item">
                        <div className="school-name-degree">
                            <h3 className="school-name">{school.schoolName}</h3>
                            <p className="school-degree">{school.schoolDegree}</p>
                        </div>
                        <div className="date-location">
                            <p className="date">{school.date}</p>
                            <p className="school-location">{school.location}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
