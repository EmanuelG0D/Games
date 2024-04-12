import { Router } from "express";
import authRouter from "./auth.routes.js"
import routeGames from "./games.routes.js";

const route = Router();

route.use('/games', routeGames);
route.use('/auth', authRouter);

export default route;