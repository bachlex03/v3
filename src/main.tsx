/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './styles/global.css'
import './styles/mouse-gradient.css'
import './styles/postcss-example.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
