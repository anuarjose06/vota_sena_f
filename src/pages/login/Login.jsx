import { useState } from 'react';
import './login.css';
import BotonRol from './components/BotonRol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faYoutube, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { validateSelect, validateInput } from '../../utils/validators/authValidators';


function Login() {

    {/* Estado para manejar el rol seleccionado (Aprendiz o Administrativo) */ }
    const [rol, setRol] = useState('Aprendiz');
    const esAprendiz = rol === 'Aprendiz';

    {/*Const para validaciones de frontend */ }

    /*=========================================================================
        ESTADOS ATÓMICOS DE VALORES (Separados por tipo de elemento)
    ==========================================================================*/

    // Estado para manejar los valores seleccionados en los select del formulario
    const [selectValues, setSelectValues] = useState({
        tipoDocumento: '',
        selectRole: ''
    });

    // Estado para manejar los valores de los inputs del formulario y los errores correspondientes
    const [inputValues, setInputValues] = useState({ // Estado para manejar los valores de los inputs del formulario
        documentNumber: '',
        password: ''
    });
    
    /*=========================================================================
            ESTADOS ATÓMICOS DE ERRORES (Separados por tipo de elemento)
    ==========================================================================*/

    // Estado para manejar los mensajes de error de los inputs del formulario
    const [selectError, setSelectError] = useState({ // Estado para manejar los mensajes de error de los inputs
        tipoDocumento: '',
        selectRole: ''
    });

    const [inputError, setInputError] = useState({
        documentNumber: '',
        password: ''
    });

    /*=========================================================================
                        MANEJADORES ATÓMICOS DE CAMBIOS
    ==========================================================================*/


    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSelectValues({
            ...selectValues,
            [name]: value
        });
        const errorMessages = validateSelect(value, name);
        setSelectError({
            ...selectError,
            [name]: errorMessages
        });
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
        const errorMessages = validateInput(value, name);
        setInputError({
            ...inputError,
            [name]: errorMessages
        });
    };

    /*=========================================================================
                        Control de Envios
    ==========================================================================*/
    // let formTest = new FormGroup();
    //let formTest = new 
    //formTest.addControl('tipoDocumento', new FormControl(selectValues.tipoDocumento);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const errorTipoDocumento = validateSelect(selectValues.tipoDocumento, 'tipoDocumento');
        const errorSelectRole =  esAprendiz ? '' : validateSelect(selectValues.selectRole, 'selectRole');

        const errorDocumentNumber = validateInput(inputValues.documentNumber, 'documentNumber');
        const errorPassword = validateInput(inputValues.password, 'password');
        
        setSelectError({
            tipoDocumento: errorTipoDocumento,
            selectRole: errorSelectRole
        });
        
        
        setInputError({
            documentNumber: errorDocumentNumber,
            password: errorPassword
        });

        if (
            errorTipoDocumento === '' &&
            errorSelectRole === '' &&
            errorDocumentNumber === '' &&
            errorPassword === '' &&
            (!esAprendiz ? errorSelectRole === '' : true)
        ) {
            // Aquí puedes agregar la lógica para enviar el formulario si no hay errores
            console.log('Formulario enviado correctamente', { ...selectValues, ...inputValues });
        }
    };
    
    




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
                        <form onSubmit={handleSubmit} noValidate>
                            {esAprendiz ? (
                                <>
                                    <div>
                                        <select name="tipoDocumento" id="tipo-documento" value={selectValues.tipoDocumento} onChange={handleSelectChange}>
                                            <option value="" disabled>Seleccione un tipo de documento</option>
                                            <option value="cc">Cédula de Ciudadanía</option>
                                            <option value="ti">Tarjeta de Identidad</option>
                                            <option value="ce">Cédula de Extranjería</option>
                                            <option value="pp">Permiso Especial de Permanencia</option>
                                            <option value="pr">Permiso Por Protección Temporal</option>
                                        </select>
                                        {selectError.tipoDocumento && <span className="error-text" style={{ color: 'red', display: 'block' }}>{selectError.tipoDocumento}</span>}
                                    </div>
                                    <div>
                                        <input type="text" id="document-number" name="documentNumber" value={inputValues.documentNumber} onChange={handleInputChange} required placeholder='número de documento' />
                                    </div>
                                    {inputError.documentNumber && <span className="error-text" style={{ color: 'red', display: 'block' }}>{inputError.documentNumber}</span>}
                                    <div>
                                        <input type="password" id="password" name="password"  value={inputValues.password} onChange={handleInputChange} required placeholder='Contraseña' />
                                        {inputError.password && <span className="error-text" style={{ color: 'red', display: 'block' }}>{inputError.password}</span>}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <select name="tipoDocumento" id="tipo-documento" value={selectValues.tipoDocumento} onChange={handleSelectChange}>  {/*Esto se tiene que cambiar esto lo debera traer de una api de la base de datos y gual con el de arriba */}
                                            <option value="" disabled>Seleccione un tipo de documento</option>
                                            <option value="cc">Cédula de Ciudadanía</option>
                                            <option value="ti">Tarjeta de Identidad</option>
                                            <option value="ce">Cédula de Extranjería</option>
                                            <option value="pp">Permiso Especial de Permanencia</option>
                                            <option value="pr">Permiso Por Protección Temporal</option>
                                        </select>
                                        {selectError.tipoDocumento && <span className="error-text" style={{ color: 'red', display: 'block' }}>{selectError.tipoDocumento}</span>}
                                        <select name="selectRole" id="select-role" value={selectValues.selectRole} onChange={handleSelectChange}>
                                            <option value="" disabled>Seleccione un rol</option>
                                            <option value="admin">Bienestar al Aprendiz</option>
                                            <option value="instructores">Instructores</option>
                                            <option value="coordinador">Coordinador</option>
                                        </select>
                                        {selectError.selectRole && <span className="error-text" style={{ color: 'red', display: 'block' }}>{selectError.selectRole}</span>}
                                    </div>
                                    <div>
                                        <input type="text" id="document-number" name="documentNumber" value={inputValues.documentNumber} onChange={handleInputChange} required placeholder='número de documento' />
                                    </div>
                                    {inputError.documentNumber && <span className="error-text" style={{ color: 'red', display: 'block' }}>{inputError.documentNumber}</span>}
                                    <div>
                                        <input type="password" id="password" name="password" value={inputValues.password} onChange={handleInputChange} required placeholder='Contraseña' />
                                    {inputError.password && <span className="error-text" style={{ color: 'red', display: 'block' }}>{inputError.password}</span>}
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
                        <div className="social-icons">
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
