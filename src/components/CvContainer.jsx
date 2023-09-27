import React, { useState } from 'react';
import NavBar from './sidebar/Nav';
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
            schoolName: 'Londonss',
            visible: false,
            date: '2021-2020',
            location: 'Ga, lake city',
            schoolDegree: 'bachelor',
        },
        {
            id: uuid(),
            schoolName: 'Londonss',
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
            companyName: 'LLc',
            visible: false,
            date: '2021-2020',
            location: 'Ga, lake city',
            position: 'Associate',
        },
        {
            id: uuid(),
            companyName: 'apple LLC',
            visible: false,
            date: '2021-2020',
            location: 'Ga, lake city',
            position: 'Bachelor',
        },
    ]);

    const updateWorkData = (newWorkData) => {
        setWorkData(newWorkData);
    };

    return (
        <div className="cv-container">
            <div className="side-bar">
                <NavBar />
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
