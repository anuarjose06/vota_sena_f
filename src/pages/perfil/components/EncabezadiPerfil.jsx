import "./EncabezadoPerfil.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function EncabezadoPerfil({
  nombre,
  descripcion,
  estado,
  foto,
  onFotoChange
}) {

  function seleccionarFoto(e) {
    const archivo = e.target.files[0];

    if (archivo && archivo.type.startsWith("image/")) {
      onFotoChange(archivo);
    }
  }

  return (
    <div className="encabezado-perfil">

      <label className="encabezado-perfil-foto">

        {foto ? (
          <img src={foto} alt="Foto de perfil" />
        ) : (
          <FontAwesomeIcon
            icon={faCircleUser}
            className="encabezado-perfil-avatar"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={seleccionarFoto}
        />

      </label>

      <div className="encabezado-perfil-identidad">

        <h2>{nombre}</h2>

        <p>{descripcion}</p>

        <span className="encabezado-perfil-estado">
          {estado}
        </span>

      </div>

    </div>
  );
}

export default EncabezadoPerfil;