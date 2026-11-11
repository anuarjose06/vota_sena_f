import { useState } from "react";
import "./Perfil.css";

function Perfil() {
  const [editando, setEditando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const [usuario, setUsuario] = useState({
    documento: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    ciudad: "",
    direccion: "",
    telefono: "",
    correoInstitucional: "",
    correoPersonal: "",
    fechaNacimiento: "",
    contrasena: ""
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
    {
      nombre: "fechaNacimiento",
      etiqueta: "Fecha de nacimiento",
      tipo: "date"
    },
    {
      nombre: "contrasena",
      etiqueta: "Nueva contraseña",
      tipo: "password"
    }
  ];

  function cambiarDato(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function actualizarInformacion(e) {
    e.preventDefault();

    setEditando(false);
    setMensaje("Los cambios se actualizaron.");
  }

  return (
    <div className="perfil-contenedor">

      <div className="perfil-titulo">
        <h1>Mi perfil</h1>
        <p>Consulta y administra tu información personal.</p>
      </div>

      <div className="perfil-tarjeta">

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

            <p>Información personal de VitaSena</p>

            <span className="perfil-estado">
              Cuenta activa
            </span>

          </div>

        </div>

        <form onSubmit={actualizarInformacion}>

          <div className="perfil-seccion-titulo">
            <h3>Información personal</h3>
            <p>Completa los siguientes datos de tu perfil.</p>
          </div>

          <div className="perfil-formulario">

            {campos.map((campo) => (
              <div className="perfil-campo" key={campo.nombre}>

                <label htmlFor={campo.nombre}>
                  {campo.etiqueta}
                </label>

                <input
                  id={campo.nombre}
                  type={campo.tipo || "text"}
                  name={campo.nombre}
                  value={usuario[campo.nombre]}
                  onChange={cambiarDato}
                  disabled={!editando}
                  placeholder={
                    campo.nombre === "contrasena"
                      ? "Ingresa una nueva contraseña"
                      : "Ingresa tu información"
                  }
                  autoComplete={
                    campo.nombre === "contrasena"
                      ? "new-password"
                      : "off"
                  }
                />

              </div>
            ))}

          </div>

          {mensaje && (
            <p className="perfil-mensaje">
              {mensaje}
            </p>
          )}

          <div className="perfil-acciones">

            {editando ? (
              <>
                <button
                  type="button"
                  className="perfil-btn-secundario"
                  onClick={() => {
                    setEditando(false);
                    setMensaje("");
                  }}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="perfil-btn-principal"
                >
                  Guardar cambios
                </button>
              </>
            ) : (
              <button
                type="button"
                className="perfil-btn-principal"
                onClick={() => {
                  setMensaje("");
                  setEditando(true);
                }}
              >
                Actualizar información
              </button>
            )}

          </div>

        </form>

      </div>

    </div>
  );
}

export default Perfil;
