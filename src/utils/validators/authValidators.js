/*Validaciones del login de usuarios*/

export const validateSelect = (value, fieldName) => {
    if (!value || value.trim() === '') {
        const selectMessage = {
            tipoDocumento: 'Seleccione un tipo de documento',
            selectRole: 'Seleccione un rol' 
        }
        return selectMessage[fieldName] || 'Este campo es obligatorio';
    };
    return '';
};


export const validateInput = (value, type) => {
    if (!value || value.trim() === '') {
        const errorMessage = {
            documentNumber: 'Ingrese un número de documento',
            password: 'Ingrese una contraseña'
        }
        return errorMessage[type] || 'Este campo es obligatorio';
    }

    switch (type) {
        case 'documentNumber':
            if (!/^\d+$/.test(value)) {
                return 'El apartado solo debe contener números';
            }
            if (!/^\d{7,18}$/.test(value)) {
                return 'El número de documento debe tener entre 7 y 18 dígitos';
            }
            break;
        case 'password':
            // Aquí se pueden agregar validaciones específicas para la contraseña si es necesario.
            break;
        default:
            break;
    }
    return ''; // Retorna un string vacío si no hay errores
};
