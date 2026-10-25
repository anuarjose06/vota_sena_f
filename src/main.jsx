import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import Login from './pages/login/Login.jsx'
import HomeAprendiz from './pages/home/home-aprendiz/HomeAprendiz.jsx'

export function App() {
  const [aprendizLoggedIn, setAprendizLoggedIn] = useState(false)

  return aprendizLoggedIn
    ? <HomeAprendiz />
    : <Login onLogin={() => setAprendizLoggedIn(true)} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
