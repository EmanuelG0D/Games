import {checkSchema} from "express-validator";
import { getGamesByNameModel, GamesNameAlreadyExists, getGamesByNameUnique } from '../models/Games.model.js'; 


// Validador para el ID
export const validateId = checkSchema({
    id: {
        in: ['params'],
        matches: {
            options: /^[0-9]+$/,
            errorMessage: 'Id invalido, debe contener solo números'
        },
        notEmpty: true
    }
});

//validador para el nombre del juego
export const getGamesByNameValidator = checkSchema({
    GamesName: {
        in: ['params'],
        trim: true,
        notEmpty: {
            errorMessage: 'El nombre del juego es requerido'
        }
    }
});

// Validador para la creación de un nuevo juego
export const postGamesValidator = checkSchema({
    name: {
        in: ['body'],
        trim: true,
        isLength: {
            errorMessage: 'El nombre del juego debe tener al menos un carácter',
            options: { min: 1 }
        },
        isLength: {
            errorMessage: 'El nombre del juego debe tener un máximo de 100 caracteres',
            options: { max: 100 }
        },
        custom: {
            options: async (value) => {
                if (!value) {
                    throw new Error('El nombre del juego no puede estar vacío');
                }
                const game = await getGamesByNameUnique(value);
                if (game) {
                    throw new Error('Ya existe un juego con este nombre');
                }
                return true;
            }
        }
    },
    detail: {
        in: ['body'],
        trim: true,
        isLength: {
            errorMessage: 'El detalle debe tener al menos un carácter',
            options: { min: 1 }
        },
        isLength: {
            errorMessage: 'El detalle del juego debe tener un máximo de 1000 caracteres',
            options: { max: 1000 }
        },
        custom: {
            options: async (value) => {
                if (!value) {
                    throw new Error('El detalle no puede estar vacío');
                }
                return true;
            }
        }
    },
    
    value: {
        in: ['body'],
        isFloat: {
            errorMessage: 'El valor del juego debe ser un valor positivo',
            options: {
                min: 0 
            }
        },
        matches: {
            errorMessage: 'valor inválido',
            options: /^[0-9]+(\.[0-9]+)?$/
        },
        custom: {
            options: async (value) => {
                if (!value) {
                    throw new Error('El valor no puede estar vacío');
                }
                return true;
            }
        }
    }
});


// Validador para la actualización de un juego
export const putGamesValidator = checkSchema({
    id: {
        in: ['params'],
        matches: {
            options: /^[0-9]+$/,
            errorMessage: 'ID inválido'
        },
        notEmpty: true
    },
    name: {
        in: ['body'],
        trim: true,
        isLength: {
            errorMessage: 'El nombre del juego debe tener al menos un carácter',
            options: { min: 1 }
        },
        isLength: {
            errorMessage: 'El nombre del juego debe tener un máximo de 100 caracteres',
            options: { max: 100 }
        },
        custom: {
            options: async (value, {req}) => {
                if (!value) {
                    throw new Error('El nombre del juego no puede estar vacío');
                }
                const game = await GamesNameAlreadyExists(req.query.id,value);
                if (game) {
                    throw new Error('Ya existe un juego con este nombre');
                }
                return true;
            }
        }
    },
    detail: {
        in: ['body'],
        trim: true,
        isLength: {
            errorMessage: 'El detalle debe tener al menos un carácter',
            options: { min: 1 }
        },
        isLength: {
            errorMessage: 'El detalle del juego debe tener un máximo de 1000 caracteres',
            options: { max: 1000 }
        },
        custom: {
            options: async (value) => {
                if (!value) {
                    throw new Error('El detalle no puede estar vacío');
                }
                return true;
            }
        }
    },
    
    value: {
        in: ['body'],
        isFloat: {
            errorMessage: 'El valor del juego debe ser un valor positivo',
            options: {
                min: 0 // El precio debe ser mayor que 0
            }
        },
        matches: {
            errorMessage: 'valor inválido',
            options: /^[0-9]+(\.[0-9]+)?$/
        },
        custom: {
            options: async (value) => {
                if (!value) {
                    throw new Error('El valor no puede estar vacío');
                }
                return true;
            }
        }
    }
});

