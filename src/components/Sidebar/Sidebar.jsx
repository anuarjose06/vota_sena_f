import { useState } from 'react'
import logoSena from '../../assets/images/logo.png'
import './sidebar.css'

const Icono = ({ children }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    {children}
  </svg>
)

const sidebarLinks = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: <path d="M12 3L2 12h3v8h5v-5h4v5h5v-8h3z" />,
  },
  {
    id: 'votar',
    label: 'Ir a votar',
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4L6.6 12.2l1.4-1.4 2.8 2.8 5.2-5.2 1.4 1.4z"
      />
    ),
  },
  {
    id: 'resultados',
    label: 'Resultados',
    icon: <path d="M4 20V10h4v10zm6 0V4h4v16zm6 0v-7h4v7z" />,
  },
  {
    id: 'perfil',
    label: 'Perfil',
    icon: <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z" />,
  },
]

export default function Sidebar({
  menuOpen = false,
  onNavigate = () => {},

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
          {sidebarLinks.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`sidebar-link ${activeSection === id ? 'activo' : ''}`}
              aria-current={activeSection === id ? 'page' : undefined}
              onClick={() => handleNavigation(id)}
            >
              <span className="sidebar-icon" aria-hidden="true">
                <Icono>{icon}</Icono>
              </span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
