import "./botonCambio.css";

function BotonCambio({ texto, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`boton-cambio ${isActive ? "activo" : ""}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default BotonCambio;
