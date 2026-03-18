import React from 'react';
import { useState } from 'react';

const SkillsAndCerts = () => {
    console.log('Skills and certs connected');

    return (
        <div className='section-border'>
            <h1>Skills</h1>
            <input type="text" placeholder='Your skills' />
            <h1>Certifications</h1>
            <input type="text" placeholder='Your certs'/>
        </div>
    );
}

export { SkillsAndCerts };