
import Sidebar from "../../../components/Sidebar/Sidebar"
import { useState } from "react"

import menuBienestar from "../../../components/Sidebar/menus/MenuBienestar"
import Headertop from "../../../components/Header/Header"
import BotonCambio from "../components/botonCambio/BotonCambio"
import TarjetaGlobal from "../../../components/tarjetaGlobal/Tarjetaglobal"
import SelectorCentro from "../components/selectorCentro/SelectorCentro"
import SubirFoto from "../components/subirFoto/SubirFoto"

import "./registrarAprendiz.css"

const USUARIO = { nombre: "Consuelo casas", rol: "Bienestar" };


function RegistrarAprendiz() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen((v) => !v);
    const cerrarMenu = () => setMenuOpen(false)

    const [botonActivo, setBotonActivo] = useState(1);
    const [fotoAprendiz, setFotoAprendiz] = useState(null)

    const opciones = [
        { id: 1, texto: 'Registrar Aprendiz' },
        { id: 2, texto: 'Carga Masiva' },
        { id: 3, texto: 'Estado y Permisos' },
    ];


    return (
        <div className="container-registrar-aprendiz">
            <Sidebar menuOpen={menuOpen} onNavigate={cerrarMenu} links={menuBienestar} />

            <div className="register-columna">
                <Headertop
                    menuOpen={menuOpen}
                    toggleMenu={toggleMenu}
                    userName={USUARIO.nombre}
                    userRole={USUARIO.rol}
                />

                <main className="main-content-registrar">
                    <section className="banner">
                        <h1>Registrar Nuevo Aprendiz</h1>
                        <p>Completa los datos del alumno para habilitarlo en el sistema de votación.</p>
                    </section>
                    <section className="boton">
                        <div className="boton-cambio-section">
                            {opciones.map((opcion) => (
                                <BotonCambio
                                    key={opcion.id}
                                    texto={opcion.texto}
                                    isActive={botonActivo === opcion.id}
                                    onClick={() => setBotonActivo(opcion.id)}
                                />
                            ))}
                        </div>
                    </section>
                    <section className="from-register">
                        <div>
                            <TarjetaGlobal
                                titulo={'Datos Personales Del Aprendiz'}
                                descripcion={'Información Personal Básica Del Estudiante'}
                            >
                                <form>
                                    <div className="foto-upload-container">
                                        <SubirFoto onFotoSeleccionada={(archivo) => setFotoAprendiz(archivo)} />
                                    </div>
                                    <div>
                                        <label>Primer Nombre</label>
                                        <input type="text" required placeholder="Primer Nombre" />
                                    </div>
                                    <div>
                                        <label>Segundo Nombre</label>
                                        <input type="text" required placeholder="Segundo Nombre" />
                                    </div>
                                    <div>
                                        <label>Primer Apellido</label>
                                        <input type="text" required placeholder="Primer Apellido" />
                                    </div>
                                    <div>
                                        <label>Segundo Apellido</label>
                                        <input type="text" required placeholder="Segundo Apellido" />
                                    </div>
                                    <div>
                                        <label>Seleccione Tipo De Documento</label>
                                        <select name="tipoDocumento" id="tipo-documento" defaultValue="" required>
                                            <option value="" disabled>Seleccione un tipo de documento</option>
                                            <option value="cc">Cédula de Ciudadanía</option>
                                            <option value="ti">Tarjeta de Identidad</option>
                                            <option value="ce">Cédula de Extranjería</option>
                                            <option value="pp">Permiso Especial de Permanencia</option>
                                            <option value="pr">Permiso Por Protección Temporal</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Correo Personal</label>
                                        <input type="text" required placeholder="Ingrese Correo Personal" />
                                    </div>
                                    <div>
                                        <label>Correo Institucional</label>
                                        <input type="text" required placeholder="Ingrese Correo Institucional" />
                                    </div>
                                    <div>
                                        <label>Numero de Ficha</label>
                                        <input type="text" required placeholder="Ingrese Numero de Ficha" />
                                    </div>
                                    <div>
                                        <label>Direccion</label>
                                        <input type="text" required placeholder="Ingrese Direccion" />
                                    </div>
                                    <div>
                                        <label>Celular</label>
                                        <input type="text" required placeholder="Ingrese Numero Celular" />
                                    </div>
                                    <div>
                                        <SelectorCentro />
                                    </div>
                                    <div className="boton-guardar-cancelar">
                                        <div>
                                            <button className="boton-submit">Registrar</button>
                                        </div>
                                        <div>
                                            <button className="boton-reset">Limpiar</button>
                                        </div>
                                    </div>
                                </form>
                            </TarjetaGlobal>

                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default RegistrarAprendiz