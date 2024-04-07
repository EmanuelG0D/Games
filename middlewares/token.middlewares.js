import jwt, { decode } from "jsonwebtoken";
import {env} from "../config/default.js";

export const verifyToken = (req,res, next)=>{
    let token = req.headers["authorization"]
    if(!token){
        return res.status(401).json({
            success: false,
            msn: "Autorización requerida"
        })
    }

    token = token.split(" ")
    if(token[0] !== 'Bearer'){
        return res.status(401).json({
            success: false,
            msn: "Autorización requerida"
        })
    }

    jwt.verify(token[1], env.secret, (err, decode)=>{
        if(err){
            return res.status(401).json({
                success: false,
                msn: "Autorización requerida"
            }) 
        }
        next();
    })
}