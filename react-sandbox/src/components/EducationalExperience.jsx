import React from 'react';
import { useState } from 'react';

const EducationalExperience = ({degree, setDegree}) => {
    console.log('edu exp connected')
    return (
        <div className='section-border'>
            <h1>Education</h1>
            <input
                type="text"
                placeholder='Bachelors in CS'
                id='degree'
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
            />
        </div>
    );
};

export { EducationalExperience };