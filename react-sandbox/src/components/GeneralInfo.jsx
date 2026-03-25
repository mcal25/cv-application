import React from 'react';
import { useState } from 'react';

const GeneralInfo = ({name, setName, phoneNumber, setPhoneNumber, email, setEmail, personalSite, setPersonalSite, github, setGithub}) => {
    return (
        <div className='section-border'>
            <input 
                type="text"
                id="title-name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className='general-info-area'>
                <input 
                    type="text"
                    className='general-info'
                    id='phone-number'
                    value={phoneNumber}
                    placeholder='(888)-888-8888'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input type="text"
                    className='general-info'
                    id='email'
                    value={email}
                    placeholder='johndoe@justdoeit.io'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="text"
                    className='general-info'
                    id='personal-site'
                    value={personalSite}
                    placeholder='justdoeit.io'
                    onChange={(e) => setPersonalSite(e.target.value)}
                />
                <input type="text"
                    className='general-info'
                    id='github'
                    value={github}
                    placeholder='github.com/johndoe'
                    onChange={(e) => setGithub(e.target.value)}
                />
            </div>
        </div>
    );
};




export { GeneralInfo };