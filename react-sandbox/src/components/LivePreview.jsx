import React from 'react';
import { useState } from 'react';

const LivePreview = ({name, phoneNumber, email, personalSite, github, degree, job, skills, certs}) => {
    return (
        <>
            <p>{name}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{personalSite}</p>
            <p>{github}</p>
            <p>{degree}</p>
            <p>{job}</p>
            <p>{skills}</p>
            <p>{certs}</p>
        </>
    );
};

export { LivePreview };