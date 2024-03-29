import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Toggle from './Toggle'
import App from './App'
import ContextWrapper from "./context/ContextWrapper";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextWrapper>
    <App />
    </ContextWrapper>
  </React.StrictMode>,
)
