import { useState } from 'react';
import HeaderTop from '../../../components/Header/Header.jsx';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';
import TarjetaGlobal from '../../../components/tarjetaGlobal/Tarjetaglobal.jsx';
import './homeAprendiz.css';
import menuAprendiz from '../../../components/Sidebar/menus/MenuAprendiz.jsx';
export const HomeAprendiz = ({ userName = 'Anuar contreras' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [votingNotice, setVotingNotice] = useState('');
  const userStatus = 'Habilitado para votar';
  const votingData = {
    opensDate: "15 de octubre",
    opensTime: "8:00 a. m.",
    closesDate: "30 de octubre",
    closesTime: "5:00 p. m.",
    participationPercentage: 70,
    metaPercentage: 80,
    spokespersonSession: "Período 2026 – Jornada diurna",
    representativeSession: "Período 2026 – Jornada diurna"
  };

  const cerrarMenu = () => setMenuOpen(false);

  return (
    <div className="aprendiz-container">
      <Sidebar
        menuOpen={menuOpen}
        onNavigate={cerrarMenu}
        links={menuAprendiz}
      />
      <div className="aprendiz-column">
        <HeaderTop
          userName={userName}
          menuOpen={menuOpen}
          toggleMenu={() => setMenuOpen((isOpen) => !isOpen)}
          userRole="Aprendiz"
          subtitle="SENA - Panel del Aprendiz"
        />
        <main className="aprendiz-main">
          <section className="aprendiz-welcome" id="inicio">
            <h1>Hola, {userName}</h1>
            <p>Desde aquí puedes votar, consultar el avance de la votación y revisar tu perfil.</p>
          </section>

          <div id="votacion">
            <TarjetaGlobal
              titulo="Tu proceso electoral"
              descripcion="Elección de representantes · Período 2026."
              etiqueta="Proceso abierto"
            >
              <div className="voting-deadlines">
                <div className="voting-deadline">
                  <span>Inicio de votación</span>
                  <strong>{votingData.opensDate}</strong>
                  <small>{votingData.opensTime}</small>
                </div>
                <div className="voting-deadline">
                  <span>Cierre de votación</span>
                  <strong>{votingData.closesDate}</strong>
                  <small>{votingData.closesTime}</small>
                </div>
              </div>
              <div className="voting-status">
                <span>Estado de tu habilitación</span>
                <strong>{userStatus}</strong>
              </div>
              <p className="process-reminder">
                Recuerda: solo puedes enviar un voto y no podrás cambiarlo después de confirmarlo.
              </p>
              <button className="enter-voting-btn" type="button" onClick={() => setVotingNotice('El módulo de votación aún no está conectado.')}>
                Participar en la votación
              </button>
              {votingNotice && <p className="aprendiz-notice">{votingNotice}</p>}
            </TarjetaGlobal>
          </div>

          <div id="progreso">
            <TarjetaGlobal
              titulo="Participación del centro"
              descripcion="Avance general de la jornada electoral."
            >
              <div className="participation-overview">
                <strong>{votingData.participationPercentage}%</strong>
                <span>de participación<br />en el centro</span>
              </div>
              <div className="participation-heading">
                <span>Participación actual</span>
                <strong>Meta: {votingData.metaPercentage}%</strong>
              </div>
              <div
                className="participation-bar"
                role="progressbar"
                aria-label="Participación electoral del centro"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={votingData.participationPercentage}
              >
                <span style={{ width: `${votingData.participationPercentage}%` }} />
              </div>
              <p className="participation-caption">
                {votingData.metaPercentage - votingData.participationPercentage} puntos porcentuales para alcanzar la meta.
              </p>
              <p className="election-list-title">Elecciones del período</p>
              <div className="representative-row">
                <div>
                  <strong>Representante de voceros</strong>
                  <span>{votingData.spokespersonSession}</span>
                </div>
                <span className="representative-status open">Abierta</span>
              </div>
              <div className="representative-row">
                <div>
                  <strong>Representante de aprendices</strong>
                  <span>{votingData.representativeSession}</span>
                </div>
                <span className="representative-status next">Siguiente</span>
              </div>
            </TarjetaGlobal>
          </div>

        </main>
      </div>
    </div>
  );
};

export default HomeAprendiz;