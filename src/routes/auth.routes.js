import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { check } from "express-validator";
import { checkValidationResult } from "../middlewares/check-results.js";

const authRouter = Router();

authRouter.post('/login',[
    check('correo', 'Correo obligatorio').isEmail(),
    check('password', 'Contraseña obligatoria').not().isEmpty(),
    checkValidationResult
], login);

export default authRouter;