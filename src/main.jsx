import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './font.css'
import { SiteSettingContextAPI } from './ContextAPI/SiteSettingContextAPI'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteSettingContextAPI>
      <App />
    </SiteSettingContextAPI>
  </StrictMode>,
)
