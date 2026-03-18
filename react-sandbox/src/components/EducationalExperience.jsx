import React from 'react';
import { useState } from 'react';

const EducationalExperience = () => {
    console.log('edu exp connected')
    return (
        <div className='section-border'>
            <h1>Education</h1>
            <input type="text" placeholder='Bachelors in CS' />
        </div>
    );
};

export { EducationalExperience };