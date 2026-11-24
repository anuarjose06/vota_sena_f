import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import HomeAprendiz from './pages/home/home-aprendiz/HomeAprendiz.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <HomeAprendiz />
  </StrictMode>,
)
