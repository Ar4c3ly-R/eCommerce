const express = require('express')
const router = express.Router()
const { getProductos, setProducto, updateProducto, deleteProducto} = require ('../controllers/productoControllers')

const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getProductos).post(protect, setProducto)
router.route('/:id').delete(protect, deleteProducto).put(protect, updateProducto)


module.exports = router