const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true,'Por favor teclea el nombre del usuario']
    },

    email: {
        type: String,
        required: [true, 'Por favor teclea el email del usuario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Por favor teclea un password']
    },
    role:{
        type: String,
        required: true,
        default: 'usuario'
    }
},
    {   
        timestamps: true
    })

    module.exports = mongoose.model('Usuario', usuarioSchema)