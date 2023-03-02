const mongoose = require ('mongoose')

const pedidoProductoSchema = mongoose.Schema({
    id_pedido:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Pedido'
    },
    id_producto:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Producto'
    },
    cantidad:{
        type:Number,
        required: [true, 'ingresa la cantidad']
    },
    precio:{
        type:Number,
        required: [true, 'ingresa el precio']
    },
    importe:{
        type:Number,
        required: [true, 'ingresa el importe']
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('PedidoProducto', pedidoProductoSchema)