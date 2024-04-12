import pgService from "../services/pg.service.js"


//traerlos todos
export const getGamesModel = async() => {
    const pg = new pgService();
    return await pg.connection.query(
        `SELECT * FROM GAMES`
    );
    
}

//buscar por ID
export async function getGamesByIdModel(id){
    try{
        const pg = new pgService();
        return await pg.connection.oneOrNone(
            `SELECT * FROM GAMES WHERE ID = $1`,
            [id]
    )
    }catch (error){
        return 'Esto es un error'
    }
    
}

//buscar por nombre
export async function getGamesByNameModel(GamesName) {
    try {
        const pg = new pgService();
        return await pg.connection.query(
            //sirve para seleccionar todas las filas de una tabla llamada "GAMES" donde el valor del campo "NAME" 
            //contenga parcialmente una cadena proporcionada, sin importar las mayúsculas o minúsculas.
            `SELECT * FROM GAMES WHERE LOWER(NAME) LIKE LOWER('%'||$1||'%')`, 
            [GamesName]
        );
    } catch (error) {
        return 'Esto es un error';
    }
}


//guardar 
export const postGamesModel = async (NAME, DETAIL, VALUE) => {
    const pg = new pgService();
        return await pg.connection.oneOrNone(
            `INSERT INTO GAMES (NAME, DETAIL, VALUE)
            VALUES
            ($1, $2, $3) RETURNING *`,
            [NAME, DETAIL, VALUE]
        )
}


//actualizar 
export const putGamesModel = async (id, NAME, DETAIL, VALUE) => {
    const pg = new pgService();
        return await pg.connection.query(
            `UPDATE GAMES
                SET DETAIL = $3,
                NAME=$2, 
                VALUE=$4
                WHERE ID = $1
            RETURNING *`,
            [id, NAME, DETAIL, VALUE]
        )
}


//eliminar
export const deleteGamesModel = async (id) => {
    try {
        const pg = new pgService();
        return await pg.connection.query(
            `DELETE FROM GAMES WHERE ID = $1 RETURNING *`,
            [id]
        );
    } catch (error) {
        return 'Esto es un error';
    }
}

//Verificar si el nombre y ID del juego ya esta registrado
export const GamesNameAlreadyExists = async (id, GamesName) => {
    try {
        const pg = new pgService();
        return await pg.connection.oneOrNone(
            `
            SELECT * FROM GAMES
            WHERE LOWER(NAME) = LOWER($2) AND ID <> $1
            `,
            [id, GamesName]
        );
    } catch (error) {
        return "Esto es un error";
    }
}


export const getGamesByNameUnique = async (GamesName) =>{
    try {
        const pg = new pgService();
        return await pg.connection.oneOrNone(
            //sirve para seleccionar todas las filas de una tabla llamada "GAMES" donde el valor del campo "NAME" 
            //contenga parcialmente una cadena proporcionada, sin importar las mayúsculas o minúsculas.
            `SELECT * FROM GAMES WHERE LOWER(NAME) = LOWER($1)`, 
            [GamesName]
        );
    } catch (error) {
        return 'Esto es un error';
    }
}