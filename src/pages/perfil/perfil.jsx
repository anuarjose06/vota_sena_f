import { useState } from "react";
import "./Perfil.css";

import TarjetaGlobal from "../../components/tarjetaGlobal/Tarjetaglobal";
import CambiarContrasena from "./components/cambiarContrasena";
import EncabezadoPerfil from "../../components/EncabezadoPerfil";

import Headertop from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Perfil() {
  const [editando, setEditando] = useState(false);
  const [modalContrasena, setModalContrasena] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [foto, setFoto] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const campos = [
    { nombre: "documento", etiqueta: "Número de documento", tipo: "text", editable: false },
    { nombre: "primerNombre", etiqueta: "Primer nombre", tipo: "text", editable: false },
    { nombre: "segundoNombre", etiqueta: "Segundo nombre", tipo: "text", editable: false },
    { nombre: "primerApellido", etiqueta: "Primer apellido", tipo: "text", editable: false },
    { nombre: "segundoApellido", etiqueta: "Segundo apellido", tipo: "text", editable: false },
    { nombre: "ciudad", etiqueta: "Ciudad de residencia", tipo: "text", editable: true },
    { nombre: "direccion", etiqueta: "Dirección", tipo: "text", editable: true },
    { nombre: "telefono", etiqueta: "Teléfono celular", tipo: "tel", editable: true },
    { nombre: "correoInstitucional", etiqueta: "Correo institucional", tipo: "email", editable: true },
    { nombre: "correoPersonal", etiqueta: "Correo personal", tipo: "email", editable: true },
    { nombre: "fechaNacimiento", etiqueta: "Fecha de nacimiento", tipo: "date", editable: false }
  ];

  function cambiarDato(e) {
    setUsuario({
      ...usuario,
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

  function seleccionarFoto(archivo) {
    const lector = new FileReader();

    lector.onload = () => {
      setFoto(lector.result);
    };

    lector.readAsDataURL(archivo);
  }

  return (
    <>
      <Headertop
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen(!menuOpen)}
      />

      <div className="layout-principal">

        <Sidebar
          menuOpen={menuOpen}
          onNavigate={() => setMenuOpen(false)}
        />

        <main className="contenido-principal">

          <div className="perfil-contenedor">

            <div className="perfil-titulo">
              <h1>Mi perfil</h1>
              <p>Consulta y administra tu información personal.</p>
            </div>

            <div className="perfil-tarjeta">

              <EncabezadoPerfil
                nombre={`${usuario.primerNombre} ${usuario.primerApellido}`}
                descripcion="Información personal de VotaSena"
                estado="Cuenta activa"
                foto={foto}
                onFotoChange={seleccionarFoto}
              />

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

                      {editando && campo.editable ? (
                        <input
                          id={campo.nombre}
                          type={campo.tipo}
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
                  <p className="perfil-mensaje">
                    {mensaje}
                  </p>
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
                    onClick={() => setModalContrasena(true)}
                  >
                    Cambiar contraseña
                  </button>

                </div>
              )}

            </div>

            {modalContrasena && (
              <CambiarContrasena
                onCerrar={() => setModalContrasena(false)}
              />
            )}

          </div>

        </main>

      </div>
    </>
  );
}

export default Perfil;