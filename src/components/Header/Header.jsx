import './header.css'
import logoSena from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserCircle, faChevronDown, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect, useRef } from 'react'

const IconoCampana = () => <FontAwesomeIcon icon={faBell} />
const IconoUsuario = () => <FontAwesomeIcon icon={faUserCircle} />
const IconoFlecha = () => <FontAwesomeIcon icon={faChevronDown} />
const IconoCerrarSesion = () => <FontAwesomeIcon icon={faSignOutAlt} />
const IconoPerfil = () => <FontAwesomeIcon icon={faUser} />

function Headertop({
  menuOpen = false,
  toggleMenu = () => {},
  userName = 'Consuelo casas',
  userRole = 'Bienestar',
  subtitle = 'SENA - Panel Bienestar',
}) {
  const [ menuPerfilAbierto, setMenuPerfilAbierto] = useState(false)
  const toggleMenuPerfil = () => setMenuPerfilAbierto(!menuPerfilAbierto)

  // funcionalidad para cerrar el menu desplegable 
  // dandole click en cuanquier parte de la pantalla
  const menuRef = useRef(null)
  useEffect(() => {
    const cerrarMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuPerfilAbierto(false)
        //console.log(event.target)
      }
    }
    document.addEventListener('mousedown', cerrarMenu)
    return () => {
      document.removeEventListener('mousedown', cerrarMenu)
    }
    
  }, [])
  return (
    <header className="bienestar-header">
      <div className="navbar-content">
        <div className="logo-section">
          <button
            className={`hamburger-btn ${menuOpen ? 'abierto' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="bw-sidebar"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img src={logoSena} alt="SENA" className="sena-logo" />
          <div className="logo-text">
            <span className="logo-title">VOTA<strong className='green-title'>SENA</strong></span>
            <span className="logo-subtitle">{subtitle}</span>
          </div>
        </div>

        <div className="header-acciones">
          <button type="button" className="bell-btn" aria-label="Notificaciones">
            <IconoCampana />
          </button>

          <div className="user-menu-container" ref={menuRef}>
            <button
            id="perfil"
            type="button"
            className="user-section"
            onClick={toggleMenuPerfil}
            aria-expanded={menuPerfilAbierto}
            aria-controls="menu-perfil"
          >
            <div className="user-info">
              <span className="user-name">{userName}</span>
              <span className="user-role">{userRole}</span>
            </div>
            <span className="user-avatar"><IconoUsuario /></span>
            <span className={`user-chevron ${menuPerfilAbierto ? 'rotado' : ''}`}><IconoFlecha /></span>
            </button>
            {menuPerfilAbierto && (
              <div className="user-dropdown" id="menu-perfil">
                <ul>
                  <li><button type="button"><IconoPerfil />Perfil</button></li>
                  <li><button className="close-sesion-btn" type="button"><IconoCerrarSesion />Cerrar sesión</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Headertop
