import './botonRol.css';

function BotonRol({ rol, esActivo, onClick }) {
    


    return (
        <div className="boton-rol-container">
            <button
                type="button"
                className={`boton-rol ${esActivo ? 'activo' : ''}`}
                onClick={onClick}
                disabled={esActivo}
            >
                {rol}
            </button>
        </div>
    );
}

export default BotonRol;