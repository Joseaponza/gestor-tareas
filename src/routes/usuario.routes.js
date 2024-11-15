import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller.js";
import { check } from "express-validator";
import { checkValidationResult } from "../middlewares/check-results.js";

const usuarioRouter = Router();

/**
 * Registrar usuario
 * validacion de campos: email, password, nombre, apellido
 */
usuarioRouter.post('/registrar', [
    check('correo', 'Correo invalido.').isEmail(),
    check('password', 'La contraseña debe tener 6 caracteres o más.').isString({ min: 6 }),
    check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio.').not().isEmpty(),
    checkValidationResult
], crearUsuario);

export default usuarioRouter;