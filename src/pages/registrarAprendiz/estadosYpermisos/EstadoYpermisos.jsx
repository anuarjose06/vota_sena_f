
import { useState } from "react";

import Sidebar from "../../../components/Sidebar/Sidebar";
import menuBienestar from "../../../components/Sidebar/menus/MenuBienestar";
import Headertop from "../../../components/Header/Header";
import BotonCambio from "../components/botonCambio/BotonCambio";
import TarjetaGlobal from "../../../components/tarjetaGlobal/Tarjetaglobal";

import { buscarUsuarioMock } from "../../../data/usuariosMock";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import "./estadosYpermisos.css";

function EstadoYpermisos() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [botonActivo, setBotonActivo] = useState(3);

    // Estado de la búsqueda
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
    const [mensaje, setMensaje] = useState("");

    // Estado que se quiere asignar al usuario
    const [estadoSeleccionado, setEstadoSeleccionado] = useState("");


    const toggleMenu = () => setMenuOpen(v => !v);
    const cerrarMenu = () => setMenuOpen(false);

    const opciones = [
        { id: 1, texto: "Registrar Aprendiz" },
        { id: 2, texto: "Carga Masiva" },
        { id: 3, texto: "Estado y Permisos" },
    ];

    // Buscar usuario por documento
    const handleBuscar = () => {
        if (!numeroDocumento.trim()) {
            setMensaje("Ingrese un número de documento.");
            setUsuarioEncontrado(null);
            return;
        }

        const usuario = buscarUsuarioMock(numeroDocumento.trim());

        if (!usuario) {
            setUsuarioEncontrado(null);
            setMensaje("No se encontró ningún usuario con ese documento.");
            return;
        }

        setUsuarioEncontrado(usuario);
        setEstadoSeleccionado(usuario.estado);
        setUltimoCambio("—");
        setMensaje("");
    };

    // Limpiar búsqueda
    const handleLimpiar = () => {
        setNumeroDocumento("");
        setUsuarioEncontrado(null);
        setEstadoSeleccionado("");
        setUltimoCambio("—");
        setMensaje("");
    };

    // Guardar cambio de estado
    const handleGuardarEstado = () => {
        if (!usuarioEncontrado || !estadoSeleccionado) return;

        const usuarioActualizado = {
            ...usuarioEncontrado,
            estado: estadoSeleccionado,
        };

        setUsuarioEncontrado(usuarioActualizado);
        setUltimoCambio("Hoy");

        // En esta etapa el cambio solo se refleja en React.
        // Más adelante se guardará mediante una petición a Django.
    };

    const nombreCompleto = usuarioEncontrado
        ? [
            usuarioEncontrado.primerNombre,
            usuarioEncontrado.segundoNombre,
            usuarioEncontrado.primerApellido,
            usuarioEncontrado.segundoApellido,
        ].filter(Boolean).join(" ")
        : "";

    const estaActivo = usuarioEncontrado?.estado === "Activo";

    return (
        <div className="container-estado-y-permisos">

            <Sidebar
                menuOpen={menuOpen}
                onNavigate={cerrarMenu}
                links={menuBienestar}
            />

            <div className="estado-y-permisos-columna">

                <Headertop
                    menuOpen={menuOpen}
                    toggleMenu={toggleMenu}
                    userName="Consuelo casas"
                    userRole="Bienestar"
                />

                <main className="main-content-estado-y-permisos">
                    
                        <section className="banner">
                            <h1>Estado y Permisos de Aprendices</h1>
                            <p>
                                Consulta y gestiona los estados y permisos
                                de los aprendices en el sistema.
                            </p>
                        </section>

                        <section className="boton">
                            <div className="boton-cambio-section">
                                {opciones.map(opcion => (
                                    <BotonCambio
                                        key={opcion.id}
                                        texto={opcion.texto}
                                        isActive={botonActivo === opcion.id}
                                        onClick={() => setBotonActivo(opcion.id)}
                                    />
                                ))}
                            </div>
                        </section>
                    <section className="container-princial">
                        {/* 1. BÚSQUEDA */}
                        <section>
                            <TarjetaGlobal
                                titulo="Buscar Aprendiz"
                                descripcion="Filtra el registro por número de documento para encontrarlo más rápido."
                            >
                                <section className="look-for-section">

                                    <div className="look-for">
                                        <label>Número de Documento:</label>

                                        <input
                                            type="text"
                                            value={numeroDocumento}
                                            onChange={e => setNumeroDocumento(e.target.value)}
                                            placeholder="Ingrese número de documento"
                                        />
                                    </div>

                                    <div className="boton-guardar-cancelar">
                                        <button
                                            className="boton-submit"
                                            onClick={handleBuscar}
                                        >
                                            Buscar
                                        </button>

                                        <button
                                            className="boton-reset"
                                            onClick={handleLimpiar}
                                        >
                                            Limpiar Filtro
                                        </button>
                                    </div>

                                    {mensaje && (
                                        <p className="mensaje-busqueda">{mensaje}</p>
                                    )}

                                </section>
                            </TarjetaGlobal>
                        </section>

                        {/* RESULTADOS: SOLO APARECEN SI SE ENCUENTRA UN USUARIO */}
                        {usuarioEncontrado && (
                            <section className="resultados-busqueda">
                                <div className="control-participacion-container">
                                    {/* 2. CONTROL DE PARTICIPACIÓN */}
                                    <TarjetaGlobal
                                        titulo="Control de participación electoral"
                                        descripcion="Verifica rápidamente si el aprendiz está activo y habilitado para participar."
                                    >
                                        <div className="control-participacion">
                                            <span className={`estado-etiqueta ${estaActivo ? "activo" : "desactivado"}`}>
                                                {estaActivo
                                                    ? "Habilitado para participar"
                                                    : "Participación deshabilitada"}
                                            </span>
                                            <div className="resumen-estados">
                                                <div className="dato-resumen">
                                                    <span>Estado actual</span>
                                                    <strong>{usuarioEncontrado.estado}</strong>
                                                </div>
                                                <div className="dato-resumen">
                                                    <span>Habilitación general</span>
                                                    <strong>{estaActivo ? "Sí" : "No"}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </TarjetaGlobal>

                                    {/* 3. DATOS DEL APRENDIZ */}
                                    <TarjetaGlobal
                                        titulo="Datos del aprendiz"
                                        descripcion="Información principal del registro encontrado con el filtro de documento."
                                    >
                                        <div className="datos-aprendiz">
                                            <div className="perfil-aprendiz">
                                                <div className="foto-aprendiz">
                                                    {usuarioEncontrado.foto ? (
                                                        <img
                                                            src={usuarioEncontrado.foto}
                                                            alt="Foto del aprendiz"
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon icon={faUserCircle} />
                                                    )}
                                                </div>
                                                <div className="nombre-aprendiz">
                                                    <h3>{nombreCompleto}</h3>
                                                </div>
                                            </div>
                                            <div className="programa-y-estado">
                                                <div className="programa-aprendiz">
                                                    <p>
                                                        {usuarioEncontrado.programa || "Programa no registrado"}
                                                    </p>
                                                </div>
                                                <span className={`estado-etiqueta ${estaActivo ? "activo" : "desactivado"}`}>
                                                    {usuarioEncontrado.estado}
                                                </span>
                                            </div>

                                            <div className="detalles-aprendiz">

                                                <div className="dato-aprendiz">
                                                    <span>Documento</span>
                                                    <strong>{usuarioEncontrado.tipoDocumento}</strong>
                                                    <strong>{usuarioEncontrado.numeroDocumento}</strong>
                                                </div>

                                                <div className="dato-aprendiz">
                                                    <span>Ficha</span>
                                                    <strong>{usuarioEncontrado.ficha || "No registrada"}</strong>
                                                </div>

                                                <div className="dato-aprendiz">
                                                    <span>Jornada</span>
                                                    <strong>{usuarioEncontrado.jornada || "No registrada"}</strong>
                                                </div>

                                                <div className="dato-aprendiz centro">
                                                    <span>Centro</span>
                                                    <strong>{usuarioEncontrado.centro || "No registrado"}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </TarjetaGlobal>
                                </div>

                                {/* 4. CAMBIAR ESTADO */}
                                <TarjetaGlobal
                                    titulo="Cambiar estado de votación"
                                    descripcion="Selecciona el estado que tendrá el aprendiz dentro del proceso electoral."
                                >
                                    <div className="cambiar-estado">

                                        <p className="subtitulo-estado">Opciones de estado</p>

                                        <div className="opciones-estado">

                                            <button
                                                type="button"
                                                className={`opcion-estado ${estadoSeleccionado === "Activo" ? "seleccionado activo" : ""}`}
                                                onClick={() => setEstadoSeleccionado("Activo")}
                                            >
                                                <strong>Activo</strong>
                                                <span>
                                                    El aprendiz queda habilitado para participar,
                                                    siempre que cumpla los requisitos de cada elección.
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                className={`opcion-estado ${estadoSeleccionado === "Desactivado" ? "seleccionado desactivado" : ""}`}
                                                onClick={() => setEstadoSeleccionado("Desactivado")}
                                            >
                                                <strong>Desactivar</strong>
                                                <span>
                                                    El sistema bloquea su participación en todas
                                                    las elecciones.
                                                </span>
                                            </button>

                                        </div>

                                        <div className="resumen-cambio">

                                            <p>
                                                <span>Estado seleccionado</span>
                                                <strong>{estadoSeleccionado}</strong>
                                            </p>

                                            <p>
                                                <span>Habilitación general</span>
                                                <strong>
                                                    {estadoSeleccionado === "Activo"
                                                        ? "Habilitado"
                                                        : "Deshabilitado"}
                                                </strong>
                                            </p>

                                            <p>
                                                <span>Aplicará desde</span>
                                                <strong>Inmediatamente</strong>
                                            </p>

                                        </div>

                                        <div className="acciones-estado">

                                            <button
                                                className="boton-guardar-estado"
                                                onClick={handleGuardarEstado}
                                                disabled={
                                                    !estadoSeleccionado ||
                                                    estadoSeleccionado === usuarioEncontrado.estado
                                                }
                                            >
                                                Guardar cambio de estado
                                            </button>

                                            <button
                                                className="boton-volver"
                                                onClick={handleLimpiar}
                                            >
                                                Volver al listado
                                            </button>

                                        </div>

                                    </div>
                                </TarjetaGlobal>
                            </section>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}
export default EstadoYpermisos;
