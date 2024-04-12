import { deleteGamesModel, getGamesByIdModel, getGamesByNameModel, getGamesModel, postGamesModel, putGamesModel } from "../models/Games.model.js";


export const getGames = async (req, res) => {
    try{
        let data = await getGamesModel();
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
    let data = await getGamesByIdModel(id);
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
        let {GamesName} = req.params;
        let data = await getGamesByNameModel(GamesName);
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
        let {NAME, DETAIL, VALUE} = req.body;
        let data = await postGamesModel(NAME, DETAIL, VALUE);
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
        let {NAME, DETAIL, VALUE} = req.body;
        let{id} = req.params
        let data = await putGamesModel(id, NAME, DETAIL, VALUE);
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
        let data = await deleteGamesModel(id);
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