const mongoose = require ('mongoose')

const pedidoSchema = mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    fecha:{
        type:Date,
        required: [true, 'ingresa la fecha del pedido']
    },
    pagado:{
        type:Boolean,
        default: false,
    },
    enviado:{
        type:Boolean,
        default: false,
    }

},
    {
        timestamps: true
    })

module.exports = mongoose.model('Pedido', pedidoSchema)