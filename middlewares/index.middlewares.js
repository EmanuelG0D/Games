import { Router } from "express";
import { verifyToken } from "./token.middlewares.js";

const middleware = Router();

middleware.use("/game", verifyToken);

export default middleware;