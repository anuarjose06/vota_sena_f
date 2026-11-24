/* Esta logica se cambia cuando ya la heneracion la haga el servidor El backend se encargará de generar el CAPTCHA */
const generateCaptcha = () => {
    const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const valores = new Uint32Array(6);

    crypto.getRandomValues(valores);

    return Array.from(
        valores,
        numero => caracteres[numero % caracteres.length]
    ).join("");
};
export default generateCaptcha;