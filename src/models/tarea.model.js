import mongoose, { Schema, model } from 'mongoose';

const TareaSchema = Schema({

    asignacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios'
    },

    fase: {
        type: String,
        enum: ['completado', 'espera', 'progreso', 'finalizado', 'eliminado']
    },

    fechaEntrega: {
        type: Date,
        required: true
    },

    descripcion: {
        type: String,
        required: true,
        min: 1000
    },

    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    }

}, { timestaps: true });

TareaSchema.methods.toJSON = function () {
    const { __v, ...resto } = this.toObject();

    return resto;
}

export default model('Tareas', TareaSchema);