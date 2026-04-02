import React from 'react';
import { useState } from 'react';
import '../styles/LivePreview.css'

const LivePreview = ({ name, phoneNumber, email, personalSite, github, degree, school, datesOfSchool, job, company, responsibilities, datesOfEmployment, skills, certs }) => {
    return (
        <>
            <div id='global-container'>
                <section id='header-area'>
                    <h1 id='main-name'>{name}</h1>
                    <section className='general-info-area'>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                        <p>{personalSite}</p>
                        <p>{github}</p>
                    </section>
                </section>
                <section>
                    <h2 className='section-title'>Education</h2>
                    <p>{degree}</p>
                    <p>{school}</p>
                    <p>{datesOfSchool}</p>
                </section>
                <section>
                    <h2 className='section-title'>Work Experience</h2>
                    <p>{job}</p>
                    <p>{company}</p>
                    <p>{responsibilities}</p>
                    <p>{datesOfEmployment}</p>
                </section>
                <section>
                    <h2 className='section-title'>Skills</h2>
                    <p>{skills}</p>
                </section>
                <section>
                    <h2 className='section-title'>Certs</h2>
                    <p>{certs}</p>
                </section>
            </div>
        </>
    );
};

export { LivePreview };