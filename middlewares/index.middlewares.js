import { Router } from "express";
import { verifyToken } from "./token.middlewares.js";

const middleware = Router();

middleware.use("/games", verifyToken);

export default middleware;