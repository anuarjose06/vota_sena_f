
export const usuariosMock = [
    {
        id: 1,
        primerNombre: "Daniel",
        segundoNombre: "Andres",
        primerApellido: "Rodriguez",
        segundoApellido: "Perez",

        tipoDocumento: "CC",
        numeroDocumento: "1023456789",

        correoPersonal: "daniel@gmail.com",
        correoInstitucional: "daniel@soy.sena.edu.co",

        ficha: "228118",
        direccion: "Calle 10 # 15-20",
        celular: "3101234567",

        centro: "Centro Industrial y de Desarrollo Empresarial",

        foto: null,

        estado: "Activo"
    },

    {
        id: 2,
        primerNombre: "Laura",
        segundoNombre: "Maria",
        primerApellido: "Martinez",
        segundoApellido: "Gomez",

        tipoDocumento: "TI",
        numeroDocumento: "1005678901",

        correoPersonal: "laura@gmail.com",
        correoInstitucional: "laura@soy.sena.edu.co",

        ficha: "228119",
        direccion: "Carrera 8 # 20-15",
        celular: "3209876543",

        centro: "Centro Industrial y de Desarrollo Empresarial",

        foto: null,

        estado: "Desactivado"
    }
];

export const buscarUsuarioMock = (numeroDocumento) => {
    return usuariosMock.find(
        (usuario) => usuario.numeroDocumento === numeroDocumento
    ) || null;
};
