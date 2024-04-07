import { Router } from "express";
import routeProducto from "./producto.routes.js";
import authRouter from "./auth.routes.js"

const route = Router();

route.use('/producto', routeProducto)
route.use('/auth', authRouter);

export default route;