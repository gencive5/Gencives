import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


//actually i'll tackle that later, now I'm wondering if my contact button should be part of the logo-carousel-container div, because on some screen sizes the contact button overlaps with the other elements, and I don't want that