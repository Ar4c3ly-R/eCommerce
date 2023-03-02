const asyncHandler = require('express-async-handler')

const Pedido = require('../models/pedidosModel')

const getPedidos = asyncHandler(async(req, res) =>{
    const pedidos = await Pedido.find({ usuario: req.usuario.id })

    res.status(200).json(pedidos)
})

const setPedidos = asyncHandler(async(req, res) =>{
    
     const {fecha, pagado, enviado } = req.body

    if (!fecha) {
        res.status(400)
        throw new Error('Por favor teclea la descripción del pedido')
    }

    const pedido = await Pedido.create({
        usuario: req.usuario.id,
        fecha: req.body.fecha,
        pagado: req.body.pagado,
        enviado: req.body.enviado
    })

    res.status(201).json( pedido )
})

const updatePedidos = asyncHandler(async(req, res) =>{

    const pedido = await Pedido.findById(req.params.id)

if(!pedido){
    res.status(400)
    throw new Error('Pedido no encontrado')
}

    const updatedPedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedPedido)

})

const deletePedidos = asyncHandler(async(req, res) =>{

    const pedido = await Pedido.findById(req.params.id)

    if(!pedido){
    res.status(400)
    throw new Error('Pedido no encontrado')
    }
    const updatedPedido = await Pedido.findByIdAndDelete(req.params.id)

    res.status(200).json(`Pedido borrado: ${req.params.id}`)
})


module.exports = {
    getPedidos,
    setPedidos,
    updatePedidos,
    deletePedidos
}