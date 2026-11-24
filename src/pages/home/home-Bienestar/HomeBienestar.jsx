import { useState, useEffect } from "react";
import "./homeBienestar.css";
import Headertop from "../../../components/Header/Header.jsx";
import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import menuBienestar from "../../../components/Sidebar/menus/MenuBienestar.jsx";
/* Iconos de FontAwesome para las acciones del panel */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUpload, faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tarjeta from "./components/tarjeta/Tarjeta.jsx";
import Accion from "./components/accion/Accion.jsx";
import TarjetaGlobal from "../../../components/tarjetaGlobal/Tarjetaglobal.jsx";

const USUARIO = { nombre: "Consuelo casas", rol: "Bienestar" };

function Bienestar() {
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
      <Sidebar menuOpen={menuOpen} onNavigate={cerrarMenu} links={menuBienestar} />

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
                icono={<FontAwesomeIcon icon={faUserPlus} />}
                titulo="Nuevo aprendiz"
                descripcion="Registro individual de aprendices con datos básicos"
              />
              <hr className="bw-divisor" />
              <Accion
                icono={<FontAwesomeIcon icon={faUpload} />}
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
                icono={<FontAwesomeIcon icon={faStar} />}
                titulo="Postular nuevo candidato"
                descripcion="Selecciona y postula aprendices como candidatos para la votación."
              />
              <hr className="bw-divisor" />
              <Accion
                icono={<FontAwesomeIcon icon={faMagnifyingGlass} />}
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
            <TarjetaGlobal />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Bienestar;
