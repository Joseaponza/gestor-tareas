import Tarea from '../models/tarea.model.js'

const asignarTarea = async (req, res) => {

    const { usuario } = req;
    const { fase, ...resto } = req.body;

    try {

        const tarea = await Tarea.create({
            autor: usuario._id,
            fase: fase ? fase.toLowerCase() : undefined,
            ...resto
        })

        res.status(201).json({
            tarea
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mensaje: 'Algo salio mal.'
        })

    }

}





export {
    asignarTarea
}