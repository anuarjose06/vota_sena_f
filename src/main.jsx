import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import Login from './pages/login/Login.jsx'
import SplashScreen from './pages/splashScreen/SplashScren.jsx'
import HomeBienestar from './pages/home/home-Bienestar/HomeBienestar.jsx'
import RecoverPassword from './pages/recoverPassword/RecoverPassword.jsx'
import RegistrarAprendiz from './pages/registrarAprendiz/registrarUnoAUno/RegistrarAprendiz.jsx'
import RegistroMasivo from './pages/registrarAprendiz/registroMasivo/RegistroMasivo.jsx'
import EstadoYpermisos from './pages/registrarAprendiz/estadosYpermisos/EstadoYpermisos.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <EstadoYpermisos />
  </StrictMode>,
)
