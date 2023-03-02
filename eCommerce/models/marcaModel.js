const mongoose = require('mongoose')

const marcaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: [true, 'Ingresa nombre de la Marca']
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Marca', marcaSchema)