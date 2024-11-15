import Usuario from '../models/usuario.model.js';
import bcrypt from 'bcryptjs';

const crearUsuario = async(req, res) => {

    const { correo, password, ...rest } = req.body;

    try {

        const existeUsuario = await Usuario.findOne({ correo });
        
        if(existeUsuario){
            return res.status(400).json({
                mensaje:`Usuario con el correo ${correo} ya existe.`
            });
        }

        const usuario = await Usuario.create({
            correo,
            password: bcrypt.hashSync(password, 10),
            ...rest
        });

        res.status(201).json({
            usuario
        });



    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mensaje:'Algo salio mal.'
        });
    }

}




export {
    crearUsuario
}