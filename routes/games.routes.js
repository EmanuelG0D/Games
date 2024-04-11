import { Router } from "express";
import gamesController from "../controllers/games.controller";
import { validate } from "../middlewares/validator.middlewares.js";
//Importar postGamesValidator

const routeGames = Router();

routeGames.get("/", gamesController.getGames)
routeGames.get("/:id", gamesController.getGamesById)
//routeGames.get("/gameName/:nombre juego", gamesController.getGamesByName)
//routeGames.post("/", validate(postGamesValidator), gamesController.postGames)
routeGames.put("/:id", gamesController.putGames)
//routeGames.delete("/:id", validate(deleteGamesValidator), gamesController.deleteGames)

export default routeGames;