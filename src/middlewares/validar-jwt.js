import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario.model.js';

//middleware para validar JWT
export const validarJwt = async (req, res, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            error: 'Sin autorización'
        });
    }

    try {

        //Extraer el payload del token
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        //leer el usuario correspondiente al uid
        const usuario = await Usuario.findById(uid);
    
        //Verificar si el usuario existe
        if(!usuario || !usuario.estado){
            return res.status(404).json({
                error:`Usuario con id ${uid} no existe.`
            });
        }

        // Establecer usuario en la request
        req.usuario = usuario;

        // Pasar al siguiente Middleware
        next();


    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: 'El token no es valido o ha expirado.'
        });

    }

}