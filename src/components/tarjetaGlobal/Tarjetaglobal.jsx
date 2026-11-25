function TarjetaGlobal({ titulo, descripcion, children }) {
  return (
    <section className="bw-card">
      <div className="bw-card-cabecera">
        <div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default TarjetaGlobal;