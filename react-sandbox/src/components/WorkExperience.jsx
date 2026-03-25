import React from 'react';
import { useState } from 'react';

const WorkExperience = ({job, setJob}) => {
    console.log('pract exp connected')
    return (
        <div className='section-border'>
            <h1>Work Experience</h1>
            <input
                type="text"
                placeholder='Your experience'
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
        </div>
    );
};

export { WorkExperience };