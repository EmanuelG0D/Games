import { getProductoModel, getProductoUnicoModel, postProductoModel, putProductoModel } from "../models/producto.model.js";


export  const getProducto = async (req, res)=>{
    let data = await getProductoModel();
    res.status(200).json({msg : 'esto es get', data: data});
}

export const getProductoUnico = async (req, res)=>{
    let { id } = req.params;
    let data = await getProductoUnicoModel(id);
    res.status(200).json({msg : 'esto es get', data: data});
}

export const postProducto = async (req, res)=>{
    let { DETAIL, NAME, VALUE } = req.body;

    let data = await postProductoModel(DETAIL, NAME, VALUE);
    res.status(200).json({msg : 'esto es post', data: data});
}

export const putProducto = async (req, res)=>{
    let {DETAIL, NAME, VALUE} = req.body;
    let { id } = req.params
    let data = await putProductoModel(id, DETAIL, NAME, VALUE);
    res.status(200).json({msg : 'esto es put', data: data});
}

export default{
    getProducto,
    getProductoUnico,
    postProducto,
    putProducto
}