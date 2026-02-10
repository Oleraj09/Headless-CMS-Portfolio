import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './font.css'
import { SiteSettingContextAPI } from './ContextAPI/SiteSettingContextAPI'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <SiteSettingContextAPI>
        <App />
      </SiteSettingContextAPI>
    </HelmetProvider>
  </StrictMode>,
)
