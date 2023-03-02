const asyncHandler = require('express-async-handler')

const Marca = require('../models/marcaModel')

const getMarca = asyncHandler(async (req, res) => {
    const marca = await Marca.find()

    res.status(200).json(marca)
})

const setMarca = asyncHandler(async (req, res) => {

    if(!req.body.nombre){
        res.status(400)
        throw new Error('Por favor teclea el nombre de la marca')
    }

    const marca = await Marca.create({
        nombre: req.body.nombre
    })
    
    res.status(201).json(marca)
})


const updateMarca = asyncHandler(async (req, res) => {
    const marca = await Marca.findById(req.params.id)

    if(!marca){
        res.status(400)
        throw new Error('Marca no encontrada')
    }

    const updatedMarca = await Marca.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedMarca)
})


const deleteMarca = asyncHandler(async (req, res) => {
    const marca = await Marca.findById(req.params.id)

    if(!marca){
        res.status(400)
        throw new Error('Marca no encontrada')
    }

    const deletedMarca = await Marca.findByIdAndDelete(req.params.id)

        res.status(200).json(`Marca borrada: ${req.params.id}`)
})


module.exports = {
    getMarca,
    setMarca,
    updateMarca,
    deleteMarca
}