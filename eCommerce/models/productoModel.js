const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    nombre:{
        type: String,
        required: [true, 'Ingresa el nombre del producto']
    },
    marca:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Ingresa la marca del producto'],
        ref: 'Marca'
    },
    precio:{
        type: Number,
        required: [true, 'Ingresa el precio del producto']
    },
    descripcion:{
        type: String,
        required: [true, 'Ingresa una descripcion del producto']
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Producto', productoSchema)