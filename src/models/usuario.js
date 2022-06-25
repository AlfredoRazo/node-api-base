const { Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    primer_apellido: {
        type: String,
        required: [true, 'El primer apellido es obligatorio']
    },
    segundo_apellido: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
    },
    img: {
        type: String
    },
    status: {
        type:Boolean,
        default: true
    },
    created_at: {
        type:Date,
        default: new Date()
    },
    updated_at: {
        type:Date,
    },
    deleted_at: {
        type:Date,
    },
});

UsuarioSchema.methods.toJSON = function(){
    const {__v, password,_id,created_at,...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}
UsuarioSchema.plugin(mongoosePaginate);
module.exports = model('Usuario', UsuarioSchema);