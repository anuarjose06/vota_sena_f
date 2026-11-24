import { useState } from "react";
import "./recoverPassword.css"

import { validateInput } from "../../utils";
import { generateCaptcha } from "../../utils/index";

import Captcha from "./components/captcha/Captcha.jsx"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function RecoverPassword() {
    const [captchaGenerado, setCaptchaGenerado] = useState(generateCaptcha);
    const cambiarCaptcha = () => {
        setCaptchaGenerado(generateCaptcha());
    };

    const [inputValue, setInputValue] = useState({
        correo: '',
        captcha: ''
    })

    const [inputErrors, setInputErrors] = useState({
        correo: '',
        captcha: ''
    });

    // Obtener la fecha actual formateada
    const obtenerFechaActual = () => {
        const fecha = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opciones);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });
        const errorMessages = validateInput(value, name);
        setInputErrors({
            ...inputErrors,
            [name]: errorMessages
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorCorreo = validateInput(inputValue.correo, "correo");
        const errorCaptcha = validateInput(inputValue.captcha, "captcha");
        setInputErrors({
            correo: errorCorreo,
            captcha: errorCaptcha
        });
        if (!errorCorreo && !errorCaptcha) {
            // Aquí se puede agregar la lógica para continuar con la recuperación de contraseña
        };
        if (!errorCaptcha && inputValue.captcha.toUpperCase() !== captchaGenerado) {
            setInputErrors({
                ...inputErrors,
                captcha: "El CAPTCHA ingresado no coincide"
            });
        };

        // Generar un nuevo CAPTCHA al enviar el formulario
        setCaptchaGenerado(generateCaptcha());
    };
    return (
        <main className="container-principal">
            <div className="regresar-login">
                <a href="/login" >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </a>
            </div>
            <div className="fecha-regreso">
                <span className="fecha-regreso-label">Hoy es</span>
                <span className="fecha-regreso-valor">{obtenerFechaActual()}</span>
            </div>
            <section className="recover-password-section">
                <div className="logo">
                    <img src="./src/assets/images/logo.png" alt="Logo" />
                </div>
                <div>
                    <h1>Recuperar Contraseña</h1>
                    <p>Ingrese su correo electrónico para recuperar su contraseña.</p>
                </div>
                <form onSubmit={handleSubmit} className="recover-password-form">
                    <div className="recuperar-campos">
                        <input
                            name="correo"
                            id="email"
                            type="email"
                            placeholder="usuario@correo.com"
                            value={inputValue.correo}
                            onChange={handleInputChange}
                        />
                    </div>
                    {inputErrors.correo && <span className="error-message">{inputErrors.correo}</span>}
                    <Captcha
                        valor={captchaGenerado}
                        onActualizar={cambiarCaptcha}
                    />
                    <div className="recuperar-campos">
                        <input
                            name="captcha"
                            type="text" placeholder="Escribe los caracteres"
                            value={inputValue.captcha}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </div>
                    {inputErrors.captcha && <span className="error-message">{inputErrors.captcha}</span>}
                    <button type="submit">Verificar y Continuar</button>
                </form>
            </section>
        </main>
    );
}
export default RecoverPassword