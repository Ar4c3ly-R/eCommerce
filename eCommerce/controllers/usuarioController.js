const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const Usuario = require('../models/usuarioModel')

const registrarUsuario = asyncHandler(async (req, res) => {

    const {nombre, email, password, role } = req.body

    if(!nombre || !email || !password){
        res.status(400)
        throw new Error ('Faltan datos, favor de verificar')
    }

    const usuarioExiste = await Usuario.findOne( { email })

    if (usuarioExiste) {
        res.status(400)
        throw new Error('Ese usuario ya existe')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const usuario = await Usuario.create({
        nombre,
        email,
        password: hashPassword,
        role
    })

    if(usuario){
        res.status(201).json({
            _id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email
        })
    }else {
        res.status(400)
        throw new Error('No se pudo agregar el usuario')
    }
})

const loginUsuario = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const usuario = await Usuario.findOne({ email })
    if(usuario && (await bcrypt.compare(password, usuario.password))){
        res.json({
            _id:usuario.id,
            name: usuario.nombre,
            email: usuario.email,
            token: generarToken(usuario._id)
        })
    } else {
        res.status(400)
        throw new Error ('credenciales incorrectas')
    }    

})

const generarToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

const dataUsuario = asyncHandler(async (req, res) => {
    const { _id, nombre, email } = req.usuario

    res.status(200).json({
        id: _id,
        nombre,
        email
    })
})


module.exports = {
    registrarUsuario,
    loginUsuario,
    dataUsuario
}

