const obtenerVistaPrevia = (archivo) => {
    if (!archivo) return null;
    return URL.createObjectURL(archivo)
}
export default obtenerVistaPrevia;
