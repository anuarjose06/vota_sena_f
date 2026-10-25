import { useState } from 'react';

const sidebarLinks = [
  { id: 'inicio', label: 'Inicio', icon: '⌂' },
  { id: 'votar', label: 'Ir a votar', icon: '✓' },
  { id: 'resultados', label: 'Resultados', icon: '▥' },
  { id: 'perfil', label: 'Perfil', icon: '◉' },
];

export default function Sidebar({ menuOpen, onNavigate }) {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigation = (id) => {
    setActiveSection(id);
    onNavigate();
  };

  return (
    <aside
      id="bw-sidebar"
      className={`sidebar ${menuOpen ? 'abierto' : ''}`}
      aria-label="Navegación lateral"
    >
      <p className="sidebar-title">Menú</p>
      <nav className="sidebar-nav" aria-label="Secciones de la página">
        {sidebarLinks.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`sidebar-link ${activeSection === id ? 'activo' : ''}`}
            aria-current={activeSection === id ? 'page' : undefined}
            onClick={() => handleNavigation(id)}
          >
            <span className="sidebar-icon" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}