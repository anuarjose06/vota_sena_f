import "./tarjeta.css";

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

export default Tarjeta;
