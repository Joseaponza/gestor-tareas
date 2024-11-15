import { Router } from "express";
import { check } from "express-validator";
import { checkValidationResult } from "../middlewares/check-results.js";
import { asignarTarea } from "../controllers/tarea.controller.js";
import { validarJwt } from "../middlewares/validar-jwt.js";

const tareaRouter = Router();

tareaRouter.post('/',[
    validarJwt,
    checkValidationResult
], asignarTarea);

export default tareaRouter;