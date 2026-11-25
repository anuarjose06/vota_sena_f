import { useState, useEffect } from 'react'
import './registrarInstructor.css'
import Headertop from '../../components/Header/Header.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import menuBienestar from '../../components/Sidebar/menus/MenuBienestar.jsx'
import TarjetaGlobal from '../../components/tarjetaGlobal/Tarjetaglobal.jsx'
import BotonCambio from "../registrarAprendiz/components/botonCambio/BotonCambio.jsx";
import SelectorCentro from "../registrarAprendiz/components/selectorCentro/SelectorCentro.jsx";
import SubirFoto from "../registrarAprendiz/components/subirFoto/SubirFoto.jsx";


const USUARIO = { nombre: "Consuelo casas", rol: "Bienestar" };


function RegistrarInstructor() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen((v) => !v);
    const cerrarMenu = () => setMenuOpen(false)

    const [botonActivo, setBotonActivo] = useState(1);
    const [fotoinstructor, setFotoinstructor] = useState(null)

    const opciones = [
        { id: 1, texto: 'Registrar Instructor' },
        { id: 3, texto: 'Estado y Permisos' },
    ];


    return (
        <div className="container-registrar-instructor">
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
                        <h1>Registrar Nuevo Instructor</h1>
                        <p>Completa los datos del instructor para habilitarlo en el sistema de votación.</p>
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
                                titulo={'Datos Personales Del Instructor'}
                                descripcion={'Información Personal Básica Del Instructor'}
                            >
                                <form>
                                    <div className="foto-upload-container">
                                        <SubirFoto onFotoSeleccionada={(archivo) => setFotoinstructor(archivo)} />
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
                                        <input type="email" required placeholder="Ingrese Correo Personal" />
                                    </div>
                                    <div>
                                        <label>Correo Institucional</label>
                                        <input type="email" required placeholder="Ingrese Correo Institucional" />
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

export default RegistrarInstructor;
