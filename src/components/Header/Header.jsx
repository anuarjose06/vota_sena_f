import './header.css'
import logoSena from '../../assets/images/logo.png'

const IconoCampana = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 22a2.5 2.5 0 002.4-1.8H9.6A2.5 2.5 0 0012 22zm7-6.5V11a7 7 0 00-5.5-6.8V3.5a1.5 1.5 0 00-3 0v.7A7 7 0 005 11v4.5L3 17.5V19h18v-1.5z" />
  </svg>
)

const IconoUsuario = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a3.2 3.2 0 110 6.4A3.2 3.2 0 0112 6zm0 14a8 8 0 01-6.3-3.1C6.2 15 9.2 14 12 14s5.8 1 6.3 2.9A8 8 0 0112 20z"
    />
  </svg>
)

const IconoFlecha = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

function Headertop({
  menuOpen = false,
  toggleMenu = () => {},
  userName = 'Consuelo casas',
  userRole = 'Bienestar',
  subtitle = 'SENA - Panel Bienestar',
}) {
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

          <div id="perfil" className="user-section">
            <div className="user-info">
              <span className="user-name">{userName}</span>
              <span className="user-role">{userRole}</span>
            </div>
            <span className="user-avatar"><IconoUsuario /></span>
            <span className="user-chevron"><IconoFlecha /></span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Headertop
