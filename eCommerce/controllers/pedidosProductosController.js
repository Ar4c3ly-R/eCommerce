const asyncHandler = require('express-async-handler')

const PedidoProducto = require('../models/pedidos_productosModel')

const getPedidosProducto = asyncHandler(async (req, res) => {

        const pedidoProducto =await  PedidoProducto.find()

        res.status(200).json(pedidoProducto)
})

const setPedidoProducto = asyncHandler(async (req, res) => {

    const { id_pedido, id_producto, cantidad, precio, importe } = req.body
    if(!id_pedido || !id_producto || !cantidad || !precio || !importe){
        res.status(400)
        throw new Error('Porfavor teclea la descripcion completa de pedido del producto')
    }

    const pedidoProducto = await PedidoProducto.create({
        id_pedido: req.body.id_pedido, 
        id_producto: req.body.id_producto, 
        cantidad: req.body.cantidad,
        precio: req.body.precio, 
        importe: req.body.importe 
    })

    res.status(201).json(pedidoProducto)

})

const updatePedidoProducto = asyncHandler(async (req, res) => {
    
    const pedidoProducto = await  PedidoProducto.findById(req.params.id)

    if(!pedidoProducto){
        res.status(400)
        throw new Error('Pedido del producto no encontrado')
    }

    const updatedpedidoProducto = await PedidoProducto.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedpedidoProducto)
})

const deletePedidoProducto = asyncHandler(async (req, res) => {

    const pedidoProducto =await  PedidoProducto.findById(req.params.id)

    if(!pedidoProducto){
        res.status(400)
        throw new Error('Pedido-producto no encontrado')
    }

    const updatedpedidoProducto = await PedidoProducto.findByIdAndDelete(req.params.id)
    res.status(200).json(`Pedido del producto borrado: ${req.params.id}`)
})

module.exports = {
    getPedidosProducto,
    setPedidoProducto,
    updatePedidoProducto,
    deletePedidoProducto
}