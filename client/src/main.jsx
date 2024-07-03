import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import { ThemeProvider } from './utils/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
)
