export const BienvenidaSeccion = ({ userName }) => {
  return (
    <section id="inicio" className="welcome-section">
      <h1 className="welcome-title">Hola, {userName}</h1>
      <p className="welcome-subtitle">
        Desde aquí puedes votar, consultar cómo avanza la votación y revisar tu perfil.
      </p>
    </section>
  );
};

export default BienvenidaSeccion;