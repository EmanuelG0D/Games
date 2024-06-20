import pgService from "../services/pg.service.js"


//traerlos todos
export const getGamesModel = async(res) => {
    try{
        const pg = new pgService();
        return await pg.connection.query(
            `SELECT * FROM GAMES`
        );
    }catch(error){
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        }); 
    }    
}

//buscar por ID
export async function getGamesByIdModel(id, res){
    try{
        const pg = new pgService();
        return await pg.connection.oneOrNone(
            `SELECT * FROM GAMES WHERE ID = $1`,
            [id]
    )
    }catch (error){
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
    }
    
}

//buscar por nombre
export async function getGamesByNameModel(GamesName, res) {
    try {
        const pg = new pgService();
        return await pg.connection.query(
            //sirve para seleccionar todas las filas de una tabla llamada "GAMES" donde el valor del campo "NAME" 
            //contenga parcialmente una cadena proporcionada, sin importar las mayúsculas o minúsculas.
            `SELECT * FROM GAMES WHERE LOWER(NAME) LIKE LOWER('%'||$1||'%')`, 
            [GamesName]
        );
    } catch (error) {
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
    }
}


//guardar 
export const postGamesModel = async (NAME, DETAIL, VALUE, IMG, res) => {
    try {
    const pg = new pgService();
        return await pg.connection.oneOrNone(
            `INSERT INTO GAMES (NAME, DETAIL, VALUE, IMG)
            VALUES
            ($1, $2, $3, $4) RETURNING *`,
            [NAME, DETAIL, VALUE, IMG]
        );
    } catch (error) {
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
    }
}


//actualizar 
export const putGamesModel = async (id, NAME, DETAIL, VALUE, IMG, res) => {
    try {
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
    } catch (error) {
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
    }
}


//eliminar
export const deleteGamesModel = async (id, res) => {
    try {
        const pg = new pgService();
        return await pg.connection.query(
            `DELETE FROM GAMES WHERE ID = $1 RETURNING *`,
            [id]
        );
    } catch (error) {
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
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
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
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
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
    }
}