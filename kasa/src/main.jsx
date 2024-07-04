import React from 'react'
import App from './App.jsx'
import './sass/main.scss'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
