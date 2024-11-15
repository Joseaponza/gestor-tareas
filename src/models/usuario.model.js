import { Schema, model } from "mongoose";

const UsuarioSchema = Schema({
   
    nombre: {
        type: String,
        required: true,
    },

    apellido: {
        type: String,
        required: true,
    },

    correo: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        min: 6
    },

    rol: {
        type: String,
        enum: ["admin", "user", "super_user"],
        default: "user"
    },

    estado: {
        type: Boolean,
        default: true
    },
    
}, { timestamps: true });

UsuarioSchema.methods.toJSON = function(){
    const {password, __v, ...resto} = this.toObject();
    return resto;
}

export default model("Usuarios", UsuarioSchema);