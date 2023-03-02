const asyncHandler = require('express-async-handler')

const Producto = require ('../models/productoModel')

const getProductos = asyncHandler(async (req, res) => {
    const productos = await Producto.find({ usuario: req.usuario.id })

    res.status(200).json(productos)
})

const setProducto = asyncHandler(async (req, res) => {
    
    if(req.usuario.role.toLowerCase() !== "admin"){
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const { nombre, marca, precio, descripcion } = req.body
    if (!nombre || !marca || !precio || !descripcion){
        res.status(400)
        throw new Error('Faltan datos, favor de verificar')
    }

    const producto = await Producto.create({
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        usuario: req.usuario.id
    })

    res.status(201).json(producto)
})

const updateProducto = asyncHandler(async (req,res)=> {
    
    if(req.usuario.role.toLowerCase() !== "admin"){
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const producto = await Producto.findById(req.params.id)

    if(!producto){
        res.status(400)
        throw new Error('Producto no encontrado')
    }

    if(producto.usuario.toString() !== req.usuario.id){
        res.status(401)
        throw new Error('Acceso no autorizado')
    }

    const updatedProducto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedProducto)
})

const deleteProducto = asyncHandler(async (req,res) =>{

    if(req.usuario.role.toLowerCase() !== "admin"){
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const producto = await Producto.findById(req.params.id)

    if(!producto){
        res.status(400)
        throw new Error('Producto no encontrado')
    }
    
    const deletedProducto = await Producto.findByIdAndDelete(req.params.id)

    res.status(200).json(`producto borrado: ${req.params.id}`)
})

module.exports = {
    getProductos,
    setProducto,
    updateProducto,
    deleteProducto
}