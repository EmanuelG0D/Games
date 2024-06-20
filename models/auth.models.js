import pgService from "../services/pg.service.js";

export const getUsuario = async (username, password, res)=> {
    try{
        const pg = new pgService();
        return await pg.connection.oneOrNone(`SELECT username FROM users
        WHERE username = $1 AND password = $2`,
         [username, password]);
    }catch(error){
        res.status(503).json({
            succes: false,
            msn: 'No se puede acceder temporalmente'
        });
    }
    
}