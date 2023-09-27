import React, { useState } from 'react';
import PersonalInfor from './sidebar/PersonaInfor';
import Education from './sidebar/Education';
import Experience from './sidebar/Experience';
import ResumeHeader from './resume/ResumeHeader';
import EducationBody from './resume/Education';
import WorkBody from './resume/Work';
import { v4 as uuid } from 'uuid';

export default function CvContainer() {
    const initialUser = {
        name: 'John Smith',
        email: '123@gmail.com',
        phone: 123546789,
        address: 'abcddadadasdas',
    };

    const [user, setUser] = useState(initialUser);
    const updateUser = (newUser) => {
        setUser(newUser);
    };

    const [educationData, setEducationData] = useState([
        {
            id: uuid(),
            schoolName: ' Strayer University',
            visible: false,
            date: '2021-2020',
            location: 'uk, lake city',
            schoolDegree: 'bachelor',
        },
        {
            id: uuid(),
            schoolName: 'KingDom university',
            visible: false,
            date: '2021-2020',
            location: 'Ga, lake city',
            schoolDegree: 'bachelor',
        },
    ]);

    const updateEducationData = (newEducationData) => {
        setEducationData(newEducationData);
    };

    const [workData, setWorkData] = useState([
        {
            id: uuid(),
            companyName: 'company LLC',
            visible: false,
            date: '2021-2020',
            location: 'Ga, lake city',
            position: 'manager',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

        },
        {
            id: uuid(),
            companyName: 'apple LLC',
            visible: false,
            date: '2021-2020',
            location: 'Ga, lake city',
            position: 'sale staff',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
    ]);

    const updateWorkData = (newWorkData) => {
        setWorkData(newWorkData);
    };

    return (
        <div className="cv-container">
            <div className="side-bar">
                <PersonalInfor user={user} updateUser={updateUser} />
                <Education educationData={educationData} updateEducationData={updateEducationData} />
                <Experience workData={workData} updateWorkData={updateWorkData} />
            </div>
            <div className="resume-page">
                <ResumeHeader user={user} />
                <div className="resume-body">
                    <EducationBody educationData={educationData} updateEducationData={updateEducationData} />
                    <WorkBody workData={workData} updateWorkData={updateWorkData} />
                </div>
            </div>
        </div>
    );
}
