import { useState } from 'react'
import './styles/App.css'
import { GeneralInfo } from './components/GeneralInfo.jsx'
import { EducationalExperience } from './components/EducationalExperience.jsx'
import { WorkExperience } from './components/WorkExperience.jsx'
import { SkillsAndCerts } from './components/SkillsAndCerts.jsx'
import { LivePreview } from './components/LivePreview.jsx'

function App() {

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [personalSite, setPersonalSite] = useState();
  const [github, setGithub] = useState();
  const [degree, setDegree] = useState();
  const [job, setJob] = useState();
  const [company, setCompany] = useState();
  const [responsibilities, setResponsibilities] = useState();
  const [datesOfEmployment, setDatesOfEmployment] = useState();
  const [skills, setSkills] = useState();
  const [school, setSchool] = useState();
  const [datesOfSchool, setdatesOfSchool] = useState();
  const [certs, setCerts] = useState();

  return (
    <>
      <div className="global-container">
        <div className='left-side'>
          <GeneralInfo
            name={name}
            setName={setName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            email={email}
            setEmail={setEmail}
            personalSite={personalSite}
            setPersonalSite={setPersonalSite}
            github={github}
            setGithub={setGithub}
          />
          <EducationalExperience
            degree={degree}
            setDegree={setDegree}
            school={school}
            setSchool={setSchool}
            datesOfSchool={datesOfSchool}
            setdatesOfSchool={setdatesOfSchool}
          />
          <WorkExperience
            job={job}
            setJob={setJob}
            company={company}
            setCompany={setCompany}
            responsibilities={responsibilities}
            setResponsibilities={setResponsibilities}
            datesOfEmployment={datesOfEmployment}
            setDatesOfEmployment={setDatesOfEmployment}
          />
          <SkillsAndCerts
            skills={skills}
            setSkills={setSkills}
            certs={certs}
            setCerts={setCerts}
          />
        </div>
        <div className='right-side'>
          <LivePreview
            name={name}
            phoneNumber={phoneNumber}
            email={email}
            personalSite={personalSite}
            github={github}
            degree={degree}
            school={school}
            datesOfSchool={datesOfSchool}
            job={job}
            company={company}
            responsibilities={responsibilities}
            datesOfEmployment={datesOfEmployment}
            skills={skills}
            certs={certs}
          />
        </div>
      </div>
    </>
  );
};

export default App