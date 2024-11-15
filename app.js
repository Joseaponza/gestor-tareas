import express from "express";
import dotenv from "dotenv";
import conectarDb from "./src/config/db.config.js";
import usuarioRouter from "./src/routes/usuario.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import tareaRouter from "./src/routes/tarea.routes.js";
dotenv.config();


const puerto = process.env.PORT;
const server = express();


//conexion a la base de datos
conectarDb();


//middlewares
server.use(express.json());


//rutas
server.use('/api/v1/usuarios', usuarioRouter);
server.use('/api/v1/auth', authRouter);
server.use('/api/v1/tareas', tareaRouter);


server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`)
})
