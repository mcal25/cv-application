import React from 'react';
import { useState } from 'react';

const LivePreview = ({name, email, personalSite, github}) => {
    console.log('pract exp connected')
    return (
        <>
            <p>{name}</p>
            <p>{email}</p>
            <p>{personalSite}</p>
            <p>{github}</p>
            // <div className='section-border'>
            //     <h1>Work Experience</h1>
            //     <input type="text" placeholder='Your experience' />
            // </div>
        </>
    );
};

export { LivePreview };