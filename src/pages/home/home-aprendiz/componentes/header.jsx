export default function Headertop({ userName = 'Aprendiz', menuOpen = false, toggleMenu = () => {} }) {
  return (
    <header className="bienestar-header">
      <div className="navbar-content">
        <div className="logo-section">
          <span className="sena-badge" aria-label="SENA">S</span>
          <span className="logo-title">VotaSena</span>
        </div>
        
        <div id="perfil" className="user-section">
          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-role">Aprendiz</span>
          </div>
          <div className="user-avatar">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Avatar"
            />
          </div>
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
        </div>
      </div>
    </header>
  )
}