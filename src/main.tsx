import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TechIconsProvider from '@context/tech-icon-context.tsx'
import App from '@/App.tsx'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TechIconsProvider>
      <App />
    </TechIconsProvider>
  </StrictMode>,
)
