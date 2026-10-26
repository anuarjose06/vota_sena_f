import { useState } from "react";
import "./VerificacionSeguridad.css";

function generarCodigo() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let codigo = "";

    for (let i = 0; i < 6; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return codigo;
}

function VerificacionSeguridad({ onVerificado }) {
    const [codigo, setCodigo] = useState(generarCodigo());
    const [respuesta, setRespuesta] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [verificado, setVerificado] = useState(false);

    function verificarCodigo() {
        if (respuesta.trim().toUpperCase() === codigo.toUpperCase()) {
            setMensaje("Verificación completada correctamente.");
            setVerificado(true);
            onVerificado(true);
        } else {
            setMensaje("Código incorrecto. Intenta nuevamente.");
            setCodigo(generarCodigo());
            setRespuesta("");
            setVerificado(false);
            onVerificado(false);
        }
    }

    function recargarCodigo() {
        setCodigo(generarCodigo());
        setRespuesta("");
        setMensaje("");
        setVerificado(false);
        onVerificado(false);
    }

    return (
        <div className="verificacion">

            <div className="captcha-imagen">
                {codigo}
            </div>

            <button
                type="button"
                className="captcha-recargar"
                onClick={recargarCodigo}
            >
                Generar otro código
            </button>

            <input
                type="text"
                placeholder="Ingrese el código"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
                maxLength={6}
                disabled={verificado}
            />

            <button
                type="button"
                className="captcha-verificar"
                onClick={verificarCodigo}
                disabled={verificado}
            >
                {verificado ? "Verificado" : "Verificar código"}
            </button>

            {mensaje && (
                <p className={`mensaje ${verificado ? "exito" : "error"}`}>
                    {mensaje}
                </p>
            )}
        </div>
    );
}

export default VerificacionSeguridad;