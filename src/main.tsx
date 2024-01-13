import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const rootElement = document.getElementById('root');
const root = rootElement || document.createElement('div');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
