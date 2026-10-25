export const Progreso_Votacion = ({ percentage, meta, spokespersonSession, representativeSession }) => {
  return (
    <div id="resultados" className="voting-card">
      <div className="card-header">
        <h2 className="card-title">Estado de la votación</h2>
        <div className="indicator-pill" />
      </div>

      <p className="card-description" style={{ marginBottom: '1.5rem' }}>
        Resumen de la participación actual en tu centro.
      </p>

      <div className="progress-container">
        <h3 className="progress-title">Participación actual</h3>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
        </div>
        <div className="progress-footer">
          <span>El {percentage} % de los aprendices ha votado.</span>
          <span>Meta: {meta} %</span>
        </div>
      </div>

      <div className="info-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="info-box">
          <span className="info-label">Representante de vocería</span>
          <span className="info-value" style={{ fontSize: '0.875rem' }}>{spokespersonSession}</span>
        </div>
        <div className="info-box">
          <span className="info-label">Representante de los aprendices</span>
          <span className="info-value" style={{ fontSize: '0.875rem' }}>{representativeSession}</span>
        </div>
      </div>

    </div>
  );
};

export default Progreso_Votacion;