import { useEffect, useState } from 'react';

export const Ve_votar_card = ({ opensAt, closesAt, userStatus, notice, onEnter }) => {
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const openingDate = new Date(opensAt);
  const closingDate = new Date(closesAt);
  const votingStatus =
    currentTime < openingDate.getTime()
      ? 'proxima'
      : currentTime > closingDate.getTime()
        ? 'finalizada'
        : 'activa';
  const statusLabels = {
    activa: 'Activa',
    proxima: 'Próxima',
    finalizada: 'Finalizada',
  };
  const votingStarted = userStatus !== 'Habilitado para votar';
  const canStartVoting = votingStatus === 'activa' && !votingStarted;
  const formatDate = (date) =>
    new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'long',
    }).format(date);
  const formatTime = (date) =>
    new Intl.DateTimeFormat('es-CO', {
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);

  return (
    <div id="votar" className="voting-card">
      <div className="card-header">
        <h2 className="card-title">Ir a votar</h2>
        <span className={`badge-open badge-${votingStatus}`} role="status">
          {statusLabels[votingStatus]}
        </span>
      </div>

      <p className="card-description">
        Tienes un proceso de votación activo. Recuerda que solo puedes votar una vez.
      </p>

      <div className="info-grid">
         <div className="info-box">
          <span className="info-label">Fecha de apertura</span>
          <span className="info-value">{formatDate(openingDate)}</span>
        </div>

        <div className="info-box">
          <span className="info-label">Fecha límite</span>
          <span className="info-value">{formatDate(closingDate)}</span>
        </div>

        <div className="info-box">
          <span className="info-label">Hora de apertura</span>
          <span className="info-value">{formatTime(openingDate)}</span>
        </div>
       
        <div className="info-box">
          <span className="info-label">Hora de cierre</span>
          <span className="info-value">{formatTime(closingDate)}</span>
        </div>
        
      </div>

      <div className="info-box" style={{ marginBottom: '1.5rem' }}>
        <span className="info-label">Estado</span>
        <span className="info-value">{userStatus}</span>
      </div>

      <button
        className="btn-primary"
        onClick={() => {
          if (canStartVoting) onEnter();
        }}
        disabled={!canStartVoting}
      >
        {votingStatus === 'finalizada'
          ? 'Votación finalizada'
          : votingStatus === 'proxima'
            ? 'Próximamente'
            : votingStarted
              ? 'Votación en proceso'
              : 'Iniciar votación'}
      </button>
      {notice && <p className="voting-notice" role="status">{notice}</p>}
    </div>
  );
};

export default Ve_votar_card;