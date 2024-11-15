import express from "express";
import dotenv from "dotenv";
import conectarDb from "./src/config/db.config.js";
import usuarioRouter from "./src/routes/usuario.routes.js";
dotenv.config();


const puerto = process.env.PORT;
const server = express();


//conexion a la base de datos
conectarDb();


//middlewares
server.use(express.json());


//rutas
server.use('/api/v1/usuarios', usuarioRouter);


server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`)
})
