import { useState } from "react";
import "./CambiarContrasena.css";

function CambiarContrasena({ onCerrar }) {
  const [mensajeContrasena, setMensajeContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const [contrasenas, setContrasenas] = useState({
    actual: "",
    nueva: "",
    confirmar: ""
  });

  function cambiarContrasena(e) {
    setContrasenas({
      ...contrasenas,
      [e.target.name]: e.target.value
    });
  }

  function cerrarModal() {
    setMensajeContrasena("");
    setMostrarContrasena(false);

    setContrasenas({
      actual: "",
      nueva: "",
      confirmar: ""
    });

    onCerrar();
  }

  function actualizarContrasena(e) {
    e.preventDefault();

    if (
      contrasenas.actual === "" ||
      contrasenas.nueva === "" ||
      contrasenas.confirmar === ""
    ) {
      setMensajeContrasena("Completa todos los campos.");
      return;
    }

    if (contrasenas.nueva.length < 8) {
      setMensajeContrasena(
        "La nueva contraseña debe tener mínimo 8 caracteres."
      );
      return;
    }

    if (contrasenas.nueva !== contrasenas.confirmar) {
      setMensajeContrasena("Las contraseñas no coinciden.");
      return;
    }

    setMensajeContrasena("Contraseña actualizada correctamente.");
  }

  return (
    <div className="perfil-modal-fondo">

      <div className="perfil-modal">

        <div className="perfil-modal-cabecera">
          <h2>Cambiar contraseña</h2>

          <button
            type="button"
            className="perfil-modal-cerrar"
            onClick={cerrarModal}
          >
            ×
          </button>
        </div>

        <p>
          Ingresa tu contraseña actual y establece una nueva.
        </p>

        <form onSubmit={actualizarContrasena}>

          <div className="perfil-formulario">

            <div className="perfil-campo">
              <label htmlFor="actual">Contraseña actual</label>

              <input
                id="actual"
                type={mostrarContrasena ? "text" : "password"}
                name="actual"
                value={contrasenas.actual}
                onChange={cambiarContrasena}
                placeholder="Ingresa tu contraseña actual"
              />
            </div>

            <div className="perfil-campo">
              <label htmlFor="nueva">Nueva contraseña</label>

              <input
                id="nueva"
                type={mostrarContrasena ? "text" : "password"}
                name="nueva"
                value={contrasenas.nueva}
                onChange={cambiarContrasena}
                placeholder="Ingresa tu nueva contraseña"
              />
            </div>

            <div className="perfil-campo">
              <label htmlFor="confirmar">Confirmar nueva contraseña</label>

              <input
                id="confirmar"
                type={mostrarContrasena ? "text" : "password"}
                name="confirmar"
                value={contrasenas.confirmar}
                onChange={cambiarContrasena}
                placeholder="Confirma tu nueva contraseña"
              />
            </div>

          </div>

          <label className="perfil-mostrar-contrasena">
            <input
              type="checkbox"
              checked={mostrarContrasena}
              onChange={(e) =>
                setMostrarContrasena(e.target.checked)
              }
            />
            Mostrar contraseñas
          </label>

          {mensajeContrasena && (
            <p className="perfil-mensaje">
              {mensajeContrasena}
            </p>
          )}

          <div className="perfil-acciones">

            <button
              type="button"
              className="perfil-btn-secundario"
              onClick={cerrarModal}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="perfil-btn-principal"
            >
              Guardar contraseña
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CambiarContrasena;