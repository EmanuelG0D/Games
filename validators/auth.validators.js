import { checkSchema } from "express-validator";
//garantizr que la solicitud de inicio de sesion tengan usuario y contraseña
// tambien (no estar vacíos y no tener espacios adicionales)
export const loginValidator = checkSchema({
    username: {
        in:['query'],
        trim:true,
        notEmpty:{
            errorMessage: 'Username is requierd'
        }
    },
    password: {
        in:['query'],
        trim:true,
        notEmpty:{
            errorMessage: 'Password is required'
        }
    }
});