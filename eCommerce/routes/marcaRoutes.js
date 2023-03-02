const express = require('express')
const router = express.Router()
const { getMarca, setMarca, updateMarca, deleteMarca} = require ('../controllers/marcaControllers')


router.route('/').get(getMarca).post(setMarca)
router.route('/:id').delete(deleteMarca).put(updateMarca)


module.exports = router