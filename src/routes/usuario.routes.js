import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller.js";

const usuarioRouter = Router();

/**
 * Registrar usuario
 * validacion de campos: email, password, nombre, apellido
 */
usuarioRouter.post('/registrar', crearUsuario);

export default usuarioRouter;