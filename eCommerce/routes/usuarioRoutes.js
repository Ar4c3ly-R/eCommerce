const express = require('express')
const router = express.Router()
const { registrarUsuario, loginUsuario, dataUsuario} = require ('../controllers/usuarioController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registrarUsuario)
router.post('/login', loginUsuario)
router.get('/data', protect, dataUsuario)


module.exports = router