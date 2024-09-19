import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// CSS
import '@stylesheets/fonts.css'
import '@stylesheets/animations.css'
import '@stylesheets/main.css'

// Components
import App from '@app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
