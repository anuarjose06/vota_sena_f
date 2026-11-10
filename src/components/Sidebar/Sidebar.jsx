import { useState } from 'react'
import logoSena from '../../assets/images/logo.png'
import './sidebar.css'


export default function Sidebar({
  menuOpen = false,
  onNavigate = () => {},
  links = []

}) {
  const [activeSection, setActiveSection] = useState('inicio')

  const handleNavigation = (id) => {
    setActiveSection(id)
    onNavigate()
  }

  return (
    <>
      {/* Fondo oscuro: solo se ve en móvil/tablet cuando el menú está abierto */}
      <div
        className={`sidebar-backdrop ${menuOpen ? 'visible' : ''}`}
        onClick={onNavigate}
        aria-hidden="true"
      />
      <aside
        id="bw-sidebar"
        className={`sidebar ${menuOpen ? 'abierto' : ''}`}
        aria-label="Navegación lateral"
      >
        <div className="sidebar-brand">
          <img src={logoSena} alt="SENA" className="sidebar-logo" />
          <div className="sidebar-brand-text">
            <span className="sidebar-brand-title"><h2>SISTEMA DE</h2></span>
            <span className="sidebar-brand-sub"><h2>VOTACION</h2></span>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Secciones de la página">
          {links.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`sidebar-link ${activeSection === id ? 'activo' : ''}`}
              aria-current={activeSection === id ? 'page' : undefined}
              onClick={() => handleNavigation(id)}
            >
              <span className="sidebar-icon" aria-hidden="true">
                {icon}
              </span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
