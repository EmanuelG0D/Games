import {checkSchema} from "express-validator";

export const postProductoValidator = checkSchema(
    {
        name:{
            errorMessage: 'Nombre no valido',
            notEmpty: true,
            isLength: {
                errorMessage: 'El mensaje debe ser minimo 1',
                options: {min: 1, max: 100}
            }
        },
        value: {
            matches: {options: /^[0-9]+$/},
            errorMessage: 'Valor no valido'
        }
    },
    ["body"]
);