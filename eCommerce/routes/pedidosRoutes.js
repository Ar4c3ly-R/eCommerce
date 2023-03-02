const express = require('express')
const router = express.Router()
const { getPedidos, setPedidos, updatePedidos, deletePedidos} = require ('../controllers/pedidoControllers')

const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getPedidos).post(protect, setPedidos)
router.route('/:id').delete(protect, deletePedidos).put(protect, updatePedidos)


module.exports = router