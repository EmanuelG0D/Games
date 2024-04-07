import { Router } from "express";
import productoController from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { postProductoValidator } from "../validators/producto.validator.js";

const routeProducto = Router();

routeProducto.get("/", productoController.getProducto)
routeProducto.get("/:id", productoController.getProductoUnico)
routeProducto.post("/", validate(postProductoValidator), productoController.postProducto)
routeProducto.put("/:id", productoController.putProducto)



export default routeProducto;