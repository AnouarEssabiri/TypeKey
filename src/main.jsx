import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TypingTest from './Keytype.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TypingTest />
  </StrictMode>
)
