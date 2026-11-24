import "./captcha.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

function Captcha({ valor, onActualizar }) {

    // Valores para deformar los caracteres
    const rotaciones = [-20, 14, -12, 22, -16, 10];
    const desplazamientos = [3, -7, 5, -4, 6, -3];

    return (
        <div className="captcha-seccion">
            <label>Verificación de Seguridad</label>
            <div className="captcha-contenedor">
                <div className="captcha-imagen">
                    <div className="captcha-ruido"></div>
                    <div className="captcha-caracteres">
                        {valor.split("").map((caracter, index) => (
                            <span
                                key={index}
                                style={{
                                    transform: `
                                        rotate(${rotaciones[index]}deg)
                                        translateY(${desplazamientos[index]}px)
                                        skewX(${index % 2 === 0 ? -12 : 12}deg)
                                    `
                                }}
                            >
                                {caracter}
                            </span>
                        ))}

                    </div>
                </div>

                <button
                    type="button"
                    className="reset-captcha"
                    title="Generar nuevo CAPTCHA"
                    onClick={onActualizar}
                >
                    <FontAwesomeIcon icon={faRotateRight} />
                </button>

            </div>

            <p>Escribe los caracteres que ves en la imagen.</p>

        </div>
    );
}

export default Captcha;
