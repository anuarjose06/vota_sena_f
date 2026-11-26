import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./postulacion.css";
import Headertop from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import menuBienestar from "../../components/Sidebar/menus/MenuBienestar.jsx";
import TarjetaGlobal from "../../components/tarjetaGlobal/Tarjetaglobal.jsx";
import { buscarUsuarioMock } from "../../data/usuariosMock";

const USUARIO = { nombre: "Consuelo casas", rol: "Bienestar" };

const TIPOS_DOCUMENTO = [
    { value: "CC", label: "Cédula de Ciudadanía" },
    { value: "TI", label: "Tarjeta de Identidad" },
    { value: "CE", label: "Cédula de Extranjería" },
    { value: "PEP", label: "Permiso Especial de Permanencia" },
    { value: "PPT", label: "Permiso Por Protección Temporal" },
];

const FORMULARIO_VACIO = { tipoDocumento: "", numeroDocumento: "", ficha: "" };

function TarjetaPostulacion({ titulo, descripcion, cargo }) {
    const idBase = useId();

    const [datos, setDatos] = useState(FORMULARIO_VACIO);
    const [postulado, setPostulado] = useState(null);
    const [mensaje, setMensaje] = useState("");

    const handleCambio = (e) => {
        const { name, value } = e.target;
        setDatos((anterior) => ({ ...anterior, [name]: value }));
    };

    const handleLimpiar = () => {
        setDatos(FORMULARIO_VACIO);
        setPostulado(null);
        setMensaje("");
    };

    const handleCerrarModal = () => setPostulado(null);

    const handlePostular = (e) => {
        e.preventDefault();

        const usuario = buscarUsuarioMock(datos.numeroDocumento.trim());

        if (!usuario) {
            setPostulado(null);
            setMensaje("No se encontró ningún aprendiz con ese número de documento.");
            return;
        }

        // Verifica que lo escrito coincida con el registro encontrado
        if (
            usuario.tipoDocumento !== datos.tipoDocumento ||
            usuario.ficha !== datos.ficha.trim()
        ) {
            setPostulado(null);
            setMensaje("El tipo de documento o la ficha no coinciden con el registro del aprendiz.");
            return;
        }

        setPostulado(usuario);
        setMensaje("");
    };

    const nombreCompleto = postulado
        ? [
            postulado.primerNombre,
            postulado.segundoNombre,
            postulado.primerApellido,
            postulado.segundoApellido,
        ].filter(Boolean).join(" ")
        : "";

    return (
        <TarjetaGlobal titulo={titulo} descripcion={descripcion}>
            <form className="post-form" onSubmit={handlePostular}>
                <div className="post-campo">
                    <label htmlFor={`${idBase}-tipo`}>Tipo De Documento</label>
                    <select
                        id={`${idBase}-tipo`}
                        name="tipoDocumento"
                        value={datos.tipoDocumento}
                        onChange={handleCambio}
                        required
                    >
                        <option value="" disabled>Seleccione un tipo de documento</option>
                        {TIPOS_DOCUMENTO.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>

                <div className="post-campo">
                    <label htmlFor={`${idBase}-documento`}>Número de Documento</label>
                    <input
                        id={`${idBase}-documento`}
                        type="text"
                        inputMode="numeric"
                        name="numeroDocumento"
                        value={datos.numeroDocumento}
                        onChange={handleCambio}
                        placeholder="Ingrese Número de Documento"
                        required
                    />
                </div>

                <div className="post-campo">
                    <label htmlFor={`${idBase}-ficha`}>Número de Ficha</label>
                    <input
                        id={`${idBase}-ficha`}
                        type="text"
                        inputMode="numeric"
                        name="ficha"
                        value={datos.ficha}
                        onChange={handleCambio}
                        placeholder="Ingrese Número de Ficha"
                        required
                    />
                </div>

                {mensaje && (
                    <p className="post-mensaje" role="alert">{mensaje}</p>
                )}

                <div className="boton-guardar-cancelar">
                    <div>
                        <button type="submit" className="boton-submit">Postular</button>
                    </div>
                    <div>
                        <button type="button" className="boton-reset" onClick={handleLimpiar}>
                            Limpiar
                        </button>
                    </div>
                </div>
            </form>
            {postulado && createPortal(
                <div className="post-modal-fondo" onClick={handleCerrarModal}>
                    <div
                        className="post-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`${idBase}-titulo-modal`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="post-modal-cerrar"
                            aria-label="Cerrar"
                            onClick={handleCerrarModal}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <span className="post-etiqueta">Postulado a {cargo}</span>

                        <div className="post-avatar">
                            {postulado.foto ? (
                                <img src={postulado.foto} alt={`Foto de ${nombreCompleto}`} />
                            ) : (
                                <FontAwesomeIcon icon={faUserCircle} />
                            )}
                        </div>

                        <h4 id={`${idBase}-titulo-modal`}>{nombreCompleto}</h4>

                        <div className="bw-chips">
                            <div className="bw-chip">
                                <span>Ficha</span>
                                <strong>{postulado.ficha}</strong>
                            </div>
                            <div className="bw-chip">
                                <span>Documento</span>
                                <strong>{postulado.tipoDocumento} {postulado.numeroDocumento}</strong>
                            </div>
                            <div className="bw-chip post-chip-ancho">
                                <span>Centro</span>
                                <strong>{postulado.centro}</strong>
                            </div>
                        </div>

                        <div className="boton-guardar-cancelar">
                            <div>
                                <button type="button" className="boton-submit" onClick={handleLimpiar}>
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </TarjetaGlobal>
    );
}

function Postulacion() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((v) => !v);
    const cerrarMenu = () => setMenuOpen(false);

    return (
        <div className="post-container">
            <Sidebar menuOpen={menuOpen} onNavigate={cerrarMenu} links={menuBienestar} />

            <div className="post-columna">
                <Headertop
                    menuOpen={menuOpen}
                    toggleMenu={toggleMenu}
                    userName={USUARIO.nombre}
                    userRole={USUARIO.rol}
                />

                <main className="post-main">
                    <section className="post-encabezado">
                        <h1>Postulaciones</h1>
                        <p>Postula aprendices como candidatos a vocero o a representante.</p>
                    </section>

                    <section className="post-tarjetas">
                        <TarjetaPostulacion
                            titulo="Representante"
                            descripcion="Busca al aprendiz por su documento y ficha para postularlo como representante."
                            cargo="representante"
                        />
                        <TarjetaPostulacion
                            titulo="Vocero"
                            descripcion="Busca al aprendiz por su documento y ficha para postularlo como vocero."
                            cargo="vocero"
                        />
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Postulacion;