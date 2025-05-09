import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TechIconsProvider from '@context/tech-icon-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TechIconsProvider>
      <App />
    </TechIconsProvider>
  </StrictMode>,
)
