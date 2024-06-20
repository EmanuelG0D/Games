import { deleteGamesModel, getGamesByIdModel, getGamesByNameModel, getGamesModel, postGamesModel, putGamesModel } from "../models/Games.model.js";


export const getGames = async (req, res) => {
    try{
        let data = await getGamesModel(res);
        res.status(200).json({
            succes: true,
            data: data
        });
    }catch(error){
        console.log(error.message);
    }
}

export const getGamesById = async (req, res) => {
    try{

    let{id} = req.params;
    let data = await getGamesByIdModel(id,res);

    if(!data){
        throw new Error("Juego no encontrado")
    }

    res.status(200).json({
        succes: true,
        data: data
    });

    }catch(error){
        res.status(404).json({            
            msg: error.message,
            succes:false
        });
    }
}

export const getGamesByName = async(req,res) =>{
    try{

        let {GamesName} = req.params;
        let data = await getGamesByNameModel(GamesName,res);        
        res.status(200).json({
            succes: true,
            data: data
        });
        
    }catch(error){
        console.log(error.message);
    }
}

export const postGames = async (req, res) =>{
    try{
        let {name, detail, value, img} = req.body;
        let data = await postGamesModel(name, detail, value, img, res);
        res.status(201).json({
            succes: true,
            data: data
        });
    }catch(error){
        console.log(error.message);
    }
}

export const putGames = async(req, res) =>{
    try{

        let {name, detail, value, img} = req.body;
        let{id} = req.params;

        let game = await getGamesByIdModel(id,res);
        
        if(!game){
            throw new Error("Juego no encontrado")
        }

        let data = await putGamesModel(id,name,detail,value,img,res);
        res.status(200).json({
            succes: true,
            data: data
        });

    }catch(error){
        res.status(400).json({            
            msg: error.message,
            succes:false
        });
    }

}

export const deleteGames = async(req, res) =>{
    try{
        let {id} = req.params;
        let game = await getGamesByIdModel(id,res);
        if(!game){
            throw new Error("Juego no encontrado")
        }

        let data = await deleteGamesModel(id,res);
        res.status(200).json({
            succes: true,
            data: data
        });
    }catch(error){
        res.status(400).json({            
            msg: error.message,
            succes:false
        });
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