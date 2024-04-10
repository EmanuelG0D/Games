

export const getGames = async (req, res) => {
    let data = await null;
    res.status(200).json({msg:'Datos de los juegos', data: data});
}

export const getGamesById = async (req, res) => {
    let{id} = req.params;
    let data = await null;
    res.status(200).json({msg: 'Datos del juego', data: data});
}

export const postGames = async (req, res) =>{
    //let {nombres base de datos} = req.body;

    let data = await null;
    res.status(200).json({msg: 'Esto es un post', data: data});
}

export const putGames = async(req, res) =>{
    //let {nombres base de datos} = req.body;
    let{id} = req.params
    let data = await null;
    res.status(200).json({msg: 'Esto es un put', data: data});
}

export const deleteGames = async(req, res) =>{

}

export default{
    getGames,
    getGamesById,
    postGames,
    putGames,
    deleteGames
}