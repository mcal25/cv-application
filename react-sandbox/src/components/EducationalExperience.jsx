import React from 'react';
import { useState } from 'react';

const EducationalExperience = ({ degree, setDegree, school, setSchool, datesOfSchool, setdatesOfSchool }) => {
    console.log('edu exp connected')
    return (
        <div className='section-border'>
            <h1>Education</h1>
            <input
                type="text"
                placeholder='Degree'
                id='degree'
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
            />
            <input
                type="text"
                placeholder='School'
                id='school'
                value={school}
                onChange={(e) => setSchool(e.target.value)}
            />
            <input
                type="text"
                placeholder='Dates of Attendance'
                id='date-of-school'
                value={datesOfSchool}
                onChange={(e) => setdatesOfSchool(e.target.value)}
            />
        </div>
    );
};

export { EducationalExperience };

/*
- name of school
- degree / study area
- date of study
*/