import { useState } from 'react'
import './styles/App.css'
import { GeneralInfo } from './components/GeneralInfo.jsx'
import { EducationalExperience } from './components/EducationalExperience.jsx'
import { PracticalExperience } from './components/PracticalExperience.jsx'
import { SkillsAndCerts } from './components/SkillsAndCerts.jsx'
import { LivePreview } from './components/LivePreview.jsx'

function App() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [personalSite, setPersonalSite] = useState();
  const [github, setGithub] = useState();
  console.log('gen info connected')
  console.log(name);

  return (
    <>
      <div className="global-container">
        <div className='left-side'>
          <GeneralInfo
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            personalSite={personalSite}
            setPersonalSite={setPersonalSite}
            github={github}
            setGithub={setGithub}
          />
          <EducationalExperience />
          <PracticalExperience />
          <SkillsAndCerts />
        </div>
        <div className='right-side'>
          <LivePreview
            name={name}
            email={email}
            personalSite={personalSite}
            github={github}
          />
        </div>
      </div>
    </>
  );
};

export default App
