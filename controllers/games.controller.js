

export const getGames = async (req, res) => {
    try{
        let data = await null;
        res.status(200).json({
            succes: true,
            data: data
        });
    }catch(error){
        res.status(500).json({
            data:[],
            msg: 'No hay servicio',
            succes: false
        });
    }
}

export const getGamesById = async (req, res) => {
    try{
    let{id} = req.params;
    let data = await null;
    if(!data){
        throw new Error("Juego no encontrado")
    }
    res.status(200).json({
        succes: true,
        data: data
    })
    }catch(error){
        res.status(204).json({
            data: [],
            msg: error.Error,
            succes:false
        });
    }
}

export const getGamesByName = async(req,res) =>{
    try{
        //let {nombre de video juego} = req.params;
        let data = await null;
        if(!data){
            throw new Error("Juego no encontrado")
        }
        res.status(200).json({
            succes: true,
            data: data
        });
        
    }catch(error){
        res.status(204).json({
            data: [],
            msg: error.Error,
            succes: false
        });
    }
}

export const postGames = async (req, res) =>{
    try{
        //let {nombres base de datos} = req.body;
        let data = await null;
        res.status(201).json({
            succes: true,
            data: data
        });
    }catch(error){
        res.status(500).json({
            data: [],
            msg: "Servicio no disponible",
            succes: false
        });
    }
}

export const putGames = async(req, res) =>{
    try{
        //let {nombres base de datos} = req.body;
        let{id} = req.params
        let data = await null;
        res.status(200).json({
            succes: true,
            data: data
        });
    }catch(error){
        res.status(500).json({
            data: [],
            msg: "Servicio no disponible",
            succes: false
        });
    }

    
    res.status(200).json({msg: 'Esto es un put', data: data});
}

export const deleteGames = async(req, res) =>{
    try{
        let {id} = req.params;
        let data = await null;
        res.status(200).json({
            succes: true,
            data: data
        });
    }catch(error){
        res.status(500).json({
            data: [],
            msg: "Servicio no disponible",
            succes: false
        })
    }
}

export default{
    getGames,
    getGamesById,
    getGamesByName,
    postGames,
    putGames,
    deleteGames
}