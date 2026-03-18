import React from 'react';
import { useState } from 'react';

const PracticalExperience = () => {
    console.log('pract exp connected')
    return (
        <div className='section-border'>
            <h1>Work Experience</h1>
            <input type="text" placeholder='Your experience' />
        </div>
    );
};

export { PracticalExperience };