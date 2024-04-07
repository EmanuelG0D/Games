import pgService from "../services/pg.service.js"

export const getProductoModel = async() => {
    const pg = new pgService();
    return await pg.connection.query(
        `SELECT * FROM PRODUCT`
    );
    
}

export async function getProductoUnicoModel(id){
    try{
        const pg = new pgService();
        return await pg.connection.query(
            `SELECT * FROM PRODUCT WHERE ID_PRODUCT = $1`,
            [id]
    )
    }catch (error){
        return 'Esto es un error'
    }
    
}

export const postProductoModel = async (DETAIL, NAME, VALUE) => {
    const pg = new pgService();
        return await pg.connection.oneOrNone(
            `INSERT INTO PRODUCT (DETAIL ,NAME, VALUE)
            VALUES
            ($1, $2, $3) RETURNING *`,
            [DETAIL, NAME, VALUE]
        )
}

export const putProductoModel = async (id, DETAIL, NAME, VALUE) => {
    const pg = new pgService();
        return await pg.connection.query(
            `UPDATE PRODUCT
                SET DETAIL = $2,
                NAME=$3, 
                VALUE=$4
                WHERE ID_PRODUCT = $1
            RETURNING *`,
            [id, DETAIL, NAME, VALUE]
        )
}