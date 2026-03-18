import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeneralInfo } from './components/GeneralInfo.jsx'
import { EducationalExperience } from './components/EducationalExperience.jsx'
import { PracticalExperience } from './components/PracticalExperience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <EducationalExperience />
    <PracticalExperience />
    <App />
  </StrictMode>,
)
