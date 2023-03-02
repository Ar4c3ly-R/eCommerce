const express = require('express')
const router = express.Router()
const { getPedidosProducto, setPedidoProducto, updatePedidoProducto, deletePedidoProducto} = require ('../controllers/pedidosProductosController')


router.route('/').get(getPedidosProducto).post(setPedidoProducto)
router.route('/:id').delete(deletePedidoProducto).put(updatePedidoProducto)


module.exports = router