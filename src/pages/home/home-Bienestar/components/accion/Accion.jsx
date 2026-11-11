import "./accion.css";

function Accion({ icono, titulo, descripcion }) {
  return (
    <button type="button" className="bw-accion">
      <span className="bw-accion-texto">
        <span className="bw-accion-titulo">{titulo}</span>
        <span className="bw-accion-desc">{descripcion}</span>
      </span>
      <span className="bw-accion-icono">{icono}</span>
    </button>
  );
}
export default Accion;