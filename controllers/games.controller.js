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
        let {name, detail, value} = req.body;
        let data = await postGamesModel(name, detail, value);
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
        let {name, detail, value} = req.body;
        let{id} = req.params;
        let data = await putGamesModel(id, name, detail, value);
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