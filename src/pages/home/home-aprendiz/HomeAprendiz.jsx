import { useState } from 'react';
import HeaderTop from '../../../components/Header/Header.jsx';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';
import TarjetaGlobal from '../../../components/tarjetaGlobal/Tarjetaglobal.jsx';
import './homeAprendiz.css';

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

  return (
    <div className="aprendiz-container">
      <Sidebar
        menuOpen={menuOpen}
        onNavigate={() => setMenuOpen(false)}
        links={[
          { id: 'inicio', label: 'Inicio' },
          { id: 'votacion', label: 'Votación' },
          { id: 'progreso', label: 'Progreso' }
        ]}
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

          <div className="aprendiz-options">
            <TarjetaGlobal
              titulo="Ayuda y orientación"
              descripcion="Encuentra respuestas y recomendaciones para participar."
            >
              <details className="help-disclosure">
                <summary>
                  <span>
                    <strong>Guía paso a paso para votar</strong>
                    <small>Qué hacer antes de confirmar tu voto</small>
                  </span>
                  <span className="option-arrow" aria-hidden="true">›</span>
                </summary>
                <ol className="help-steps">
                  <li>Verifica que tu estado sea “Habilitado para votar”.</li>
                  <li>Revisa las opciones disponibles para cada elección.</li>
                  <li>Selecciona tus candidatos y confirma tu selección.</li>
                  <li>Comprueba el mensaje de confirmación antes de salir.</li>
                </ol>
              </details>

              <details className="help-disclosure">
                <summary>
                  <span>
                    <strong>Preguntas frecuentes</strong>
                    <small>Resuelve dudas sobre tu participación</small>
                  </span>
                  <span className="option-arrow" aria-hidden="true">›</span>
                </summary>
                <div className="help-faq">
                  <strong>¿Puedo cambiar mi voto?</strong>
                  <p>No. Una vez confirmado, el voto no se puede modificar.</p>
                  <strong>¿Qué hago si aparece un error?</strong>
                  <p>Comunícate con el área de Bienestar al Aprendiz de tu centro.</p>
                </div>
              </details>

              <details className="help-disclosure">
                <summary>
                  <span>
                    <strong>Soporte de Bienestar al Aprendiz</strong>
                    <small>Ayuda con tus datos o con el proceso</small>
                  </span>
                  <span className="option-arrow" aria-hidden="true">›</span>
                </summary>
                <p className="help-support">
                  Si encuentras un error, comunícate con Bienestar al Aprendiz de tu centro e indica qué inconveniente presentas. No compartas tu contraseña.
                </p>
              </details>
            </TarjetaGlobal>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeAprendiz;