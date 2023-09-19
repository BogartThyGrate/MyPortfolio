import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import CustomNavbar from './components/CustomNavbar'
import "/src/css/index.css"


ReactDOM.createRoot(document.getElementById('navbar')!).render(
  <React.StrictMode>
    <CustomNavbar />
  </React.StrictMode>,
)
