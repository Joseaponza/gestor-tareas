import Usuario from '../models/usuario.model.js';
import bcrypt from 'bcryptjs';
import { generarJwt } from '../utils/generate-jwt.js';

const login = async (req, res) => {

    const { correo, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {

            return res.status(404).json({
                mensaje: `No se encontro usuario con el correo '${correo}'`
            });

        }

        if (!bcrypt.compareSync(password, usuario.password)) {

            return res.status(401).json({
                mensaje: 'Contraseña incorrecta.'
            });

        }

        res.json({
            usuario,
            jwt: await generarJwt(usuario._id)
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mensaje: 'Algo salio mal.'
        })

    }
}


export {
    login
}