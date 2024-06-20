import { getUsuario } from "../models/auth.models.js"
import { generateToken } from "../services/token.service.js";


export const login = async (req, res)=>{
    try{

        let {username, password} = req.body;
        let data = await getUsuario(username, password, res);

        if(!data){
            throw new Error("Los datos son incorrectos");
        } 

        res.status(200).json({
            succes: true,
            token: generateToken(data),
            msn: 'Logeado correctamente'
        });

    }catch(error){        
        res.status(401).json({
            succes: false,
            token: '',
            msn: error.message
        });
    }
    
}