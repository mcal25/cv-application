import React from 'react';
import { useState } from 'react';

const WorkExperience = ({ job, setJob, company, setCompany, responsibilities, setResponsibilities, datesOfEmployment, setDatesOfEmployment }) => {
    console.log('pract exp connected')
    return (
        <div className='section-border'>
            <h1>Work Experience</h1>
            <input
                type="text"
                placeholder='Position Title'
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <input
                type="text"
                placeholder='Company Name'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <input
                type="text"
                placeholder='Responsibilities'
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
            />
            <input
                type="text"
                placeholder='Dates of Employment'
                value={datesOfEmployment}
                onChange={(e) => setDatesOfEmployment(e.target.value)}
            />
        </div>
    );
};

export { WorkExperience };

/*

- company name
- position title
- main responsibilities
- dates worked from / to
*/