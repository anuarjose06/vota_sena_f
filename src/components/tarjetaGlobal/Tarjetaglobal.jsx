import './tarjetaGlobal.css';

function TarjetaGlobal({ titulo, descripcion, etiqueta, children }) {
  return (
    <section className="bw-card">
      <div className="bw-card-cabecera">
        <div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
        {etiqueta && <span className="bw-badge">{etiqueta}</span>}
      </div>
      {children}
    </section>
  );
}

export default TarjetaGlobal;