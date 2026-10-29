import { useState, useEffect } from "react";
import "./homeBienestar.css";
import Headertop from "../../../components/Header/Header.jsx";
import Sidebar from "../../../components/Sidebar/Sidebar.jsx";

const Icon = ({ children }) => (
  <svg
    className="bw-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconUserPlus = () => (
  <Icon>
    <circle cx="10" cy="8" r="3.5" />
    <path d="M3.5 20c0-3.6 2.9-6.5 6.5-6.5" />
    <path d="M18 9v6M15 12h6" />
  </Icon>
);
const IconUpload = () => (
  <Icon>
    <path d="M12 15V4" />
    <path d="M7.5 8.5L12 4l4.5 4.5" />
    <path d="M4 15v4a1 1 0 001 1h14a1 1 0 001-1v-4" />
  </Icon>
);
const IconStar = () => (
  <Icon>
    <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z" />
  </Icon>
);
const IconListSearch = () => (
  <Icon>
    <path d="M5 4h10a1 1 0 011 1v4" />
    <path d="M5 4a1 1 0 00-1 1v14a1 1 0 001 1h6" />
    <path d="M7.5 8h5M7.5 11.5h3" />
    <circle cx="16" cy="15.5" r="3" />
    <path d="M18.2 17.7L21 20.5" />
  </Icon>
);

const USUARIO = { nombre: "Consuelo casas", rol: "Bienestar" };

function Accion({ icono, titulo, descripcion }) {
  return (
    <button type="button" className="bw-accion">
      <span className="bw-accion-texto">
        <span className="bw-accion-titulo">{titulo}</span>
        <span className="bw-accion-desc">{descripcion}</span>
      </span>
      <span className="bw-accion-icono">{icono}</span>
    </button>
  );
}

function Tarjeta({ titulo, etiqueta, descripcion, children }) {
  return (
    <section className="bw-card">
      <div className="bw-card-cabecera">
        <div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
        <span className="bw-badge">{etiqueta}</span>
      </div>
      {children}
    </section>
  );
}

export default function Bienestar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [votacionAbierta, setVotacionAbierta] = useState(true);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const cerrarMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="bienestar-container">
      {/* BARRA LATERAL (en móvil se abre con el botón hamburguesa) */}
      <Sidebar menuOpen={menuOpen} onNavigate={cerrarMenu} />

      <div className="bienestar-columna">
        <Headertop
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          userName={USUARIO.nombre}
          userRole={USUARIO.rol}
        />

        {/* CONTENIDO PRINCIPAL */}
        <main className="main-content">
          <section className="welcome-banner">
            <h1>Bienvenido/a Consuelo Casas</h1>
            <h2>Panel Bienestar</h2>
            <p>Administrar aprendices, procesos de votación.</p>
          </section>

          <div className="dashboard-grid">
            {/* Tarjeta 1 */}
            <Tarjeta
              titulo="Registrar aprendices al sistema"
              etiqueta="Habilitación"
              descripcion="Agregar, actualizar o importar listado de aprendices habilitados para votar"
            >
              <Accion
                icono={<IconUserPlus />}
                titulo="Nuevo aprendiz"
                descripcion="Registro individual de aprendices con datos básicos"
              />
              <hr className="bw-divisor" />
              <Accion
                icono={<IconUpload />}
                titulo="Carga masiva"
                descripcion="Sube un archivo con varios aprendices."
              />
              <p className="bw-nota">
                Solo los aprendices registrados como “Activos” podrán ser
                habilitados para votar.
              </p>
            </Tarjeta>

            {/* Tarjeta 2 */}
            <Tarjeta
              titulo="Postular aprendices"
              etiqueta="Candidatos"
              descripcion="Selecciona y postula aprendices como candidatos para la votación."
            >
              <div className="bw-chips">
                <div className="bw-chip">
                  <span>Candidatos actuales</span>
                  <strong>5</strong>
                </div>
                <div className="bw-chip">
                  <span>Cupos máximos</span>
                  <strong>10</strong>
                </div>
              </div>
              <Accion
                icono={<IconStar />}
                titulo="Postular nuevo candidato"
                descripcion="Selecciona y postula aprendices como candidatos para la votación."
              />
              <hr className="bw-divisor" />
              <Accion
                icono={<IconListSearch />}
                titulo="Ver lista de postulados"
                descripcion="Consulta y edita la información de los postulados."
              />
            </Tarjeta>

            {/* Tarjeta 3 */}
            <Tarjeta
              titulo="Abrir y cerrar votación"
              etiqueta="Configuración"
              descripcion="Define fecha, horarios y el estado general del proceso de votación."
            >
              <div className="bw-chips">
                <div className="bw-chip">
                  <span>Fecha de apertura</span>
                  <strong>15 de octubre - 8:00 a.m.</strong>
                </div>
                <div className="bw-chip">
                  <span>Fecha de cierre</span>
                  <strong>15 de octubre - 8:00 a.m.</strong>
                </div>
              </div>
              <div className="bw-chip bw-chip-ancho">
                <span>Tu estado de votación</span>
                <strong>{votacionAbierta ? "Abierta" : "Cerrada"}</strong>
              </div>
              <div className="bw-botones">
                <button
                  type="button"
                  className="bw-btn"
                  disabled={votacionAbierta}
                  onClick={() => setVotacionAbierta(true)}
                >
                  Abrir votación
                </button>
                <button
                  type="button"
                  className="bw-btn"
                  disabled={!votacionAbierta}
                  onClick={() => setVotacionAbierta(false)}
                >
                  Cerrar votación
                </button>
                <button type="button" className="bw-btn">
                  Editar fecha y hora
                </button>
              </div>
            </Tarjeta>
          </div>
        </main>
      </div>
    </div>
  );
}
