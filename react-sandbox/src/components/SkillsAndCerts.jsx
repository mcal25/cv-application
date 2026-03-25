import React from 'react';
import { useState } from 'react';

const SkillsAndCerts = ({skills, setSkills, certs, setCerts}) => {
    return (
        <div className='section-border'>
            <h1>Skills</h1>
            <input
                type="text"
                placeholder='Your skills'
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
            />
            <h1>Certifications</h1>
            <input 
                type="text"
                placeholder='Your certs'
                value={certs}
                onChange={(e) => setCerts(e.target.value)}
            />
        </div>
    );
}

export { SkillsAndCerts };