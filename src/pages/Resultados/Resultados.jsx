import { useState, useEffect } from 'react'
import './resultados.css'
import Headertop from '../../components/Header/Header.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import menuBienestar from '../../components/Sidebar/menus/MenuBienestar.jsx'
import TarjetaGlobal from '../../components/tarjetaGlobal/Tarjetaglobal.jsx'
import BotonCambio from "../registrarAprendiz/components/botonCambio/BotonCambio.jsx";

const USUARIO = { nombre: 'Consuelo casas', rol: 'Bienestar' }

const opciones = [
  { id: 1, texto: 'Representantes' },
  { id: 2, texto: 'Voceros' },
]

// Datos de ejemplo: reemplazar por la respuesta del backend cuando esté disponible
const RESULTADOS = {
  1: [
    { id: 'A', nombre: 'Nahualt Mariottas', votos: 500 },
    { id: 'B', nombre: 'Daniel Barbosa', votos: 767 },
    { id: 'C', nombre: 'Rodrigo Alvarez', votos: 300 },
  ],
  2: [
    { id: 'A', nombre: 'Jimmy Albarracin', votos: 420 },
    { id: 'B', nombre: 'Thomas Prado', votos: 310 },
    { id: 'C', nombre: 'Andres Leon', votos: 540 },
  ],
}

const formatear = (n) => n.toLocaleString('es-CO')

function Resultados() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [opcionActiva, setOpcionActiva] = useState(opciones[0].id)
  const toggleMenu = () => setMenuOpen((v) => !v)
  const cerrarMenu = () => setMenuOpen(false)
  const candidatos = RESULTADOS[opcionActiva]
  const totalVotos = candidatos.reduce((suma, c) => suma + c.votos, 0)
  const maxVotos = Math.max(...candidatos.map((c) => c.votos), 1)
  const textoOpcion = opciones.find((o) => o.id === opcionActiva).texto

  return (
    <div className="res-container">
      <Sidebar
        menuOpen={menuOpen}
        onNavigate={cerrarMenu}
        links={menuBienestar}
        activeInicial="resultados"
      />

      <div className="res-columna">
        <Headertop
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          userName={USUARIO.nombre}
          userRole={USUARIO.rol}
        />

        <main className="res-main">
          <section className="res-encabezado">
            <h1>Resultados</h1>
            <p>Consulta los votos y el porcentaje obtenido por cada candidato.</p>
          </section>

          <div className="res-botones" role="group" aria-label="Tipo de elección">
            {opciones.map(({ id, texto }) => (
              <BotonCambio
                key={id}
                texto={texto}
                isActive={opcionActiva === id}
                onClick={() => setOpcionActiva(id)}
              />
            ))}
          </div>

          <div className="res-tarjeta">
            <TarjetaGlobal
              titulo={`Resultados de ${textoOpcion}`}
              descripcion="Votos totales y porcentaje por candidato."
            >
              <div className="bw-chip res-total">
                <span>Total votos</span>
                <strong>{formatear(totalVotos)}</strong>
              </div>

              <div
                className="res-grafico"
                role="img"
                aria-label={`Gráfico de barras de votos de ${textoOpcion}`}
              >
                {candidatos.map((c) => {
                  const porcentaje = (c.votos / totalVotos) * 100
                  return (
                    <div className={`res-columna-barra candidato-${c.id}`} key={c.id}>
                      <span className="res-votos">{formatear(c.votos)}</span>
                      <div className="res-barra-area">
                        <div
                          className="res-barra"
                          style={{ height: `${(c.votos / maxVotos) * 100}%` }}
                        />
                      </div>
                      <strong className="res-nombre">{c.nombre}</strong>
                      <span className="res-porcentaje">
                        {porcentaje.toFixed(1)}%
                      </span>
                    </div>
                  )
                })}
              </div>
            </TarjetaGlobal>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Resultados
