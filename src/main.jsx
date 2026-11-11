import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import Login from './pages/login/Login.jsx'
import SplashScreen from './pages/splashScreen/SplashScren.jsx'
import Bienestar from './pages/home/home-Bienestar/HomeBienestar.jsx'
import RecoverPassword from './pages/recoverPassword/RecoverPassword.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Bienestar />
  </StrictMode>,
)
