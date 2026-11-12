import { useState } from "react";
import "./Perfil.css";
import TarjetaGlobal from "../../components/tarjetaGlobal/Tarjetaglobal";

function Perfil() {
  const [editando, setEditando] = useState(false);
  const [modalContrasena, setModalContrasena] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mensajeContrasena, setMensajeContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const [usuario, setUsuario] = useState({
    documento: "10234579",
    primerNombre: "Santiago",
    segundoNombre: "Andrés",
    primerApellido: "Gómez",
    segundoApellido: "López",
    ciudad: "Bogotá",
    direccion: "Calle 123 #45-67",
    telefono: "3001234567",
    correoInstitucional: "santiago.gomez@unal.edu.co",
    correoPersonal: "santiago.gomez@gmail.com",
    fechaNacimiento: "1990-01-01"
  });

  const [usuarioOriginal, setUsuarioOriginal] = useState({});

  const [contrasenas, setContrasenas] = useState({
    actual: "",
    nueva: "",
    confirmar: ""
  });

  const campos = [
    { nombre: "documento", etiqueta: "Número de documento" },
    { nombre: "primerNombre", etiqueta: "Primer nombre" },
    { nombre: "segundoNombre", etiqueta: "Segundo nombre" },
    { nombre: "primerApellido", etiqueta: "Primer apellido" },
    { nombre: "segundoApellido", etiqueta: "Segundo apellido" },
    { nombre: "ciudad", etiqueta: "Ciudad de residencia" },
    { nombre: "direccion", etiqueta: "Dirección" },
    { nombre: "telefono", etiqueta: "Teléfono celular" },
    { nombre: "correoInstitucional", etiqueta: "Correo institucional" },
    { nombre: "correoPersonal", etiqueta: "Correo personal" },
    { nombre: "fechaNacimiento", etiqueta: "Fecha de nacimiento" }
  ];

  function cambiarDato(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function cambiarContrasena(e) {
    setContrasenas({
      ...contrasenas,
      [e.target.name]: e.target.value
    });
  }

  function iniciarEdicion() {
    setUsuarioOriginal({ ...usuario });
    setMensaje("");
    setEditando(true);
  }

  function cancelarEdicion() {
    setUsuario({ ...usuarioOriginal });
    setEditando(false);
    setMensaje("");
  }

  function actualizarInformacion(e) {
    e.preventDefault();
    setEditando(false);
    setMensaje("Información guardada correctamente.");
  }

  function cerrarModal() {
    setModalContrasena(false);
    setMensajeContrasena("");
    setMostrarContrasena(false);

    setContrasenas({
      actual: "",
      nueva: "",
      confirmar: ""
    });
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

    setMensajeContrasena(
      "Las validaciones se completaron. Falta conectar el cambio de contraseña con Django."
    );
  }

  return (
    <div className="perfil-contenedor">

      {/* TITULO */}

      <div className="perfil-titulo">
        <h1>Mi perfil</h1>
        <p>Consulta y administra tu información personal.</p>
      </div>

      <div className="perfil-tarjeta">

        {/* CABECERA */}

        <div className="perfil-cabecera">

          <div className="perfil-foto">
            <span>
              {usuario.primerNombre
                ? usuario.primerNombre.charAt(0).toUpperCase()
                : "U"}
              {usuario.primerApellido
                ? usuario.primerApellido.charAt(0).toUpperCase()
                : ""}
            </span>
          </div>

          <div className="perfil-identidad">
            <h2>
              {usuario.primerNombre || "Nombre del usuario"}{" "}
              {usuario.primerApellido}
            </h2>
            <p>Información personal de VotaSena</p>
            <span className="perfil-estado">Cuenta activa</span>
          </div>

        </div>

        {/* INFORMACION PERSONAL */}

        <TarjetaGlobal
          titulo="Información personal"
          descripcion="Consulta y administra tus datos personales."
        >

          <div className="perfil-formulario">

            {campos.map((campo) => (
              <div className="perfil-campo" key={campo.nombre}>

                <label htmlFor={campo.nombre}>
                  {campo.etiqueta}
                </label>

                {editando ? (
                  <input
                    id={campo.nombre}
                    type={
                      campo.nombre === "fechaNacimiento"
                        ? "date"
                        : "text"
                    }
                    name={campo.nombre}
                    value={usuario[campo.nombre]}
                    onChange={cambiarDato}
                    placeholder="Ingresa tu información"
                  />
                ) : (
                  <p className="perfil-valor">
                    {usuario[campo.nombre] || "No registrado"}
                  </p>
                )}

              </div>
            ))}

          </div>

          {mensaje && (
            <p className="perfil-mensaje">{mensaje}</p>
          )}

          {editando && (
            <div className="perfil-acciones">

              <button
                type="button"
                className="perfil-btn-secundario"
                onClick={cancelarEdicion}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="perfil-btn-principal"
                onClick={actualizarInformacion}
              >
                Guardar cambios
              </button>

            </div>
          )}

        </TarjetaGlobal>

        {/* BOTONES DEBAJO DE LA TARJETA */}

        {!editando && (
          <div className="perfil-botones">

            <button
              type="button"
              className="perfil-btn-principal"
              onClick={iniciarEdicion}
            >
              Actualizar información
            </button>

            <button
              type="button"
              className="perfil-btn-secundario"
              onClick={() => {
                setMensajeContrasena("");
                setModalContrasena(true);
              }}
            >
              Cambiar contraseña
            </button>

          </div>
        )}

      </div>

      {/* VENTANA PARA CAMBIAR CONTRASEÑA */}

      {modalContrasena && (
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
                  <label htmlFor="actual">
                    Contraseña actual
                  </label>

                  <input
                    id="actual"
                    type="password"
                    name="actual"
                    value={contrasenas.actual}
                    onChange={cambiarContrasena}
                    placeholder="Ingresa tu contraseña actual"
                  />
                </div>

                <div className="perfil-campo">
                  <label htmlFor="nueva">
                    Nueva contraseña
                  </label>

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
                  <label htmlFor="confirmar">
                    Confirmar nueva contraseña
                  </label>

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
      )}

    </div>
  );
}

export default Perfil;