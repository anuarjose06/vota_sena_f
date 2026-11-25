import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { obtenerVistaPrevia } from "../../../../utils"
import "./subirFoto.css"

function SubirFoto ({onFotoSeleccionada}) {
    const [vistaPrevia, setVistaPrevia] = useState(null)
    const inputRef = useRef(null)

    const handleClic = () => {
        inputRef.current.click();
    };

    const handleCambio = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            setVistaPrevia(obtenerVistaPrevia(archivo))
            if (onFotoSeleccionada) {
                onFotoSeleccionada(archivo);
            }
        }
    };

    return (
        <div className="photo-upload-container">
            <div className="upload-photo-circle" onClick={handleClic} title="Subir foto (opcional)">
                {vistaPrevia ? (
                    <img src={vistaPrevia} alt="Foto del Aprendiz" className="Upload-photo" />
                ) : (
                    <FontAwesomeIcon icon={faUserCircle} className="Upload-photo-icon" />
                )}
                <span className="Upload-photo-text">Subir foto (opcional)</span>

                <input 
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    className="hidden-photo-upload-input" 
                />
            </div>
        </div>
    );
}
export default SubirFoto
