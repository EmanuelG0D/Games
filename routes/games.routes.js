import { Router } from "express";
import gamesController from "../controllers/games.controller.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { getGamesByNameValidator, postGamesValidator, putGamesValidator, validateId } from "../validators/Games.validator.js";

const routeGames = Router();

routeGames.get("/", gamesController.getGames)
routeGames.get("/:id", validate(validateId), gamesController.getGamesById)
routeGames.get("/gameName/:GamesName", validate(getGamesByNameValidator),gamesController.getGamesByName)
routeGames.post("/", validate(postGamesValidator), gamesController.postGames)
routeGames.put("/:id", validate(putGamesValidator), gamesController.putGames)
routeGames.delete("/:id", validate(validateId), gamesController.deleteGames)

export default routeGames;