import { useState } from 'react';
import './login.css';
import BotonRol from './components/BotonRol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faYoutube, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';



function Login() {
    const [rol, setRol] = useState('Aprendiz');
    const esAprendiz = rol === 'Aprendiz';


    return (
        /* Sección de inicio de sesión del Aprendiz por defaul cuando se carga la página */
        <section className={`login-section ${esAprendiz ? 'aprendiz' : 'administrativo'}`}> {/* condicion ternaria para aplicar estilos según el rol */}
            <div className="principal-container">
                {/*panel de formulario de inicio de sesión */}
                <div className="login-form-container">
                    <div className="logo-container">
                        <img src="./src/assets/images/logo.png" alt="Logo SENA"></img>
                        <h1>Sistema de Votación</h1>
                        <p>Ingresa tus credenciales para continuar</p>
                    </div>
                    <div>
                        {/* Componente de los botones de cambio de rol aprendiz administrativo*/}
                        <BotonRol
                            rol="Aprendiz"
                            esActivo={esAprendiz}
                            onClick={() => setRol('Aprendiz')}
                        />
                        <BotonRol
                            rol="Administrativo"
                            esActivo={!esAprendiz}
                            onClick={() => setRol('Administrativo')}
                        />
                    </div>
                    <div>
                        <form>
                            {esAprendiz ? (
                                <>
                                    <div>
                                        <select name="Tipo de documento" id="tipo-documento">
                                            <option value="" disabled selected>Seleccione un tipo de documento</option>
                                            <option value="cc">Cédula de Ciudadanía</option>
                                            <option value="ti">Tarjeta de Identidad</option>
                                            <option value="ce">Cédula de Extranjería</option>
                                            <option value="pp">Permiso Especial de Permanencia</option>
                                            <option value="pr">Permiso Por Protección Temporal</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="text" id="document-number" name="document-number" required placeholder='número de documento' />
                                    </div>
                                    <div>
                                        <input type="password" id="password" name="password" required placeholder='Contraseña' />
                                    </div>
                                </>
                                ) : (
                                    <>
                                        <div>
                                            <select name="Tipo de documento" id="tipo-documento">  {/*Esto se tiene que cambiar esto lo debera traer de una api de la base de datos y gual con el de arriba */}
                                                <option value="" disabled selected>Seleccione un tipo de documento</option>
                                                <option value="cc">Cédula de Ciudadanía</option>
                                                <option value="ti">Tarjeta de Identidad</option>
                                                <option value="ce">Cédula de Extranjería</option>
                                                <option value="pp">Permiso Especial de Permanencia</option>
                                                <option value="pr">Permiso Por Protección Temporal</option>
                                            </select>
                                            <select name="select role" id="select-role">
                                                <option value="" disabled selected>Seleccione un rol</option>
                                                <option value="admin">Administrativo</option>
                                                <option value="aprendiz">Aprendiz</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input type="text" id="document-number" name="document-number" required placeholder='número de documento' />
                                        </div>
                                        <div>
                                            <input type="password" id="password" name="password" required placeholder='Contraseña' />
                                        </div>
                                    </>
                                )}
                                <div>
                                    <button type="submit">Ingresar al Sistema</button>
                                    <p>¿Olvidaste tu contraseña? <a href="#"> Recupera tu contraseña aquí</a></p>
                                </div>
                                <div>
                                    <h2>Tu voto Construye el futuro de nuestra comunidad</h2>
                                    <p>Sistema de votacion institucional. Participa, elige y haz escuchar tu voz en las decisiones importantes.</p>
                                </div>
                        </form>
                    </div>
                </div>
                <div className="login-panel-information">
                        <div className="login-panel-information-upper-while-zone">
                            <h2>{esAprendiz ? 'portal Aprendiz' : 'portal Administrativo'}</h2>
                            <p>
                                {esAprendiz ? 'Bienvenido al módulo de votaciones para aprendices.' 
                                : 'Bienvenido al módulo de gestión y control electoral.'}
                            </p>
                        </div>
                        <div className="login-panel-information-lower-zone">
                            <div  className="social-icons">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                                <p className="username">@SENAcomunica</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Login;
