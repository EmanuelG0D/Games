import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { loginValidator } from "../validators/auth.validators.js";

const authRouter = Router();

authRouter.get("/", validate(loginValidator),login);

export default authRouter;