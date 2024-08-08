const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidoController');

 router.get('/', pedidosController.getPedido);
 router.post('/', pedidosController.createPedido);

router.get('/:id', pedidosController.getPedidoById);
router.put('/:id', pedidosController.updatePedido);
router.delete('/:id', pedidosController.deletePedido);

module.exports = router;
